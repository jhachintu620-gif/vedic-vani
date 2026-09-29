import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getAllTexts } from '@/lib/content';

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}

function highlight(text: string, query: string) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i} className="bg-[#D4AF37]/40 rounded px-0.5">{part}</mark>
      : part
  );
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { q } = await searchParams;
  setRequestLocale(locale);

  const query = (q ?? '').trim().toLowerCase();
  const all = getAllTexts();

  const results = query
    ? all
        .map((text) => {
          const title = (text.title[locale as 'hi' | 'en' | 'sa'] ?? text.title.hi).toLowerCase();
          const desc = (text.description[locale as 'hi' | 'en'] ?? text.description.hi).toLowerCase();
          const slug = text.slug.toLowerCase();
          const verseMatches = text.verses.filter((v) =>
            v.sanskrit.toLowerCase().includes(query) ||
            (v.transliteration ?? '').toLowerCase().includes(query) ||
            (v.translations.hi ?? '').toLowerCase().includes(query) ||
            (v.translations.en ?? '').toLowerCase().includes(query)
          );
          const titleMatch = title.includes(query) || desc.includes(query) || slug.includes(query);
          return { text, verseMatches, score: (titleMatch ? 100 : 0) + verseMatches.length };
        })
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
    : [];

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-6 text-center">
          {locale === 'en' ? 'Search Sacred Texts' : 'पवित्र पाठों में खोजें'}
        </h1>

        <form action={`/${locale}/search`} method="get" className="mb-8">
          <input
            type="text"
            name="q"
            defaultValue={q ?? ''}
            placeholder={locale === 'en' ? 'Search verses, texts, deities...' : 'श्लोक, पाठ, देवता खोजें...'}
            autoFocus
            className="w-full px-5 py-4 text-lg border-2 border-[#7B1E1E]/20 dark:border-[#FF9933]/20 rounded-lg bg-white dark:bg-[#1A1A1A] focus:border-[#7B1E1E] dark:focus:border-[#FF9933] outline-none transition"
          />
        </form>

        {query && (
          <p className="text-sm text-[#1A1A1A]/60 dark:text-[#F5F5F5]/60 mb-6">
            {results.length} {locale === 'en' ? 'results for' : 'परिणाम'} &ldquo;{q}&rdquo;
          </p>
        )}

        {query && results.length === 0 && (
          <div className="text-center py-16 text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
            {locale === 'en' ? 'No results found. Try another word.' : 'कोई परिणाम नहीं मिला। दूसरा शब्द आज़माएँ।'}
          </div>
        )}

        <div className="space-y-6">
          {results.map(({ text, verseMatches }) => {
            const title = text.title[locale as 'hi' | 'en' | 'sa'] ?? text.title.hi;
            const url = text.type === 'aarti' ? `/aarti/${text.slug}` : `/chalisa/${text.slug}`;
            return (
              <div key={text.slug} className="border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg overflow-hidden">
                <Link href={url} className="block p-5 bg-[#7B1E1E]/5 dark:bg-[#FF9933]/5 hover:bg-[#7B1E1E]/10 dark:hover:bg-[#FF9933]/10 transition">
                  <div className="text-xs uppercase tracking-wider text-[#D4AF37] mb-1">{text.type}</div>
                  <h2 className="text-xl font-bold text-[#7B1E1E] dark:text-[#FF9933]">{highlight(title, q ?? '')}</h2>
                </Link>
                {verseMatches.length > 0 && (
                  <div className="p-5 space-y-3">
                    {verseMatches.slice(0, 3).map((v) => (
                      <div key={v.id} className="text-sm border-l-2 border-[#D4AF37] pl-3 py-1">
                        <p className="text-[#7B1E1E] dark:text-[#FF9933] font-serif">{highlight(v.sanskrit.split('\n')[0], q ?? '')}</p>
                        {v.translations.hi && (
                          <p className="text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 text-xs mt-1">
                            {highlight(v.translations.hi.slice(0, 150), q ?? '')}
                          </p>
                        )}
                      </div>
                    ))}
                    {verseMatches.length > 3 && (
                      <p className="text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
                        +{verseMatches.length - 3} more {locale === 'en' ? 'matches' : 'और मिलान'}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}