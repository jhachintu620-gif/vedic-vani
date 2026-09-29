import type { TextMeta } from './types';

export const purushaSuktam: TextMeta = {
  slug: 'purusha-suktam',
  title: { hi: 'पुरुष सूक्तम्', en: 'Purusha Suktam', sa: 'पुरुषसूक्तम्' },
  type: 'stotra',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'ऋग्वेदीय पुरुष सूक्त — विराट पुरुष (नारायण) से सृष्टि की उत्पत्ति का वर्णन। वैदिक परंपरा का सर्वोच्च सूक्त।',
    en: 'Purusha Suktam from Rig Veda — describing the creation from the Cosmic Person (Narayan). The highest hymn of Vedic tradition.'
  },
  source: 'Rig Veda 10.90 (public domain)', license: 'Public Domain', verseCount: 8,
  verses: [
    { id: 'verse-1', order: 1, meter: 'सूक्त',
      sanskrit: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात्।\nस भूमिं विश्वतो वृत्वा अत्यतिष्ठद्दशाङ्गुलम्॥',
      transliteration: 'sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt |\nsa bhūmiṃ viśvato vṛtvā atyatiṣṭhaddaśāṅgulam ||',
      translations: {
        hi: 'पुरुष के सहस्र सिर, सहस्र नेत्र और सहस्र चरण हैं। वह पृथ्वी को चारों ओर से ढककर दस अंगुल अधिक रहता है।',
        en: 'The Purusha has a thousand heads, a thousand eyes, a thousand feet. Encompassing the earth on all sides, he transcends it by ten fingers.'
      }
    },
    { id: 'verse-2', order: 2, meter: 'सूक्त',
      sanskrit: 'पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम्।\nउतामृतत्वस्येशानो यदन्नेनातिरोहति॥',
      transliteration: 'puruṣa evedaṃ sarvaṃ yadbhūtaṃ yacca bhavyam |\nutāmṛtatvasyeśāno yadannenātirohati ||',
      translations: {
        hi: 'पुरुष ही यह सब है — जो भूत है और जो भविष्य है। वह अमरत्व का ईश्वर है, जो अन्न से आगे बढ़ता है।',
        en: 'The Purusha alone is all this — whatever has been and whatever will be. He is the Lord of immortality, who transcends through food.'
      }
    },
    { id: 'verse-3', order: 3, meter: 'सूक्त',
      sanskrit: 'एतावानस्य महिमा अतो ज्यायाँश्च पूरुषः।\nपादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि॥',
      transliteration: 'etāvānasya mahimā ato jyāyāṃśca pūruṣaḥ |\npādo asya viśvā bhūtāni tripādasya amṛtaṃ divi ||',
      translations: {
        hi: 'इतनी उसकी महिमा है, और भी पुरुष इससे बड़ा है। उसका एक चरण सब भूत हैं, तीन चरण स्वर्ग में अमृत हैं।',
        en: 'Such is his glory, and the Purusha is even greater than this. One quarter of him is all beings; three quarters are immortal in heaven.'
      }
    },
    { id: 'verse-4', order: 4, meter: 'सूक्त',
      sanskrit: 'त्रिपादूर्ध्व उदैत्पुरुषः पादोऽस्येहाभवत्पुनः।\nततो विष्वङ्व्यक्रामत्साशनानशने अभि॥',
      transliteration: 'tripādūrdhva udaitpuruṣaḥ pādo asyehābhavatpunaḥ |\ntato viṣvaṅvyakrāmatsāśanānaśane abhi ||',
      translations: {
        hi: 'पुरुष तीन चरणों से ऊपर उठ गया, एक चरण यहाँ फिर प्रकट हुआ। तब वह सब ओर चला, खाने और न खाने वाले सब पर।',
        en: 'With three quarters the Purusha rose above; one quarter remained here again. Then he spread in all directions, over those who eat and those who do not.'
      }
    },
    { id: 'verse-5', order: 5, meter: 'सूक्त',
      sanskrit: 'तस्माद्विराडजायत विराजो अधि पूरुषः।\nस जातो अत्यरिच्यत पश्चाद्भूमिमथो पुरः॥',
      transliteration: 'tasmādvirāḍajāyata virājo adhi pūruṣaḥ |\nsa jāto atyaricyata paścādbhūmimatho puraḥ ||',
      translations: {
        hi: 'उससे विराट् उत्पन्न हुआ, और विराट् से पुरुष। वह जन्म लेकर भूमि के पीछे और आगे फैल गया।',
        en: 'From him Virat was born, and from Virat the Purusha. Being born, he spread beyond the earth behind and before.'
      }
    },
    { id: 'verse-6', order: 6, meter: 'सूक्त',
      sanskrit: 'यत्पुरुषेण हविषा देवा यज्ञमतन्वत।\nवसन्तो अस्यासीदाज्यं ग्रीष्म इध्मः शरद्धविः॥',
      transliteration: 'yatpuruṣeṇa haviṣā devā yajñamatanvata |\nvasanto asyāsīdājyaṃ grīṣma idhmaḥ śaraddhaviḥ ||',
      translations: {
        hi: 'जब देवों ने पुरुष को हवि बनाकर यज्ञ किया, तब वसंत उसका घृत था, ग्रीष्म इध्म और शरद हवि थी।',
        en: 'When the gods performed a sacrifice with the Purusha as offering, spring was its ghee, summer its fuel, and autumn its oblation.'
      }
    },
    { id: 'verse-7', order: 7, meter: 'सूक्त',
      sanskrit: 'तं यज्ञं बर्हिषि प्रौक्षन् पुरुषं जातमग्रतः।\nतेन देवा अयजन्त साध्या ऋषयश्च ये॥',
      transliteration: 'taṃ yajñaṃ barhiṣi praukṣan puruṣaṃ jātamagrataḥ |\ntena devā ayajanta sādhyā ṛṣayaśca ye ||',
      translations: {
        hi: 'उस यज्ञ को कुशा पर सींचा, आदि में जन्मे पुरुष को। उससे देव, साध्य और ऋषि यज्ञ करते हैं।',
        en: 'They sprinkled that sacrifice on the sacred grass, the Purusha born at the beginning. With it the gods, Sadhyas, and sages performed sacrifice.'
      }
    },
    { id: 'verse-8', order: 8, meter: 'सूक्त',
      sanskrit: 'तस्माद्यज्ञात्सर्वहुत ऋचः सामानि जज्ञिरे।\nछन्दांसि जज्ञिरे तस्माद्यजुस्तस्मादजायत॥',
      transliteration: 'tasmādyajñātsarvahuta ṛcaḥ sāmāni jajñire |\nchandāṃsi jajñire tasmādyajustasmādajāyata ||',
      translations: {
        hi: 'उस सर्वहुत यज्ञ से ऋचाएँ और साम उत्पन्न हुए। उससे छंद उत्पन्न हुए, उससे यजु उत्पन्न हुआ।',
        en: 'From that all-offering sacrifice, the Rig verses and Sama hymns were born. From it the meters were born, from it the Yajur was born.'
      }
    }
  ]
};