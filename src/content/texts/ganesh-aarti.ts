import type { TextMeta } from './types';

export const ganeshAarti: TextMeta = {
  slug: 'ganesh-aarti',
  title: { hi: 'गणेश आरती', en: 'Ganesh Aarti', sa: 'गणेशारती' },
  type: 'aarti',
  deity: 'ganesh',
  language: 'hi',
  description: { hi: 'जय गणेश जय गणेश देवा — गणपति की प्रसिद्ध आरती।', en: 'Jai Ganesh Jai Ganesh Deva — the famous aarti of Ganesha.' },
  source: 'Traditional public domain text', license: 'Public Domain', verseCount: 1,
  verses: [{ id: 'aarti-1', order: 1, meter: 'आरती',
    sanskrit: 'जय गणेश जय गणेश जय गणेश देवा।\nमाता जाकी पार्वती पिता महादेवा॥\nएकदन्त दयावन्त चार भुजाधारी।\nमाथे पर तिलक सोहे मूसे की सवारी॥\nपान चढ़े फूल चढ़े और चढ़े मेवा।\nलड्डुअन का भोग लगे सन्त करें सेवा॥\nअंधन को आँख देत कोढ़िन को काया।\nबाँझन को पुत्र देत निर्धन को माया॥\nसूर श्याम शरण आए सफल कीजे सेवा।\nमाता जाकी पार्वती पिता महादेवा॥',
    transliteration: 'jaya gaṇeśa jaya gaṇeśa jaya gaṇeśa devā |\nmātā jākī pārvatī pitā mahādevā ||',
    translations: { hi: 'जय गणेश, जय गणेश, जय गणेश देवा। जिनकी माता पार्वती और पिता महादेव हैं।', en: 'Victory to Ganesh, victory to Ganesh, victory to Lord Ganesh, whose mother is Parvati and father is Mahadeva.' }
  }]
};