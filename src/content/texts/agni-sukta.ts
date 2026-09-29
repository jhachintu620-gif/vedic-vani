import type { TextMeta } from './types';

export const agniSukta: TextMeta = {
  slug: 'agni-sukta',
  title: { hi: 'अग्नि सूक्त', en: 'Agni Sukta', sa: 'अग्निसूक्तम्' },
  type: 'veda',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'ऋग्वेद का प्रथम सूक्त — अग्नि देव की स्तुति। यज्ञ के पुरोहित, देवताओं के मुख, ऋत्विक्।',
    en: 'The first Sukta of Rig Veda — praise of Agni Deva. Priest of sacrifice, mouth of the gods, the invoker.'
  },
  source: 'Rig Veda 1.1 (public domain)', license: 'Public Domain', verseCount: 6,
  verses: [
    { id: 'v1', order: 1, meter: 'सूक्त',
      sanskrit: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्।\nहोतारं रत्नधातमम्॥',
      transliteration: 'agnimīḷe purohitaṃ yajñasya devamṛtvijam |\nhotāraṃ ratnadhātamam ||',
      translations: {
        hi: 'मैं अग्नि की स्तुति करता हूँ — यज्ञ के पुरोहित, देवता, ऋत्विक्, होता और रत्नों को देने वाले।',
        en: 'I praise Agni — the priest of the sacrifice, the divine invoker, the Hotar, the greatest bestower of treasures.'
      }
    },
    { id: 'v2', order: 2, meter: 'सूक्त',
      sanskrit: 'अग्निः पूर्वेभिरृषिभिरीड्यो नूतनैरुत।\nस देवाँ एह वक्षति॥',
      transliteration: 'agniḥ pūrvebhirṛṣibhirīḍyo nūtanairuta |\nsa devām̐ eha vakṣati ||',
      translations: {
        hi: 'अग्नि पूर्वकाल के ऋषियों और नए ऋषियों द्वारा स्तुति के योग्य है। वे यहाँ देवताओं को लाएँ।',
        en: 'Agni is worthy of praise by ancient sages and by new ones. May he bring the gods here.'
      }
    },
    { id: 'v3', order: 3, meter: 'सूक्त',
      sanskrit: 'अग्निना रयिमश्नवत् पुष्टं गोमन्तमश्विनम्।\nअग्निना वीर्यं महत्॥',
      transliteration: 'agninā rayimaśnavat puṣṭaṃ gomantam aśvinam |\nagninā vīryaṃ mahat ||',
      translations: {
        hi: 'अग्नि के द्वारा मनुष्य पुष्ट धन, गौ और अश्व प्राप्त करता है। अग्नि के द्वारा महावीर्य प्राप्त होता है।',
        en: 'Through Agni one obtains wealth, nourished with cows and horses. Through Agni one obtains great valor.'
      }
    },
    { id: 'v4', order: 4, meter: 'सूक्त',
      sanskrit: 'अग्ने यं यज्ञमध्वरं विश्वतः परिभूरसि।\nस इद्देवेषु गच्छति॥',
      transliteration: 'agne yaṃ yajñamadhvaraṃ viśvataḥ paribhūrasi |\nsa iddeveṣu gacchati ||',
      translations: {
        hi: 'हे अग्ने! जिस यज्ञ को तुम सब ओर से व्याप्त करते हो, वह देवताओं तक पहुँचता है।',
        en: 'O Agni! The sacrifice that you encompass from all sides reaches the gods.'
      }
    },
    { id: 'v5', order: 5, meter: 'सूक्त',
      sanskrit: 'अग्निर्होता कविक्रतुः सत्यश्चित्रश्रवस्तमः।\nदेवो देवेभिरा गमत्॥',
      transliteration: 'agnirhotā kavikratuḥ satyaścitraśravastamaḥ |\ndevo devebhirā gamat ||',
      translations: {
        hi: 'अग्नि होता, कविक्रतु, सत्य, चित्रश्रवस् हैं। वे देवता देवताओं के साथ आएँ।',
        en: 'Agni is the Hotar, of poet wisdom, true, of wonderful fame. May he come with the gods.'
      }
    },
    { id: 'v6', order: 6, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीअग्निसूक्तं सम्पूर्णम्।',
      transliteration: 'iti śrīagnisūktaṃ sampūrṇam |',
      translations: {
        hi: 'इस प्रकार श्री अग्नि सूक्त सम्पूर्ण हुआ।',
        en: 'Thus concludes the Shri Agni Sukta.'
      }
    }
  ]
};