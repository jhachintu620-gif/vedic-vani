import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { allDeities, getAllTexts } from '@/lib/content';
import { DailyShloka } from '@/components/DailyShloka';
import { avatars } from '@/content/avatars';
import { allKarmkand, karmkandCategories } from '@/content/karmkand';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('site');
  const texts = getAllTexts();

  const sections = [
    { key: 'veda', label: { hi: 'वेद और सूक्त', en: 'Vedas & Suktas' }, icon: '📜' },
    { key: 'upanishad', label: { hi: 'उपनिषद्', en: 'Upanishads' }, icon: '🕉️' },
    { key: 'chalisa', label: { hi: 'चालीसा', en: 'Chalisa' }, icon: '🙏' },
    { key: 'stotra', label: { hi: 'स्तोत्र', en: 'Stotra' }, icon: '📖' },
    { key: 'aarti', label: { hi: 'आरती', en: 'Aarti' }, icon: '🪔' },
    { key: 'gita', label: { hi: 'गीता', en: 'Gita' }, icon: '🎯' }
  ];

  return (
    <main className="flex-1">
      <section className="text-center px-4 py-14">
        <h1 className="text-5xl md:text-7xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-6">
          {t('name')}
        </h1>
        <p className="text-lg md:text-xl text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 max-w-2xl mx-auto">
          {t('tagline')}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
          <span>{texts.length} {locale === 'en' ? 'sacred texts' : 'पवित्र पाठ'}</span>
          <span>•</span>
          <span>{allDeities.length} {locale === 'en' ? 'deities' : 'देवता'}</span>
          <span>•</span>
          <span>{avatars.length} {locale === 'en' ? 'avatars' : 'अवतार'}</span>
          <span>•</span>
          <span>{allKarmkand.length} {locale === 'en' ? 'rituals' : 'कर्मकांड विधियाँ'}</span>
        </div>
      </section>

      <DailyShloka locale={locale} />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7B1E1E] dark:text-[#FF9933]">
            {locale === 'en' ? 'Karmkand — Sacred Rituals' : 'कर्मकांड — पवित्र संस्कार'}
          </h2>
          <p className="text-sm text-[#1A1A1A]/60 dark:text-[#F5F5F5]/60 mt-2">
            {locale === 'en'
              ? 'Vedic rituals with mantras, steps, and meanings — rooted in the Maithil tradition'
              : 'मंत्र, विधि और अर्थ सहित वैदिक संस्कार — मैथिल परंपरा पर आधारित'}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {karmkandCategories.map((cat) => {
            const name = cat.name[locale as 'hi' | 'en'] ?? cat.name.hi;
            const desc = cat.description[locale as 'hi' | 'en'];
            return (
              <Link
                key={cat.slug}
                href={`/karmkand/${cat.slug}`}
                className="block p-5 border-2 border-[#D4AF37]/30 rounded-xl bg-gradient-to-br from-[#FFF8E7] to-[#FFF0D0] dark:from-[#1A1A1A] dark:to-[#0F0F0F] hover:border-[#D4AF37] hover:shadow-lg transition text-center"
              >
                <div className="text-5xl mb-3">{cat.icon}</div>
                <h3 className="text-base md:text-lg font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-1">
                  {name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#D4AF37] mb-2">
                  {cat.tradition}
                </p>
                <p className="text-xs text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 mb-3 line-clamp-3">
                  {desc}
                </p>
                <div className="text-xs text-[#D4AF37] font-medium">
                  {cat.count} {locale === 'en' ? 'rituals →' : 'विधियाँ →'}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-6 text-center">
          {locale === 'en' ? 'Sacred Texts — Sections' : 'पवित्र पाठ — विभाग'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {sections.map((s) => {
            const count = texts.filter((x) => x.type === s.key).length;
            return (
              <div key={s.key} className="text-center p-4 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-sm font-semibold text-[#7B1E1E] dark:text-[#FF9933]">{s.label[locale as 'hi' | 'en']}</div>
                <div className="text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50 mt-1">{count} {locale === 'en' ? 'texts' : 'पाठ'}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933]">
            {locale === 'en' ? 'Avatars of Narayan' : 'नारायण के अवतार'}
          </h2>
          <Link href="/avatar" className="text-xs text-[#D4AF37] hover:underline">
            {locale === 'en' ? 'View all →' : 'सभी देखें →'}
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {avatars.map((a) => (
            <Link key={a.slug} href={`/avatar/${a.slug}`}
              className="text-center p-3 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-md transition">
              <div className="text-3xl mb-1">{a.icon}</div>
              <div className="text-xs font-semibold text-[#7B1E1E] dark:text-[#FF9933] leading-tight">
                {a.name[locale as 'hi' | 'en'] ?? a.name.hi}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-6 text-center">
          {locale === 'en' ? 'Deities' : 'देवता'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {allDeities.map((d) => (
            <Link key={d.slug} href={`/deity/${d.slug}`}
              className="flex flex-col items-center p-4 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-md transition text-center">
              <div className="text-3xl mb-2">{d.icon}</div>
              <div className="text-xs font-semibold text-[#7B1E1E] dark:text-[#FF9933]">
                {d.name[locale as 'hi' | 'en'] ?? d.name.hi}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 pb-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933]">
            {locale === 'en' ? 'All Texts' : 'सभी पाठ'}
          </h2>
          <Link href="/search" className="text-xs text-[#D4AF37] hover:underline">
            {locale === 'en' ? 'Search all →' : 'सभी खोजें →'}
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {texts.map((text) => {
            const title = text.title[locale as 'hi' | 'en' | 'sa'] ?? text.title.hi;
            const url = text.type === 'aarti' ? `/aarti/${text.slug}` : `/chalisa/${text.slug}`;
            return (
              <Link key={text.slug} href={url}
                className="block p-4 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] transition">
                <div className="text-xs uppercase tracking-wider text-[#D4AF37] mb-1">{text.type}</div>
                <h3 className="text-base font-bold text-[#7B1E1E] dark:text-[#FF9933]">{title}</h3>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}