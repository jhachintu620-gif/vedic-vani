import type { KarmkandRitual } from './types';

export const pujaRituals: KarmkandRitual[] = [
  {
    slug: 'satyanarayan-puja',
    title: { hi: 'सत्यनारायण पूजा', en: 'Satyanarayan Puja' },
    category: 'puja',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 1,
    shortDesc: {
      hi: 'भगवान विष्णु के सत्य स्वरूप की पूजा — मनोकामना पूर्ण करने वाली।',
      en: 'Worship of the truth form of Lord Vishnu — fulfiller of desires.'
    },
    longDesc: {
      hi: 'सत्यनारायण पूजा भगवान विष्णु के सत्य स्वरूप की पूजा है। यह पूर्णिमा, संक्रांति, एकादशी और विशेष मंगल कार्यों में की जाती है। मिथिला परंपरा में यह पूजा विवाह, नामकरण, गृह प्रवेश, व्यापार आरंभ आदि शुभ अवसरों पर की जाती है। इसमें भगवान सत्यनारायण की कथा सुनी जाती है और उन्हें पंचामृत, फल, मिष्ठान्न अर्पित किए जाते हैं। सत्यनारायण का व्रत मनोकामना पूर्ण करने वाला माना जाता है।',
      en: 'Satyanarayan Puja is worship of the truth form of Lord Vishnu. It is performed on Purnima, Sankranti, Ekadashi and special auspicious occasions. In Mithila tradition, it is done at weddings, naming ceremonies, house warming, business beginnings, etc. It involves listening to the story of Lord Satyanarayan and offering panchamrit, fruits, and sweets. The Satyanarayan vrat is considered a fulfiller of desires.'
    },
    materials: [
      { hi: 'केला (कदली स्तंभ), पंचामृत, फल, मिष्ठान्न, सत्यनारायण कथा पुस्तक, तुलसी, पीला वस्त्र', en: 'Banana stem, panchamrit, fruits, sweets, Satyanarayan Katha book, tulsi, yellow cloth' }
    ],
    steps: [
      { number: 1, title: { hi: 'संकल्प', en: 'Resolve' }, description: { hi: 'पूजा का संकल्प लिया जाता है।', en: 'The resolve for the puja is taken.' } },
      { number: 2, title: { hi: 'कलश स्थापन', en: 'Kalash Placement' }, description: { hi: 'कलश स्थापित किया जाता है।', en: 'The kalash is installed.' } },
      { number: 3, title: { hi: 'षोडशोपचार पूजन', en: 'Sixteen Offerings' }, description: { hi: 'सोलह उपचारों से पूजन।', en: 'Worship with sixteen offerings.' } },
      { number: 4, title: { hi: 'कथा श्रवण', en: 'Story Listening' }, description: { hi: 'सत्यनारायण कथा सुनी जाती है।', en: 'The Satyanarayan Katha is listened to.' } },
      { number: 5, title: { hi: 'आरती', en: 'Aarti' }, description: { hi: 'आरती की जाती है।', en: 'Aarti is performed.' } },
      { number: 6, title: { hi: 'प्रसाद वितरण', en: 'Prasad Distribution' }, description: { hi: 'प्रसाद वितरित किया जाता है।', en: 'Prasad is distributed.' } }
    ],
    mantras: [
      {
        id: 'satyanarayan-dhyana',
        sanskrit: 'ॐ नारायणं नमस्कृत्य नरं चैव नरोत्तमम्।\nदेवीं सरस्वतीं व्यासं ततो जयमुदीरयेत्॥',
        transliteration: 'oṃ nārāyaṇaṃ namaskṛtya naraṃ caiva narottamam |\ndevīṃ sarasvatīṃ vyāsaṃ tato jayamudīrayet ||',
        meaning: {
          hi: 'नारायण, नर, नरोत्तम, देवी सरस्वती और व्यास को नमस्कार करके जय का उच्चारण करें।',
          en: 'Saluting Narayan, Nara, Narottama, Devi Saraswati, and Vyasa — then proclaim victory.'
        },
        when: {
          hi: 'पूजा के आरंभ में।',
          en: 'At the beginning of the puja.'
        }
      },
      {
        id: 'satyanarayan-aarti',
        sanskrit: 'ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।\nभक्त जनों के संकट, क्षण में दूर करे॥',
        transliteration: 'oṃ jaya jagadīśa hare, svāmī jaya jagadīśa hare |\nbhakta janoṃ ke saṃkaṭa, kṣaṇa meṃ dūra kare ||',
        meaning: {
          hi: 'जय जगदीश हरे, भक्तों के संकट क्षण भर में दूर करने वाले।',
          en: 'Victory to Lord of the universe, who removes the troubles of devotees in an instant.'
        },
        when: {
          hi: 'आरती के समय।',
          en: 'During the aarti.'
        }
      }
    ],
    significance: {
      hi: 'सत्यनारायण पूजा मनोकामना पूर्ण करने वाली मानी जाती है। "सत्य" ही नारायण हैं — सत्य बोलने और सत्य के मार्ग पर चलने का संकल्प इस पूजा का मुख्य उद्देश्य है।',
      en: 'Satyanarayan Puja is considered a fulfiller of desires. "Truth" itself is Narayan — the resolve to speak truth and walk on the path of truth is the main purpose of this puja.'
    },
    duration: { hi: '2-3 घंटे', en: '2-3 hours' }
  },
  {
    slug: 'griha-pravesh-puja',
    title: { hi: 'गृह प्रवेश पूजा', en: 'Griha Pravesh Puja' },
    category: 'puja',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 2,
    shortDesc: {
      hi: 'नए घर में प्रवेश से पूर्व वास्तु-पूजन और गृह शांति।',
      en: 'Vastu worship and house sanctification before entering a new home.'
    },
    longDesc: {
      hi: 'गृह प्रवेश पूजा नए घर में प्रवेश से पूर्व की जाती है। इसमें वास्तु देवता, गणेश, लक्ष्मी-नारायण, कुलदेवी और नवग्रह की पूजा की जाती है। मिथिला परंपरा में "वास्तु शांति" और "नवग्रह शांति" विशेष रूप से की जाती है। घर के मुख्य द्वार पर कलश स्थापित किया जाता है और गाय के गोबर से लीप-पोत की जाती है। गृह प्रवेश पूजा में वास्तु दोष का निवारण और घर में सुख-शांति की कामना की जाती है। पूजा के बाद "कुलदेवी दर्शन" कराया जाता है।',
      en: 'Griha Pravesh Puja is performed before entering a new home. It involves worship of Vastu Devata, Ganesh, Lakshmi-Narayan, Kuldevi, and Navagraha. In Mithila tradition, "Vastu Shanti" and "Navagraha Shanti" are especially performed. A kalash is installed at the main door and the house is coated with cow dung. Griha Pravesh Puja aims to remove Vastu defects and invoke happiness and peace in the home. After the puja, "Kuldevi Darshan" is shown.'
    },
    materials: [
      { hi: 'कलश, नारियल, पंचामृत, गोबर, गंगाजल, नवग्रह समिधा, हवन सामग्री', en: 'Kalash, coconut, panchamrit, cow dung, Ganga water, Navagraha wood, havan materials' }
    ],
    steps: [
      { number: 1, title: { hi: 'गणेश पूजन', en: 'Ganesh Puja' }, description: { hi: 'गणेश जी की पूजा की जाती है।', en: 'Lord Ganesha is worshipped.' } },
      { number: 2, title: { hi: 'वास्तु पूजन', en: 'Vastu Puja' }, description: { hi: 'वास्तु देवता की पूजा की जाती है।', en: 'Vastu Devata is worshipped.' } },
      { number: 3, title: { hi: 'कलश स्थापन', en: 'Kalash Installation' }, description: { hi: 'मुख्य द्वार पर कलश स्थापित किया जाता है।', en: 'Kalash is installed at the main door.' } },
      { number: 4, title: { hi: 'नवग्रह शांति', en: 'Navagraha Shanti' }, description: { hi: 'नवग्रह शांति हवन किया जाता है।', en: 'Navagraha Shanti havan is performed.' } },
      { number: 5, title: { hi: 'लक्ष्मी पूजन', en: 'Lakshmi Puja' }, description: { hi: 'लक्ष्मी-नारायण की पूजा की जाती है।', en: 'Lakshmi-Narayan are worshipped.' } },
      { number: 6, title: { hi: 'कुलदेवी दर्शन', en: 'Kuldevi Darshan' }, description: { hi: 'कुलदेवी के दर्शन कराए जाते हैं।', en: 'Kuldevi Darshan is shown.' } },
      { number: 7, title: { hi: 'गृह प्रवेश', en: 'House Entry' }, description: { hi: 'दाहिने पैर से गृह प्रवेश।', en: 'Enter home with the right foot.' } }
    ],
    mantras: [
      {
        id: 'vastu-puja',
        sanskrit: 'ॐ वास्तोष्पते प्रतिजानीह्यस्मान् स्वावेशो अनमीवो भवा नः।\nयत्वेमहे प्रति तन्नो जुषस्व शं नो भव द्विपदे शं चतुष्पदे॥',
        transliteration: 'oṃ vāstoṣpate pratijānīhyasmān svāveśo anamīvo bhavā naḥ |\nyatvemahe prati tanno juṣasva śaṃ no bhava dvipade śaṃ catuṣpade ||',
        meaning: {
          hi: 'हे वास्तोष्पति! हमें स्वीकार कीजिए, हमारे लिए निर्विकार होइए। जो हम चाहते हैं वह पूर्ण कीजिए। हमारे दो पैर और चार पैर वालों को शांति दीजिए।',
          en: 'O Vastoshpati! Accept us, be harmless to us. Fulfill what we desire. Grant peace to our two-footed and four-footed beings.'
        },
        when: {
          hi: 'वास्तु पूजन के समय।',
          en: 'During Vastu Puja.'
        }
      },
      {
        id: 'griha-pravesh-main',
        sanskrit: 'ॐ श्रिये जातः श्रिय आनिर्याय श्रियं वहसि।\nश्रियं जातो अश्विनोः श्रियं वहसि।\nश्रियमानय गृहान् श्रियं मे देहि सर्वदा॥',
        transliteration: 'oṃ śriye jātaḥ śriya ānirīyāya śriyaṃ vahasi |\nśriyaṃ jāto aśvinoḥ śriyaṃ vahasi |\nśriyamānaya gṛhān śriyaṃ me dehi sarvadā ||',
        meaning: {
          hi: 'श्री के लिए जन्मे हो, श्री के लिए आए हो, श्री को धारण करते हो। श्री को घर में लाओ, मुझे सदा श्री दो।',
          en: 'Born for Shri, come for Shri, you carry Shri. Bring Shri into the home, always grant me Shri.'
        },
        when: {
          hi: 'गृह प्रवेश के समय।',
          en: 'During Griha Pravesh.'
        }
      }
    ],
    significance: {
      hi: 'गृह प्रवेश पूजा से घर में वास्तु दोष का निवारण होता है और सुख-शांति का वास होता है। यह "लक्ष्मी का आगमन" का प्रतीक है जो घर में सुख, समृद्धि और संतान लाती है।',
      en: 'Griha Pravesh Puja removes Vastu defects and invokes happiness and peace. It symbolizes the "arrival of Lakshmi" — bringing happiness, prosperity, and progeny to the home.'
    },
    duration: { hi: '3-4 घंटे', en: '3-4 hours' }
  }
];