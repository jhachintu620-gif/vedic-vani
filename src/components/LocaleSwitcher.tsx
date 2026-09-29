'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

const labels: Record<string, string> = {
  hi: 'हिंदी',
  en: 'English',
  sa: 'संस्कृतम्'
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onChange(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next as 'hi' | 'en' | 'sa' });
    });
  }

  return (
    <select
      value={locale}
      onChange={(e) => onChange(e.target.value)}
      disabled={isPending}
      className="bg-transparent border border-[#7B1E1E]/20 dark:border-[#FF9933]/20 rounded px-2 py-1 text-sm cursor-pointer hover:border-[#7B1E1E]/50 dark:hover:border-[#FF9933]/50"
      aria-label="Change language"
    >
      {routing.locales.map((loc) => (
        <option key={loc} value={loc}>
          {labels[loc]}
        </option>
      ))}
    </select>
  );
}
