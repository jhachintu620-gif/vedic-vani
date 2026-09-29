import type { TextMeta } from './types';

export const jabalaUpanishad: TextMeta = {
  slug: 'jabala-upanishad',
  title: { hi: 'जाबाल उपनिषद्', en: 'Jabala Upanishad', sa: 'जाबालोपनिषत्' },
  type: 'upanishad',
  deity: 'shiva',
  language: 'sa',
  description: {
    hi: 'यजुर्वेदीय जाबाल उपनिषद् — संन्यास आश्रम और काशी की महिमा का वर्णन। संन्यास ग्रहण की विधि।',
    en: 'Jabala Upanishad of Yajur Veda — description of the Sannyasa ashram and glory of Kashi. Method of taking renunciation.'
  },
  source: 'Yajur Veda (public domain)',
  license: 'Public Domain',
  verseCount: 4,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ बृहस्पतिर्वै पुरस्तात्। तत आयान्तमृषिं जाबालं याज्ञवल्क्यः पप्रच्छ।\nभगवन् संन्यासः कथं कर्तव्य इति॥',
      transliteration: 'oṃ bṛhaspatirvai purastāt | tata āyāntamṛṣiṃ jābālaṃ yājñavalkyaḥ papraccha |\nbhagavan sannyāsaḥ kathaṃ kartavya iti ||',
      translations: {
        hi: 'ॐ पूर्वकाल में बृहस्पति थे। तब आते हुए ऋषि जाबाल से याज्ञवल्क्य ने पूछा — हे भगवन! संन्यास कैसे ग्रहण करना चाहिए?',
        en: 'Om, in ancient times there was Brihaspati. Then Yajnavalkya asked sage Jabala who came — O Lord! How should one take Sannyasa?'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'स होवाच — ब्रह्मचर्यं समाप्य गृही भवेत्।\nगृहाद् वनी भवेत्। वनाद् वा त्यक्त्वा यतिः।\nअथवा गृहादेव प्रव्रजेत्॥',
      transliteration: 'sa hovāca — brahmacaryaṃ samāpya gṛhī bhavet |\ngṛhād vanī bhavet | vanād vā tyaktvā yatiḥ |\nathavā gṛhādeva pravrajet ||',
      translations: {
        hi: 'उन्होंने कहा — ब्रह्मचर्य समाप्त करके गृही बने। गृह से वनी बने। वन से त्यागकर यति बने। अथवा गृह से ही प्रव्रज्या (संन्यास) ग्रहण करे।',
        en: 'He said — After completing brahmacharya, become a householder. From householder, become a forest-dweller. From forest, renounce and become a Yati. Or from household itself, take Sannyasa.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'काशी तु मोक्षदा नित्या। काश्यां मरणं मुक्तिः।\nकाश्यां वासो मोक्षदः। मनसा काशी चिन्तयेत्॥',
      transliteration: 'kāśī tu mokṣadā nityā | kāśyāṃ maraṇaṃ muktiḥ |\nkāśyāṃ vāso mokṣadaḥ | manasā kāśī cintayet ||',
      translations: {
        hi: 'काशी सदा मोक्ष देने वाली है। काशी में मरण मुक्ति है। काशी में वास मोक्ष देने वाला है। मन से काशी का चिंतन करें।',
        en: 'Kashi always grants liberation. Death in Kashi is liberation. Residence in Kashi grants liberation. One should contemplate Kashi with the mind.'
      }
    },
    { id: 'v4', order: 4, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीजाबालोपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrījābālopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री जाबाल उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Jabala Upanishad.'
      }
    }
  ]
};