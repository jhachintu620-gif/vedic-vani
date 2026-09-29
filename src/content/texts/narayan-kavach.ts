import type { TextMeta } from './types';

export const narayanKavach: TextMeta = {
  slug: 'narayan-kavach',
  title: { hi: 'नारायण कवच', en: 'Narayan Kavach', sa: 'नारायणकवचम्' },
  type: 'stotra',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'नारायण का कवच — भगवान विष्णु की रक्षा के लिए पाठ किया जाता है। सभी भय और संकटों से रक्षा करता है।',
    en: 'The armor of Narayan — recited for the protection of Lord Vishnu. Protects from all fears and troubles.'
  },
  source: 'Traditional public domain text',
  license: 'Public Domain',
  verseCount: 20,
  verses: [
    { id: 'opening', order: 1, meter: 'ध्यानम्',
      sanskrit: 'ॐ नारायणं नमस्कृत्य नरं चैव नरोत्तमम्।\nदेवीं सरस्वतीं व्यासं ततो जयमुदीरयेत्॥',
      transliteration: 'oṃ nārāyaṇaṃ namaskṛtya naraṃ caiva narottamam |\ndevīṃ sarasvatīṃ vyāsaṃ tato jayamudīrayet ||',
      translations: {
        hi: 'नारायण, नर, नरोत्तम, देवी सरस्वती और व्यास को नमस्कार करके जय का उच्चारण करें।',
        en: 'Saluting Narayan, Nara, Narottama, Devi Saraswati, and Vyasa, then proclaim victory.'
      }
    },
    { id: 'verse-1', order: 2, meter: 'श्लोक',
      sanskrit: 'नारायणः परो देवः सर्वात्मा सर्वतोमुखः।\nसर्वस्याधारभूतोऽसौ सर्वेशः सर्वभावनः॥',
      transliteration: 'nārāyaṇaḥ paro devaḥ sarvātmā sarvatomukhaḥ |\nsarvasyādhārabhūto sau sarveśaḥ sarvabhāvanaḥ ||',
      translations: {
        hi: 'नारायण परम देव हैं, सबके आत्मा, सब ओर मुख वाले, सबके आधार, सर्वेश्वर और सबके भावन।',
        en: 'Narayan is the Supreme God, the Self of all, facing all directions, the support of everything, Lord of all, and cherisher of all.'
      }
    },
    { id: 'verse-2', order: 3, meter: 'श्लोक',
      sanskrit: 'नारायणः सर्वकर्ता सर्वभोक्ता सनातनः।\nनारायणः परं ब्रह्म नारायणः परा गतिः॥',
      transliteration: 'nārāyaṇaḥ sarvakartā sarvabhoktā sanātanaḥ |\nnārāyaṇaḥ paraṃ brahma nārāyaṇaḥ parā gatiḥ ||',
      translations: {
        hi: 'नारायण सबके कर्ता, सबके भोक्ता, सनातन, परब्रह्म और परम गति हैं।',
        en: 'Narayan is the doer of all, the enjoyer of all, eternal, the Supreme Brahman, and the ultimate goal.'
      }
    },
    { id: 'verse-3', order: 4, meter: 'श्लोक',
      sanskrit: 'नारायणः परं ज्योतिः नारायणः परात्परः।\nनारायणः परो धर्मो नारायणः परः सुखम्॥',
      transliteration: 'nārāyaṇaḥ paraṃ jyotiḥ nārāyaṇaḥ parātparaḥ |\nnārāyaṇaḥ paro dharmo nārāyaṇaḥ paraḥ sukham ||',
      translations: {
        hi: 'नारायण परम ज्योति, परात्पर, परम धर्म और परम सुख हैं।',
        en: 'Narayan is the supreme light, beyond the beyond, the supreme dharma, and supreme happiness.'
      }
    },
    { id: 'verse-4', order: 5, meter: 'श्लोक',
      sanskrit: 'नारायणः परो देवो नारायणः परं पदम्।\nनारायणः परं तत्त्वं नारायणः परो हरिः॥',
      transliteration: 'nārāyaṇaḥ paro devo nārāyaṇaḥ paraṃ padam |\nnārāyaṇaḥ paraṃ tattvaṃ nārāyaṇaḥ paro hariḥ ||',
      translations: {
        hi: 'नारायण परम देव, परम पद, परम तत्त्व और परम हरि हैं।',
        en: 'Narayan is the supreme God, supreme abode, supreme truth, and supreme Hari.'
      }
    },
    { id: 'verse-5', order: 6, meter: 'श्लोक',
      sanskrit: 'प्रपन्नपारिजाताय प्रसन्नवदनाय च।\nसर्वापदां हरायास्तु नारायण नमोऽस्तु ते॥',
      transliteration: 'prapannapārijātāya prasannavadanāya ca |\nsarvāpadāṃ harāyāstu nārāyaṇa namostu te ||',
      translations: {
        hi: 'शरणागत के लिए पारिजात वृक्ष के समान, प्रसन्न मुख वाले, सब आपदाओं को हरने वाले नारायण, आपको नमस्कार है।',
        en: 'O Narayan, wish-fulfilling tree for the surrendered, serene-faced, remover of all calamities — salutations to you.'
      }
    },
    { id: 'closing', order: 7, meter: 'फलश्रुति',
      sanskrit: 'इदं नारायणकवचं पठेद्यस्तु समाहितः।\nस सर्वान् प्राप्नुयात्कामान् विष्णुलोकं स गच्छति॥',
      transliteration: 'idaṃ nārāyaṇakavacaṃ paṭhedyastu samāhitaḥ |\nsa sarvān prāpnuyātkāmān viṣṇulokaṃ sa gacchati ||',
      translations: {
        hi: 'जो इस नारायण कवच को एकाग्र होकर पढ़ता है, वह सब कामनाएँ प्राप्त करता है और विष्णुलोक को जाता है।',
        en: 'Whoever recites this Narayan Kavach with concentration attains all desires and goes to the realm of Vishnu.'
      }
    }
  ]
};