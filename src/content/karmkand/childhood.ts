import type { KarmkandRitual } from './types';

export const childhoodSamskaras: KarmkandRitual[] = [
  {
    slug: 'namkaran',
    title: { hi: 'नामकरण संस्कार', en: 'Namkaran Sanskar' },
    category: 'puja',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 1,
    shortDesc: {
      hi: 'शिशु के जन्म के 11वें या 12वें दिन नाम रखने का संस्कार।',
      en: 'Naming ceremony on the 11th or 12th day after birth.'
    },
    longDesc: {
      hi: 'नामकरण संस्कार शिशु के जन्म के 11वें या 12वें दिन किया जाता है। मिथिला परंपरा में नाम "नक्षत्र" के अनुसार रखा जाता है। पहले जन्म नक्षत्र के अनुसार नाम का पहला अक्षर निर्धारित किया जाता है, फिर उस अक्षर से नाम रखा जाता है। मिथिला में बच्चे का नाम उसकी माँ के नाम से भी जुड़ा होता है (जैसे "सीता-पुत्र")। नामकरण में कुलदेवी, गणेश, और नवग्रह की पूजा की जाती है। नामकरण के दिन घर में "सोहर" गाए जाते हैं — मिथिली लोकगीत।',
      en: 'Namkaran Sanskar is performed on the 11th or 12th day after the birth. In Mithila tradition, the name is given according to the "nakshatra" (birth star). The first letter of the name is determined by the birth star, then the name is chosen. In Mithila, the child name is also linked to the mother name (e.g., "Sita-putra"). Namkaran involves worship of Kuldevi, Ganesh, and Navagraha. On the naming day, "Sohar" (Maithili folk songs) are sung at home.'
    },
    materials: [
      { hi: 'हल्दी, अक्षत, दूर्वा, पुष्प, मिठाई, नामकरण पत्र, नवजात शिशु', en: 'Turmeric, unbroken rice, durva, flowers, sweets, naming paper, newborn' }
    ],
    steps: [
      { number: 1, title: { hi: 'स्नान-शुद्धि', en: 'Bath & Purification' }, description: { hi: 'माता और शिशु का स्नान।', en: 'Bath of mother and child.' } },
      { number: 2, title: { hi: 'गणेश-कुलदेवी पूजन', en: 'Ganesh-Kuldevi Puja' }, description: { hi: 'गणेश और कुलदेवी की पूजा।', en: 'Ganesh and Kuldevi are worshipped.' } },
      { number: 3, title: { hi: 'नक्षत्र निर्धारण', en: 'Star Determination' }, description: { hi: 'जन्म नक्षत्र से नाम का पहला अक्षर।', en: 'First letter from the birth star.' } },
      { number: 4, title: { hi: 'नामकरण', en: 'Naming' }, description: { hi: 'पिता या पुरोहित द्वारा नाम घोषणा।', en: 'Name is announced by father or priest.' } },
      { number: 5, title: { hi: 'सोहर गान', en: 'Sohar Singing' }, description: { hi: 'मैथिली सोहर गाए जाते हैं।', en: 'Maithili Sohar songs are sung.' } }
    ],
    mantras: [
      {
        id: 'namkaran-mantra',
        sanskrit: 'ॐ नाम ते शतायुष्मान् भव।\nदीर्घायुष्मान् भव पुत्र।\nआयुष्मान् भव सदा।\nसर्ववीर्यं बलमोजश्च सर्वं ते भवतु॥',
        transliteration: 'oṃ nāma te śatāyuṣmān bhava |\ndīrghāyuṣmān bhava putra |\nāyuṣmān bhava sadā |\nsarvavīryaṃ balamojaśca sarvaṃ te bhavatu ||',
        meaning: {
          hi: 'तुम्हारा नाम शतायु हो, दीर्घायु हो, सदा आयुष्मान् रहो। सर्व वीर्य, बल और ओज तुम्हें प्राप्त हो।',
          en: 'May your name be long-lived, may you be long-lived, always blessed with life. May all heroism, strength, and vigor come to you.'
        },
        when: {
          hi: 'नाम घोषणा के समय।',
          en: 'During the name announcement.'
        }
      }
    ],
    significance: {
      hi: 'नामकरण शिशु के जीवन का प्रथम सामाजिक संस्कार है। नाम से शिशु की पहचान बनती है और उसका भविष्य जुड़ता है। मिथिला में सोहर गान इस संस्कार की विशेषता है।',
      en: 'Namkaran is the first social samskara of a child life. The name establishes the child identity and connects their future. In Mithila, Sohar singing is the special feature of this samskara.'
    },
    duration: { hi: '1-2 घंटे', en: '1-2 hours' }
  },
  {
    slug: 'annaprashan',
    title: { hi: 'अन्नप्राशन संस्कार', en: 'Annaprashan Sanskar' },
    category: 'puja',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 2,
    shortDesc: {
      hi: 'शिशु को प्रथम बार अन्न खिलाने का संस्कार — 6वें महीने में।',
      en: 'First feeding of solid food to baby — in the 6th month.'
    },
    longDesc: {
      hi: 'अन्नप्राशन संस्कार शिशु को प्रथम बार अन्न (ठोस आहार) खिलाने का संस्कार है। यह सामान्यतः 6वें महीने में पुरुष शिशु के लिए और 5वें महीने में कन्या शिशु के लिए किया जाता है। मिथिला परंपरा में पहला अन्न "खीर" होता है — चावल और दूध से बनी। पिता या चाचा शिशु को पहला अन्न खिलाते हैं। इसके बाद शिशु को विभिन्न वस्तुएँ दिखाई जाती हैं (पुस्तक, खिलौना, सिक्का, फल) — जो शिशु उठाता है, माना जाता है कि वह उसी क्षेत्र में जाएगा।',
      en: 'Annaprashan Sanskar is the first feeding of solid food to the baby. Usually performed in the 6th month for a boy and 5th for a girl. In Mithila tradition, the first food is "kheer" — made of rice and milk. The father or paternal uncle feeds the first food. After this, various objects (book, toy, coin, fruit) are shown to the child — the object they pick is believed to indicate their future.'
    },
    materials: [
      { hi: 'खीर (चावल-दूध), पुस्तक, सिक्का, खिलौना, फल, सोना, चाँदी', en: 'Kheer (rice-milk), book, coin, toy, fruit, gold, silver' }
    ],
    steps: [
      { number: 1, title: { hi: 'पूजन', en: 'Worship' }, description: { hi: 'गणेश, कुलदेवी, अन्नपूर्णा की पूजा।', en: 'Ganesh, Kuldevi, Annapurna are worshipped.' } },
      { number: 2, title: { hi: 'खीर तैयार', en: 'Kheer Prep' }, description: { hi: 'चावल-दूध की खीर बनाई जाती है।', en: 'Rice-milk kheer is prepared.' } },
      { number: 3, title: { hi: 'प्रथम अन्न', en: 'First Food' }, description: { hi: 'पिता या चाचा शिशु को पहला अन्न खिलाते हैं।', en: 'Father or uncle feeds the first food.' } },
      { number: 4, title: { hi: 'वस्तु चयन', en: 'Object Selection' }, description: { hi: 'शिशु के सामने विभिन्न वस्तुएँ रखी जाती हैं।', en: 'Various objects are placed before the child.' } },
      { number: 5, title: { hi: 'आशीर्वाद', en: 'Blessing' }, description: { hi: 'परिवार के लोग आशीर्वाद देते हैं।', en: 'Family members give blessings.' } }
    ],
    mantras: [
      {
        id: 'annaprashan',
        sanskrit: 'ॐ अन्नपते अन्नस्य नो देह्यनमीवस्य शुष्मिणः।\nप्र प्रदातारं तारिष उरुज्मन् गोभिरश्वेभिरिन्दो॥',
        transliteration: 'oṃ annapate annasya no dehyanamīvasya śuṣmiṇaḥ |\npra pradātāraṃ tāriṣa urujman gobhiraśvebhirindo ||',
        meaning: {
          hi: 'हे अन्नपति! हमें निर्विकार, बलवान अन्न दीजिए। हे इंद्र! गौ और अश्व के साथ दाता को पार लगाइए।',
          en: 'O Lord of food! Give us pure, powerful food. O Indra! With cows and horses, take the giver across.'
        },
        when: {
          hi: 'प्रथम अन्न खिलाते समय।',
          en: 'During the first feeding.'
        }
      }
    ],
    significance: {
      hi: 'अन्नप्राशन शिशु के अन्न-जीवन का आरंभ है। "अन्नं ब्रह्म" — अन्न ही ब्रह्म है। यह संस्कार शिशु के शारीरिक और मानसिक विकास का प्रतीक है। वस्तु चयन से शिशु के भविष्य का संकेत मिलता है।',
      en: 'Annaprashan is the beginning of the child food life. "Annam Brahma" — food is Brahman. This samskara symbolizes the child physical and mental development. Object selection hints at the child future.'
    },
    duration: { hi: '1 घंटा', en: '1 hour' }
  },
  {
    slug: 'mundan',
    title: { hi: 'मुंडन संस्कार', en: 'Mundan Sanskar' },
    category: 'puja',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 3,
    shortDesc: {
      hi: 'शिशु के प्रथम बाल काटने का संस्कार — 1 से 3 वर्ष के बीच।',
      en: 'First hair-cutting ceremony of child — between 1 and 3 years.'
    },
    longDesc: {
      hi: 'मुंडन संस्कार (चूड़ाकरण) शिशु के प्रथम बाल काटने का संस्कार है। यह सामान्यतः 1 से 3 वर्ष के बीच किया जाता है। मिथिला परंपरा में मुंडन अत्यंत महत्वपूर्ण संस्कार है। मान्यता है कि जन्म के बाल "मैल" होते हैं और इन्हें हटाना आवश्यक है। मुंडन के बाद शिशु का सिर शुद्ध होता है और बाल स्वस्थ होते हैं। मिथिला में मुंडन के बाद शिशु को नए वस्त्र पहनाए जाते हैं और उसकी आरती उतारी जाती है।',
      en: 'Mundan Sanskar (Chudakaran) is the first hair-cutting ceremony. Usually performed between 1 and 3 years. In Mithila tradition, Mundan is a very important samskara. It is believed that the birth hair is "impure" and must be removed. After Mundan, the child head is purified and hair becomes healthy. In Mithila, after Mundan, the child is given new clothes and aarti is performed.'
    },
    materials: [
      { hi: 'नया उस्तरा, दर्पण, दूर्वा, अक्षत, दही, हल्दी, नए वस्त्र', en: 'New razor, mirror, durva, unbroken rice, curd, turmeric, new clothes' }
    ],
    steps: [
      { number: 1, title: { hi: 'संकल्प', en: 'Resolve' }, description: { hi: 'मुंडन का संकल्प।', en: 'Resolve for Mundan.' } },
      { number: 2, title: { hi: 'देव पूजन', en: 'Deity Worship' }, description: { hi: 'गणेश, कुलदेवी का पूजन।', en: 'Ganesh and Kuldevi worship.' } },
      { number: 3, title: { hi: 'मुंडन', en: 'Shaving' }, description: { hi: 'नए उस्तरे से मुंडन।', en: 'Shaving with a new razor.' } },
      { number: 4, title: { hi: 'स्नान', en: 'Bath' }, description: { hi: 'गंगाजल से स्नान।', en: 'Bath with Ganga water.' } },
      { number: 5, title: { hi: 'नए वस्त्र', en: 'New Clothes' }, description: { hi: 'नए वस्त्र पहनाए जाते हैं।', en: 'New clothes are given.' } },
      { number: 6, title: { hi: 'आरती', en: 'Aarti' }, description: { hi: 'शिशु की आरती उतारी जाती है।', en: 'Aarti of the child is performed.' } }
    ],
    mantras: [
      {
        id: 'mundan',
        sanskrit: 'ॐ आयुष्यं वर्चस्यं यशस्यं च।\nसर्ववीर्यं बलमोजश्च।\nसर्वमायुरेति शिखा ते भवतु॥',
        transliteration: 'oṃ āyuṣyaṃ varcasyaṃ yaśasyaṃ ca |\nsarvavīryaṃ balamojaśca |\nsarvamāyureti śikhā te bhavatu ||',
        meaning: {
          hi: 'आयु, वर्चस्व, यश, सर्व वीर्य, बल और ओज — सब कुछ शिखा में स्थित हो।',
          en: 'Longevity, radiance, fame, all heroism, strength and vigor — may all this reside in the shikha.'
        },
        when: {
          hi: 'मुंडन के समय।',
          en: 'During Mundan.'
        }
      }
    ],
    significance: {
      hi: 'मुंडन से शिशु के जन्म-बाल हटते हैं जो "अशुद्ध" माने जाते हैं। मुंडन के बाद शिशु का सिर शुद्ध होता है और बाल स्वस्थ होते हैं। यह संस्कार शिशु के जीवन में नई शुरुआत का प्रतीक है।',
      en: 'Mundan removes the birth hair which is considered "impure". After Mundan, the child head is purified and hair becomes healthy. This samskara symbolizes a new beginning in the child life.'
    },
    duration: { hi: '1-2 घंटे', en: '1-2 hours' }
  },
  {
    slug: 'karnavedha',
    title: { hi: 'कर्णवेध संस्कार', en: 'Karnavedha Sanskar' },
    category: 'puja',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 4,
    shortDesc: {
      hi: 'कान छेदने का संस्कार — शिशु के 3 से 5 वर्ष की आयु में।',
      en: 'Ear-piercing ceremony — at age 3 to 5 years.'
    },
    longDesc: {
      hi: 'कर्णवेध संस्कार कान छेदने का संस्कार है। यह सामान्यतः 3 से 5 वर्ष की आयु में किया जाता है। मिथिला परंपरा में कर्णवेध विशेष रूप से महत्वपूर्ण माना जाता है। मान्यता है कि कर्णवेध से शिशु के रोग दूर होते हैं और आयु बढ़ती है। आयुर्वेद में भी कर्णवेध के स्वास्थ्य लाभ बताए गए हैं। कर्णवेध में सोने या चाँदी की बाली पहनाई जाती है। पुत्री के लिए यह विशेष रूप से किया जाता है क्योंकि कान की बाली उसकी सुंदरता और सौभाग्य का प्रतीक है।',
      en: 'Karnavedha Sanskar is the ear-piercing ceremony. Usually performed at age 3 to 5 years. In Mithila tradition, Karnavedha is considered especially important. It is believed that ear-piercing removes diseases and increases lifespan. Ayurveda also mentions the health benefits of ear-piercing. In Karnavedha, gold or silver earrings are worn. Especially for daughters, it is performed because the earring is a symbol of their beauty and fortune.'
    },
    materials: [
      { hi: 'सोने या चाँदी की बाली, नया सुई, हल्दी, तेल, दूर्वा, अक्षत', en: 'Gold or silver earring, new needle, turmeric, oil, durva, unbroken rice' }
    ],
    steps: [
      { number: 1, title: { hi: 'पूजन', en: 'Worship' }, description: { hi: 'गणेश, कुलदेवी का पूजन।', en: 'Ganesh and Kuldevi worship.' } },
      { number: 2, title: { hi: 'हल्दी-तेल', en: 'Turmeric-Oil' }, description: { hi: 'कानों पर हल्दी-तेल लगाया जाता है।', en: 'Turmeric-oil is applied to the ears.' } },
      { number: 3, title: { hi: 'कर्णवेध', en: 'Ear Piercing' }, description: { hi: 'नए सुई से कान छेदे जाते हैं।', en: 'Ears are pierced with a new needle.' } },
      { number: 4, title: { hi: 'बाली धारण', en: 'Earring Wearing' }, description: { hi: 'सोने या चाँदी की बाली पहनाई जाती है।', en: 'Gold or silver earrings are worn.' } },
      { number: 5, title: { hi: 'आशीर्वाद', en: 'Blessing' }, description: { hi: 'परिवार आशीर्वाद देता है।', en: 'Family gives blessings.' } }
    ],
    mantras: [
      {
        id: 'karnavedha',
        sanskrit: 'ॐ कर्णौ मे श्रवणाय च।\nचक्षुर्मे दर्शनाय च।\nआयुष्यं बलमोजश्च श्रवणे मे भवतु सदा॥',
        transliteration: 'oṃ karṇau me śravaṇāya ca |\ncakṣurme darśanāya ca |\nāyuṣyaṃ balamojaśca śravaṇe me bhavatu sadā ||',
        meaning: {
          hi: 'मेरे कान सुनने के लिए हों, नेत्र दर्शन के लिए हों। सुनने में मुझे आयु, बल और ओज सदा प्राप्त हो।',
          en: 'May my ears be for hearing, my eyes for seeing. May lifespan, strength, and vigor always come to me in hearing.'
        },
        when: {
          hi: 'कर्णवेध के समय।',
          en: 'During Karnavedha.'
        }
      }
    ],
    significance: {
      hi: 'कर्णवेध आयुर्वेद अनुसार स्वास्थ्य के लिए लाभदायक है। मान्यता है कि कान छेदने से रोग दूर होते हैं और आयु बढ़ती है। पुत्री के लिए कर्णवेध सौभाग्य का प्रतीक है।',
      en: 'Karnavedha is beneficial for health according to Ayurveda. It is believed that ear-piercing removes diseases and increases lifespan. For a daughter, Karnavedha is a symbol of good fortune.'
    },
    duration: { hi: '30 मिनट', en: '30 minutes' }
  }
];