import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getAvatarBySlug, avatars } from '@/content/avatars';
import { getTextBySlug } from '@/lib/content';

export function generateStaticParams() {
  return avatars.map((a) => ({ slug: a.slug }));
}

export default async function AvatarDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const avatar = getAvatarBySlug(slug);
  if (!avatar) notFound();

  const name = avatar.name[locale as 'hi' | 'en'] ?? avatar.name.hi;
  const form = avatar.form[locale as 'hi' | 'en'] ?? avatar.form.hi;
  const story = avatar.story[locale as 'hi' | 'en'] ?? avatar.story.hi;

  const texts = avatar.texts.map((s) => getTextBySlug(s)).filter((t) => t !== undefined);

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 text-sm text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
          <Link href="/avatar" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933]">
            ← {locale === 'en' ? 'All Avatars' : 'सभी अवतार'}
          </Link>
        </nav>

        <div className="text-center mb-12">
          <div className="text-7xl mb-4">{avatar.icon}</div>
          <div className="text-xs uppercase tracking-wider text-[#D4AF37] mb-2">
            {locale === 'en' ? `Avatar ${avatar.number} of 9` : `अवतार ${avatar.number} / 9`}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-3">{name}</h1>
          <p className="text-lg italic text-[#1A1A1A]/60 dark:text-[#F5F5F5]/60 mb-6">{form}</p>
          <p className="text-base text-[#1A1A1A]/80 dark:text-[#F5F5F5]/80 max-w-2xl mx-auto leading-relaxed">{story}</p>
        </div>

        {texts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-6 pb-2 border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10">
              {locale === 'en' ? 'Texts & Stotras' : 'पाठ और स्तोत्र'}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {texts.map((text) => {
                if (!text) return null;
                const title = text.title[locale as 'hi' | 'en' | 'sa'] ?? text.title.hi;
                const desc = text.description[locale as 'hi' | 'en'] ?? text.description.hi;
                const url = text.type === 'aarti' ? `/aarti/${text.slug}` : `/chalisa/${text.slug}`;
                return (
                  <Link key={text.slug} href={url}
                    className="block p-5 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-md transition">
                    <div className="text-xs uppercase tracking-wider text-[#D4AF37] mb-2">{text.type}</div>
                    <h3 className="text-lg font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-2">{title}</h3>
                    <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 line-clamp-2">{desc}</p>
                    <div className="mt-3 text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">{text.verseCount} verses →</div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
          {avatars.filter((a) => a.slug !== slug).slice(0, 8).map((a) => {
            const aName = a.name[locale as 'hi' | 'en'] ?? a.name.hi;
            return (
              <Link key={a.slug} href={`/avatar/${a.slug}`}
                className="text-center p-3 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded hover:border-[#D4AF37] transition">
                <div className="text-2xl mb-1">{a.icon}</div>
                <div className="text-xs font-semibold text-[#7B1E1E] dark:text-[#FF9933]">{aName}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}