export type ScriptLang = 'sa' | 'hi' | 'awa';

export interface Verse {
  id: string;
  order: number;
  sanskrit: string;
  transliteration?: string;
  translations: {
    hi?: string;
    en?: string;
  };
  meter?: string;
  audioUrl?: string;
}

export interface TextMeta {
  slug: string;
  title: {
    hi: string;
    en: string;
    sa?: string;
  };
  type: 'chalisa' | 'aarti' | 'stotra' | 'upanishad' | 'veda' | 'gita';
  deity: string;
  language: ScriptLang;
  description: {
    hi: string;
    en: string;
  };
  source: string;
  license: string;
  verseCount: number;
  verses: Verse[];
}