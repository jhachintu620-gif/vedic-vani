import type { KarmkandRitual } from './types';

export const postWeddingRituals: KarmkandRitual[] = [
  {
    slug: 'sindurdan',
    title: { hi: 'सिंदूरदान', en: 'Sindurdan' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'post-wedding',
    order: 1,
    shortDesc: {
      hi: 'वर द्वारा वधू की माँग में सिंदूर भरना — सौभाग्य का प्रतीक।',
      en: 'Groom applies vermilion to the bride parting — symbol of matrimony.'
    },
    longDesc: {
      hi: 'सिंदूरदान विवाह की पूर्णता का प्रतीक है। वर वधू की माँग में सिंदूर भरता है जो सौभाग्य, प्रेम और दांपत्य जीवन का प्रतीक है। मिथिला परंपरा में यह विधि अत्यंत शुभ मानी जाती है और इसे वधू के मंगल भाग्य का प्रतीक माना जाता है। सिंदूर के साथ वर वधू को मंगलसूत्र भी पहनाता है।',
      en: 'Sindurdan symbolizes the completion of marriage. The groom applies vermilion to the bride parting — a symbol of fortune, love, and married life. In Mithila tradition, this rite is considered especially auspicious and symbolizes the bride good fortune.'
    },
    materials: [
      { hi: 'सिंदूर, मंगलसूत्र, चूड़ी, कुमकुम, दर्पण', en: 'Vermilion, mangalsutra, bangles, kumkum, mirror' }
    ],
    steps: [
      { number: 1, title: { hi: 'मंगलसूत्र', en: 'Mangalsutra' }, description: { hi: 'वर वधू को मंगलसूत्र पहनाता है।', en: 'The groom puts the mangalsutra on the bride.' } },
      { number: 2, title: { hi: 'सिंदूर अर्पण', en: 'Sindoor Application' }, description: { hi: 'वर वधू की माँग में सिंदूर भरता है।', en: 'The groom applies vermilion to the bride parting.' } },
      { number: 3, title: { hi: 'चूड़ी अर्पण', en: 'Bangle Gift' }, description: { hi: 'वर वधू को चूड़ियाँ पहनाता है।', en: 'The groom puts bangles on the bride wrists.' } },
      { number: 4, title: { hi: 'दर्पण दर्शन', en: 'Mirror Viewing' }, description: { hi: 'दोनों दर्पण में एक-दूसरे को देखते हैं।', en: 'Both see each other in a mirror.' } }
    ],
    mantras: [
      {
        id: 'sindurdan',
        sanskrit: 'ॐ सौभाग्यं देहि मे देवि रूपं देहि श्रियं दिश।\nसिंदूरं धारयामि त्वं मंगलं भव सर्वदा॥',
        transliteration: 'oṃ saubhāgyaṃ dehi me devi rūpaṃ dehi śriyaṃ diśa |\nsindūraṃ dhārayāmi tvaṃ maṅgalaṃ bhava sarvadā ||',
        meaning: {
          hi: 'हे देवि! मुझे सौभाग्य दो, रूप दो, श्री दो। मैं तुम्हारे लिए सिंदूर धारण करता हूँ, तुम सदा मंगलमयी रहो।',
          en: 'O Goddess! Grant me good fortune, grant beauty, bestow prosperity. I apply this vermilion for you; may you always be auspicious.'
        },
        when: {
          hi: 'सिंदूर अर्पण के समय।',
          en: 'During the application of vermilion.'
        }
      }
    ],
    significance: {
      hi: 'सिंदूर भारतीय नारी के सौभाग्य और दांपत्य जीवन का सर्वोच्च प्रतीक है। इसके बाद वधू पूर्ण रूप से सुहागिन मानी जाती है।',
      en: 'Vermilion is the supreme symbol of an Indian woman good fortune and married life. After this, the bride is considered fully married.'
    },
    duration: { hi: '5 मिनट', en: '5 minutes' }
  },
  {
    slug: 'durbakshat',
    title: { hi: 'दूर्वाक्षत', en: 'Durbakshat' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'post-wedding',
    order: 2,
    shortDesc: {
      hi: 'वृद्ध ब्राह्मणों और परिजनों द्वारा अखंड चावल से आशीर्वाद।',
      en: 'Blessing with unbroken rice by elderly Brahmins and relatives.'
    },
    longDesc: {
      hi: 'दूर्वाक्षत विवाह का अत्यंत मंगलकारी अनुष्ठान है। वृद्ध ब्राह्मण, कुलगुरु और परिजन वर-वधू पर दूर्वा (दूब) और अखंड चावल (अक्षत) अर्पित करते हैं और "दूर्वाक्षत मंत्र" का उच्चारण करते हैं। यह आशीर्वाद के रूप में वर-वधू को दीर्घायु, संतान, धन और सौभाग्य की कामना का प्रतीक है। मिथिला परंपरा में यह विधि विवाह की पूर्णता के बाद अनिवार्य है।',
      en: 'Durbakshat is a highly auspicious post-wedding ritual. Elderly Brahmins, the family priest, and relatives offer durva (grass) and unbroken rice (akshat) on the couple, chanting the Durbakshat mantra. This blessing symbolizes wishes for long life, children, wealth, and good fortune.'
    },
    materials: [
      { hi: 'दूर्वा (दूब), अखंड चावल (अक्षत), पुष्प, हल्दी', en: 'Durva grass, unbroken rice, flowers, turmeric' }
    ],
    steps: [
      { number: 1, title: { hi: 'दूर्वा-अक्षत तैयार', en: 'Prepare Durva-Akshat' }, description: { hi: 'दूर्वा और अखंड चावल मिलाए जाते हैं।', en: 'Durva and unbroken rice are mixed.' } },
      { number: 2, title: { hi: 'आशीर्वाद अर्पण', en: 'Blessing' }, description: { hi: 'वृद्ध ब्राह्मण वर-वधू पर दूर्वाक्षत अर्पित करते हैं।', en: 'Elderly Brahmins offer durva-akshat on the couple.' } },
      { number: 3, title: { hi: 'मंत्रोच्चार', en: 'Mantra Chanting' }, description: { hi: 'दूर्वाक्षत मंत्र का उच्चारण किया जाता है।', en: 'The Durbakshat mantra is chanted.' } },
      { number: 4, title: { hi: 'प्रणाम', en: 'Salutations' }, description: { hi: 'वर-वधू बड़ों को प्रणाम करते हैं।', en: 'The couple bows to the elders.' } }
    ],
    mantras: [
      {
        id: 'durbakshat',
        sanskrit: 'ॐ दूर्वाक्षतैः सुगंधाढ्यैः समस्तैः सुमनोहरैः।\nआशीर्भिर्भव दीर्घायुः पुत्रपौत्रसमन्वितः॥\nदूर्वायाः पर्णं क्षीरेण मिश्रितं यत् सुखप्रदम्।\nतत्ते सौभाग्यजननं भवत्वायुष्यवर्धनम्॥',
        transliteration: 'oṃ dūrvākṣataiḥ sugandhāḍhyaiḥ samastaiḥ sumanoharaiḥ |\nāśīrbhirbhava dīrghāyuḥ putrapautrasamanvitaḥ ||\ndūrvāyāḥ parṇaṃ kṣīreṇa miśritaṃ yat sukhapradam |\ntatte saubhāgyajananaṃ bhavatvāyuṣyavardhanam ||',
        meaning: {
          hi: 'सुगंधित दूर्वा और अक्षत से आशीर्वाद — दीर्घायु हो, पुत्र-पौत्रों से युक्त हो। दूर्वा और दूध से युक्त जो सुखप्रद है, वह सौभाग्य और आयु बढ़ाने वाला हो।',
          en: 'Blessings with fragrant durva and unbroken rice — may you have long life, blessed with sons and grandsons. May that which is joyful with durva and milk increase good fortune and lifespan.'
        },
        when: {
          hi: 'आशीर्वाद के समय सामूहिक रूप से।',
          en: 'During collective blessing.'
        }
      }
    ],
    significance: {
      hi: 'दूर्वा और अक्षत हिंदू संस्कारों में सर्वाधिक पवित्र माने जाते हैं। दूर्वा दीर्घायु और अक्षत अटूट सौभाग्य का प्रतीक है।',
      en: 'Durva and unbroken rice are considered the holiest in Hindu rituals. Durva represents long life and akshat represents unbroken good fortune.'
    },
    duration: { hi: '10 मिनट', en: '10 minutes' }
  },
  {
    slug: 'chumavan',
    title: { hi: 'चुमावन', en: 'Chumavan' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'post-wedding',
    order: 3,
    shortDesc: {
      hi: 'वधू के घर से विदाई से पूर्व अंतिम मंगल विधि और समदाउन गीत।',
      en: 'Final auspicious rite before bride departure, with Samdaun songs.'
    },
    longDesc: {
      hi: 'चुमावन विवाह का अंतिम और अत्यंत भावुक अनुष्ठान है। वधू के घर से विदाई से पूर्व वृद्ध स्त्रियाँ वर-वधू को आशीर्वाद देती हैं और पारंपरिक मैथिली लोकगीत "समदाउन गीत" या "चुमावन गीत" गाती हैं। इन गीतों में वधू के मायके से विदा होने का करुण भाव व्यक्त होता है और वर-वधू को सुखी जीवन की शुभकामना दी जाती है।',
      en: 'Chumavan is the final and most emotional ritual of marriage. Before the bride departure from her home, elderly women bless the couple and sing traditional Maithili folk songs called "Samdaun Geet" or "Chumavan Geet". These songs express the pathos of the bride leaving her maternal home and wish the couple a happy life.'
    },
    materials: [
      { hi: 'आरती थाली, दीप, पुष्प, मिष्ठान्न, दूध', en: 'Aarti plate, lamp, flowers, sweets, milk' }
    ],
    steps: [
      { number: 1, title: { hi: 'विदाई आरती', en: 'Farewell Aarti' }, description: { hi: 'वृद्ध स्त्रियाँ वर-वधू की आरती करती हैं।', en: 'Elderly women perform aarti of the couple.' } },
      { number: 2, title: { hi: 'समदाउन गीत', en: 'Samdaun Songs' }, description: { hi: 'पारंपरिक मैथिली लोकगीत गाए जाते हैं।', en: 'Traditional Maithili folk songs are sung.' } },
      { number: 3, title: { hi: 'आशीर्वाद', en: 'Blessing' }, description: { hi: 'वृद्ध स्त्रियाँ वर-वधू को आशीर्वाद देती हैं।', en: 'Elderly women bless the couple.' } },
      { number: 4, title: { hi: 'विदाई', en: 'Farewell' }, description: { hi: 'वधू अपने मायके से विदा होती है।', en: 'The bride departs from her maternal home.' } }
    ],
    mantras: [
      {
        id: 'vidai',
        sanskrit: 'ॐ यथा गच्छसि कल्याणि शुभं ते पन्थानं शिवम्।\nमंगलं ते सदा भूयात् सुखं ते सर्वदा भवेत्॥',
        transliteration: 'oṃ yathā gacchasi kalyāṇi śubhaṃ te panthānaṃ śivam |\nmaṅgalaṃ te sadā bhūyāt sukhaṃ te sarvadā bhavet ||',
        meaning: {
          hi: 'हे कल्याणी! जैसे तुम जा रही हो, तुम्हारा मार्ग शुभ और शिवमय हो। तुम्हारा सदा मंगल हो, सदा सुख हो।',
          en: 'O auspicious one! As you depart, may your path be auspicious and blessed. May you always have auspiciousness, may you always have happiness.'
        },
        when: {
          hi: 'विदाई के समय वृद्ध स्त्रियों द्वारा।',
          en: 'Recited by elderly women at the time of departure.'
        }
      }
    ],
    significance: {
      hi: 'चुमावन मैथिल परंपरा का अनूठा अनुष्ठान है जो विवाह को भावनात्मक और सांस्कृतिक गहराई देता है। समदाउन गीत मैथिली लोक-संस्कृति की अमूल्य धरोहर हैं।',
      en: 'Chumavan is a unique Maithil ritual that gives marriage emotional and cultural depth. Samdaun songs are an invaluable heritage of Maithili folk culture.'
    },
    duration: { hi: '30-60 मिनट', en: '30-60 minutes' }
  },
  {
    slug: 'griha-pravesh',
    title: { hi: 'गृह प्रवेश', en: 'Griha Pravesh' },
    category: 'vivah',
    tradition: 'maithil',
    phase: 'post-wedding',
    order: 4,
    shortDesc: {
      hi: 'वधू का पहली बार वर के घर में प्रवेश — समृद्धि का प्रतीक।',
      en: 'Bride first entry into the groom home — symbol of prosperity.'
    },
    longDesc: {
      hi: 'गृह प्रवेश वधू का पहली बार वर के घर में प्रवेश करने का अनुष्ठान है। घर के दरवाज़े पर अनाज से भरा पात्र रखा जाता है। वधू अपने दाहिने पैर से उस पात्र को हल्का स्पर्श करके अंदर गिराती है — यह समृद्धि और ऐश्वर्य के आगमन का प्रतीक है। मिथिला परंपरा में यह विधि अत्यंत महत्वपूर्ण मानी जाती है और इसे "लक्ष्मी का गृह प्रवेश" कहा जाता है।',
      en: 'Griha Pravesh is the ritual of the bride first entry into the groom home. A vessel of grain is placed at the door. The bride gently tips it inside with her right foot — symbolizing the arrival of prosperity and abundance. In Mithila tradition, this rite is considered very important and called "the entry of Lakshmi into the home".'
    },
    materials: [
      { hi: 'अनाज/चावल से भरा पात्र, घृत दीप, पुष्प, कुमकुम, मंगल कलश', en: 'Vessel of grain/rice, ghee lamp, flowers, kumkum, auspicious kalash' }
    ],
    steps: [
      { number: 1, title: { hi: 'कलश स्थापन', en: 'Kalash Placement' }, description: { hi: 'दरवाज़े पर मंगल कलश स्थापित किया जाता है।', en: 'Auspicious kalash is placed at the door.' } },
      { number: 2, title: { hi: 'अनाज पात्र', en: 'Grain Vessel' }, description: { hi: 'अनाज से भरा पात्र दरवाज़े पर रखा जाता है।', en: 'A vessel filled with grain is placed at the door.' } },
      { number: 3, title: { hi: 'दाहिना पैर', en: 'Right Foot' }, description: { hi: 'वधू अपने दाहिने पैर से पात्र को गिराती है।', en: 'The bride tips the vessel with her right foot.' } },
      { number: 4, title: { hi: 'गृह प्रवेश', en: 'Entry' }, description: { hi: 'वधू गृह में प्रवेश करती है।', en: 'The bride enters the home.' } },
      { number: 5, title: { hi: 'कुलदेवी दर्शन', en: 'Kuldevi Darshan' }, description: { hi: 'वधू कुलदेवी के दर्शन करती है।', en: 'The bride sees the family goddess.' } }
    ],
    mantras: [
      {
        id: 'griha-pravesh',
        sanskrit: 'ॐ श्रिये जातः श्रिय आनिर्याय श्रियं वहसि।\nश्रियं जातो अश्विनोः श्रियं वहसि।\nश्रियमानय गृहान् श्रियं मे देहि सर्वदा॥',
        transliteration: 'oṃ śriye jātaḥ śriya ānirīyāya śriyaṃ vahasi |\nśriyaṃ jāto aśvinoḥ śriyaṃ vahasi |\nśriyamānaya gṛhān śriyaṃ me dehi sarvadā ||',
        meaning: {
          hi: 'श्री के लिए जन्मे हो, श्री के लिए आए हो, श्री को धारण करते हो। अश्विनों की श्री को धारण करते हो। श्री को घर में लाओ, मुझे सदा श्री दो।',
          en: 'Born for Shri, come for Shri, you carry Shri. You carry the Shri of the Ashvins. Bring Shri into the home, always grant me Shri (prosperity).'
        },
        when: {
          hi: 'गृह प्रवेश के समय।',
          en: 'During Griha Pravesh.'
        }
      }
    ],
    significance: {
      hi: 'गृह प्रवेश के बाद वधू पूर्ण रूप से वर के परिवार की सदस्य बन जाती है। इसे "लक्ष्मी का आगमन" कहा जाता है जो घर में सुख, समृद्धि और संतान का प्रतीक है।',
      en: 'After Griha Pravesh, the bride becomes a full member of the groom family. It is called the "arrival of Lakshmi" — symbol of happiness, prosperity, and progeny in the home.'
    },
    duration: { hi: '15-20 मिनट', en: '15-20 minutes' }
  }
];