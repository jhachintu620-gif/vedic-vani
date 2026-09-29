import type { TextMeta } from '@/content/texts/types';
import { PrintButton } from './PrintButton';
import { PlayAllButton } from './PlayAllButton';

interface DeityHeaderProps {
  text: TextMeta;
  locale: string;
}

export function DeityHeader({ text, locale }: DeityHeaderProps) {
  const title = text.title[locale as 'hi' | 'en' | 'sa'] ?? text.title.hi;
  const desc = text.description[locale as 'hi' | 'en'] ?? text.description.hi;

  return (
    <header className="text-center max-w-3xl mx-auto pt-12 pb-16 px-4">
      <div className="text-6xl mb-6">🚩</div>
      <h1 className="text-4xl md:text-6xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4">
        {title}
      </h1>
      <p className="text-lg text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 leading-relaxed">{desc}</p>

      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <PlayAllButton verses={text.verses} />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
          <span>{text.verseCount} verses</span>
          <span>•</span>
          <span>{text.license}</span>
          <span className="no-print"><PrintButton /></span>
        </div>
      </div>
    </header>
  );
}