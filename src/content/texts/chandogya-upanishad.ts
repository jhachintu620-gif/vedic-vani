import type { TextMeta } from './types';

export const chandogyaUpanishad: TextMeta = {
  slug: 'chandogya-upanishad',
  title: { hi: 'छान्दोग्य उपनिषद्', en: 'Chandogya Upanishad', sa: 'छान्दोग्योपनिषत्' },
  type: 'upanishad',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'सामवेदीय छान्दोग्य उपनिषद् — उद्दालक-श्वेतकेतु संवाद। "तत्त्वमसि" महावाक्य का स्रोत।',
    en: 'Chandogya Upanishad of Sama Veda — dialogue of Uddalaka and Shvetaketu. Source of "Tat Tvam Asi" mahavakya.'
  },
  source: 'Sama Veda (public domain)', license: 'Public Domain', verseCount: 4,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ सदेव सोम्येदमग्र आसीदेकमेवाद्वितीयम्।\nतद्धैक आहुरसदेवादमग्र आसीदेकमेवाद्वितीयम्।\nतस्मादसतः सज्जायत॥',
      transliteration: 'oṃ sadeva somyedamagra āsīdekamevādvitīyam |\ntaddhaika āhurasadevādamagra āsīdekamevādvitīyam |\ntasmādasataḥ sajjāyata ||',
      translations: {
        hi: 'ॐ — हे सौम्य! यह आरंभ में सत् ही था, एकमेव, अद्वितीय। कुछ कहते हैं असत् ही था एकमेव अद्वितीय, और उस असत् से सत् उत्पन्न हुआ।',
        en: 'Om — O gentle one! In the beginning, this was Existence (Sat) alone, one only, without a second. Some say it was non-existence alone, one only, and from that non-existence, existence was born.'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो।\nइति तु सोम्य विद्धि॥',
      transliteration: 'sa ya eṣo aṇimaitadātmyamidaṃ sarvaṃ tatsatyaṃ sa ātmā tattvamasi śvetaketo |\niti tu somya viddhi ||',
      translations: {
        hi: 'हे श्वेतकेतु! जो यह सूक्ष्म तत्त्व है, जिसकी आत्मता से यह सब है — वह सत्य, वह आत्मा है। वह तुम हो (तत्त्वमसि)। हे सौम्य, ऐसा जानो।',
        en: 'O Shvetaketu! That which is the subtle essence, in which all this has its Self — that is truth, that is the Self. That thou art (Tat Tvam Asi). O gentle one, know this.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'आचार्यवान् पुरुषो वेद। तस्य तावदेव चिरं यावन्न विमोक्ष्ये अथ सम्पत्स्ये।\nतमेव धीरो विज्ञाय प्रज्ञाकूर्चेन संसारविचित्राणि नातिवर्तते॥',
      transliteration: 'ācāryavān puruṣo veda | tasya tāvadeva ciraṃ yāvanna vimokṣye atha sampatsye |\ntameva dhīro vijñāya prajñākūrcena saṃsāravicitrāṇi nātivartate ||',
      translations: {
        hi: 'आचार्यवान् पुरुष ही जानता है। उसका जितना विलंब है, उतना ही उसका कल्याण। धीर पुरुष उसे जानकर संसार की विचित्रताओं को पार कर जाता है।',
        en: 'The person who has a teacher knows. His delay is only until he is liberated, then he attains. The wise one, having known That, does not return to the manifoldness of the world.'
      }
    },
    { id: 'phala', order: 4, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीछान्दोग्योपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīchāndogyopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री छान्दोग्य उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Chandogya Upanishad.'
      }
    }
  ]
};