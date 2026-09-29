'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  verseId: string;
  textSlug: string;
  label?: string;
}

const STORAGE_KEY = 'vedicvani:favorites';

interface Favorite {
  verseId: string;
  textSlug: string;
  addedAt: number;
}

function getFavorites(): Favorite[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function FavoriteButton({ verseId, textSlug, label }: FavoriteButtonProps) {
  const [isFav, setIsFav] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const favs = getFavorites();
    setIsFav(favs.some((f) => f.verseId === verseId && f.textSlug === textSlug));
  }, [verseId, textSlug]);

  function toggle() {
    const favs = getFavorites();
    const exists = favs.some((f) => f.verseId === verseId && f.textSlug === textSlug);
    let next: Favorite[];
    if (exists) {
      next = favs.filter((f) => !(f.verseId === verseId && f.textSlug === textSlug));
    } else {
      next = [...favs, { verseId, textSlug, addedAt: Date.now() }];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setIsFav(!exists);
  }

  if (!mounted) {
    return <button className="p-1.5 opacity-40" disabled aria-label="Favorite"><Heart size={14} /></button>;
  }

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 px-2 py-1 text-xs rounded transition ${
        isFav ? 'text-[#E91E63]' : 'text-[#1A1A1A]/40 dark:text-[#F5F5F5]/40 hover:text-[#E91E63]'
      }`}
      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
      aria-label="Favorite"
    >
      <Heart size={14} fill={isFav ? 'currentColor' : 'none'} />
      {label && <span>{label}</span>}
    </button>
  );
}