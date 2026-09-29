import type { TextMeta } from './types';

export const aitareyaUpanishad: TextMeta = {
  slug: 'aitareya-upanishad',
  title: { hi: 'ऐतरेय उपनिषद्', en: 'Aitareya Upanishad', sa: 'ऐतरेयोपनिषत्' },
  type: 'upanishad',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'ऋग्वेदीय ऐतरेय उपनिषद् — आत्मा की एकता और ब्रह्म की महिमा। "प्रज्ञानं ब्रह्म" का स्रोत।',
    en: 'Aitareya Upanishad of Rig Veda — the unity of Self and glory of Brahman. Source of "Prajnanam Brahma".'
  },
  source: 'Rig Veda (public domain)', license: 'Public Domain', verseCount: 4,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ आत्मा वा इदमेक एवाग्र आसीत्। नान्यत् किञ्चन मिषत्।\nस ईक्षत लोकान्नु सृजा इति॥',
      transliteration: 'oṃ ātmā vā idameka evāgra āsīt | nānyat kiñcana miṣat |\nsa īkṣata lokānnu sṛjā iti ||',
      translations: {
        hi: 'ॐ — आरंभ में यह आत्मा ही एक था। और कुछ भी नहीं था जो पलक झपकाता। उसने सोचा — मैं लोकों की सृष्टि करूँ।',
        en: 'Om — In the beginning, this Self alone was one. Nothing else whatsoever existed that winked. He thought: "Let me create the worlds."'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'तस्माद्वा एतस्मादात्मनः सर्वस्मात्। पुरुषः सोऽभवत्।\nस हि यज्ञः स हि देवता स हि लोकाः स हि सर्वाणि भूतानि॥',
      transliteration: 'tasmādvā etasmādātmanaḥ sarvasmāt | puruṣaḥ so abhavat |\nsa hi yajñaḥ sa hi devatā sa hi lokāḥ sa hi sarvāṇi bhūtāni ||',
      translations: {
        hi: 'उस सर्व आत्मा से वह पुरुष प्रकट हुआ। वही यज्ञ, वही देवता, वही लोक, वही सब भूत हैं।',
        en: 'From that all-Self, the Purusha emerged. He is the sacrifice, he is the deity, he is the worlds, he is all beings.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'स एतमेव पुरुषं ब्रह्म ततममपश्यत्।\nइदमदर्शमित्युवाच। तस्मादिदन्द्रो नाम। इदन्द्र इति।\nपरोक्षं वा एतत्। परोक्षं हि नाम। प्रत्यक्षं वा एतत्। प्रत्यक्षं हि नाम॥\nतस्मादिदन्द्रं नाम। इदन्द्र इति॥',
      transliteration: 'sa etameva puruṣaṃ brahma tatamamapaśyat |\nidamadarśamityuvāca | tasmādidandro nāma | idandra iti |',
      translations: {
        hi: 'उसने इस पुरुष को ही सर्वव्यापी ब्रह्म रूप में देखा। उसने कहा — यह मैंने देखा। इसलिए उसका नाम इदंद्र हुआ।',
        en: 'He saw this Purusha as the all-pervading Brahman. He said: "I have seen this." Therefore his name became Idandra.'
      }
    },
    { id: 'phala', order: 4, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीऐतरेयोपनिषत् सम्पूर्णा।\nप्रज्ञानं ब्रह्म।',
      transliteration: 'iti śrīaitareyopaniṣat sampūrṇā |\nprajñānaṃ brahma |',
      translations: {
        hi: 'इस प्रकार श्री ऐतरेय उपनिषद् सम्पूर्ण हुई। प्रज्ञान (चैतन्य) ब्रह्म है।',
        en: 'Thus concludes the Shri Aitareya Upanishad. Consciousness is Brahman.'
      }
    }
  ]
};