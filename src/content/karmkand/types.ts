export type KarmkandPhase = 'siddhant' | 'pre-wedding' | 'main-wedding' | 'post-wedding';

export interface KarmkandMantra {
  id: string;
  sanskrit: string;
  transliteration: string;
  meaning: { hi: string; en: string };
  when: { hi: string; en: string };
}

export interface KarmkandStep {
  number: number;
  title: { hi: string; en: string };
  description: { hi: string; en: string };
}

export interface KarmkandRitual {
  slug: string;
  title: { hi: string; en: string };
  category: 'vivah' | 'upanayan' | 'shraddha' | 'puja';
  tradition: string;
  phase: KarmkandPhase;
  order: number;
  shortDesc: { hi: string; en: string };
  longDesc: { hi: string; en: string };
  materials?: { hi: string; en: string }[];
  steps: KarmkandStep[];
  mantras: KarmkandMantra[];
  significance: { hi: string; en: string };
  duration?: { hi: string; en: string };
}