import type { TextMeta } from './types';

export const annapurnaUpanishad: TextMeta = {
  slug: 'annapurna-upanishad',
  title: { hi: 'अन्नपूर्णा उपनिषद्', en: 'Annapurna Upanishad', sa: 'अन्नपूर्णोपनिषत्' },
  type: 'upanishad',
  deity: 'durga',
  language: 'sa',
  description: {
    hi: 'अथर्ववेदीय अन्नपूर्णा उपनिषद् — माता अन्नपूर्णा का रहस्य।',
    en: 'Annapurna Upanishad of Atharva Veda — mystery of Mother Annapurna.'
  },
  source: 'Atharva Veda (public domain)',
  license: 'Public Domain',
  verseCount: 4,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ अन्नपूर्णा हि परं ब्रह्म। अन्नपूर्णा हि परं तपः।\nअन्नपूर्णा हि परं ज्ञानं। अन्नपूर्णायाः परं न किञ्चित्॥१॥',
      transliteration: 'oṃ annapūrṇā hi paraṃ brahma | annapūrṇā hi paraṃ tapaḥ |\nannapūrṇā hi paraṃ jñānaṃ | annapūrṇāyāḥ paraṃ na kiñcit ||1||',
      translations: {
        hi: 'ॐ अन्नपूर्णा परब्रह्म हैं। अन्नपूर्णा परम तप हैं। अन्नपूर्णा परम ज्ञान हैं। अन्नपूर्णा से परे कुछ नहीं।',
        en: 'Om, Annapurna is the Supreme Brahman. Annapurna is the highest penance. Annapurna is the highest knowledge. Nothing is beyond Annapurna.'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'अन्नं ब्रह्मेति कृष्णं च। अन्नं न निन्द्यात्। अन्नं न परिचक्षीत।\nअन्नं बहु कुर्वीत। तद् व्रतम्॥२॥',
      transliteration: 'annaṃ brahmeti kṛṣṇaṃ ca | annaṃ na nindyāt | annaṃ na paricakṣīta |\nannaṃ bahu kurvīta | tad vratam ||2||',
      translations: {
        hi: 'अन्न ही ब्रह्म है। अन्न की निंदा न करें, अन्न को तुच्छ न समझें, अन्न बहुत उत्पन्न करें — यह व्रत है।',
        en: 'Food is Brahman. Do not despise food. Do not reject food. Make much food — this is the vow.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'मायया मोहिताः सर्वे जीवा भ्रमन्ति संसारे।\nअन्नपूर्णा प्रसादेन माया नश्यति। ब्रह्म प्राप्यते॥३॥',
      transliteration: 'māyayā mohitāḥ sarve jīvā bhramanti saṃsāre |\nannapūrṇā prasādena māyā naśyati | brahma prāpyate ||3||',
      translations: {
        hi: 'माया से मोहित सब जीव संसार में भ्रमण करते हैं। अन्नपूर्णा के प्रसाद से माया नष्ट होती है, ब्रह्म प्राप्त होता है।',
        en: 'All beings deluded by maya wander in the world. By the grace of Annapurna, maya is destroyed and Brahman is attained.'
      }
    },
    { id: 'v4', order: 4, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीअन्नपूर्णोपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīannapūrṇopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री अन्नपूर्णा उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Annapurna Upanishad.'
      }
    }
  ]
};