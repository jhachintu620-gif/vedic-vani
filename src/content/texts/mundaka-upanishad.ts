import type { TextMeta } from './types';

export const mundakaUpanishad: TextMeta = {
  slug: 'mundaka-upanishad',
  title: { hi: 'मुण्डक उपनिषद्', en: 'Mundaka Upanishad', sa: 'मुण्डकोपनिषत्' },
  type: 'upanishad',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'अथर्ववेदीय मुण्डक उपनिषद् — परा और अपरा विद्या का विवेचन। सत्यमेव जयते का स्रोत।',
    en: 'Mundaka Upanishad of Atharva Veda — the distinction between higher and lower knowledge. Source of "Satyameva Jayate".'
  },
  source: 'Atharva Veda (public domain)', license: 'Public Domain', verseCount: 5,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ ब्रह्मा देवानां प्रथमः सम्बभूव विश्वस्य कर्ता भुवनस्य गोप्ता।\nस ब्रह्मविद्यां सर्वविद्याप्रतिष्ठामथर्वाय ज्येष्ठपुत्राय प्राह॥',
      transliteration: 'oṃ brahmā devānāṃ prathamaḥ sambabhūva viśvasya kartā bhuvanasya goptā |\nsa brahmavidyāṃ sarvavidyāpratiṣṭhāmatharvāya jyeṣṭhaputrāya prāha ||',
      translations: {
        hi: 'ॐ — ब्रह्मा देवताओं में प्रथम उत्पन्न हुए, विश्व के कर्ता, भुवन के गोप्ता। उन्होंने ब्रह्मविद्या, जो सब विद्याओं की प्रतिष्ठा है, अथर्वा ज्येष्ठ पुत्र को कही।',
        en: 'Om — Brahma, first among the gods, was born; creator of the universe, protector of the world. He told the knowledge of Brahman, the foundation of all knowledge, to his eldest son Atharva.'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'द्वे विद्ये वेदितव्ये इति ह स्म यद्ब्रह्मविदो वदन्ति परा चैवापरा च।\nतत्रापरा ऋग्वेदो यजुर्वेदः सामवेदो ऽथर्ववेदः शिक्षा कल्पो व्याकरणं छन्दो ज्योतिषमिति।\nअथ परा यया तदक्षरमधिगम्यते॥',
      transliteration: 'dve vidye veditavye iti ha sma yadbrahmavido vadanti parā caivāparā ca |\ntatrāparā ṛgvedo yajurvedaḥ sāmavedo atharvavedaḥ śikṣā kalpo vyākaraṇaṃ chando jyotiṣamiti |\natha parā yayā tadakṣaramadhigamyate ||',
      translations: {
        hi: 'दो विद्याएँ जानने योग्य हैं — परा और अपरा। अपरा — ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद, शिक्षा, कल्प, व्याकरण, छंद, ज्योतिष। परा — जिससे वह अक्षर (अविनाशी) प्राप्त होता है।',
        en: 'Two kinds of knowledge are to be known — the higher and the lower. The lower: Rig Veda, Yajur Veda, Sama Veda, Atharva Veda, phonetics, ritual, grammar, meter, astronomy. The higher: that by which the Imperishable is attained.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'यथोर्णनाभिः सृजते गृह्णते च यथा पृथिव्यामोषधयः सम्भवन्ति।\nयथा सतः पुरुषात् केशलोमानि तथाक्षरात् सम्भवतीह विश्वम्॥',
      transliteration: 'yathorṇanābhiḥ sṛjate gṛhṇate ca yathā pṛthivyāmoṣadhayaḥ sambhavanti |\nyathā sataḥ puruṣāt keśalomāni tathākṣarāt sambhavatīha viśvam ||',
      translations: {
        hi: 'जैसे मकड़ी जाल रचती और ग्रहण करती है, जैसे पृथ्वी पर ओषधियाँ उत्पन्न होती हैं, जैसे सत् पुरुष से केश-लोम उत्पन्न होते हैं — वैसे ही अक्षर से यह विश्व उत्पन्न होता है।',
        en: 'As a spider creates and withdraws its web, as plants grow on the earth, as hair grows on a living person — so does the universe emerge from the Imperishable.'
      }
    },
    { id: 'v4', order: 4, meter: 'श्लोक',
      sanskrit: 'सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।\nयेनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत् सत्यस्य परमं निधानम्॥',
      transliteration: 'satyameva jayate nānṛtaṃ satyena panthā vitato devayānaḥ |\nyenākramantyṛṣayo hyāptakāmā yatra tat satyasya paramaṃ nidhānam ||',
      translations: {
        hi: 'सत्य की ही जय होती है, असत्य की नहीं। सत्य से ही देवयान मार्ग फैला है, जिससे आप्तकाम ऋषि गमन करते हैं, जहाँ सत्य का परम निधान है।',
        en: 'Truth alone triumphs, not falsehood. By truth the divine path is spread out, by which the sages, whose desires are fulfilled, ascend to where the supreme treasure of truth is.'
      }
    },
    { id: 'phala', order: 5, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीमुण्डकोपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīmuṇḍakopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री मुण्डक उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Mundaka Upanishad.'
      }
    }
  ]
};