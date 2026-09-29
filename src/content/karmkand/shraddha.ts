import type { KarmkandRitual } from './types';

export const shraddhaRituals: KarmkandRitual[] = [
  {
    slug: 'shraddha-intro',
    title: { hi: 'श्राद्ध — परिचय', en: 'Shraddha — Introduction' },
    category: 'shraddha',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 1,
    shortDesc: {
      hi: 'पितृऋण से मुक्ति का संस्कार — मृत पूर्वजों को तृप्त करने की विधि।',
      en: 'Ritual of freeing from ancestral debt — method of satisfying deceased ancestors.'
    },
    longDesc: {
      hi: 'श्राद्ध का अर्थ है "श्रद्धा के साथ किया गया"। यह उन पूर्वजों के लिए किया जाता है जो मर चुके हैं और पितृलोक में निवास करते हैं। मिथिला परंपरा में श्राद्ध अत्यंत महत्वपूर्ण है। श्राद्ध पितृ-ऋण से मुक्ति का साधन है और इसे "पितृ यज्ञ" भी कहा जाता है। हिन्दू धर्म में पितृ पक्ष (भाद्रपद कृष्ण पक्ष) में श्राद्ध अनिवार्य माना जाता है। श्राद्ध में ब्राह्मणों को भोजन, दान, तर्पण और पिंडदान किया जाता है।',
      en: 'Shraddha means "done with faith". It is performed for ancestors who have passed away and reside in Pitriloka. In Mithila tradition, Shraddha is extremely important. Shraddha is the means of release from ancestral debt and is also called "Pitru Yajna". In Hinduism, Shraddha during Pitru Paksha (Bhadrapada Krishna Paksha) is considered obligatory. Shraddha involves feeding Brahmins, donation, tarpana, and pindadana.'
    },
    materials: [
      { hi: 'कुशा, तिल, जौ, जल, चावल, दूध, पुष्प, ब्राह्मण भोजन', en: 'Kusha grass, sesame, barley, water, rice, milk, flowers, Brahmin meal' }
    ],
    steps: [
      { number: 1, title: { hi: 'संकल्प', en: 'Resolve' }, description: { hi: 'पितृ-निमित्त संकल्प लिया जाता है।', en: 'A resolve is made for the ancestors.' } },
      { number: 2, title: { hi: 'देव-तर्पण', en: 'Deva Tarpana' }, description: { hi: 'देवताओं को तर्पण किया जाता है।', en: 'Tarpana is offered to the gods.' } },
      { number: 3, title: { hi: 'ऋषि-तर्पण', en: 'Rishi Tarpana' }, description: { hi: 'ऋषियों को तर्पण किया जाता है।', en: 'Tarpana is offered to the sages.' } },
      { number: 4, title: { hi: 'पितृ-तर्पण', en: 'Pitru Tarpana' }, description: { hi: 'पितरों को जल-तिल अर्पित।', en: 'Water-sesame is offered to the ancestors.' } },
      { number: 5, title: { hi: 'पिंडदान', en: 'Pindadana' }, description: { hi: 'पिंड (चावल का गोला) अर्पित किया जाता है।', en: 'Pinda (rice ball) is offered.' } },
      { number: 6, title: { hi: 'ब्राह्मण भोजन', en: 'Brahmin Meal' }, description: { hi: 'ब्राह्मणों को भोजन कराया जाता है।', en: 'Brahmins are fed.' } }
    ],
    mantras: [
      {
        id: 'tarpana',
        sanskrit: 'ॐ ये समानाः समनसो जीवा जीवानां मिथः।\nतेषां श्रीर्मयि कल्पताम्।\nॐ पितृभ्यः स्वधा नमः॥',
        transliteration: 'oṃ ye samānāḥ samanaso jīvā jīvānāṃ mithaḥ |\nteṣāṃ śrīrmayi kalpatām |\noṃ pitṛbhyaḥ svadhā namaḥ ||',
        meaning: {
          hi: 'जो समान मन वाले जीव एक साथ हैं, उनकी श्री मुझमें प्रकट हो। ॐ पितरों को स्वधा नमस्कार।',
          en: 'May the prosperity of those equal-minded beings who dwell together come to me. Om, Svadha salutations to the ancestors.'
        },
        when: {
          hi: 'पितृ-तर्पण के समय।',
          en: 'During Pitru Tarpana.'
        }
      }
    ],
    significance: {
      hi: 'श्राद्ध पितृ-ऋण से मुक्ति का साधन है। मान्यता है कि श्राद्ध न करने से पितर अतृप्त रहते हैं और संतान को कष्ट देते हैं। श्राद्ध करने से पितर तृप्त होते हैं और संतान को आशीर्वाद देते हैं।',
      en: 'Shraddha is the means of release from ancestral debt. It is believed that without Shraddha, ancestors remain unsatisfied and cause suffering to descendants. Through Shraddha, ancestors are satisfied and bless the descendants.'
    },
    duration: { hi: '2-4 घंटे', en: '2-4 hours' }
  },
  {
    slug: 'pindadan',
    title: { hi: 'पिंडदान', en: 'Pindadana' },
    category: 'shraddha',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 2,
    shortDesc: {
      hi: 'पितरों को पिंड (चावल का गोला) अर्पित करना — सर्वाधिक महत्वपूर्ण कर्म।',
      en: 'Offering pinda (rice ball) to ancestors — the most important act.'
    },
    longDesc: {
      hi: 'पिंडदान श्राद्ध का सर्वाधिक महत्वपूर्ण कर्म है। "पिंड" का अर्थ है शरीर — पितरों को नया शरीर देने का प्रतीक। चावल, जौ, तिल और दूध से पिंड बनाए जाते हैं। मिथिला परंपरा में गया, प्रयाग, और बद्रीनाथ में पिंडदान विशेष रूप से महत्वपूर्ण माना जाता है। पितरों की संख्या के अनुसार पिंड बनाए जाते हैं — पिता के लिए 1, दादा के लिए 2, परदादा के लिए 3।',
      en: 'Pindadana is the most important act of Shraddha. "Pinda" means body — it symbolizes giving a new body to the ancestors. Pindas are made from rice, barley, sesame, and milk. In Mithila tradition, Pindadana at Gaya, Prayag, and Badrinath is considered especially important. Pindas are made according to the number of ancestors — 1 for father, 2 for grandfather, 3 for great-grandfather.'
    },
    materials: [
      { hi: 'चावल, जौ, तिल, दूध, कुशा, ताम्रपात्र', en: 'Rice, barley, sesame, milk, kusha grass, copper vessel' }
    ],
    steps: [
      { number: 1, title: { hi: 'पिंड निर्माण', en: 'Pinda Preparation' }, description: { hi: 'चावल, जौ, तिल, दूध से पिंड बनाए जाते हैं।', en: 'Pindas are made from rice, barley, sesame, milk.' } },
      { number: 2, title: { hi: 'दिशा निर्धारण', en: 'Direction Placement' }, description: { hi: 'पितरों की दिशा दक्षिण में पिंड रखे जाते हैं।', en: 'Pindas are placed facing south — the direction of ancestors.' } },
      { number: 3, title: { hi: 'पिंड अर्पण', en: 'Pinda Offering' }, description: { hi: 'प्रत्येक पितर को पिंड अर्पित किया जाता है।', en: 'Pinda is offered to each ancestor.' } },
      { number: 4, title: { hi: 'कुशा पात्र', en: 'Kusha Vessel' }, description: { hi: 'कुशा के पात्र में पिंड रखे जाते हैं।', en: 'Pindas are placed on a kusha vessel.' } },
      { number: 5, title: { hi: 'दान', en: 'Donation' }, description: { hi: 'पिंड ब्राह्मणों को दान किए जाते हैं।', en: 'Pindas are donated to Brahmins.' } }
    ],
    mantras: [
      {
        id: 'pindadan',
        sanskrit: 'ॐ उदीरतामवर उत्परास उन्मध्यमाः पितरः सोम्यासः।\nअसुं य ईयुरवृका ऋतज्ञास्ते नो ऽवन्तु पितरो हवेषु॥',
        transliteration: 'oṃ udīratāmavara utparāsa unmadhyamāḥ pitaraḥ somyāsaḥ |\nasuṃ ya īyuravṛkā ṛtajñāste no avantu pitaro haveṣu ||',
        meaning: {
          hi: 'निम्न, उच्च और मध्यम पितर उठें, जो सोम्य हैं। जो ऋतज्ञ, अवृक (हिंसा-रहित) हैं, वे पितर हमारे हवन में हमारी रक्षा करें।',
          en: 'May the lower, higher, and middle ancestors arise — those who are gentle. Those who know the truth, who are free from violence — may those ancestors protect us in our offerings.'
        },
        when: {
          hi: 'पिंड अर्पण के समय।',
          en: 'During Pinda offering.'
        }
      }
    ],
    significance: {
      hi: 'पिंडदान से पितरों को नया शरीर मिलता है और वे तृप्त होते हैं। पिंडदान के बिना श्राद्ध अपूर्ण माना जाता है। गया में पिंडदान को सर्वश्रेष्ठ माना जाता है — "गयायां पिंडदानं च" — यह पितरों को मोक्ष देता है।',
      en: 'Through Pindadana, ancestors receive a new body and are satisfied. Without Pindadana, Shraddha is considered incomplete. Pindadana at Gaya is considered supreme — "Gayayam Pindadanam" — it grants liberation to ancestors.'
    },
    duration: { hi: '1 घंटा', en: '1 hour' }
  },
  {
    slug: 'pitru-paksha',
    title: { hi: 'पितृ पक्ष श्राद्ध', en: 'Pitru Paksha Shraddha' },
    category: 'shraddha',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 3,
    shortDesc: {
      hi: 'भाद्रपद कृष्ण पक्ष में पितरों का वार्षिक श्राद्ध।',
      en: 'Annual Shraddha for ancestors in Bhadrapada Krishna Paksha.'
    },
    longDesc: {
      hi: 'पितृ पक्ष (भाद्रपद कृष्ण पक्ष) में 15 दिनों तक पितरों का श्राद्ध किया जाता है। यह पितरों के लिए सबसे पवित्र समय माना जाता है जब वे पृथ्वी पर आते हैं और संतान से श्राद्ध स्वीकार करते हैं। मिथिला परंपरा में प्रत्येक पितृ की मृत्यु तिथि के अनुसार श्राद्ध किया जाता है — इसे "तिथि श्राद्ध" कहते हैं। जिनकी तिथि ज्ञात न हो उनका श्राद्ध अमावस्या को किया जाता है।',
      en: 'During Pitru Paksha (Bhadrapada Krishna Paksha), Shraddha is performed for 15 days. This is considered the holiest time for ancestors when they come to earth and accept Shraddha from descendants. In Mithila tradition, Shraddha is performed according to each ancestor\'s death tithi — called "Tithi Shraddha". Those whose tithi is unknown receive Shraddha on Amavasya.'
    },
    materials: [
      { hi: 'पूर्ण श्राद्ध सामग्री — कुशा, तिल, चावल, दूध, ब्राह्मण भोजन', en: 'Complete Shraddha materials — kusha, sesame, rice, milk, Brahmin meal' }
    ],
    steps: [
      { number: 1, title: { hi: 'पूर्व संध्या', en: 'Previous Evening' }, description: { hi: 'श्राद्ध से एक दिन पूर्व निमंत्रण।', en: 'Invitation is given the day before.' } },
      { number: 2, title: { hi: 'स्नान-संकल्प', en: 'Bath & Resolve' }, description: { hi: 'प्रातः स्नान के बाद संकल्प।', en: 'After morning bath, resolve is made.' } },
      { number: 3, title: { hi: 'पितृ आवाहन', en: 'Ancestor Invocation' }, description: { hi: 'पितरों का आवाहन किया जाता है।', en: 'Ancestors are invoked.' } },
      { number: 4, title: { hi: 'तर्पण-पिंडदान', en: 'Tarpana & Pinda' }, description: { hi: 'तर्पण और पिंडदान किया जाता है।', en: 'Tarpana and Pindadana are performed.' } },
      { number: 5, title: { hi: 'ब्राह्मण भोजन', en: 'Brahmin Meal' }, description: { hi: 'ब्राह्मणों को भोजन कराया जाता है।', en: 'Brahmins are fed.' } },
      { number: 6, title: { hi: 'विसर्जन', en: 'Farewell' }, description: { hi: 'पितरों को विदा किया जाता है।', en: 'Ancestors are given farewell.' } }
    ],
    mantras: [
      {
        id: 'pitru-vandana',
        sanskrit: 'ॐ आयातु पितरः सोम्या गन्धर्वैः सह चारणैः।\nइमं यज्ञं स्वधाभाजः पितरः सन्तु मे प्रियाः॥',
        transliteration: 'oṃ āyātu pitaraḥ somyā gandharvaiḥ saha cāraṇaiḥ |\nimaṃ yajñaṃ svadhābhājaḥ pitaraḥ santu me priyāḥ ||',
        meaning: {
          hi: 'सोम्य पितर गंधर्वों और चारणों सहित आएँ। इस यज्ञ में स्वधा के भागी पितर मुझे प्रिय हों।',
          en: 'May the gentle ancestors come with Gandharvas and Charanas. May the ancestors, sharers of Svadha in this sacrifice, be dear to me.'
        },
        when: {
          hi: 'पितृ आवाहन के समय।',
          en: 'During ancestor invocation.'
        }
      }
    ],
    significance: {
      hi: 'पितृ पक्ष पितरों के लिए सर्वाधिक पवित्र समय है। मान्यता है कि इस समय पितर पृथ्वी पर आते हैं और संतान से श्राद्ध स्वीकार करते हैं। श्राद्ध न करने से पितर रुष्ट होते हैं और संतान को कष्ट देते हैं।',
      en: 'Pitru Paksha is the holiest time for ancestors. It is believed that during this time, ancestors come to earth and accept Shraddha from descendants. Not performing Shraddha angers the ancestors, causing suffering to descendants.'
    },
    duration: { hi: '15 दिन', en: '15 days' }
  },
  {
    slug: 'shraddha-brahmin-bhojan',
    title: { hi: 'ब्राह्मण भोजन', en: 'Brahmin Bhojan' },
    category: 'shraddha',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 4,
    shortDesc: {
      hi: 'ब्राह्मणों को भोजन कराकर पितरों को तृप्त करना।',
      en: 'Feeding Brahmins to satisfy ancestors through them.'
    },
    longDesc: {
      hi: 'ब्राह्मण भोजन श्राद्ध का अत्यंत महत्वपूर्ण अंग है। मान्यता है कि ब्राह्मणों के रूप में पितर स्वयं भोजन ग्रहण करते हैं। मिथिला परंपरा में "महापात्र" ब्राह्मणों को विशेष रूप से आमंत्रित किया जाता है। भोजन में विशेष रूप से खीर, पूरी, हलवा, और मिठाई होती है। भोजन के बाद ब्राह्मणों को दक्षिणा, वस्त्र और फल अर्पित किए जाते हैं। भोजन के बाद "पितरों को तृप्त किया गया" का संकल्प लिया जाता है।',
      en: 'Brahmin Bhojan is an extremely important part of Shraddha. It is believed that ancestors themselves accept the food in the form of Brahmins. In Mithila tradition, "Mahapatra" Brahmins are especially invited. The meal especially includes kheer, puri, halwa, and sweets. After the meal, Brahmins are given dakshina, clothes, and fruits. After the meal, a resolve is made: "The ancestors have been satisfied."'
    },
    materials: [
      { hi: 'खीर, पूरी, हलवा, मिठाई, फल, वस्त्र, दक्षिणा', en: 'Kheer, puri, halwa, sweets, fruits, clothes, dakshina' }
    ],
    steps: [
      { number: 1, title: { hi: 'ब्राह्मण आमंत्रण', en: 'Brahmin Invitation' }, description: { hi: 'ब्राह्मणों को आमंत्रित किया जाता है।', en: 'Brahmins are invited.' } },
      { number: 2, title: { hi: 'पाद्य-अर्घ्य', en: 'Water Offering' }, description: { hi: 'ब्राह्मणों को पाद्य-अर्घ्य अर्पित।', en: 'Water is offered to Brahmins.' } },
      { number: 3, title: { hi: 'भोजन परोसना', en: 'Serving Food' }, description: { hi: 'खीर, पूरी, हलवा आदि परोसा जाता है।', en: 'Kheer, puri, halwa are served.' } },
      { number: 4, title: { hi: 'दक्षिणा', en: 'Dakshina' }, description: { hi: 'दक्षिणा, वस्त्र अर्पित किए जाते हैं।', en: 'Dakshina and clothes are offered.' } },
      { number: 5, title: { hi: 'तृप्ति संकल्प', en: 'Satisfaction Vow' }, description: { hi: '"पितर तृप्त हुए" का संकल्प।', en: 'The vow "ancestors are satisfied" is taken.' } }
    ],
    mantras: [
      {
        id: 'brahmin-bhojan',
        sanskrit: 'ॐ ब्राह्मणा भोजनं गृह्णन्तु पितरश्च सुतृप्तये।\nतेभ्यः स्वधा नमस्कारा मम पितॄन् सदा तर्पयन्तु॥',
        transliteration: 'oṃ brāhmaṇā bhojanaṃ gṛhṇantu pitaraśca sutṛptaye |\ntebhyaḥ svadhā namaskārā mama pitṝn sadā tarpayantu ||',
        meaning: {
          hi: 'ब्राह्मण भोजन ग्रहण करें, पितर संतुष्ट हों। उन्हें स्वधा नमस्कार — वे मेरे पितरों को सदा तृप्त करें।',
          en: 'May Brahmins accept the food, may ancestors be fully satisfied. Svadha salutations to them — may they always satisfy my ancestors.'
        },
        when: {
          hi: 'ब्राह्मण भोजन से पूर्व।',
          en: 'Before the Brahmin meal.'
        }
      }
    ],
    significance: {
      hi: 'ब्राह्मण भोजन श्राद्ध का सर्वोच्च कर्म माना जाता है। "अन्नं ब्रह्म" — अन्न ही ब्रह्म है। ब्राह्मणों को भोजन कराने से पितर तृप्त होते हैं और संतान को आशीर्वाद देते हैं। यह "पितृ यज्ञ" का सर्वोच्च अंग है।',
      en: 'Brahmin Bhojan is considered the supreme act of Shraddha. "Annam Brahma" — food is Brahman. Feeding Brahmins satisfies ancestors and they bless descendants. This is the supreme part of "Pitru Yajna".'
    },
    duration: { hi: '1-2 घंटे', en: '1-2 hours' }
  },
  {
    slug: 'shraddha-farewell',
    title: { hi: 'पितृ विसर्जन', en: 'Pitru Visarjan' },
    category: 'shraddha',
    tradition: 'maithil',
    phase: 'post-wedding',
    order: 5,
    shortDesc: {
      hi: 'पितरों को विदा करना — श्राद्ध की समाप्ति।',
      en: 'Bidding farewell to ancestors — conclusion of Shraddha.'
    },
    longDesc: {
      hi: 'पितृ विसर्जन श्राद्ध का अंतिम कर्म है। पितरों को तृप्त करने के बाद उन्हें विदा किया जाता है। "अतिथि देवो भव" — पितर अतिथि हैं, उन्हें सम्मान के साथ विदा किया जाता है। मिथिला परंपरा में पितरों को "यथास्थान गच्छत" कहकर विदा किया जाता है। विदाई के समय पितरों से प्रार्थना की जाती है कि वे अगले वर्ष पुनः आएँ और संतान पर कृपा बनाए रखें।',
      en: 'Pitru Visarjan is the final act of Shraddha. After satisfying the ancestors, they are bid farewell. "Atithi Devo Bhava" — ancestors are guests, and they are farewelled with respect. In Mithila tradition, ancestors are bid farewell saying "Yathasthanam gachhata" (depart to your respective places). At farewell, ancestors are requested to come again next year and keep blessing the descendants.'
    },
    materials: [
      { hi: 'दीप, अगरबत्ती, पुष्प, दूर्वा, अक्षत', en: 'Lamp, incense, flowers, durva, unbroken rice' }
    ],
    steps: [
      { number: 1, title: { hi: 'प्रार्थना', en: 'Prayer' }, description: { hi: 'पितरों से पुनः आने की प्रार्थना।', en: 'Ancestors are requested to return next time.' } },
      { number: 2, title: { hi: 'दीप अर्पण', en: 'Lamp Offering' }, description: { hi: 'दीप अर्पित किया जाता है।', en: 'A lamp is offered.' } },
      { number: 3, title: { hi: 'विसर्जन', en: 'Farewell' }, description: { hi: '"यथास्थानं गच्छत" कहकर विदा।', en: 'Farewell with "Yathasthanam gachhata".' } },
      { number: 4, title: { hi: 'प्रसाद वितरण', en: 'Prasad Distribution' }, description: { hi: 'प्रसाद वितरित किया जाता है।', en: 'Prasad is distributed.' } }
    ],
    mantras: [
      {
        id: 'visarjan',
        sanskrit: 'ॐ यथास्थानं गच्छत पितरः सुतृप्ताः सन्तु सर्वदा।\nपुनरागमनं कुरुध्वं मम सौख्याय सर्वदा॥',
        transliteration: 'oṃ yathāsthānaṃ gacchata pitaraḥ sutṛptāḥ santu sarvadā |\npunrāgamanaṃ kurudhvaṃ mama saukhyāya sarvadā ||',
        meaning: {
          hi: 'हे पितर! अपने-अपने स्थान को जाइए, सदा तृप्त रहिए। मेरे सुख के लिए सदा पुनरागमन कीजिए।',
          en: 'O ancestors! Go to your respective places, always remain satisfied. Always return for my happiness.'
        },
        when: {
          hi: 'विसर्जन के समय।',
          en: 'During farewell.'
        }
      }
    ],
    significance: {
      hi: 'पितृ विसर्जन से श्राद्ध की पूर्णता होती है। पितर तृप्त होकर पितृलोक लौट जाते हैं और संतान को आशीर्वाद देते हैं। यह "अतिथि सत्कार" की परंपरा का सर्वोच्च उदाहरण है।',
      en: 'Pitru Visarjan completes the Shraddha. Ancestors, satisfied, return to Pitriloka and bless the descendants. This is the supreme example of "Atithi Satkar" (guest hospitality) tradition.'
    },
    duration: { hi: '15 मिनट', en: '15 minutes' }
  }
];