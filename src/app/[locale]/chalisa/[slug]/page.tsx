import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getTextBySlug, getAllTexts } from '@/lib/content';
import { DeityHeader } from '@/components/reader/DeityHeader';
import { VerseCard } from '@/components/reader/VerseCard';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllTexts().map((t) => ({ locale, slug: t.slug }))
  );
}

export default async function ChalisaPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const text = getTextBySlug(slug);
  if (!text) notFound();
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 pb-24">
        <nav className="pt-8 text-sm text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50 no-print">
          <a href={`/${locale}`} className="hover:text-[#7B1E1E]">← Home</a>
        </nav>
        <DeityHeader text={text} locale={locale} />
        <div>
          {text.verses.map((verse) => (
            <VerseCard key={verse.id} verse={verse} textSlug={text.slug} />
          ))}
        </div>
        <footer className="text-center pt-16 text-xs text-[#1A1A1A]/40 dark:text-[#F5F5F5]/40">
          🙏 जय श्री राम | जय हनुमान | जय नारायण 🙏
        </footer>
      </div>
    </main>
  );
}