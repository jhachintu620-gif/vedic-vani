import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { karmkandCategories, getKarmkandByCategory } from '@/content/karmkand';

export function generateStaticParams() {
  return karmkandCategories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale, category } = await params;
  setRequestLocale(locale);

  const cat = karmkandCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const rituals = getKarmkandByCategory(category);

  // Group by phase
  const grouped: Record<string, typeof rituals> = {};
  for (const r of rituals) {
    const key = r.phase;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(r);
  }

  const phaseOrder = ['siddhant', 'pre-wedding', 'main-wedding', 'post-wedding'];
  const phaseLabels: Record<string, { hi: string; en: string }> = {
    'siddhant': { hi: 'प्रारंभिक', en: 'Introductory' },
    'pre-wedding': { hi: 'पूर्व विधियाँ', en: 'Pre Rituals' },
    'main-wedding': { hi: 'मुख्य विधियाँ', en: 'Main Rituals' },
    'post-wedding': { hi: 'उत्तर विधियाँ', en: 'Post Rituals' }
  };

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="mb-8 text-sm text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50 no-print">
          <Link href="/karmkand" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933]">
            ← {locale === 'en' ? 'Karmkand' : 'कर्मकांड'}
          </Link>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{cat.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-3">
            {cat.name[locale as 'hi' | 'en'] ?? cat.name.hi}
          </h1>
          <p className="text-sm text-[#D4AF37] uppercase tracking-wider mb-4">
            {cat.tradition}
          </p>
          <p className="text-base text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 max-w-2xl mx-auto">
            {cat.description[locale as 'hi' | 'en']}
          </p>
        </div>

        {phaseOrder.map((phase) => {
          if (!grouped[phase]?.length) return null;
          return (
            <section key={phase} className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
                {phaseLabels[phase][locale as 'hi' | 'en']}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {grouped[phase].map((ritual) => {
                  const title = ritual.title[locale as 'hi' | 'en'] ?? ritual.title.hi;
                  const desc = ritual.shortDesc[locale as 'hi' | 'en'] ?? ritual.shortDesc.hi;
                  const href = category === 'vivah'
                    ? `/karmkand/vivah/${ritual.slug}`
                    : `/karmkand/${category}/${ritual.slug}`;
                  return (
                    <Link
                      key={ritual.slug}
                      href={href}
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