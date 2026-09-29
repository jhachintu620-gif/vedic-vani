import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { karmkandCategories, allKarmkand } from '@/content/karmkand';

export default async function KarmkandHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕉️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4">
            {locale === 'en' ? 'Karmkand — Sacred Rituals' : 'कर्मकांड — पवित्र संस्कार'}
          </h1>
          <p className="text-lg text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'Vedic rituals with mantras, steps, and meanings — rooted in the Maithil tradition'
              : 'मंत्र, विधि और अर्थ सहित वैदिक संस्कार — मैथिल परंपरा पर आधारित'}
          </p>
          <p className="text-sm text-[#D4AF37] mt-4">
            {allKarmkand.length} {locale === 'en' ? 'rituals across' : 'विधियाँ'}{' '}
            {karmkandCategories.length} {locale === 'en' ? 'categories' : 'श्रेणियों में'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {karmkandCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/karmkand/${cat.slug}`}
              className="block p-6 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{cat.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-1">
                    {cat.name[locale as 'hi' | 'en'] ?? cat.name.hi}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] mb-2">
                    {cat.tradition} • {cat.count} {locale === 'en' ? 'rituals' : 'विधियाँ'}
                  </p>
                  <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70">
                    {cat.description[locale as 'hi' | 'en']}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg p-6 text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70">
          <p className="mb-2"><strong>{locale === 'en' ? 'Note:' : 'सूचना:'}</strong></p>
          <p>
            {locale === 'en'
              ? 'These rituals are presented according to the Maithil tradition, following the Sandilya Grihya Sutra and regional customs. Actual performance should always be guided by a qualified Pandit/Purohit who can adapt to family traditions and regional variations.'
              : 'ये विधियाँ मैथिल परंपरा के अनुसार, शांडिल्य गृह्यसूत्र और क्षेत्रीय रीति-रिवाजों के आधार पर प्रस्तुत हैं। वास्तविक अनुष्ठान सदैव योग्य पंडित/पुरोहित के मार्गदर्शन में ही करें।'}
          </p>
        </div>
      </div>
    </main>
  );
}