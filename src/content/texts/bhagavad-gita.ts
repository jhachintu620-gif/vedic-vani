import type { TextMeta } from './types';

export const bhagavadGita: TextMeta = {
  slug: 'bhagavad-gita',
  title: { hi: 'भगवद्गीता', en: 'Bhagavad Gita', sa: 'भगवद्गीता' },
  type: 'gita',
  deity: 'krishna',
  language: 'sa',
  description: {
    hi: 'श्रीकृष्ण द्वारा अर्जुन को दिया गया ज्ञान — 18 अध्याय, 700 श्लोक। सनातन धर्म का सार।',
    en: 'The wisdom given by Shri Krishna to Arjuna — 18 chapters, 700 verses. The essence of Sanatana Dharma.'
  },
  source: 'Bhagavad Gita (public domain)', license: 'Public Domain', verseCount: 18,
  verses: [
    { id: 'ch1', order: 1, meter: 'अध्याय 1 — अर्जुनविषादयोग',
      sanskrit: 'धृतराष्ट्र उवाच।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥',
      transliteration: 'dhṛtarāṣṭra uvāca |\ndharmakṣetre kurukṣetre samavetā yuyutsavaḥ |\nmāmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||',
      translations: {
        hi: 'धृतराष्ट्र ने कहा — हे संजय! धर्मक्षेत्र कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे पुत्रों और पांडु पुत्रों ने क्या किया?',
        en: 'Dhritarashtra said — O Sanjaya, in the field of dharma, Kurukshetra, gathered for battle, what did my sons and the sons of Pandu do?'
      }
    },
    { id: 'ch2', order: 2, meter: 'अध्याय 2 — सांख्ययोग',
      sanskrit: 'नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥',
      transliteration: 'nainaṃ chindanti śastrāṇi nainaṃ dahati pāvakaḥ |\nna cainaṃ kledayantyāpo na śoṣayati mārutaḥ ||',
      translations: {
        hi: 'आत्मा को शस्त्र नहीं काट सकते, अग्नि नहीं जला सकती, जल नहीं भिगो सकता, वायु नहीं सुखा सकती।',
        en: 'Weapons cannot cut the Self, fire cannot burn it, water cannot wet it, wind cannot dry it.'
      }
    },
    { id: 'ch3', order: 3, meter: 'अध्याय 3 — कर्मयोग',
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      transliteration: 'karmaṇyevādhikāraste mā phaleṣu kadācana |\nmā karmaphalaheturbhūrmā te saṅgo astvakarmaṇi ||',
      translations: {
        hi: 'कर्म करने में ही तुम्हारा अधिकार है, फलों में कभी नहीं। फल के कारण मत बनो और अकर्म में भी आसक्ति मत करो।',
        en: 'You have a right to action alone, never to its fruits. Do not be the cause of the fruits of actions, nor be attached to inaction.'
      }
    },
    { id: 'ch4', order: 4, meter: 'अध्याय 4 — ज्ञानकर्मसंन्यासयोग',
      sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
      transliteration: 'yadā yadā hi dharmasya glānirbhavati bhārata |\nabhyutthānamadharmasya tadātmānaṃ sṛjāmyaham ||',
      translations: {
        hi: 'जब-जब धर्म की हानि होती है और अधर्म का उत्थान होता है, तब मैं स्वयं को प्रकट करता हूँ।',
        en: 'Whenever dharma declines and adharma rises, then I manifest myself.'
      }
    },
    { id: 'ch5', order: 5, meter: 'अध्याय 5 — कर्मसंन्यासयोग',
      sanskrit: 'ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥',
      transliteration: 'brahmaṇyādhāya karmāṇi saṅgaṃ tyaktvā karoti yaḥ |\nlipyate na sa pāpena padmapatramivāmbhasā ||',
      translations: {
        hi: 'जो ब्रह्म में कर्मों को अर्पित करके, आसक्ति छोड़कर कर्म करता है, वह पाप से लिप्त नहीं होता, जैसे कमल पत्र जल से।',
        en: 'One who offers actions to Brahman, abandoning attachment, is untouched by sin, like a lotus leaf by water.'
      }
    },
    { id: 'ch6', order: 6, meter: 'अध्याय 6 — ध्यानयोग',
      sanskrit: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
      transliteration: 'uddharedātmanātmānaṃ nātmānamavasādayet |\nātmaiva hyātmano bandhurātmaiva ripurātmanaḥ ||',
      translations: {
        hi: 'मनुष्य अपने द्वारा अपना उद्धार करे, अपना पतन न करे। मनुष्य ही अपना मित्र है और मनुष्य ही अपना शत्रु।',
        en: 'Let one lift oneself by oneself, let one not degrade oneself. The self is the friend of the self, and the self is the enemy of the self.'
      }
    },
    { id: 'ch7', order: 7, meter: 'अध्याय 7 — ज्ञानविज्ञानयोग',
      sanskrit: 'मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥',
      transliteration: 'mattaḥ parataraṃ nānyatkiñcidasti dhanañjaya |\nmayi sarvamidaṃ protaṃ sūtre maṇigaṇā iva ||',
      translations: {
        hi: 'हे धनंजय! मुझसे श्रेष्ठ और कुछ नहीं है। यह सब मुझमें उसी प्रकार पिरोया हुआ है जैसे सूत्र में मणियाँ।',
        en: 'O Dhanañjaya, there is nothing higher than me. All this is strung on me like beads on a thread.'
      }
    },
    { id: 'ch8', order: 8, meter: 'अध्याय 8 — अक्षरब्रह्मयोग',
      sanskrit: 'अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥',
      transliteration: 'antakāle ca māmeva smaranmuktvā kalevaram |\nyaḥ prayāti sa madbhāvaṃ yāti nāstyatra saṃśayaḥ ||',
      translations: {
        hi: 'अंतकाल में मुझे स्मरण करते हुए जो शरीर छोड़कर जाता है, वह मेरे स्वरूप को प्राप्त होता है, इसमें संदेह नहीं।',
        en: 'Whoever at the time of death remembers me alone and departs, leaving the body — attains my being; there is no doubt about this.'
      }
    },
    { id: 'ch9', order: 9, meter: 'अध्याय 9 — राजविद्याराजगुह्ययोग',
      sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
      transliteration: 'ananyāścintayanto māṃ ye janāḥ paryupāsate |\nteṣāṃ nityābhiyuktānāṃ yogakṣemaṃ vahāmyaham ||',
      translations: {
        hi: 'जो लोग अनन्य भाव से मेरा चिंतन करते हुए मेरी उपासना करते हैं, उन नित्य युक्त पुरुषों का योगक्षेम मैं वहन करता हूँ।',
        en: 'For those who worship me with single-minded devotion, ever steadfast, I carry what they lack and preserve what they have.'
      }
    },
    { id: 'ch10', order: 10, meter: 'अध्याय 10 — विभूतियोग',
      sanskrit: 'अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते।\nइति मत्वा भजन्ते मां बुधा भावसमन्विताः॥',
      transliteration: 'ahaṃ sarvasya prabhavo mattaḥ sarvaṃ pravartate |\niti matvā bhajante māṃ budhā bhāvasamanvitāḥ ||',
      translations: {
        hi: 'मैं सबका प्रभव हूँ, मुझसे सब प्रवृत्त होता है। ऐसा मानकर बुद्धिमान भाव सहित मेरा भजन करते हैं।',
        en: 'I am the origin of all; from me everything proceeds. Knowing this, the wise worship me with devotion.'
      }
    },
    { id: 'ch11', order: 11, meter: 'अध्याय 11 — विश्वरूपदर्शनयोग',
      sanskrit: 'दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता।\nयदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः॥',
      transliteration: 'divi sūryasahasrasya bhavedyugapadutthitā |\nyadi bhāḥ sadṛśī sā syādbhāsastasya mahātmanaḥ ||',
      translations: {
        hi: 'यदि आकाश में हजारों सूर्य एक साथ उदित हों, तो उनकी ज्योति उस महात्मा के प्रकाश के समान हो सकती है।',
        en: 'If the radiance of a thousand suns were to blaze forth all at once in the sky, that might resemble the splendor of the great Being.'
      }
    },
    { id: 'ch12', order: 12, meter: 'अध्याय 12 — भक्तियोग',
      sanskrit: 'मय्येव मन आधत्स्व मयि बुद्धिं निवेशय।\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः॥',
      transliteration: 'mayyeva mana ādhatsva mayi buddhiṃ niveśaya |\nnivasiṣyasi mayyeva ata ūrdhvaṃ na saṃśayaḥ ||',
      translations: {
        hi: 'मन को मुझमें ही स्थिर कर, बुद्धि को मुझमें लगा। इसके बाद तू मुझमें ही निवास करेगा, इसमें संदेह नहीं।',
        en: 'Fix your mind on me alone, place your intellect in me. You will then dwell in me, no doubt.'
      }
    },
    { id: 'ch13', order: 13, meter: 'अध्याय 13 — क्षेत्रक्षेत्रज्ञविभागयोग',
      sanskrit: 'क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत।\nक्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम॥',
      transliteration: 'kṣetrajñaṃ cāpi māṃ viddhi sarvakṣetreṣu bhārata |\nkṣetrakṣetrajñayorjñānaṃ yattajjñānaṃ mataṃ mama ||',
      translations: {
        hi: 'हे भारत! सब क्षेत्रों में मुझे ही क्षेत्रज्ञ जानो। क्षेत्र और क्षेत्रज्ञ का जो ज्ञान है, वही मेरे मत में ज्ञान है।',
        en: 'O Bharata, know me as the knower of the field in all fields. The knowledge of the field and its knower — that I consider true knowledge.'
      }
    },
    { id: 'ch14', order: 14, meter: 'अध्याय 14 — गुणत्रयविभागयोग',
      sanskrit: 'सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः।\nनिबध्नन्ति महाबाहो देहे देहिनमव्ययम्॥',
      transliteration: 'sattvaṃ rajastama iti guṇāḥ prakṛtisambhavāḥ |\nnibadhnanti mahābāho dehe dehinamavyayam ||',
      translations: {
        hi: 'हे महाबाहो! प्रकृति से उत्पन्न सत्त्व, रज और तम — ये तीनों गुण देह में अव्यय देही को बाँधते हैं।',
        en: 'O mighty-armed one! Sattva, rajas, and tamas — these three qualities born of Prakriti bind the imperishable soul in the body.'
      }
    },
    { id: 'ch15', order: 15, meter: 'अध्याय 15 — पुरुषोत्तमयोग',
      sanskrit: 'ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्।\nछन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्॥',
      transliteration: 'ūrdhvamūlamadhaḥśākhamaśvatthaṃ prāhuravyayam |\nchandāṃsi yasya parṇāni yastaṃ veda sa vedavit ||',
      translations: {
        hi: 'ऊर्ध्वमूल वाले, अधःशाखा वाले, अव्यय अश्वत्थ वृक्ष को कहते हैं। जिसके पत्ते छंद हैं, जो उसे जानता है वह वेदवित् है।',
        en: 'They speak of an imperishable Ashvattha tree with roots above and branches below, whose leaves are the Vedic hymns. One who knows it is a knower of the Vedas.'
      }
    },
    { id: 'ch16', order: 16, meter: 'अध्याय 16 — दैवासुरसम्पद्विभागयोग',
      sanskrit: 'अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥',
      transliteration: 'abhayaṃ sattvasaṃśuddhirjñānayogavyavasthitiḥ |\ndānaṃ damaśca yajñaśca svādhyāyastapa ārjavam ||',
      translations: {
        hi: 'अभय, अंतःकरण की शुद्धि, ज्ञानयोग में स्थिति, दान, दम, यज्ञ, स्वाध्याय, तप और आर्जव — ये दैवी सम्पदा हैं।',
        en: 'Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, control of senses, sacrifice, study, austerity, and straightforwardness — these are divine qualities.'
      }
    },
    { id: 'ch17', order: 17, meter: 'अध्याय 17 — श्रद्धात्रयविभागयोग',
      sanskrit: 'श्रद्धा सात्त्विकी राजसी तामसी च त्रिधा मता।\nयज्ञस्य तपसश्चैव दानस्य च विधिर्विभो॥',
      transliteration: 'śraddhā sāttvikī rājasī tāmasī ca tridhā matā |\nyajñasya tapasaścaiva dānasya ca vidhirvibho ||',
      translations: {
        hi: 'श्रद्धा तीन प्रकार की मानी गई है — सात्त्विकी, राजसी और तामसी। यज्ञ, तप और दान का विधान भी तीन प्रकार का है।',
        en: 'Faith is of three kinds — sattvic, rajasic, and tamasic. So also the ritual of sacrifice, austerity, and charity.'
      }
    },
    { id: 'ch18', order: 18, meter: 'अध्याय 18 — मोक्षसंन्यासयोग',
      sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
      transliteration: 'sarvadharmānparityajya māmekaṃ śaraṇaṃ vraja |\nahaṃ tvāṃ sarvapāpebhyo mokṣayiṣyāmi mā śucaḥ ||',
      translations: {
        hi: 'सब धर्मों को त्यागकर केवल मेरी शरण में आ। मैं तुझे सब पापों से मुक्त कर दूँगा, शोक मत कर।',
        en: 'Abandoning all dharmas, take refuge in me alone. I will free you from all sins; do not grieve.'
      }
    }
  ]
};