import { preWeddingRituals, mainWeddingRituals, postWeddingRituals } from './vivah-parts';
import { upanayanRituals } from './upanayan';
import { shraddhaRituals } from './shraddha';
import { pujaRituals } from './pujas';
import { childhoodSamskaras } from './childhood';
import type { KarmkandRitual } from './types';

export const allVivahRituals: KarmkandRitual[] = [
  ...preWeddingRituals,
  ...mainWeddingRituals,
  ...postWeddingRituals
];

export const allKarmkand: KarmkandRitual[] = [
  ...allVivahRituals,
  ...upanayanRituals,
  ...shraddhaRituals,
  ...pujaRituals,
  ...childhoodSamskaras
];

export const karmkandCategories = [
  {
    slug: 'vivah',
    name: { hi: 'विवाह संस्कार', en: 'Vivah Sanskar' },
    icon: '💍',
    tradition: 'मैथिल / शांडिल्य',
    count: allVivahRituals.length,
    description: {
      hi: 'सिद्धांत से गृह प्रवेश तक संपूर्ण विवाह विधि',
      en: 'Complete wedding rituals from Siddhant to Griha Pravesh'
    }
  },
  {
    slug: 'upanayan',
    name: { hi: 'उपनयन (यज्ञोपवीत)', en: 'Upanayan (Yajnopavit)' },
    icon: '🪢',
    tradition: 'मैथिल',
    count: upanayanRituals.length,
    description: {
      hi: 'ब्रह्मचर्य आश्रम में प्रवेश — यज्ञोपवीत धारण',
      en: 'Entry into Brahmacharya ashram — wearing the sacred thread'
    }
  },
  {
    slug: 'shraddha',
    name: { hi: 'श्राद्ध कर्म', en: 'Shraddha Karm' },
    icon: '🕯️',
    tradition: 'मैथिल',
    count: shraddhaRituals.length,
    description: {
      hi: 'पितृऋण से मुक्ति — पूर्वजों को तृप्त करने की विधि',
      en: 'Release from ancestral debt — method of satisfying ancestors'
    }
  },
  {
    slug: 'puja',
    name: { hi: 'विविध पूजन', en: 'Various Pujas' },
    icon: '🪔',
    tradition: 'मैथिल',
    count: pujaRituals.length,
    description: {
      hi: 'सत्यनारायण, गृह प्रवेश, और अन्य पूजन विधियाँ',
      en: 'Satyanarayan, Griha Pravesh, and other puja methods'
    }
  }
];

export function getKarmkandBySlug(slug: string): KarmkandRitual | undefined {
  return allKarmkand.find((r) => r.slug === slug);
}

export function getKarmkandByCategory(category: string): KarmkandRitual[] {
  return allKarmkand.filter((r) => r.category === category);
}

export { preWeddingRituals, mainWeddingRituals, postWeddingRituals, upanayanRituals, shraddhaRituals, pujaRituals, childhoodSamskaras };