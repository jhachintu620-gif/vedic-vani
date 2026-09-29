import type { TextMeta } from './types';

export const vishnuSukta: TextMeta = {
  slug: 'vishnu-sukta',
  title: { hi: 'विष्णु सूक्त', en: 'Vishnu Sukta', sa: 'विष्णुसूक्तम्' },
  type: 'veda',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'ऋग्वेद 1.154 — विष्णु के त्रिविक्रम (तीन पग) की स्तुति। विष्णु की परम महिमा का वैदिक वर्णन।',
    en: 'Rig Veda 1.154 — praise of Vishnu Trivikrama (three steps). Vedic description of Vishnu supreme glory.'
  },
  source: 'Rig Veda 1.154 (public domain)', license: 'Public Domain', verseCount: 6,
  verses: [
    { id: 'v1', order: 1, meter: 'सूक्त',
      sanskrit: 'विष्णोर्नु कं वीर्याणि प्र वोचं यः पार्थिवानि विममे रजांसि।\nयो अस्कभायदुत्तरं सधस्थं विचक्रमाणस्त्रेधोरुगायो॥',
      transliteration: 'viṣṇornu kaṃ vīryāṇi pra vocaṃ yaḥ pārthivāni vimame rajāṃsi |\nyo askabhāyaduttaraṃ sadhasthaṃ vicakramāṇastredhorugāyo ||',
      translations: {
        hi: 'अब मैं विष्णु के वीर्य (पराक्रम) की घोषणा करता हूँ — जिन्होंने पृथ्वी के राजों को नापा, जिन्होंने उत्तर सदन को स्थिर किया, और तीन पग में व्याप्त हुए।',
        en: 'Now I shall proclaim the heroic deeds of Vishnu — who measured the earthly regions, who fixed the higher abode, and strode three steps.'
      }
    },
    { id: 'v2', order: 2, meter: 'सूक्त',
      sanskrit: 'प्र तद्विष्णुः स्तवते वीर्येण मृगो न भीमः कुचरो गिरिष्ठाः।\nयस्योरुषु त्रिषु विक्रमणेष्वधिक्षियन्ति भुवनानि विश्वा॥',
      transliteration: 'pra tadviṣṇuḥ stavate vīryeṇa mṛgo na bhīmaḥ kucaro giriṣṭhāḥ |\nyasyoruṣu triṣu vikramaṇeṣvadhikṣiyanti bhuvānāni viśvā ||',
      translations: {
        hi: 'विष्णु वीर्य से स्तुत होते हैं — जैसे भीम, पर्वत में रहने वाला, कुचर मृग। जिनके तीन विशाल पगों में सब भुवन निवास करते हैं।',
        en: 'Vishnu is praised for his heroism, like a terrible beast dwelling in the mountains, wandering freely. In his three vast strides all worlds dwell.'
      }
    },
    { id: 'v3', order: 3, meter: 'सूक्त',
      sanskrit: 'तद्विष्णोः परमं पदं सदा पश्यन्ति सूरयः।\nदिवीव चक्षुराततम्॥',
      transliteration: 'tadviṣṇoḥ paramaṃ padaṃ sadā paśyanti sūrayaḥ |\ndivīva cakṣurātatam ||',
      translations: {
        hi: 'विष्णु का वह परम पद ज्ञानी सदा देखते हैं, जैसे आकाश में फैली दृष्टि।',
        en: 'The wise always see that supreme abode of Vishnu, like an eye stretched out in the sky.'
      }
    },
    { id: 'v4', order: 4, meter: 'सूक्त',
      sanskrit: 'तद्विप्रासो विपन्यवो जागृवांसः समिन्धते।\nविष्णोर्यत्परमं पदम्॥',
      transliteration: 'tadviprāso vipanyavo jāgṛvāṃsaḥ samindhate |\nviṣṇoryatparamaṃ padam ||',
      translations: {
        hi: 'विप्र (ज्ञानी), स्तुति करने वाले, जागरूक विष्णु के परम पद को प्रकाशित करते हैं।',
        en: 'The wise, the praisers, the vigilant — they kindle that supreme abode of Vishnu.'
      }
    },
    { id: 'v5', order: 5, meter: 'सूक्त',
      sanskrit: 'विष्णोः कर्माणि पश्यत यो यज्ञस्य धर्मणि कृणोति।\nयतो विश्वं प्रतिष्ठितम्॥',
      transliteration: 'viṣṇoḥ karmāṇi paśyata yo yajñasya dharmaṇi kṛṇoti |\nyato viśvaṃ pratiṣṭhitam ||',
      translations: {
        hi: 'विष्णु के कर्म देखो — जो यज्ञ के धर्म में करते हैं, जहाँ से विश्व प्रतिष्ठित है।',
        en: 'Behold the deeds of Vishnu — who acts according to the dharma of sacrifice, by whom the universe is established.'
      }
    },
    { id: 'phala', order: 6, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीविष्णुसूक्तं सम्पूर्णम्।',
      transliteration: 'iti śrīviṣṇusūktaṃ sampūrṇam |',
      translations: {
        hi: 'इस प्रकार श्री विष्णु सूक्त सम्पूर्ण हुआ।',
        en: 'Thus concludes the Shri Vishnu Sukta.'
      }
    }
  ]
};