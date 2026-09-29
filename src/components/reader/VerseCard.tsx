'use client';

import { useState } from 'react';
import type { Verse } from '@/content/texts/types';
import { AudioPlayer } from './AudioPlayer';
import { FavoriteButton } from './FavoriteButton';
import { ShareButton } from './ShareButton';
import { VoicePlayer } from './VoicePlayer';

interface VerseCardProps {
  verse: Verse;
  textSlug?: string;
}

export function VerseCard({ verse, textSlug = '' }: VerseCardProps) {
  const [showTranslation, setShowTranslation] = useState(true);

  // Build full text to speak: sanskrit first, then hindi translation
  const speechText = [
    verse.sanskrit,
    verse.translations.hi ? `।। अर्थ ।। ${verse.translations.hi}` : ''
  ].filter(Boolean).join('\n');

  return (
    <article
      id={verse.id}
      className="border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10 pb-8 mb-8 last:border-0 scroll-mt-20"
    >
      <div className="flex items-center justify-between gap-2 mb-3 no-print flex-wrap">
        <div className="flex items-center gap-2">
          {verse.meter && (
            <span className="inline-block text-xs uppercase tracking-wider text-[#D4AF37]">
              {verse.meter}
            </span>
          )}
          <a
            href={`#${verse.id}`}
            className="text-xs text-[#1A1A1A]/30 dark:text-[#F5F5F5]/30 hover:text-[#D4AF37]"
          >
            #{verse.id}
          </a>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <VoicePlayer text={speechText} label="Listen" />
          {verse.audioUrl && <AudioPlayer src={verse.audioUrl} />}
          <FavoriteButton verseId={verse.id} textSlug={textSlug} />
          <ShareButton text={verse.sanskrit} />
        </div>
      </div>

      <p className="text-2xl md:text-3xl leading-loose text-[#7B1E1E] dark:text-[#FF9933] font-serif whitespace-pre-line mb-4">
        {verse.sanskrit}
      </p>

      {verse.transliteration && (
        <p className="text-base md:text-lg italic text-[#1A1A1A]/60 dark:text-[#F5F5F5]/60 mb-4 whitespace-pre-line">
          {verse.transliteration}
        </p>
      )}

      {showTranslation && (
        <div className="mt-4 pl-4 border-l-2 border-[#D4AF37] space-y-2">
          {verse.translations.hi && (
            <p className="text-sm md:text-base text-[#1A1A1A]/80 dark:text-[#F5F5F5]/80">
              {verse.translations.hi}
            </p>
          )}
          {verse.translations.en && (
            <p className="text-sm md:text-base text-[#1A1A1A]/60 dark:text-[#F5F5F5]/60">
              {verse.translations.en}
            </p>
          )}
        </div>
      )}

      <button
        onClick={() => setShowTranslation(!showTranslation)}
        className="mt-3 text-xs text-[#D4AF37] hover:underline no-print"
      >
        {showTranslation ? 'Hide meaning' : 'Show meaning'}
      </button>
    </article>
  );
}