import type { TextMeta } from './types';

export const maitriUpanishad: TextMeta = {
  slug: 'maitri-upanishad',
  title: { hi: 'मैत्री उपनिषद्', en: 'Maitri Upanishad', sa: 'मैत्र्युपनिषत्' },
  type: 'upanishad',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'कृष्ण यजुर्वेदीय मैत्री उपनिषद् — राजा बृहद्रथ और ऋषि शाकायन्य का संवाद। आत्मा के दो पक्ष — द्वैत और अद्वैत।',
    en: 'Maitri Upanishad of Krishna Yajur Veda — dialogue between King Brihadratha and sage Shakayanya. Two aspects of the Self — duality and non-duality.'
  },
  source: 'Krishna Yajur Veda (public domain)',
  license: 'Public Domain',
  verseCount: 5,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ राजा बृहद्रथः शाकायन्यमृषिं पप्रच्छ।\nभगवन् किं कारणं संसारः कथं मोक्षः।\nकिं जीवः किं ब्रह्मेति॥',
      transliteration: 'oṃ rājā bṛhadrathaḥ śākāyanyamṛṣiṃ papraccha |\nbhagavan kiṃ kāraṇaṃ saṃsāraḥ kathaṃ mokṣaḥ |\nkiṃ jīvaḥ kiṃ brahmeti ||',
      translations: {
        hi: 'ॐ राजा बृहद्रथ ने ऋषि शाकायन्य से पूछा — हे भगवन! संसार का कारण क्या है? मोक्ष कैसे होता है? जीव क्या है? ब्रह्म क्या है?',
        en: 'Om, King Brihadratha asked sage Shakayanya — O Lord! What is the cause of worldly existence? How does liberation happen? What is the individual soul? What is Brahman?'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'स होवाच — अहंकारकारणमेव संसारः।\nतन्निरोधो मोक्षः। जीव आत्मा। ब्रह्म परमात्मा।',
      transliteration: 'sa hovāca — ahaṃkārakāraṇameva saṃsāraḥ |\ntannirodho mokṣaḥ | jīva ātmā | brahma paramātmā ||',
      translations: {
        hi: 'उन्होंने कहा — अहंकार ही संसार का कारण है। उसका निरोध मोक्ष है। जीव आत्मा है। ब्रह्म परमात्मा है।',
        en: 'He said — egoism is the cause of worldly existence. Its cessation is liberation. The individual soul is the Self. Brahman is the Supreme Self.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'द्वे ब्रह्मणी वेदितव्ये — शब्दब्रह्म परं च यत्।\nशब्दब्रह्मणि निष्णातः परं ब्रह्माधिगच्छति॥',
      transliteration: 'dve brahmaṇī veditavye — śabdabrahma paraṃ ca yat |\nśabdabrahmaṇi niṣṇātaḥ paraṃ brahmādhigacchati ||',
      translations: {
        hi: 'दो ब्रह्म जानने योग्य हैं — शब्दब्रह्म और परब्रह्म। शब्दब्रह्म में निष्णात होकर परब्रह्म को प्राप्त करता है।',
        en: 'Two Brahmans are to be known — the Word-Brahman and the Supreme Brahman. Having mastered the Word-Brahman, one attains the Supreme Brahman.'
      }
    },
    { id: 'v4', order: 4, meter: 'श्लोक',
      sanskrit: 'अनेन ज्ञानेन योगेन वैराग्येण च शुद्धया।\nयतयः पश्यन्ति परमं पुरुषं दिव्यमव्ययम्॥',
      transliteration: 'anena jñānena yogena vairāgyeṇa ca śuddhayā |\nyatayaḥ paśyanti paramaṃ puruṣaṃ divyamavyayam ||',
      translations: {
        hi: 'इस ज्ञान से, योग से, वैराग्य से और शुद्धता से यति लोग परम पुरुष को देखते हैं — दिव्य और अव्यय।',
        en: 'By this knowledge, yoga, detachment, and purity, the ascetics see the Supreme Person — divine and imperishable.'
      }
    },
    { id: 'v5', order: 5, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीमैत्र्युपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīmaitryupaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री मैत्री उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Maitri Upanishad.'
      }
    }
  ]
};