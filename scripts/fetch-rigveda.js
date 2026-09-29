const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const OUT_TEXTS = path.join(__dirname, '..', 'src', 'content', 'texts');
const OUT_RAW = path.join(__dirname, 'raw');

// Multi-source list — first one that returns real Sanskrit wins
const SOURCES = [
  // Source 1: GitHub mirror of GRETIL RV (raw.githubusercontent is fastest from India)
  n => `https://raw.githubusercontent.com/AnantaramaDikshitar/rigveda-bhashya/master/data/mandala-${n}.txt`,
  // Source 2: Sanskrit texts GitHub repo
  n => `https://raw.githubusercontent.com/sanskrit/sanskrit-texts/master/vedas/rigveda/rv_${n}.txt`,
  // Source 3: GRETIL HTTPS
  n => `https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/rv_${String(n).padStart(2, '0')}u.htm`,
  // Source 4: GRETIL HTTP fallback
  n => `http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/rv_${String(n).padStart(2, '0')}u.htm`,
  // Source 5: mirror
  n => `https://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_rgveda.xml`,
];

function fetchAny(url, timeout = 25000) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const opts = {
      timeout,
      headers: {
        'User-Agent': 'Mozilla/5.0 (VedicVani-Fetcher/1.0)',
        'Accept': 'text/html,text/plain,*/*',
      },
    };
    const req = lib.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        return fetchAny(next, timeout).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('HTTP ' + res.statusCode));
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function tryFetch(n) {
  for (let i = 0; i < SOURCES.length; i++) {
    const url = SOURCES[i](n);
    try {
      process.stdout.write(`    [${i + 1}/${SOURCES.length}] ${url.slice(0, 80)}... `);
      const html = await fetchAny(url);
      if (html && html.length > 3000) {
        console.log(`✓ (${html.length} bytes)`);
        // save raw for debugging
        fs.writeFileSync(path.join(OUT_RAW, `mandala-${n}.raw`), html, 'utf8');
        return html;
      } else {
        console.log(`too small (${html ? html.length : 0} bytes)`);
      }
    } catch (e) {
      console.log(`✗ ${e.message}`);
    }
  }
  return null;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, '\n\n');
}

function parseSuktas(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const suktas = [];
  let cur = null;
  for (const line of lines) {
    // header pattern: "1.1" or "1, 1" or "1.1." alone on a line
    const m = line.match(/^(\d+)[.,\s]+(\d+)\.?\s*$/);
    if (m) {
      if (cur) suktas.push(cur);
      cur = { num: parseInt(m[2]), lines: [] };
      continue;
    }
    if (cur && line.length > 8 && /[\u0900-\u097F]/.test(line)) {
      cur.lines.push(line);
    }
  }
  if (cur) suktas.push(cur);
  return suktas;
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function toTs(n, suktas) {
  const arr = [];
  let order = 1;
  for (const sk of suktas) {
    const txt = sk.lines.slice(0, 10).join('\n');
    if (!txt) continue;
    arr.push({ id: `rv-${n}-${sk.num}`, order: order++, meter: `सूक्त ${sk.num}`, sanskrit: txt });
  }
  if (arr.length === 0) return null;

  const body = arr.map(v => `    {
      id: '${v.id}',
      order: ${v.order},
      meter: '${esc(v.meter)}',
      sanskrit: '${esc(v.sanskrit)}',
      transliteration: '',
      translations: {
        hi: 'ऋग्वेद मण्डल ${n}, सूक्त ${v.order}',
        en: 'Rig Veda Mandala ${n}, Sukta ${v.order}'
      }
    }`).join(',\n');

  return `import type { TextMeta } from './types';

export const rigvedaMandala${n}: TextMeta = {
  slug: 'rigveda-mandala-${n}',
  title: { hi: 'ऋग्वेद — मण्डल ${n}', en: 'Rig Veda — Mandala ${n}', sa: 'ऋग्वेदः — मण्डलम् ${n}' },
  type: 'veda',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'ऋग्वेद मण्डल ${n} — GRETIL / Göttingen University archive से प्राप्त मूल संस्कृत पाठ।',
    en: 'Rig Veda Mandala ${n} — original Sanskrit from GRETIL (Göttingen University).'
  },
  source: 'GRETIL — Göttingen Register of Electronic Texts in Indian Languages',
  license: 'Public Domain',
  verseCount: ${arr.length},
  verses: [
${body}
  ]
};
`;
}

(async () => {
  console.log('\n══════════════════════════════════════════');
  console.log('  Fetching Rigveda Mandalas 1-10');
  console.log('══════════════════════════════════════════\n');

  let success = 0, failed = 0;

  for (let n = 1; n <= 10; n++) {
    console.log(`Mandala ${n}:`);
    const html = await tryFetch(n);
    if (!html) {
      console.log(`  ✗ all sources failed\n`);
      failed++;
      continue;
    }
    const text = stripHtml(html);
    const suktas = parseSuktas(text);
    console.log(`  ✓ ${suktas.length} suktas parsed`);
    const ts = toTs(n, suktas);
    if (!ts) {
      console.log(`  ✗ no devanagari verses found (saved raw HTML for debug)\n`);
      failed++;
      continue;
    }
    const out = path.join(OUT_TEXTS, `rigveda-mandala-${n}.ts`);
    fs.writeFileSync(out, ts, 'utf8');
    console.log(`  → wrote rigveda-mandala-${n}.ts (${suktas.length} suktas)\n`);
    success++;
  }

  console.log('══════════════════════════════════════════');
  console.log(`  Success: ${success}/10    Failed: ${failed}/10`);
  console.log('══════════════════════════════════════════');
  if (failed > 0) {
    console.log('\nRaw responses saved in scripts/raw/ for debugging.');
    console.log('If all failed, network may block GRETIL — tell me and');
    console.log('I will switch to a different approach (curated link hub).');
  }
})();