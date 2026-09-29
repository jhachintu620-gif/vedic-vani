import { Link } from '@/i18n/navigation';
import { getAllTexts } from '@/lib/content';

function getDayIndex(max: number): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return day % max;
}

export function DailyShloka({ locale }: { locale: string }) {
  const texts = getAllTexts().filter((t) => t.verses.length > 0);
  const textIndex = getDayIndex(texts.length);
  const text = texts[textIndex];
  const verseIndex = getDayIndex(text.verses.length);
  const verse = text.verses[verseIndex];

  const title = text.title[locale as 'hi' | 'en' | 'sa'] ?? text.title.hi;
  const sanskrit = verse.sanskrit.split('\n').slice(0, 3).join('\n');
  const translation =
    verse.translations[locale as 'hi' | 'en'] ?? verse.translations.hi ?? '';
  const url = text.type === 'aarti' ? `/aarti/${text.slug}` : `/chalisa/${text.slug}`;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="rounded-lg border border-[#D4AF37]/40 bg-gradient-to-br from-[#FFF8E7] to-[#FFF0D0] dark:from-[#1A1A1A] dark:to-[#0F0F0F] p-8 md:p-10">
        <div className="text-center mb-6">
          <div className="text-3xl mb-2">🪔</div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
            {locale === 'en' ? "Today's Shloka" : 'आज का श्लोक'}
          </div>
        </div>

        <p className="text-xl md:text-2xl leading-loose text-center text-[#7B1E1E] dark:text-[#FF9933] font-serif whitespace-pre-line mb-4">
          {sanskrit}
        </p>

        {translation && (
          <p className="text-sm md:text-base text-center text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 max-w-2xl mx-auto leading-relaxed mb-6">
            {translation}
          </p>
        )}

        <div className="text-center">
          <Link
            href={url}
            className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:underline"
          >
            — {title} →
          </Link>
        </div>
      </div>
    </section>
  );
}