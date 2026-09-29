import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { allVivahRituals } from '@/content/karmkand';

const phaseLabels = {
  'siddhant': { hi: 'सिद्धांत', en: 'Siddhant' },
  'pre-wedding': { hi: 'विवाह पूर्व', en: 'Pre-Wedding' },
  'main-wedding': { hi: 'मुख्य विवाह संस्कार', en: 'Main Wedding Rituals' },
  'post-wedding': { hi: 'विवाह के बाद', en: 'Post-Wedding' }
};

export default async function VivahPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const phases: Array<keyof typeof phaseLabels> = ['siddhant', 'pre-wedding', 'main-wedding', 'post-wedding'];

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="mb-8 text-sm text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50 no-print">
          <Link href="/karmkand" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933]">
            ← {locale === 'en' ? 'Karmkand' : 'कर्मकांड'}
          </Link>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💍</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-3">
            {locale === 'en' ? 'Vivah Sanskar' : 'विवाह संस्कार'}
          </h1>
          <p className="text-sm text-[#D4AF37] uppercase tracking-wider">
            {locale === 'en' ? 'Maithil / Sandilya Tradition' : 'मैथिल / शांडिल्य परंपरा'}
          </p>
          <p className="text-base text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 max-w-2xl mx-auto mt-4">
            {locale === 'en'
              ? 'Complete step-by-step Vivah Vidhi from Siddhant to Griha Pravesh — with mantras, meanings, materials, and significance.'
              : 'सिद्धांत से गृह प्रवेश तक संपूर्ण विवाह विधि — मंत्र, अर्थ, सामग्री और महत्व सहित।'}
          </p>
        </div>

        {phases.map((phase) => {
          const rituals = allVivahRituals.filter((r) => r.phase === phase);
          if (rituals.length === 0) return null;
          return (
            <section key={phase} className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
                {phaseLabels[phase][locale as 'hi' | 'en'] ?? phaseLabels[phase].hi}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {rituals.map((ritual) => {
                  const title = ritual.title[locale as 'hi' | 'en'] ?? ritual.title.hi;
                  const desc = ritual.shortDesc[locale as 'hi' | 'en'] ?? ritual.shortDesc.hi;
                  return (
                    <Link
                      key={ritual.slug}
                      href={`/karmkand/vivah/${ritual.slug}`}
                      className="block p-5 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-md transition"
                    >
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-xs text-[#D4AF37] font-bold">#{ritual.order}</span>
                        <h3 className="text-lg font-bold text-[#7B1E1E] dark:text-[#FF9933]">{title}</h3>
                      </div>
                      <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 line-clamp-3">{desc}</p>
                      <div className="mt-3 text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
                        {ritual.mantras.length} {locale === 'en' ? 'mantras' : 'मंत्र'}
                        {ritual.duration && ` • ${ritual.duration[locale as 'hi' | 'en']}`}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}