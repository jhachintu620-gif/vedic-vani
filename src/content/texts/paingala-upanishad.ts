import type { TextMeta } from './types';

export const paingalaUpanishad: TextMeta = {
  slug: 'paingala-upanishad',
  title: { hi: 'पैंगल उपनिषद्', en: 'Paingala Upanishad', sa: 'पैङ्गलोपनिषत्' },
  type: 'upanishad',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'यजुर्वेदीय पैंगल उपनिषद् — याज्ञवल्क्य और पैंगल का संवाद। पंचकोश, जीव और ब्रह्म का विवेचन।',
    en: 'Paingala Upanishad of Yajur Veda — dialogue between Yajnavalkya and Paingala. Analysis of five sheaths, individual soul and Brahman.'
  },
  source: 'Yajur Veda (public domain)',
  license: 'Public Domain',
  verseCount: 4,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ पैंगलो याज्ञवल्क्यं पप्रच्छ।\nभगवन् कति कोशाः कति वा अवस्थाः कतयो दोषाः कति बन्धाः कति मोक्षाः।\nकः श्रोता कः मन्ता कः विज्ञातेति॥',
      transliteration: 'oṃ paiṅgalo yājñavalkyaṃ papraccha |\nbhagavan kati kośāḥ kati vā avasthāḥ katayo doṣāḥ kati bandhāḥ kati mokṣāḥ |\nkaḥ śrotā kaḥ mantā kaḥ vijñāteti ||',
      translations: {
        hi: 'ॐ पैंगल ने याज्ञवल्क्य से पूछा — हे भगवन! कितने कोश, कितनी अवस्थाएँ, कितने दोष, कितने बंधन, कितने मोक्ष? श्रोता कौन? मन्ता कौन? विज्ञाता कौन?',
        en: 'Om, Paingala asked Yajnavalkya — O Lord! How many sheaths, how many states, how many defects, how many bonds, how many liberations? Who is the hearer? Who is the thinker? Who is the knower?'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'स होवाच — पञ्च कोशाः। अन्नमयः प्राणमयो मनोमयो विज्ञानमय आनन्दमयश्चेति।\nचतस्रोऽवस्थाः जाग्रत् स्वप्नः सुषुप्तिस्तुरीया च॥',
      transliteration: 'sa hovāca — pañca kośāḥ | annamayaḥ prāṇamayo manomayo vijñānamaya ānandamayaśceti |\ncatasro avasthāḥ jāgrat svapnaḥ suṣuptisturīyā ca ||',
      translations: {
        hi: 'उन्होंने कहा — पाँच कोश: अन्नमय, प्राणमय, मनोमय, विज्ञानमय और आनन्दमय। चार अवस्थाएँ: जाग्रत, स्वप्न, सुषुप्ति और तुरीया।',
        en: 'He said — Five sheaths: food, breath, mind, knowledge, and bliss. Four states: waking, dream, deep sleep, and the fourth (Turiya).'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'श्रोता मन्ता विज्ञाता स आत्मा। नित्यः शुद्धो बुद्धः सत्यः।\nय एवं वेद स मोक्षमाप्नोति॥',
      transliteration: 'śrotā mantā vijñātā sa ātmā | nityaḥ śuddho buddhaḥ satyaḥ |\nya evaṃ veda sa mokṣamāpnoti ||',
      translations: {
        hi: 'श्रोता, मन्ता और विज्ञाता वही आत्मा है — नित्य, शुद्ध, बुद्ध और सत्य। जो इस प्रकार जानता है वह मोक्ष पाता है।',
        en: 'The hearer, the thinker, and the knower — that is the Self — eternal, pure, awakened, true. Whoever knows thus attains liberation.'
      }
    },
    { id: 'v4', order: 4, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीपैङ्गलोपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīpaiṅgalopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री पैंगल उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Paingala Upanishad.'
      }
    }
  ]
};