import type { KarmkandRitual } from './types';

export const preWeddingRituals: KarmkandRitual[] = [
  {
    slug: 'siddhant',
    title: { hi: 'सिद्धान्त', en: 'Siddhant' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 1,
    shortDesc: {
      hi: 'विवाह से पूर्व वर-वधू के कुल और गोत्र की जाँच — मैथिल परंपरा का अनिवार्य प्रथम चरण।',
      en: 'Pre-marriage verification of lineage and gotra of groom and bride — the mandatory first step in Maithil tradition.'
    },
    longDesc: {
      hi: 'मिथिला में विवाह से पूर्व पंजीकार (रजिस्ट्रार) के पास जाकर वर और वधू के वंशावली अभिलेखों की जाँच कराई जाती है। यह जाँच सात पीढ़ियों (पितृ पक्ष) और पाँच पीढ़ियों (मातृ पक्ष) तक की जाती है ताकि रक्त-संबंध में विवाह न हो। सिद्धांत पत्र तैयार होने के बाद ही विवाह की तिथि तय होती है।',
      en: 'In Mithila, before marriage, the genealogical records of the groom and bride are verified with the Panjikar (registrar). Verification spans seven generations on the paternal side and five on the maternal side to prevent consanguineous marriage. Only after the Siddhant Patra is prepared is the wedding date fixed.'
    },
    materials: [
      { hi: 'ताड़पत्र या कागज़, पान-सुपारी, हल्दी, दूर्वा, अक्षत', en: 'Palm leaf or paper, betel, areca nut, turmeric, durva, unbroken rice' }
    ],
    steps: [
      { number: 1, title: { hi: 'निमंत्रण', en: 'Invitation' }, description: { hi: 'दोनों पक्ष के लोग सभा स्थल पर एकत्र होते हैं।', en: 'Both families gather at the designated venue.' } },
      { number: 2, title: { hi: 'वंशावली पाठ', en: 'Lineage Reading' }, description: { hi: 'पंजीकार पिटारी (पंजी) से दोनों कुलों की वंशावली पढ़ता है।', en: 'The Panjikar reads both lineages from the genealogical register.' } },
      { number: 3, title: { hi: 'मिलान', en: 'Matching' }, description: { hi: 'सात पीढ़ी पितृ पक्ष और पाँच पीढ़ी मातृ पक्ष का मिलान किया जाता है।', en: 'Seven generations on the paternal side and five on the maternal side are matched.' } },
      { number: 4, title: { hi: 'सिद्धांत पत्र लेखन', en: 'Siddhant Patra Writing' }, description: { hi: 'सहमति होने पर ताड़पत्र पर विवाह की सहमति लिखी जाती है — इसे सिद्धांत पत्र कहते हैं।', en: 'Upon agreement, the consent is written on a palm leaf — this is the Siddhant Patra.' } },
      { number: 5, title: { hi: 'सिद्धांत पत्र सुरक्षा', en: 'Preservation' }, description: { hi: 'वधू पक्ष इसे कुलदेवी के पास विवाह दिवस तक सुरक्षित रखता है।', en: 'The bride family keeps it with the Kuldevi until the wedding day.' } }
    ],
    mantras: [
      {
        id: 'mangalacharan',
        sanskrit: 'ॐ शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम्।\nप्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये॥',
        transliteration: 'oṃ śuklāmbaradharaṃ viṣṇuṃ śaśivarṇaṃ caturbhujam |\nprasannavadanaṃ dhyāyet sarvavighnopaśāntaye ||',
        meaning: {
          hi: 'श्वेत वस्त्रधारी, चंद्रवर्ण, चतुर्भुज, प्रसन्न मुख विष्णु का ध्यान सब विघ्नों की शांति के लिए।',
          en: 'Meditation on Vishnu in white garments, moon-complexioned, four-armed, and serene — for removal of all obstacles.'
        },
        when: {
          hi: 'पंजीकार द्वारा विवाह की सहमति की घोषणा से पूर्व।',
          en: 'Recited by the registrar before declaring consent.'
        }
      }
    ],
    significance: {
      hi: 'यह एक सामाजिक-धार्मिक प्रक्रिया है जो रक्त-संबंधी विवाह को रोकती है और वैदिक आदर्श "सप्तमे पुरुषे गच्छेत्" की रक्षा करती है।',
      en: 'This socio-religious process prevents consanguineous marriage and protects the Vedic ideal of "saptame purushe gacchet".'
    },
    duration: {
      hi: 'विवाह से सप्ताह या महीने पूर्व',
      en: 'Weeks or months before the wedding'
    }
  },
  {
    slug: 'aam-mahu-vivah',
    title: { hi: 'आम-महुआ विवाह', en: 'Aam-Mahu Vivah' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'pre-wedding',
    order: 2,
    shortDesc: {
      hi: 'वधू गाँव में आम और महुआ वृक्षों का प्रतीकात्मक विवाह — वर-बारात आगमन से पूर्व।',
      en: 'Symbolic marriage of mango and mahua trees in the bride village — before the groom procession arrives.'
    },
    longDesc: {
      hi: 'वर-बारात के आगमन से पूर्व वधू पक्ष के लोग आम के पेड़ (पुरुष तत्त्व) और महुआ के पेड़ (स्त्री तत्त्व) का प्रतीकात्मक विवाह कराते हैं। यह अनुष्ठान नव-विवाहित जोड़े के लिए मंगल कामना और वृक्षों से आशीर्वाद की परंपरा है।',
      en: 'Before the groom procession arrives, the bride family performs a symbolic marriage of a mango tree (male element) with a mahua tree (female element). This ritual invokes auspiciousness for the new couple and seeks blessings from the trees.'
    },
    steps: [
      { number: 1, title: { hi: 'वृक्ष चयन', en: 'Tree Selection' }, description: { hi: 'आम और महुआ के वृक्ष चुने जाते हैं।', en: 'Mango and mahua trees are selected.' } },
      { number: 2, title: { hi: 'विवाह विधि', en: 'Wedding Rite' }, description: { hi: 'पुरोहित दोनों वृक्षों का विधिवत विवाह कराते हैं।', en: 'The priest conducts the formal marriage of the two trees.' } },
      { number: 3, title: { hi: 'आशीर्वाद', en: 'Blessing' }, description: { hi: 'नव दंपत्ति को वृक्षों से आशीर्वाद मिलने की मान्यता है।', en: 'The new couple is believed to receive blessings from the trees.' } }
    ],
    mantras: [
      {
        id: 'vriksha-vivah',
        sanskrit: 'ॐ वृक्षं वृक्षं समारभ्य मंगलं कुरु सर्वदा।\nसौभाग्यं देहि मे नित्यं पुत्रपौत्रप्रवर्धनम्॥',
        transliteration: 'oṃ vṛkṣaṃ vṛkṣaṃ samārabhya maṅgalaṃ kuru sarvadā |\nsaubhāgyaṃ dehi me nityaṃ putrapautrapravardhanam ||',
        meaning: {
          hi: 'हे वृक्ष! सदा मंगल करो, नित्य सौभाग्य दो, पुत्र-पौत्रों की वृद्धि करो।',
          en: 'O tree! Always grant auspiciousness, always bestow fortune, increase sons and grandsons.'
        },
        when: {
          hi: 'वृक्षों के विवाह कर्म के समय।',
          en: 'Recited during the tree marriage ritual.'
        }
      }
    ],
    significance: {
      hi: 'प्रकृति और मानव का संबंध, तथा विवाह को एक सार्वभौमिक मंगल कार्य के रूप में स्थापित करना।',
      en: 'Establishes the bond between nature and humanity, and the universal auspiciousness of marriage.'
    }
  },
  {
    slug: 'matrika-puja',
    title: { hi: 'मातृका पूजन', en: 'Matrika Puja' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'pre-wedding',
    order: 3,
    shortDesc: {
      hi: 'सोलह मातृकाओं का पूजन — मैथिल विवाह की पूर्णतः वैदिक परंपरा।',
      en: 'Worship of sixteen Matrikas — the wholly Vedic tradition of Maithil marriage.'
    },
    longDesc: {
      hi: 'विवाह से पूर्व वधू सोलह मातृकाओं (गौरी, पद्मा, शची, मेधा, सावित्री, विजया, जया, देवसेना, स्वधा, स्वाहा, शांति, पुष्टि, धृति, तुष्टि, कुलदेवी, दीप्ति) का विधिवत पूजन करती है। यह अनुष्ठान पूर्ण रूप से वैदिक माना जाता है और वधू के लिए अनिवार्य है।',
      en: 'Before the wedding, the bride worships sixteen Matrikas (Gauri, Padma, Shachi, Medha, Savitri, Vijaya, Jaya, Devasena, Svadha, Svaha, Shanti, Pushti, Dhriti, Tushti, Kuldevi, Dipti). This is considered wholly Vedic and is obligatory for the bride.'
    },
    materials: [
      { hi: 'षोडश मातृकाओं की मूर्तियाँ/चित्र, फूल, अक्षत, कुमकुम, धूप, दीप', en: 'Idols/images of 16 Matrikas, flowers, unbroken rice, kumkum, incense, lamp' }
    ],
    steps: [
      { number: 1, title: { hi: 'षोडश मातृका स्थापन', en: 'Installation of 16 Matrikas' }, description: { hi: 'सोलह मातृकाओं की स्थापना की जाती है।', en: 'The sixteen Matrikas are installed.' } },
      { number: 2, title: { hi: 'षोडशोपचार पूजन', en: 'Sixteen Offerings' }, description: { hi: 'आवाहन, आसन, पाद्य, अर्घ्य, स्नान आदि सोलह उपचार।', en: 'Invocation, seat, water for feet, arghya, bath — sixteen offerings.' } },
      { number: 3, title: { hi: 'कुलदेवी पूजन', en: 'Kuldevi Worship' }, description: { hi: 'विशेष रूप से कुलदेवी का पूजन।', en: 'Special worship of the family goddess.' } },
      { number: 4, title: { hi: 'आशीर्वाद', en: 'Blessings' }, description: { hi: 'वधू सब मातृकाओं से आशीर्वाद प्राप्त करती है।', en: 'The bride receives blessings from all Matrikas.' } }
    ],
    mantras: [
      {
        id: 'matrika-avahan',
        sanskrit: 'ॐ गौर्यै नमः, पद्मायै नमः, शच्यै नमः, मेधायै नमः,\nसावित्र्यै नमः, विजयायै नमः, जयायै नमः, देवसेनायै नमः,\nस्वधायै नमः, स्वाहायै नमः, शान्त्यै नमः, पुष्ट्यै नमः,\nधृत्यै नमः, तुष्ट्यै नमः, कुलदेव्यै नमः, दीप्त्यै नमः॥',
        transliteration: 'oṃ gauryai namaḥ, padmāyai namaḥ, śacyai namaḥ, medhāyai namaḥ,\nsāvitryai namaḥ, vijayāyai namaḥ, jayāyai namaḥ, devasenāyai namaḥ,\nsvadhāyai namaḥ, svāhāyai namaḥ, śāntyai namaḥ, puṣṭyai namaḥ,\ndhṛtyai namaḥ, tuṣṭyai namaḥ, kuladevyai namaḥ, dīptyai namaḥ ||',
        meaning: {
          hi: 'गौरी, पद्मा, शची, मेधा, सावित्री, विजया, जया, देवसेना, स्वधा, स्वाहा, शांति, पुष्टि, धृति, तुष्टि, कुलदेवी और दीप्ति — इन सोलह मातृकाओं को नमस्कार।',
          en: 'Salutations to the sixteen Matrikas: Gauri, Padma, Shachi, Medha, Savitri, Vijaya, Jaya, Devasena, Svadha, Svaha, Shanti, Pushti, Dhriti, Tushti, Kuldevi, and Dipti.'
        },
        when: {
          hi: 'मातृका पूजन के आरंभ में आवाहन मंत्र।',
          en: 'Invocation mantra at the start of Matrika Puja.'
        }
      }
    ],
    significance: {
      hi: 'वधू को मातृ-शक्ति का आशीर्वाद और गृहस्थ जीवन की शक्ति प्राप्त होती है।',
      en: 'The bride receives the blessing of Mother-power and the strength for household life.'
    }
  },
  {
    slug: 'lahachu',
    title: { hi: 'लहचू', en: 'Lahachu' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'pre-wedding',
    order: 4,
    shortDesc: {
      hi: 'वधू की बाईं कनिष्ठा उँगली से रक्त लेकर कपास में रखना — वर के भोजन में गुप्त रूप से देने की परंपरा।',
      en: 'Blood drawn from the bride\'s left little finger onto cotton — later served secretly in the groom\'s meal.'
    },
    longDesc: {
      hi: 'नाई वधू की बाईं कनिष्ठा उँगली को हल्का चीरता है और कुछ बूँदें रक्त की कपास पर एकत्र करता है। मान्यता है कि इस कपास को विवाह के बाद वर के भोजन में गुप्त रूप से मिलाया जाता है, जिससे वर में वधू के प्रति प्रेम उत्पन्न होता है।',
      en: 'The barber lightly pricks the little finger of the bride\'s left hand and collects a few drops of blood on cotton. It is believed that after the wedding, this cotton is secretly mixed into the groom\'s meal, generating love for the bride.'
    },
    steps: [
      { number: 1, title: { hi: 'नाई द्वारा उँगली चीरना', en: 'Finger Prick' }, description: { hi: 'नाई वधू की बाईं कनिष्ठा उँगली को चीरता है।', en: 'The barber pricks the bride\'s left little finger.' } },
      { number: 2, title: { hi: 'रक्त संग्रह', en: 'Blood Collection' }, description: { hi: 'कुछ बूँदें कपास पर एकत्र की जाती हैं।', en: 'A few drops are collected on cotton.' } },
      { number: 3, title: { hi: 'कपास सुरक्षित रखना', en: 'Cotton Storage' }, description: { hi: 'कपास विवाह तक सुरक्षित रखी जाती है।', en: 'The cotton is preserved until the wedding.' } }
    ],
    mantras: [],
    significance: {
      hi: 'यह एक लोक-परंपरा है जो दांपत्य प्रेम और आकर्षण की कामना प्रकट करती है।',
      en: 'A folk tradition expressing the wish for marital love and attraction.'
    }
  },
  {
    slug: 'otangar-nana-yogin',
    title: { hi: 'ओतंगर और नाना योगिन', en: 'Otangar & Nana Yogin' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'pre-wedding',
    order: 5,
    shortDesc: {
      hi: 'आठ ब्राह्मणों द्वारा चावल कूटना और स्त्रियों द्वारा वर की आरती।',
      en: 'Rice crushed by eight Brahmins and aarti of the groom by women.'
    },
    longDesc: {
      hi: 'वर पक्ष के आगमन पर एक विशेष अनुष्ठान होता है जिसमें आठ ब्राह्मण चावल को कूटते हैं (ओतंगर), और स्त्रियाँ वर की आरती उतारती हैं (नाना योगिन)। यह वर के स्वागत और मंगल कामना का प्रतीक है।',
      en: 'Upon the groom party arrival, a special ritual is performed in which eight Brahmins pound rice (Otangar), and women perform the aarti of the groom (Nana Yogin). This symbolizes the welcoming of the groom and auspicious wishes.'
    },
    materials: [
      { hi: 'चावल, ओखली-मूसल, आरती की थाली, दीप', en: 'Rice, mortar-pestle, aarti plate, lamp' }
    ],
    steps: [
      { number: 1, title: { hi: 'चावल कूटना', en: 'Rice Pounding' }, description: { hi: 'आठ ब्राह्मण चावल कूटते हैं।', en: 'Eight Brahmins pound rice.' } },
      { number: 2, title: { hi: 'वर आरती', en: 'Groom Aarti' }, description: { hi: 'स्त्रियाँ दीप-थाली से वर की आरती करती हैं।', en: 'Women perform the groom aarti with a lamp-tray.' } },
      { number: 3, title: { hi: 'आशीर्वाद', en: 'Blessing' }, description: { hi: 'वर को आशीर्वाद दिया जाता है।', en: 'Blessings are given to the groom.' } }
    ],
    mantras: [
      {
        id: 'aarti',
        sanskrit: 'ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।\nभक्त जनों के संकट, क्षण में दूर करे॥',
        transliteration: 'oṃ jaya jagadīśa hare, svāmī jaya jagadīśa hare |\nbhakta janoṃ ke saṃkaṭa, kṣaṇa meṃ dūra kare ||',
        meaning: {
          hi: 'जय जगदीश हरे, भक्तों के संकट क्षण भर में दूर करने वाले।',
          en: 'Victory to Lord of the universe, who removes the troubles of devotees in an instant.'
        },
        when: {
          hi: 'वर की आरती के समय।',
          en: 'During the aarti of the groom.'
        }
      }
    ],
    significance: {
      hi: 'वर का सम्मान और गृहस्थ जीवन के लिए मंगल कामना।',
      en: 'Honoring the groom and wishing auspiciousness for household life.'
    }
  }
];