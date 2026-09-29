import type { TextMeta } from './types';

export const ramRahasyaUpanishad: TextMeta = {
  slug: 'ram-rahasya-upanishad',
  title: { hi: 'राम रहस्य उपनिषद्', en: 'Ram Rahasya Upanishad', sa: 'रामरहस्योपनिषत्' },
  type: 'upanishad',
  deity: 'ram',
  language: 'sa',
  description: {
    hi: 'राम रहस्य उपनिषद् — श्रीराम के रहस्य का वर्णन। राम नाम, राम मंत्र और राम-तत्त्व का विवेचन।',
    en: 'Ram Rahasya Upanishad — description of the mystery of Shri Rama. Analysis of Rama-name, Rama-mantra, and Rama-tattva.'
  },
  source: 'Traditional (public domain)',
  license: 'Public Domain',
  verseCount: 4,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ रामो हि सत्यं परमं ब्रह्म। रामो हि ज्योतिर् अमृतं यद् अक्षरम्।\nरामो हि सर्वं जगद् एतद् विश्वम्। रामात् परं नास्ति॥१॥',
      transliteration: 'oṃ rāmo hi satyaṃ paramaṃ brahma | rāmo hi jyotir amṛtaṃ yad akṣaram |\nrāmo hi sarvaṃ jagad etad viśvam | rāmāt paraṃ nāsti ||1||',
      translations: {
        hi: 'ॐ राम ही सत्य परब्रह्म हैं। राम ही ज्योति, अमृत, अक्षर हैं। राम ही यह सब जगत, विश्व हैं। राम से परे कुछ नहीं।',
        en: 'Om, Rama is the true Supreme Brahman. Rama is the light, the immortal, the imperishable. Rama is all this world, the universe. Nothing is higher than Rama.'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'राम-नाम परं ब्रह्म राम-नाम परं तपः।\nराम-नाम परं ज्ञानं राम-नाम परा गतिः॥२॥',
      transliteration: 'rāma-nāma paraṃ brahma rāma-nāma paraṃ tapaḥ |\nrāma-nāma paraṃ jñānaṃ rāma-nāma parā gatiḥ ||2||',
      translations: {
        hi: 'राम-नाम परब्रह्म है, राम-नाम परम तप है। राम-नाम परम ज्ञान है, राम-नाम परम गति है।',
        en: 'Rama-name is the Supreme Brahman, Rama-name is the highest penance. Rama-name is the highest knowledge, Rama-name is the supreme goal.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'राम-नाम सदा जपेत् प्रेम सहितः।\nराम-नाम जपेन् मुक्तिर् भवेत्। राम-नाम जपेन् सर्वं सिद्ध्यति॥३॥',
      transliteration: 'rāma-nāma sadā japet prema sahitaḥ |\nrāma-nāma japen muktir bhavet | rāma-nāma japen sarvaṃ siddhyati ||3||',
      translations: {
        hi: 'राम-नाम सदा प्रेम सहित जपे। राम-नाम जपने से मुक्ति होती है। राम-नाम जपने से सब सिद्ध होता है।',
        en: 'Always chant Rama-name with love. By chanting Rama-name, liberation comes. By chanting Rama-name, everything succeeds.'
      }
    },
    { id: 'v4', order: 4, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीरामरहस्योपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīrāmarahasyopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री राम रहस्य उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Ram Rahasya Upanishad.'
      }
    }
  ]
};