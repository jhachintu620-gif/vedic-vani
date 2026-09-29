import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getTextsByDeity, allDeities } from '@/lib/content';
import { avatars } from '@/content/avatars';

const typeOrder = ['chalisa', 'stotra', 'aarti', 'gita', 'veda', 'upanishad'];
const typeLabels: Record<string, { hi: string; en: string }> = {
  chalisa: { hi: 'चालीसा', en: 'Chalisa' },
  stotra: { hi: 'स्तोत्र', en: 'Stotra' },
  aarti: { hi: 'आरती', en: 'Aarti' },
  gita: { hi: 'गीता', en: 'Gita' },
  veda: { hi: 'वेद', en: 'Veda' },
  upanishad: { hi: 'उपनिषद्', en: 'Upanishad' }
};

export default async function DeityPage({ params }: { params: Promise<{ locale: string; name: string }> }) {
  const { locale, name } = await params;
  setRequestLocale(locale);

  const deity = allDeities.find((d) => d.slug === name);
  if (!deity) notFound();

  const texts = getTextsByDeity(name);
  const displayName = deity.name[locale as 'hi' | 'en'] ?? deity.name.hi;
  const showAvatars = name === 'narayan';

  const grouped: Record<string, typeof texts> = {};
  for (const t of texts) {
    const key = typeOrder.includes(t.type) ? t.type : 'stotra';
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(t);
  }
  const sections = typeOrder.filter((k) => grouped[k]?.length);

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{deity.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-3">{displayName}</h1>
          <p className="text-sm text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
            {texts.length} {locale === 'en' ? 'sacred texts' : 'पवित्र पाठ'}
          </p>
        </div>

        {showAvatars && (
          <section className="mb-14">
            <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
              <h2 className="text-xl md:text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933]">
                {locale === 'en' ? 'Dashavatar — Nine Avatars' : 'दशावतार — नौ अवतार'}
              </h2>
              <Link href="/avatar" className="text-xs text-[#D4AF37] hover:underline">
                {locale === 'en' ? 'View all →' : 'सभी देखें →'}
              </Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {avatars.map((a) => {
                const aName = a.name[locale as 'hi' | 'en'] ?? a.name.hi;
                return (
                  <Link key={a.slug} href={`/avatar/${a.slug}`}
                    className="text-center p-3 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-md transition">
                    <div className="text-3xl mb-1">{a.icon}</div>
                    <div className="text-xs font-semibold text-[#7B1E1E] dark:text-[#FF9933] leading-tight">{aName}</div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {sections.map((section) => (
          <section key={section} className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
              {typeLabels[section][locale as 'hi' | 'en'] ?? typeLabels[section].hi}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {grouped[section].map((text) => {
                const title = text.title[locale as 'hi' | 'en' | 'sa'] ?? text.title.hi;
                const desc = text.description[locale as 'hi' | 'en'] ?? text.description.hi;
                const url = text.type === 'aarti' ? `/aarti/${text.slug}` : `/chalisa/${text.slug}`;
                return (
                  <Link key={text.slug} href={url}
                    className="block p-5 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-md transition">
                    <h3 className="text-lg font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-2">{title}</h3>
                    <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 line-clamp-2">{desc}</p>
                    <div className="mt-3 text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">{text.verseCount} verses →</div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}