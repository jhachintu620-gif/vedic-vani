'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  if (!mounted) {
    return <button className="p-2 rounded hover:bg-[#7B1E1E]/5" aria-label="Toggle theme"><Moon size={18} /></button>;
  }

  return (
    <button onClick={toggle} className="p-2 rounded hover:bg-[#7B1E1E]/10 dark:hover:bg-[#FF9933]/10 transition" aria-label="Toggle theme">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}