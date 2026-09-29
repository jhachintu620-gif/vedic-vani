import type { TextMeta } from './types';

export const akshiUpanishad: TextMeta = {
  slug: 'akshi-upanishad',
  title: { hi: 'अक्षि उपनिषद्', en: 'Akshi Upanishad', sa: 'अक्ष्युपनिषत्' },
  type: 'upanishad',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'सामवेदीय अक्षि उपनिषद् — आँख (अक्षि) के रहस्य से ब्रह्मज्ञान।',
    en: 'Akshi Upanishad of Sama Veda — Brahman-knowledge through the mystery of the eye.'
  },
  source: 'Sama Veda (public domain)',
  license: 'Public Domain',
  verseCount: 4,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ अक्षिणी हि द्वे ब्रह्मणः। दक्षिणं भर्गः सवितुः।\nवामं वरेण्यं देवस्य। तत् त्वं विद्धि सनातनम्॥१॥',
      transliteration: 'oṃ akṣiṇī hi dve brahmaṇaḥ | dakṣiṇaṃ bhargaḥ savituḥ |\nvāmaṃ vareṇyaṃ devasya | tat tvaṃ viddhi sanātanam ||1||',
      translations: {
        hi: 'ॐ दो आँखें ब्रह्म की हैं। दाहिनी सविता का भर्ग, बाईं देव की वरेण्या। उसे सनातन जानो।',
        en: 'Om, two eyes belong to Brahman. The right is the radiance of Savita; the left is the excellent vision of the god. Know that as eternal.'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'चक्षुषश्चक्षुः तत् प्रोक्तं। श्रोत्रस्य श्रोत्रं तत्।\nमनसो मनः तत्। प्राणस्य प्राणः तत्। ब्रह्मैव तत्॥२॥',
      transliteration: 'cakṣuṣaścakṣuḥ tat proktaṃ | śrotrasya śrotraṃ tat |\nmanaso manaḥ tat | prāṇasya prāṇaḥ tat | brahmaiva tat ||2||',
      translations: {
        hi: 'वह चक्षु का चक्षु, श्रोत्र का श्रोत्र, मन का मन, प्राण का प्राण — वह ब्रह्म ही है।',
        en: 'That is the eye of the eye, the ear of the ear, the mind of the mind, the breath of the breath — that is Brahman.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'य एवं वेद चक्षुर्ब्रह्म। स सर्वं वेद। स ब्रह्म भवति।\nन तस्य पुनर् जन्म भवति॥३॥',
      transliteration: 'ya evaṃ veda cakṣurbrahma | sa sarvaṃ veda | sa brahma bhavati |\nna tasya punar janma bhavati ||3||',
      translations: {
        hi: 'जो इस प्रकार चक्षु को ब्रह्म जानता है, वह सब जानता है, ब्रह्म बनता है, फिर जन्म नहीं लेता।',
        en: 'Whoever knows the eye as Brahman knows all, becomes Brahman, is not born again.'
      }
    },
    { id: 'v4', order: 4, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीअक्ष्युपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīakṣyupaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री अक्षि उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Akshi Upanishad.'
      }
    }
  ]
};