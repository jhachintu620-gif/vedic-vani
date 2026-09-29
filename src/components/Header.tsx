import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Search, Heart } from 'lucide-react';
import { LocaleSwitcher } from './LocaleSwitcher';
import { DarkModeToggle } from './DarkModeToggle';

export async function Header() {
  const t = await getTranslations('site');
  const nav = await getTranslations('nav');

  return (
    <header className="border-b border-[#7B1E1E]/10 dark:border-[#FF9933]/10 bg-[#FFF8E7]/80 dark:bg-[#0F0F0F]/80 backdrop-blur sticky top-0 z-40 no-print">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl md:text-2xl font-bold text-[#7B1E1E] dark:text-[#FF9933] hover:opacity-80 transition shrink-0">
          🚩 {t('name')}
        </Link>
        <nav className="hidden lg:flex items-center gap-4 text-sm">
          <Link href="/" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933] transition">{nav('home')}</Link>
          <Link href="/karmkand/vivah" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933] transition">कर्मकांड</Link>
          <Link href="/avatar" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933] transition">अवतार</Link>
          <Link href="/deity/narayan" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933] transition">नारायण</Link>
          <Link href="/deity/hanuman" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933] transition">हनुमान</Link>
          <Link href="/chalisa/bhagavad-gita" className="hover:text-[#7B1E1E] dark:hover:text-[#FF9933] transition">गीता</Link>
        </nav>
        <div className="flex items-center gap-1 shrink-0">
          <Link href="/favorites" className="p-2 rounded hover:bg-[#7B1E1E]/10 dark:hover:bg-[#FF9933]/10 transition" aria-label="Favorites">
            <Heart size={18} />
          </Link>
          <Link href="/search" className="p-2 rounded hover:bg-[#7B1E1E]/10 dark:hover:bg-[#FF9933]/10 transition" aria-label="Search">
            <Search size={18} />
          </Link>
          <DarkModeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}