import type { TextMeta } from './types';

export const sitaUpanishad: TextMeta = {
  slug: 'sita-upanishad',
  title: { hi: 'सीता उपनिषद्', en: 'Sita Upanishad', sa: 'सीतोपनिषत्' },
  type: 'upanishad',
  deity: 'sita',
  language: 'sa',
  description: {
    hi: 'अथर्ववेदीय सीता उपनिषद् — माता सीता का रहस्य।',
    en: 'Sita Upanishad of Atharva Veda — mystery of Mother Sita.'
  },
  source: 'Atharva Veda (public domain)',
  license: 'Public Domain',
  verseCount: 4,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ सीता हि महालक्ष्मीः। सीता हि मूलप्रकृतिः।\nसीता हि परमा शक्तिः। सीतायाः परं न किञ्चित्॥१॥',
      transliteration: 'oṃ sītā hi mahālakṣmīḥ | sītā hi mūlaprakṛtiḥ |\nsītā hi paramā śaktiḥ | sītāyāḥ paraṃ na kiñcit ||1||',
      translations: {
        hi: 'ॐ सीता महालक्ष्मी हैं। सीता मूलप्रकृति हैं। सीता परमा शक्ति हैं। सीता से परे कुछ नहीं।',
        en: 'Om, Sita is Mahalakshmi. Sita is the root nature. Sita is the supreme power. Nothing is beyond Sita.'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'सीता रामप्रिया देवी जानकी भूपुत्रिका।\nभूमिजा धर्मपत्नी च राघवानन्दकारिणी॥२॥',
      transliteration: 'sītā rāmapriyā devī jānakī bhūputrikā |\nbhūmijā dharmapatnī ca rāghavānandakāriṇī ||2||',
      translations: {
        hi: 'सीता रामप्रिया देवी, जानकी, भूमिपुत्री, भूमिजा, धर्मपत्नी, राघव को आनंद देने वाली।',
        en: 'Sita, beloved of Rama, Janaki, daughter of earth, born of earth, lawful wife, giver of joy to Raghava.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'यः स्मरेत् सीतां देवीं प्रातरुत्थाय भक्तितः।\nस सर्वान् प्राप्नुयात् कामान् सौभाग्यं लभते सदा॥३॥',
      transliteration: 'yaḥ smaret sītāṃ devīṃ prātarutthāya bhaktitaḥ |\nsa sarvān prāpnuyāt kāmān saubhāgyaṃ labhate sadā ||3||',
      translations: {
        hi: 'जो प्रातः उठकर भक्ति सहित सीता देवी का स्मरण करता है, वह सब कामनाएँ पाता है और सौभाग्य पाता है।',
        en: 'Whoever rises in the morning and remembers Devi Sita with devotion attains all desires and gains good fortune.'
      }
    },
    { id: 'v4', order: 4, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीसीतोपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīsītopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री सीता उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Sita Upanishad.'
      }
    }
  ]
};