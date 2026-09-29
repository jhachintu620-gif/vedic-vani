'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from '@/i18n/navigation';

interface Favorite {
  verseId: string;
  textSlug: string;
  addedAt: number;
}

interface VerseEntry {
  verseId: string;
  textSlug: string;
  textTitle: string;
  sanskrit: string;
  url: string;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem('vedicvani:favorites');
      setFavorites(raw ? JSON.parse(raw) : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  function clearAll() {
    if (!confirm('Remove all favorites?')) return;
    localStorage.removeItem('vedicvani:favorites');
    setFavorites([]);
  }

  if (!mounted) {
    return (
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <p className="text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">Loading…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4 text-[#E91E63]">
            <Heart size={48} fill="currentColor" className="inline" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#7B1E1E] dark:text-[#FF9933]">
            Your Favorites
          </h1>
          <p className="text-sm text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50 mt-2">
            {favorites.length} {favorites.length === 1 ? 'verse saved' : 'verses saved'}
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16 text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
            <p className="mb-4">You have no favorites yet.</p>
            <p className="text-sm">Click the ❤️ heart next to any verse to save it here.</p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-8">
              {favorites.map((f) => (
                <div
                  key={`${f.textSlug}-${f.verseId}`}
                  className="p-4 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg"
                >
                  <div className="text-xs uppercase tracking-wider text-[#D4AF37] mb-1">
                    {f.textSlug.replace(/-/g, ' ')}
                  </div>
                  <div className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70">
                    Verse: <code className="text-xs">{f.verseId}</code>
                  </div>
                  <div className="text-xs text-[#1A1A1A]/40 dark:text-[#F5F5F5]/40 mt-1">
                    Saved {new Date(f.addedAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={clearAll}
                className="text-sm text-red-600 hover:underline"
              >
                Clear all favorites
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}