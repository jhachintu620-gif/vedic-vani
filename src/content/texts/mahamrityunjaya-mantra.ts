import type { TextMeta } from './types';

export const mahaMrityunjaya: TextMeta = {
  slug: 'mahamrityunjaya-mantra',
  title: { hi: 'महामृत्युंजय मंत्र', en: 'Mahamrityunjaya Mantra', sa: 'महामृत्युञ्जयमन्त्रः' },
  type: 'veda',
  deity: 'shiva',
  language: 'sa',
  description: {
    hi: 'ऋग्वेद का महामृत्युंजय मंत्र — रुद्र (शिव) की स्तुति। मृत्यु, रोग और भय से मुक्ति के लिए पाठ किया जाता है।',
    en: 'Mahamrityunjaya Mantra from Rig Veda — praise of Rudra (Shiva). Recited for freedom from death, disease, and fear.'
  },
  source: 'Rig Veda 7.59.12 (public domain)', license: 'Public Domain', verseCount: 3,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥',
      transliteration: 'oṃ tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam |\nurvārukamiva bandhanānmṛtyormukṣīya māmṛtāt ||',
      translations: {
        hi: 'ॐ — हम त्र्यंबक (तीन नेत्रों वाले शिव) की पूजा करते हैं, जो सुगंधित और पुष्टि बढ़ाने वाले हैं। जैसे ककड़ी बेल से मुक्त होती है, वैसे ही हमें मृत्यु से और अमरता से मुक्त करें।',
        en: 'Om — We worship the three-eyed one (Shiva), fragrant and increasing nourishment. Like a cucumber freed from its vine, may we be liberated from death — and not from immortality.'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'मृत्युंजयाय रुद्राय नीलकण्ठाय शम्भवे।\nअमृतेशाय शर्वाय महादेवाय ते नमः॥',
      transliteration: 'mṛtyuñjayāya rudrāya nīlakaṇṭhāya śambhave |\namṛteśāya śarvāya mahādevāya te namaḥ ||',
      translations: {
        hi: 'मृत्युंजय, रुद्र, नीलकंठ, शंभु, अमृतेश, शर्व, महादेव — आपको नमस्कार।',
        en: 'To Mrityunjaya, Rudra, Nilakantha, Shambhu, Amritesh, Sharva, Mahadeva — salutations to you.'
      }
    },
    { id: 'phala', order: 3, meter: 'फलश्रुति',
      sanskrit: 'महामृत्युंजय मंत्रस्य जपेन मृत्युभयं नश्यति।\nसर्वरोगा विनश्यन्ति आयुर्वर्धति सर्वदा॥',
      transliteration: 'mahāmṛtyuñjaya mantrasya japena mṛtyubhayaṃ naśyati |\nsarvarogā vinaśyanti āyurvardhati sarvadā ||',
      translations: {
        hi: 'महामृत्युंजय मंत्र के जप से मृत्यु का भय नष्ट होता है। सब रोग नष्ट होते हैं, आयु सदा बढ़ती है।',
        en: 'By chanting the Mahamrityunjaya Mantra, the fear of death is destroyed. All diseases are destroyed, and lifespan always increases.'
      }
    }
  ]
};