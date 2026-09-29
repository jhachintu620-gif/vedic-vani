import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { rigvedaMandalas, famousSuktas } from '@/content/rigveda-hub';

export default async function RigvedaHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const hi = locale === 'hi';

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📜</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4">
            {hi ? 'ऋग्वेद' : 'Rig Veda'}
          </h1>
          <p className="text-base md:text-lg text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 max-w-3xl mx-auto mb-3">
            {hi
              ? 'सबसे प्राचीन वेद — 10 मण्डल, 1028 सूक्त, 10,552 मंत्र। अग्नि, इन्द्र, सोम, उषा, मरुत् आदि देवताओं की स्तुतियाँ।'
              : 'The oldest Veda — 10 Mandalas, 1028 Suktas, 10,552 mantras. Hymns to Agni, Indra, Soma, Usha, Maruts.'}
          </p>
          <p className="text-sm text-[#D4AF37]">
            {hi ? 'ऋग्वेद = "ऋचां वेदः" — स्तुति-मंत्रों का वेद' : 'Rig Veda = "Veda of Hymns"'}
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-6 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
            {hi ? 'प्रसिद्ध सूक्त (सम्पूर्ण पाठ)' : 'Famous Suktas (Full Text)'}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {famousSuktas.map((sk) => (
              <Link
                key={sk.slug}
                href={`/chalisa/${sk.slug}`}
                className="block p-5 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-md transition"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-[#7B1E1E] dark:text-[#FF9933]">
                    {hi ? sk.name.hi : sk.name.en}
                  </h3>
                  <span className="text-xs text-[#D4AF37] font-mono">{sk.ref}</span>
                </div>
                <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70">
                  {hi ? sk.desc.hi : sk.desc.en}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-6 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
            {hi ? 'दश मण्डल — अवलोकन' : 'Ten Mandalas — Overview'}
          </h2>
          <div className="space-y-4">
            {rigvedaMandalas.map((m) => (
              <div key={m.number} className="p-5 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg">
                <div className="flex items-baseline justify-between gap-3 mb-2 flex-wrap">
                  <h3 className="text-lg font-bold text-[#7B1E1E] dark:text-[#FF9933]">
                    {hi ? m.name.hi : m.name.en}
                  </h3>
                  <div className="flex gap-3 text-xs text-[#D4AF37]">
                    <span>{m.suktas} {hi ? 'सूक्त' : 'Suktas'}</span>
                    <span>•</span>
                    <span>{m.mantras} {hi ? 'मंत्र' : 'Mantras'}</span>
                  </div>
                </div>
                <p className="text-xs text-[#D4AF37]/80 mb-2">
                  {hi ? 'ऋषि' : 'Rishi'}: {hi ? m.rishi.hi : m.rishi.en}
                </p>
                <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70">
                  {hi ? m.description.hi : m.description.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 p-6 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg">
          <h2 className="text-xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-3">
            {hi ? 'सम्पूर्ण ऋग्वेद कहाँ पढ़ें?' : 'Where to read the complete Rig Veda?'}
          </h2>
          <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 mb-4">
            {hi
              ? 'सम्पूर्ण ऋग्वेद (10,552 मंत्र) निम्नलिखित सार्वजनिक स्रोतों पर उपलब्ध है:'
              : 'The complete Rig Veda (10,552 mantras) is available at these public sources:'}
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://vedicheritage.gov.in/" target="_blank" rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline">
                🏛️ Vedic Heritage Portal — Government of India (Hindi + Sanskrit + English)
              </a>
            </li>
            <li>
              <a href="https://gretil.sub.uni-goettingen.de/" target="_blank" rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline">
                📚 GRETIL — Göttingen University (machine-readable Sanskrit)
              </a>
            </li>
            <li>
              <a href="https://www.sacred-texts.com/hin/rigveda/" target="_blank" rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline">
                📖 Internet Sacred Text Archive — Rig Veda (English translation)
              </a>
            </li>
            <li>
              <a href="https://vedaweb.uni-koeln.de/rigveda/" target="_blank" rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline">
                🔍 VedaWeb — University of Cologne (word-by-word analysis)
              </a>
            </li>
          </ul>
        </section>

        <div className="text-center pt-4 text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
          <p className="mb-2">
            🙏 {hi ? 'ऋग्वेद सनातन धर्म का सबसे प्राचीन ग्रंथ है' : 'Rig Veda is the oldest scripture of Sanatana Dharma'}
          </p>
        </div>
      </div>
    </main>
  );
}