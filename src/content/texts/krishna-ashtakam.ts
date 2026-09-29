import type { TextMeta } from './types';

export const krishnaAshtakam: TextMeta = {
  slug: 'krishna-ashtakam',
  title: { hi: 'कृष्णाष्टकम्', en: 'Krishna Ashtakam', sa: 'कृष्णाष्टकम्' },
  type: 'stotra',
  deity: 'krishna',
  language: 'sa',
  description: {
    hi: 'श्रीकृष्ण की स्तुति के आठ श्लोक — वसुदेव-देवकी नंदन, गोकुल वासी, यशोदा स्तन्यपायी की महिमा।',
    en: 'Eight verses praising Shri Krishna — son of Vasudeva and Devaki, dweller of Gokul, suckled by Yashoda.'
  },
  source: 'Traditional (public domain)', license: 'Public Domain', verseCount: 8,
  verses: [
    { id: 'v1', order: 1, meter: 'अष्टक',
      sanskrit: 'वसुदेवसुतं देवं कंसचाणूरमर्दनम्।\nदेवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम्॥',
      transliteration: 'vasudevasutaṃ devaṃ kaṃsacāṇūramardanam |\ndevakīparamānandaṃ kṛṣṇaṃ vande jagadgurum ||',
      translations: {
        hi: 'वसुदेव के पुत्र, कंस-चाणूर के मर्दन करने वाले, देवकी के परमानंद, जगद्गुरु कृष्ण को नमस्कार।',
        en: 'Son of Vasudeva, destroyer of Kamsa and Chanura, supreme joy of Devaki, Krishna, guru of the world — I bow to him.'
      }
    },
    { id: 'v2', order: 2, meter: 'अष्टक',
      sanskrit: 'अतसीपुष्पसंकाशं पीताम्बरधरं हरिम्।\nआरक्तपङ्कजोद्भासि नेत्रं वन्दे जगद्गुरुम्॥',
      transliteration: 'atasīpuṣpasaṃkāśaṃ pītāmbaradharaṃ harim |\nāraktapaṅkajodbhāsi netraṃ vande jagadgurum ||',
      translations: {
        hi: 'अलसी के फूल के समान वर्ण वाले, पीताम्बर धारी हरि, अरक्त कमल के समान नेत्रों वाले जगद्गुरु को नमस्कार।',
        en: 'Hari whose color is like the flax flower, wearing yellow garments, with eyes radiant like red lotuses — I bow to the guru of the world.'
      }
    },
    { id: 'v3', order: 3, meter: 'अष्टक',
      sanskrit: 'कुटिलालकसंयुक्तं पूर्णचन्द्रनिभाननम्।\nविलसत्कुण्डलधरं वन्दे कृष्णं जगद्गुरुम्॥',
      transliteration: 'kuṭilālakasaṃyuktaṃ pūrṇacandranibhānanam |\nvilasatkuṇḍaladharaṃ vande kṛṣṇaṃ jagadgurum ||',
      translations: {
        hi: 'कुटिल अलकों से युक्त, पूर्ण चंद्र के समान मुख वाले, चमकते कुंडल धारी कृष्ण को नमस्कार।',
        en: 'Adorned with curling locks, face like the full moon, wearing shining earrings — I bow to Krishna, guru of the world.'
      }
    },
    { id: 'v4', order: 4, meter: 'अष्टक',
      sanskrit: 'मन्दारगन्धसंयुक्तं चारुहासं मनोहरम्।\nमुरलीमधुरं वन्दे कृष्णं वन्दे जगद्गुरुम्॥',
      transliteration: 'mandāragandhasaṃyuktaṃ cāruhāsaṃ manoharam |\nmuralīmadhuraṃ vande kṛṣṇaṃ vande jagadgurum ||',
      translations: {
        hi: 'मंदार पुष्प की गंध से युक्त, सुंदर हास्य वाले, मनोहर, मुरली की मधुर ध्वनि वाले कृष्ण को नमस्कार।',
        en: 'Fragrant like the Mandara flower, with a beautiful smile, charming, sweet with the flute — I bow to Krishna, guru of the world.'
      }
    },
    { id: 'v5', order: 5, meter: 'अष्टक',
      sanskrit: 'गोपिकानां कुचद्वन्द्व कुङ्कुमाङ्कितवक्षसम्।\nगोपिकाभिर्जितं वन्दे कृष्णं वन्दे जगद्गुरुम्॥',
      transliteration: 'gopikānāṃ kucadvandva kuṅkumāṅkitavakṣasam |\ngopikābhirjitaṃ vande kṛṣṇaṃ vande jagadgurum ||',
      translations: {
        hi: 'गोपियों के कुच-द्वंद्व के कुंकुम से अंकित वक्ष वाले, गोपियों से जीते हुए कृष्ण को नमस्कार।',
        en: 'Whose chest is marked with the kumkum of the Gopis breasts, conquered by the Gopis — I bow to Krishna, guru of the world.'
      }
    },
    { id: 'v6', order: 6, meter: 'अष्टक',
      sanskrit: 'श्रीवत्साङ्कितवक्षं तं वनमालाविभूषितम्।\nगोपिकानां प्रियं वन्दे कृष्णं वन्दे जगद्गुरुम्॥',
      transliteration: 'śrīvatsāṅkitavakṣaṃ taṃ vanamālāvibhūṣitam |\ngopikānāṃ priyaṃ vande kṛṣṇaṃ vande jagadgurum ||',
      translations: {
        hi: 'श्रीवत्स से अंकित वक्ष वाले, वनमाला से विभूषित, गोपियों के प्रिय कृष्ण को नमस्कार।',
        en: 'Whose chest bears the Shrivatsa mark, adorned with a forest garland, dear to the Gopis — I bow to Krishna, guru of the world.'
      }
    },
    { id: 'v7', order: 7, meter: 'अष्टक',
      sanskrit: 'नवनीतं च चोरं तं गोपवेषधरं हरिम्।\nगोकुलानन्ददं वन्दे कृष्णं वन्दे जगद्गुरुम्॥',
      transliteration: 'navanītaṃ ca coraṃ taṃ gopaveṣadharaṃ harim |\ngokulānandadaṃ vande kṛṣṇaṃ vande jagadgurum ||',
      translations: {
        hi: 'नवनीत चोर, गोप वेषधारी हरि, गोकुल को आनंद देने वाले कृष्ण को नमस्कार।',
        en: 'The butter thief, Hari in the dress of a cowherd, giver of joy to Gokul — I bow to Krishna, guru of the world.'
      }
    },
    { id: 'v8', order: 8, meter: 'फलश्रुति',
      sanskrit: 'कृष्णाष्टकमिदं पुण्यं प्रातरुत्थाय यः पठेत्।\nस सर्वपापनिर्मुक्तो विष्णुलोकं स गच्छति॥',
      transliteration: 'kṛṣṇāṣṭakamidaṃ puṇyaṃ prātarutthāya yaḥ paṭhet |\nsa sarvapāpanirmukto viṣṇulokaṃ sa gacchati ||',
      translations: {
        hi: 'जो प्रातः उठकर यह पुण्यमय कृष्णाष्टक पढ़ता है, वह सब पापों से मुक्त होकर विष्णुलोक जाता है।',
        en: 'Whoever rises in the morning and recites this meritorious Krishna Ashtakam is freed from all sins and goes to the realm of Vishnu.'
      }
    }
  ]
};