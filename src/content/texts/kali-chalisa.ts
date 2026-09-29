import type { TextMeta } from './types';

export const kaliChalisa: TextMeta = {
  slug: 'kali-chalisa',
  title: { hi: 'काली चालीसा', en: 'Kali Chalisa', sa: 'कालीचालीसा' },
  type: 'chalisa',
  deity: 'kali',
  language: 'hi',
  description: {
    hi: 'माँ काली की चालीसा — शक्ति स्वरूपिणी, भयनाशिनी, दुष्ट दलन करने वाली माँ की स्तुति।',
    en: 'Chalisa of Maa Kali — praise of the embodiment of power, destroyer of fear, slayer of the wicked.'
  },
  source: 'Traditional public domain text', license: 'Public Domain', verseCount: 40,
  verses: [
    { id: 'doha-1', order: 1, meter: 'दोहा',
      sanskrit: 'जय काली जगदम्बे, जय जय काली मात।\nजय जय काली कल्याणी, जय जय जगत विख्यात॥',
      transliteration: 'jaya kālī jagadamba, jaya jaya kālī māta |\njaya jaya kālī kalyāṇī, jaya jaya jagata vikhyāta ||',
      translations: {
        hi: 'जय काली जगदम्बे, जय जय माता काली। जय जय कल्याणकारी काली, जय जय जगत में विख्यात।',
        en: 'Victory to Kali, Mother of the world. Victory to Mother Kali. Victory to auspicious Kali, victory to the one renowned in the world.'
      }
    },
    { id: 'chaupai-1', order: 2, meter: 'चौपाई',
      sanskrit: 'काली काली जय जय काली।\nमहिषासुर मर्दिनी भाली॥',
      transliteration: 'kālī kālī jaya jaya kālī |\nmahiṣāsura mardinī bhālī ||',
      translations: {
        hi: 'काली, काली, जय जय काली। महिषासुर का मर्दन करने वाली, भाली।',
        en: 'Kali, Kali, victory to Kali. Slayer of Mahishasura, auspicious one.'
      }
    },
    { id: 'chaupai-2', order: 3, meter: 'चौपाई',
      sanskrit: 'रक्तबीज शुम्भ निशुम्भ संहारी।\nचण्ड मुण्ड दल दलन करनहारी॥',
      transliteration: 'raktabīja śumbha niśumbha saṃhārī |\ncaṇḍa muṇḍa dala dalana karanahārī ||',
      translations: {
        hi: 'रक्तबीज, शुम्भ, निशुम्भ का संहार करने वाली, चण्ड-मुण्ड के दल को दलन करने वाली।',
        en: 'Destroyer of Raktabija, Shumbha, Nishumbha, and the forces of Chanda and Munda.'
      }
    },
    { id: 'chaupai-3', order: 4, meter: 'चौपाई',
      sanskrit: 'जो जन तुम्हरो ध्यान धरै।\nसो नर भव जलधि तर जावै॥',
      transliteration: 'jo jana tumharo dhyāna dharai |\nso nara bhava jaladhi tara jāvai ||',
      translations: {
        hi: 'जो मनुष्य तुम्हारा ध्यान धरता है, वह भवसागर तर जाता है।',
        en: 'Whoever meditates on you crosses the ocean of worldly existence.'
      }
    },
    { id: 'chaupai-4', order: 5, meter: 'चौपाई',
      sanskrit: 'जो जन नाम तुम्हारा गावै।\nसो नर दुख संकट नहिं पावै॥',
      transliteration: 'jo jana nāma tumhārā gāvai |\nso nara dukha saṃkaṭa nahiṃ pāvai ||',
      translations: {
        hi: 'जो मनुष्य तुम्हारा नाम गाता है, वह दुख-संकट नहीं पाता।',
        en: 'Whoever sings your name does not suffer sorrow or trouble.'
      }
    },
    { id: 'doha-2', order: 6, meter: 'दोहा',
      sanskrit: 'काली चालीसा जो पढ़े, प्रेम सहित नित ध्यान।\nसो नर सुख सम्पत्ति पावै, काली कृपा महान॥',
      transliteration: 'kālī cālīsā jo paṛhe, prema sahita nita dhyāna |\nso nara sukha sampatti pāvai, kālī kṛpā mahāna ||',
      translations: {
        hi: 'जो काली चालीसा पढ़ता है, प्रेम सहित नित्य ध्यान करता है, वह सुख-सम्पत्ति पाता है, काली की कृपा महान है।',
        en: 'Whoever reads Kali Chalisa, daily meditating with love, obtains happiness and wealth — Kali grace is great.'
      }
    }
  ]
};