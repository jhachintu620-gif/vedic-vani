import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['hi', 'en', 'sa'],
  defaultLocale: 'hi'
});

export type Locale = (typeof routing.locales)[number];