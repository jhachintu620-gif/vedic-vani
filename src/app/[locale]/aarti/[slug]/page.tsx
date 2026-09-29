import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getTextBySlug } from '@/lib/content';
import { DeityHeader } from '@/components/reader/DeityHeader';
import { VerseCard } from '@/components/reader/VerseCard';

export default async function AartiPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const text = getTextBySlug(slug);
  if (!text || text.type !== 'aarti') notFound();
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 pb-24">
        <DeityHeader text={text} locale={locale} />
        <div>
          {text.verses.map((v) => <VerseCard key={v.id} verse={v} textSlug={text.slug} />)}
        </div>
      </div>
    </main>
  );
}