import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getKarmkandBySlug, allKarmkand, karmkandCategories } from '@/content/karmkand';
import { PrintButton } from '@/components/reader/PrintButton';
import { MantraVoice } from '@/components/reader/MantraVoice';

export function generateStaticParams() {
  return karmkandCategories.flatMap((c) =>
    allKarmkand.filter((r) => r.category === c.slug).map((r) => ({
      category: c.slug,
      slug: r.slug
    }))
  );
}

export default async function RitualDetailPage({ params }: { params: Promise<{ locale: string; category: string; slug: string }> }) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);

  const ritual = getKarmkandBySlug(slug);
  if (!ritual) notFound();

  const cat = karmkandCategories.find((c) => c.slug === category);
  const title = ritual.title[locale as 'hi' | 'en'] ?? ritual.title.hi;
  const longDesc = ritual.longDesc[locale as 'hi' | 'en'] ?? ritual.longDesc.hi;
  const sig = ritual.significance[locale as 'hi' | 'en'] ?? ritual.significance.hi;

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 pb-24">
        <nav className="pt-8 text-sm text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50 no-print">
          <Link href={`/karmkand/${category}`} className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933]">
            ← {cat ? (cat.name[locale as 'hi' | 'en'] ?? cat.name.hi) : 'Back'}
          </Link>
        </nav>

        <header className="text-center pt-8 pb-12">
          <div className="text-xs uppercase tracking-wider text-[#D4AF37] mb-3">
            {locale === 'en' ? `Ritual ${ritual.order}` : `विधि ${ritual.order}`}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4">
            {title}
          </h1>
          {ritual.duration && (
            <p className="text-sm text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50 mb-4">
              ⏱ {ritual.duration[locale as 'hi' | 'en']}
            </p>
          )}
          <div className="flex justify-center no-print">
            <PrintButton />
          </div>
        </header>

        <section className="mb-10">
          <p className="text-base md:text-lg leading-relaxed text-[#1A1A1A]/80 dark:text-[#F5F5F5]/80 whitespace-pre-line">
            {longDesc}
          </p>
        </section>

        {ritual.materials && ritual.materials.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
              {locale === 'en' ? 'Materials Required' : 'आवश्यक सामग्री'}
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base text-[#1A1A1A]/80 dark:text-[#F5F5F5]/80">
              {ritual.materials.map((m, i) => (
                <li key={i}>{m[locale as 'hi' | 'en']}</li>
              ))}
            </ul>
          </section>
        )}

        {ritual.steps.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
              {locale === 'en' ? 'Step-by-Step Vidhi' : 'चरण-दर-चरण विधि'}
            </h2>
            <ol className="space-y-4">
              {ritual.steps.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#7B1E1E] text-white flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#7B1E1E] dark:text-[#FF9933] mb-1">
                      {step.title[locale as 'hi' | 'en']}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70">
                      {step.description[locale as 'hi' | 'en']}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {ritual.mantras.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
              {locale === 'en' ? 'Mantras' : 'मंत्र'}
            </h2>
            {ritual.mantras.map((m) => (
              <article key={m.id} className="mb-8 last:mb-0">
                <p className="text-xl md:text-2xl leading-loose text-[#7B1E1E] dark:text-[#FF9933] font-serif whitespace-pre-line mb-3">
                  {m.sanskrit}
                </p>
                <p className="text-sm md:text-base italic text-[#1A1A1A]/60 dark:text-[#F5F5F5]/60 mb-3 whitespace-pre-line">
                  {m.transliteration}
                </p>
                <MantraVoice sanskrit={m.sanskrit} />
                <div className="pl-4 border-l-2 border-[#D4AF37] space-y-2">
                  <p className="text-sm md:text-base text-[#1A1A1A]/80 dark:text-[#F5F5F5]/80">
                    {m.meaning[locale as 'hi' | 'en']}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
                    <strong>{locale === 'en' ? 'When:' : 'कब:'}</strong> {m.when[locale as 'hi' | 'en']}
                  </p>
                </div>
              </article>
            ))}
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
            {locale === 'en' ? 'Significance' : 'महत्व'}
          </h2>
          <p className="text-base leading-relaxed text-[#1A1A1A]/80 dark:text-[#F5F5F5]/80">
            {sig}
          </p>
        </section>

        <footer className="text-center pt-16 text-xs text-[#1A1A1A]/40 dark:text-[#F5F5F5]/40">
          🙏 जय श्री राम | 🚩 जय हनुमान | 🪷 जय नारायण 🙏
        </footer>
      </div>
    </main>
  );
}