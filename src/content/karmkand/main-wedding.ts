import type { KarmkandRitual } from './types';

export const mainWeddingRituals: KarmkandRitual[] = [
  {
    slug: 'varanam',
    title: { hi: 'वरणम्', en: 'Varanam' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 1,
    shortDesc: {
      hi: 'वर का औपचारिक स्वागत और सम्मान — विवाह मंडप में प्रथम विधि।',
      en: 'Formal welcome and honoring of the groom — first rite in the wedding mandap.'
    },
    longDesc: {
      hi: 'विवाह मंडप में वर पक्ष के आने पर वधू के पिता वर का विधिवत स्वागत करते हैं। वर को आसन, पाद्य, अर्घ्य, अक्षत, चंदन, पुष्प अर्पित किए जाते हैं। यह विधि वर को भावी पति के रूप में स्वीकार करने का प्रतीक है। वर और वधू दोनों को मंडप में यथास्थान बैठाया जाता है।',
      en: 'Upon arrival of the groom party in the mandap, the bride father formally welcomes the groom. Seat, water for feet, arghya, unbroken rice, sandal, and flowers are offered. This rite symbolizes the acceptance of the groom as the future husband.'
    },
    materials: [
      { hi: 'पीतल का पात्र, जल, दूर्वा, अक्षत, चंदन, पुष्प, दीप', en: 'Brass vessel, water, durva, unbroken rice, sandal, flowers, lamp' }
    ],
    steps: [
      { number: 1, title: { hi: 'वर का आगमन', en: 'Arrival of Groom' }, description: { hi: 'वर बारात सहित मंडप में प्रवेश करते हैं।', en: 'The groom enters the mandap with the procession.' } },
      { number: 2, title: { hi: 'पाद्य-अर्घ्य', en: 'Water Offering' }, description: { hi: 'वर के चरण धोए जाते हैं, अर्घ्य दिया जाता है।', en: 'The groom feet are washed, arghya is offered.' } },
      { number: 3, title: { hi: 'आसन ग्रहण', en: 'Seat' }, description: { hi: 'वर को आसन पर बैठाया जाता है।', en: 'The groom is seated on a seat.' } },
      { number: 4, title: { hi: 'अक्षत-चंदन', en: 'Rice & Sandal' }, description: { hi: 'अक्षत, चंदन, पुष्प अर्पित किए जाते हैं।', en: 'Unbroken rice, sandal, flowers are offered.' } }
    ],
    mantras: [
      {
        id: 'varanam',
        sanskrit: 'ॐ आगच्छ भगवन् ब्रह्मन् वरोऽसि प्रियदर्शनः।\nश्रीरामवत् सुखं देहि सौभाग्यं देहि मे सदा॥',
        transliteration: 'oṃ āgaccha bhagavan brahman varosi priyadarśanaḥ |\nśrīrāmavat sukhaṃ dehi saubhāgyaṃ dehi me sadā ||',
        meaning: {
          hi: 'हे भगवन! आइए, आप सुंदर दर्शन वाले वर हैं। श्रीराम के समान सुख दीजिए, मुझे सदा सौभाग्य दीजिए।',
          en: 'O Lord! Please come; you are the beautiful groom. Grant happiness like Shri Rama, always grant me good fortune.'
        },
        when: {
          hi: 'वर के स्वागत के समय वधू पक्ष द्वारा।',
          en: 'Recited by the bride family while welcoming the groom.'
        }
      }
    ],
    significance: {
      hi: 'विवाह के प्रथम विधि के रूप में वर का औपचारिक सम्मान और स्वीकृति।',
      en: 'Formal honor and acceptance of the groom as the first rite of marriage.'
    },
    duration: { hi: '10-15 मिनट', en: '10-15 minutes' }
  },
  {
    slug: 'kanyadaan',
    title: { hi: 'कन्यादान', en: 'Kanyadaan' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 2,
    shortDesc: {
      hi: 'वधू के पिता द्वारा अपनी पुत्री का हाथ वर के हाथ में समर्पण — विवाह का सर्वोच्च कर्म।',
      en: 'Father places his daughter hand into the groom hand — the highest act of marriage.'
    },
    longDesc: {
      hi: 'कन्यादान विवाह का सर्वोच्च और पवित्रतम कर्म है। वधू के पिता अपनी पुत्री को अलंकृत कर, सर्वगुण-संपन्न जानकर, वर को "धर्म-प्राप्त्यर्थ" (धर्म की प्राप्ति के लिए) समर्पित करते हैं। इसे "कन्या-रत्न का दान" कहा जाता है जो सर्वदानों में श्रेष्ठ है। मिथिला में यह विधि अत्यंत भव्य होती है — पिता पुत्री के साथ वर के सम्मुख बैठते हैं और "मम पुत्री" कहकर उनका हाथ वर के हाथ में रखते हैं।',
      en: 'Kanyadaan is the highest and holiest act of marriage. The bride father, adorning his daughter and knowing her to be full of virtues, offers her to the groom "for the sake of dharma". This is called the gift of the jewel-daughter, greatest of all gifts. In Mithila this rite is especially grand — the father sits before the groom with the daughter and places her hand into the groom hand saying "my daughter".'
    },
    materials: [
      { hi: 'ताम्रपात्र, जल, अक्षत, पुष्प, दूर्वा, हल्दी, मंगलसूत्र, चंदन', en: 'Copper vessel, water, unbroken rice, flowers, durva, turmeric, mangalsutra, sandal' }
    ],
    steps: [
      { number: 1, title: { hi: 'वधू अलंकरण', en: 'Adorning the Bride' }, description: { hi: 'वधू को वस्त्र, आभूषण से अलंकृत किया जाता है।', en: 'The bride is adorned with garments and ornaments.' } },
      { number: 2, title: { hi: 'ताम्रपात्र विधि', en: 'Copper Vessel Rite' }, description: { hi: 'ताम्रपात्र में जल, अक्षत, दूर्वा, पुष्प रखे जाते हैं।', en: 'Water, unbroken rice, durva, and flowers are placed in a copper vessel.' } },
      { number: 3, title: { hi: 'हस्त-समर्पण', en: 'Hand Offering' }, description: { hi: 'पिता पुत्री का हाथ वर के हाथ में रखते हैं।', en: 'The father places the daughter hand into the groom hand.' } },
      { number: 4, title: { hi: 'दान संकल्प', en: 'Vow of Gift' }, description: { hi: '"धर्म-प्राप्त्यर्थं कन्यां ददामि" का संकल्प।', en: 'The vow: "I give the daughter for the sake of dharma."' } },
      { number: 5, title: { hi: 'यथोचित अर्चन', en: 'Offering to Groom' }, description: { hi: 'वर का यथोचित अर्चन-पूजन किया जाता है।', en: 'The groom is duly worshipped.' } }
    ],
    mantras: [
      {
        id: 'kanyadaan-sankalpa',
        sanskrit: 'ॐ कन्यां कनकसंकाशां सर्वाभरणभूषिताम्।\nददामि विष्णवे तुभ्यं ब्रह्मलोकजयाय च॥\nधर्मप्राप्त्यर्थं कन्यां ददामि ते वर।\nप्रतीच्छ चैनां भगवन् सुप्रीतो भव सर्वदा॥',
        transliteration: 'oṃ kanyāṃ kanakasaṃkāśāṃ sarvābharaṇabhūṣitām |\ndadāmi viṣṇave tubhyaṃ brahmalokajayāya ca ||\ndharmaprāptyarthaṃ kanyāṃ dadāmi te vara |\npratīccha caināṃ bhagavan suprīto bhava sarvadā ||',
        meaning: {
          hi: 'जो कन्या स्वर्ण के समान कांतिमती और सर्वाभूषण से विभूषित है, उसे मैं विष्णु रूप आपको ब्रह्मलोक की विजय के लिए देता हूँ। हे वर! धर्म की प्राप्ति के लिए मैं अपनी कन्या आपको देता हूँ। हे भगवन, इसे स्वीकार कीजिए और सदा प्रसन्न रहिए।',
          en: 'This maiden, radiant like gold and adorned with all ornaments, I give to you as Vishnu himself, for victory in the realm of Brahman. O groom! For the attainment of dharma I give my daughter to you. O Lord, accept her and always remain pleased.'
        },
        when: {
          hi: 'कन्यादान के समय पिता द्वारा पुत्री का हाथ वर के हाथ में रखते हुए।',
          en: 'Recited by the father while placing the daughter hand into the groom hand.'
        }
      },
      {
        id: 'kanyadaan-svikar',
        sanskrit: 'ॐ प्रतीच्छामि त्वां धर्माय धर्मं प्राप्नुहि मे प्रिये।\nयथाहं त्वां न त्यजामि त्वं मां न त्यज कर्हिचित्॥',
        transliteration: 'oṃ pratīcchāmi tvāṃ dharmāya dharmaṃ prāpnuhi me priye |\nyathāhaṃ tvāṃ na tyajāmi tvaṃ māṃ na tyaja karhicit ||',
        meaning: {
          hi: 'धर्म के लिए मैं तुम्हें स्वीकार करता हूँ। हे प्रिये! धर्म को प्राप्त करो। जैसे मैं तुम्हें नहीं त्यागूँगा, वैसे तुम भी मुझे कभी मत त्यागना।',
          en: 'For the sake of dharma I accept you. O beloved! Attain dharma. Just as I will never abandon you, may you never abandon me.'
        },
        when: {
          hi: 'वर द्वारा कन्या की स्वीकृति के समय।',
          en: 'Recited by the groom while accepting the bride.'
        }
      }
    ],
    significance: {
      hi: 'कन्यादान को सर्वदानों में श्रेष्ठ माना गया है — "कन्यादानं महादानं, कन्यादानं परं तपः"। यह पिता का सर्वोच्च धार्मिक कर्तव्य है और वर-वधू के संबंध का आध्यात्मिक आधार है।',
      en: 'Kanyadaan is considered the highest of all gifts — "Kanyadaan is the great gift, Kanyadaan is the supreme penance". It is the father highest religious duty and the spiritual foundation of the groom-bride relationship.'
    },
    duration: { hi: '20-30 मिनट', en: '20-30 minutes' }
  },
  {
    slug: 'panigrahan',
    title: { hi: 'पाणिग्रहण', en: 'Panigrahan' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 3,
    shortDesc: {
      hi: 'वर द्वारा वधू का हाथ ग्रहण करना — गृहस्थ जीवन का आरंभ।',
      en: 'Groom takes the bride hand — the beginning of householder life.'
    },
    longDesc: {
      hi: 'पाणिग्रहण वर द्वारा वधू का हाथ ग्रहण करने की विधि है। यह विधि दांपत्य जीवन के आरंभ का प्रतीक है। वर वधू के हाथ को अपने हाथ में लेकर संकल्प करता है कि वह उसकी रक्षा, पोषण और सुख-दुख का साथी होगा। इसे "पाणिग्रहण संस्कार" भी कहते हैं और यह वैदिक विवाह के मुख्य संस्कारों में से एक है।',
      en: 'Panigrahan is the rite of the groom holding the bride hand. It marks the beginning of married life. Taking the bride hand in his, the groom vows to protect, nourish, and be a companion in joy and sorrow.'
    },
    materials: [
      { hi: 'पुष्प, अक्षत, कुमकुम, मंगलसूत्र, दीप', en: 'Flowers, unbroken rice, kumkum, mangalsutra, lamp' }
    ],
    steps: [
      { number: 1, title: { hi: 'हस्त ग्रहण', en: 'Hand Holding' }, description: { hi: 'वर वधू का दाहिना हाथ ग्रहण करता है।', en: 'The groom holds the bride right hand.' } },
      { number: 2, title: { hi: 'संकल्प', en: 'Vow' }, description: { hi: 'वर रक्षा और साथ का संकल्प लेता है।', en: 'The groom vows protection and companionship.' } },
      { number: 3, title: { hi: 'गंध-पुष्प अर्पण', en: 'Offering' }, description: { hi: 'वर वधू के हाथ पर गंध, पुष्प अर्पित करता है।', en: 'The groom offers sandal and flowers to the bride hand.' } },
      { number: 4, title: { hi: 'मंगल गान', en: 'Auspicious Songs' }, description: { hi: 'स्त्रियाँ मंगलगीत गाती हैं।', en: 'Women sing auspicious songs.' } }
    ],
    mantras: [
      {
        id: 'panigrahan',
        sanskrit: 'ॐ गृह्णामि ते सहस्त्वं सुभगे दीर्घमायुषे।\nरक्ष मां देवि सर्वत्र सुखं मे देहि सर्वदा॥\nयथा त्वं मम भार्या च भव स्नेहसमन्विता।\nतथाहं ते प्रियो नित्यं भविष्यामि न संशयः॥',
        transliteration: 'oṃ gṛhṇāmi te sahastvaṃ subhage dīrghamāyuṣe |\nrakṣa māṃ devi sarvatra sukhaṃ me dehi sarvadā ||\nyathā tvaṃ mama bhāryā ca bhava snehasamanvitā |\ntathāhaṃ te priyo nityaṃ bhaviṣyāmi na saṃśayaḥ ||',
        meaning: {
          hi: 'हे सौभाग्यवती! दीर्घ आयु के लिए मैं तुम्हारा हाथ ग्रहण करता हूँ। हे देवि! सर्वत्र मेरी रक्षा करो, मुझे सदा सुख दो। जैसे तुम स्नेह से युक्त मेरी भार्या हो, वैसे मैं भी नित्य तुम्हारा प्रिय बनूँगा — इसमें संदेह नहीं।',
          en: 'O fortunate one! For long life I take your hand. O Goddess! Protect me everywhere, always grant me happiness. Just as you become my wife filled with love, so I shall always remain dear to you — no doubt.'
        },
        when: {
          hi: 'वधू का हाथ ग्रहण करते समय वर द्वारा।',
          en: 'Recited by the groom while taking the bride hand.'
        }
      }
    ],
    significance: {
      hi: 'यह विधि दांपत्य जीवन का औपचारिक आरंभ है — जहाँ दो जीवन एक हो जाते हैं। "पाणिग्रहण" शब्द ही वैदिक विवाह का पर्याय है।',
      en: 'This rite is the formal beginning of married life — where two lives become one. The very word "Panigrahan" is synonymous with Vedic marriage.'
    },
    duration: { hi: '10 मिनट', en: '10 minutes' }
  },
  {
    slug: 'saptapadi',
    title: { hi: 'सप्तपदी', en: 'Saptapadi' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 4,
    shortDesc: {
      hi: 'अग्नि की सात परिक्रमा और सात वचन — विवाह का सर्वाधिक पवित्र और कानूनी बंधन।',
      en: 'Seven circumambulations of the fire and seven vows — the most sacred and legal binding of marriage.'
    },
    longDesc: {
      hi: 'सप्तपदी विवाह का सर्वोच्च कर्म है। वर-वधू अग्नि की सात परिक्रमा करते हैं और प्रत्येक चरण पर वर वधू से एक-एक वचन लेता है। हिंदू विवाह कानून में सप्तपदी को ही विवाह की वैधता का आधार माना जाता है। मिथिला में पहली तीन परिक्रमा वधू कराती है (स्त्री शक्ति का प्रतीक) और अंतिम चार वर (पुरुष शक्ति का प्रतीक)। प्रत्येक चरण का विशेष अर्थ और संकल्प होता है।',
      en: 'Saptapadi is the supreme act of marriage. The groom and bride circumambulate the fire seven times; at each step the groom takes one vow from the bride. In Hindu marriage law, Saptapadi is the basis of marriage validity. In Mithila, the bride leads the first three rounds (symbolizing female energy) and the groom the last four (male energy). Each step has a specific meaning and vow.'
    },
    materials: [
      { hi: 'अग्नि (हवन कुंड), अक्षत, पुष्प, हल्दी की गाँठ, ताम्रपात्र', en: 'Sacred fire (havan kund), unbroken rice, flowers, turmeric knot, copper vessel' }
    ],
    steps: [
      { number: 1, title: { hi: 'प्रथम पग — अन्न', en: 'First Step — Food' }, description: { hi: 'वर: "तुम मेरी अन्न-पोषिका बनो।"', en: 'Groom: "Be my nourisher with food."' } },
      { number: 2, title: { hi: 'द्वितीय पग — बल', en: 'Second Step — Strength' }, description: { hi: 'वर: "तुम मेरी बल-संगिनी बनो।"', en: 'Groom: "Be my companion in strength."' } },
      { number: 3, title: { hi: 'तृतीय पग — धर्म', en: 'Third Step — Dharma' }, description: { hi: 'वर: "तुम मेरी धर्म-अनुगामिनी बनो।"', en: 'Groom: "Be my follower in dharma."' } },
      { number: 4, title: { hi: 'चतुर्थ पग — सुख', en: 'Fourth Step — Happiness' }, description: { hi: 'वर: "तुम मेरे सुख की भागीदार बनो।"', en: 'Groom: "Be my sharer of happiness."' } },
      { number: 5, title: { hi: 'पंचम पग — पशु-धन', en: 'Fifth Step — Prosperity' }, description: { hi: 'वर: "तुम पशु-धन की स्वामिनी बनो।"', en: 'Groom: "Be the mistress of cattle and wealth."' } },
      { number: 6, title: { hi: 'षष्ठम पग — ऋतु', en: 'Sixth Step — Seasons' }, description: { hi: 'वर: "तुम सब ऋतुओं में सुख दो।"', en: 'Groom: "Grant happiness in all seasons."' } },
      { number: 7, title: { hi: 'सप्तम पग — सखा', en: 'Seventh Step — Friend' }, description: { hi: 'वर: "तुम मेरी सखा और जीवन-संगिनी बनो।"', en: 'Groom: "Be my friend and life companion."' } }
    ],
    mantras: [
      {
        id: 'saptapadi-1',
        sanskrit: 'ॐ इषे त्वा उपनये। सा मे भव दीर्घायुषी।\nसखा सप्तपदी भव। सखायौ सप्तपदा भवाव। सख्यं ते गृह्णामि। सख्यं ते मयि गृह्णामि॥',
        transliteration: 'oṃ iṣe tvā upanaye | sā me bhava dīrghāyuṣī |\nsakhā saptapadī bhava | sakhāyau saptapadā bhavāva | sakhyamā te gṛhṇāmi | sakhyamā te mayi gṛhṇāmi ||',
        meaning: {
          hi: 'अन्न की प्राप्ति के लिए मैं तुम्हें ले जाता हूँ। तुम मेरी दीर्घायु संगिनी बनो। तुम सात पगों की सखा बनो। हम दोनों सात पगों के सखा बनें। मैं तुम्हारी मित्रता ग्रहण करता हूँ, तुम मेरी मित्रता ग्रहण करो।',
          en: 'For food I lead you. Be my companion of long life. Be the friend of seven steps. May we both be friends of seven steps. I accept your friendship; you accept my friendship.'
        },
        when: {
          hi: 'प्रथम पग के समय।',
          en: 'At the first step.'
        }
      },
      {
        id: 'saptapadi-4',
        sanskrit: 'ॐ ऊर्जे त्वा उपनये। सा मे भव सुखदायिनी।\nसखा सप्तपदी भव। चतुष्पदी भव सुखं मे देहि सर्वदा॥',
        transliteration: 'oṃ ūrje tvā upanaye | sā me bhava sukhadāyinī |\nsakhā saptapadī bhava | catuṣpadī bhava sukhaṃ me dehi sarvadā ||',
        meaning: {
          hi: 'ऊर्जा (सुख) की प्राप्ति के लिए मैं तुम्हें ले जाता हूँ। तुम मेरी सुखदायिनी बनो। सात पगों की सखा बनो। चार पगों की संगिनी बनो, मुझे सदा सुख दो।',
          en: 'For energy (happiness) I lead you. Be my giver of happiness. Be the friend of seven steps. Be the companion of four steps, always grant me happiness.'
        },
        when: {
          hi: 'चतुर्थ पग के समय।',
          en: 'At the fourth step.'
        }
      },
      {
        id: 'saptapadi-7',
        sanskrit: 'ॐ सखायौ सप्तपदा भवाव। सख्यं ते गृह्णामि। सख्यं मे गृह्णीष्व।\nसखा सप्तपदी भव। सा मे भव सखा जीवनस्य यावत्।\nसमानं पुत्रं विन्दावहै। बहु धनं सह भोजनं कुरवावहै॥',
        transliteration: 'oṃ sakhāyau saptapadā bhavāva | sakhyamā te gṛhṇāmi | sakhyamā me gṛhṇīṣva |\nsakhā saptapadī bhava | sā me bhava sakhā jīvanasya yāvat |\nsamānaṃ putraṃ vindāvahai | bahu dhanaṃ saha bhojanaṃ kuravāvahai ||',
        meaning: {
          hi: 'हम दोनों सात पगों के सखा बनें। मैं तुम्हारी मित्रता ग्रहण करता हूँ, तुम मेरी मित्रता ग्रहण करो। सात पगों की सखा बनो। जीवन पर्यन्त मेरी सखा बनो। हम समान पुत्र प्राप्त करें। बहुत धन, सह-भोजन और साथ जीवन व्यतीत करें।',
          en: 'May we both be friends of seven steps. I accept your friendship; accept my friendship. Be the friend of seven steps. Be my friend for the whole of life. May we obtain equal sons. May we enjoy great wealth, eat together, and live together.'
        },
        when: {
          hi: 'सप्तम पग के समय — विवाह की पूर्णता।',
          en: 'At the seventh step — completion of marriage.'
        }
      }
    ],
    significance: {
      hi: 'सप्तपदी के बाद विवाह अटूट माना जाता है। हिंदू विवाह अधिनियम 1955 की धारा 7 के अनुसार सप्तपदी ही विवाह की वैधता का आधार है। सात पगों के सात वचन जीवन के सात आयामों को समर्पित हैं।',
      en: 'After Saptapadi, marriage is considered unbreakable. Under Section 7 of the Hindu Marriage Act 1955, Saptapadi is the basis of marriage validity. The seven vows are dedicated to seven dimensions of life.'
    },
    duration: { hi: '15-20 मिनट', en: '15-20 minutes' }
  },
  {
    slug: 'agni-parinayana',
    title: { hi: 'अग्नि परिणयन', en: 'Agni Parinayana' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 5,
    shortDesc: {
      hi: 'वर-वधू द्वारा अग्नि की परिक्रमा और अग्नि-साक्षी विवाह।',
      en: 'Circumambulation of the sacred fire by the couple — fire-witnessed marriage.'
    },
    longDesc: {
      hi: 'अग्नि परिणयन में वर-वधू अग्नि को साक्षी बनाकर उसकी परिक्रमा करते हैं। अग्नि को सर्वाधिक पवित्र साक्षी माना जाता है जो जीवन पर्यन्त विवाह का साक्षी रहता है। मिथिला परंपरा में वधू प्रथम तीन परिक्रमा करती है और वर अंतिम चार। प्रत्येक परिक्रमा के साथ अग्नि देव से आशीर्वाद माँगा जाता है।',
      en: 'In Agni Parinayana, the couple circumambulates the fire with fire as witness. Fire is considered the holiest witness, present throughout married life. In Mithila tradition, the bride leads the first three rounds and the groom the last four. With each round, blessings are sought from Agni Deva.'
    },
    materials: [
      { hi: 'हवन कुंड, समिधा, घृत, अक्षत, दूर्वा', en: 'Havan kund, sacred wood, ghee, unbroken rice, durva' }
    ],
    steps: [
      { number: 1, title: { hi: 'अग्नि प्रज्वलन', en: 'Kindling the Fire' }, description: { hi: 'हवन कुंड में अग्नि प्रज्वलित की जाती है।', en: 'The sacred fire is kindled.' } },
      { number: 2, title: { hi: 'वधू की तीन परिक्रमा', en: 'Bride Three Rounds' }, description: { hi: 'वधू पहली तीन परिक्रमा कराती है।', en: 'The bride leads the first three rounds.' } },
      { number: 3, title: { hi: 'वर की चार परिक्रमा', en: 'Groom Four Rounds' }, description: { hi: 'वर अंतिम चार परिक्रमा करता है।', en: 'The groom leads the last four rounds.' } },
      { number: 4, title: { hi: 'अग्नि आशीर्वाद', en: 'Fire Blessing' }, description: { hi: 'अग्नि देव से आशीर्वाद माँगा जाता है।', en: 'Blessings are sought from Agni Deva.' } }
    ],
    mantras: [
      {
        id: 'agni-sakshi',
        sanskrit: 'ॐ अग्ने त्वं साक्षी मे भव सर्वदा।\nयथा त्वं ज्वलसि नित्यं तथैव मम मंगलं।\nसमानं पुत्रं विन्दावहै बहु धनं सह भोजनं कुरवावहै॥',
        transliteration: 'oṃ agne tvaṃ sākṣī me bhava sarvadā |\nyathā tvaṃ jvalasi nityaṃ tathаiva mama maṅgalaṃ |\nsamānaṃ putraṃ vindāvahai bahu dhanaṃ saha bhojanaṃ kuravāvahai ||',
        meaning: {
          hi: 'हे अग्नि! आप मेरे सदा साक्षी रहें। जैसे आप नित्य जलते हैं, वैसे ही मेरा मंगल हो। हम समान पुत्र प्राप्त करें, बहुत धन और सह-भोजन का सुख पाएँ।',
          en: 'O Agni! Always be my witness. As you burn eternally, so may my auspiciousness be eternal. May we obtain equal sons, and enjoy great wealth and shared meals.'
        },
        when: {
          hi: 'प्रत्येक परिक्रमा के समय।',
          en: 'At each circumambulation.'
        }
      }
    ],
    significance: {
      hi: 'अग्नि वैदिक परंपरा में सर्वोच्च साक्षी है। अग्नि-साक्षी विवाह को अटूट माना जाता है और यह गृहस्थ जीवन के यज्ञ का आरंभ है।',
      en: 'Fire is the supreme witness in Vedic tradition. A fire-witnessed marriage is considered unbreakable, and it is the beginning of the yajna of household life.'
    },
    duration: { hi: '15 मिनट', en: '15 minutes' }
  }
];