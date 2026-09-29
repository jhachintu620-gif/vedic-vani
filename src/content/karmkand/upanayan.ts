import type { KarmkandRitual } from './types';

export const upanayanRituals: KarmkandRitual[] = [
  {
    slug: 'upanayan-intro',
    title: { hi: 'उपनयन संस्कार — परिचय', en: 'Upanayan Sanskar — Introduction' },
    category: 'upanayan',
    tradition: 'maithil',
    phase: 'pre-wedding',
    order: 1,
    shortDesc: {
      hi: 'ब्रह्मचर्य आश्रम में प्रवेश — यज्ञोपवीत धारण का प्रथम चरण।',
      en: 'Entry into Brahmacharya ashram — first step of sacred thread ceremony.'
    },
    longDesc: {
      hi: 'उपनयन संस्कार हिंदू धर्म के सोलह संस्कारों में सर्वाधिक महत्वपूर्ण माना जाता है। "उप" का अर्थ निकट और "नयन" का अर्थ ले जाना — अर्थात् ब्रह्म (गायत्री) के निकट ले जाना। मिथिला परंपरा में यह संस्कार बालक के 7 से 11 वर्ष के बीच किया जाता है। इसके बाद बालक "द्विज" कहलाता है और उसे गायत्री मंत्र का अधिकार प्राप्त होता है। यज्ञोपवीत (जनेऊ) तीन धागों का होता है जो तीन ऋण, तीन गुण, तीन वेद और तीन संध्या का प्रतीक है।',
      en: 'Upanayan Sanskar is considered the most important of the sixteen Hindu samskaras. "Upa" means near and "nayana" means leading — leading the boy near Brahman (Gayatri). In Mithila tradition, this samskara is performed between ages 7 and 11. After this, the boy is called "Dvija" (twice-born) and gains the right to recite the Gayatri Mantra. The sacred thread (Yajnopavit) has three strands symbolizing three debts, three gunas, three Vedas, and three sandhyas.'
    },
    materials: [
      { hi: 'यज्ञोपवीत (जनेऊ), मुंज की कमर, दंड, कमंडलु, गायत्री मंत्र, अजिन (मृगछाला), नया वस्त्र', en: 'Sacred thread (Yajnopavit), munja belt, staff, kamandalu, Gayatri mantra, deer skin, new clothes' }
    ],
    steps: [
      { number: 1, title: { hi: 'मुंडन', en: 'Head Shaving' }, description: { hi: 'बालक का मुंडन किया जाता है।', en: 'The boy\'s head is shaved.' } },
      { number: 2, title: { hi: 'स्नान और शुद्धि', en: 'Bath and Purification' }, description: { hi: 'पवित्र स्नान के बाद शुद्ध वस्त्र धारण।', en: 'Sacred bath followed by wearing clean clothes.' } },
      { number: 3, title: { hi: 'व्रत-नियम', en: 'Vow and Rules' }, description: { hi: 'ब्रह्मचर्य के नियम ग्रहण किए जाते हैं।', en: 'Rules of brahmacharya are accepted.' } },
      { number: 4, title: { hi: 'यज्ञोपवीत धारण', en: 'Sacred Thread Wearing' }, description: { hi: 'गुरु यज्ञोपवीत धारण कराते हैं।', en: 'The guru invests the boy with the sacred thread.' } },
      { number: 5, title: { hi: 'गायत्री दीक्षा', en: 'Gayatri Initiation' }, description: { hi: 'गायत्री मंत्र का उपदेश दिया जाता है।', en: 'The Gayatri Mantra is initiated.' } },
      { number: 6, title: { hi: 'भिक्षाव्रत', en: 'Begging Vow' }, description: { hi: 'बालक अपनी माता से भिक्षा माँगता है — विनम्रता का प्रतीक।', en: 'The boy begs from his mother — symbolizing humility.' } },
      { number: 7, title: { hi: 'गुरु-गृह गमन', en: 'Departure to Guru Home' }, description: { hi: 'प्रतीकात्मक रूप से गुरु के घर जाने का संकल्प।', en: 'Symbolically resolves to go to the guru\'s home.' } }
    ],
    mantras: [
      {
        id: 'gayatri-diksha',
        sanskrit: 'ॐ भूर्भुवः स्वः।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
        transliteration: 'oṃ bhūrbhuvaḥ svaḥ |\ntatsaviturvareṇyaṃ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
        meaning: {
          hi: 'ॐ — तीनों लोकों में व्याप्त उस सविता देव के वरेण्य दिव्य तेज का हम ध्यान करते हैं। वे हमारी बुद्धियों को सन्मार्ग की ओर प्रेरित करें।',
          en: 'Om — We meditate on the divine light of that radiant Savita pervading the three worlds. May he inspire our intellects toward the righteous path.'
        },
        when: {
          hi: 'गुरु द्वारा बालक को गायत्री दीक्षा देते समय।',
          en: 'Recited by the guru while initiating the boy into Gayatri.'
        }
      },
      {
        id: 'yajnopavit',
        sanskrit: 'ॐ यज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात्।\nआयुष्यमग्र्यं प्रतिमुञ्च शुभ्रं यज्ञोपवीतं बलमस्तु तेजः॥',
        transliteration: 'oṃ yajñopavītaṃ paramaṃ pavitraṃ prajāpateryatsahajaṃ purastāt |\nāyuṣyamagryaṃ pratimuñca śubhraṃ yajñopavītaṃ balamastu tejaḥ ||',
        meaning: {
          hi: 'यज्ञोपवीत परम पवित्र है, जो प्रजापति से सहज उत्पन्न हुआ। दीर्घायु के लिए इस शुभ्र यज्ञोपवीत को धारण करो। इसमें बल और तेज हो।',
          en: 'The sacred thread is supremely pure, naturally born from Prajapati. Wear this white Yajnopavit for long life — may there be strength and radiance in it.'
        },
        when: {
          hi: 'यज्ञोपवीत धारण करते समय।',
          en: 'While wearing the sacred thread.'
        }
      },
      {
        id: 'bhaiksha-mantra',
        sanskrit: 'ॐ भवति भिक्षां देहि।\nॐ भिक्षां देहि मातः।\nसा मे भिक्षा सफला भवतु॥',
        transliteration: 'oṃ bhavati bhikṣāṃ dehi |\noṃ bhikṣāṃ dehi mātaḥ |\nsā me bhikṣā saphalā bhavatu ||',
        meaning: {
          hi: 'हे माता! भिक्षा दीजिए। मेरी भिक्षा सफल होवे।',
          en: 'O Mother! Please give alms. May my alms be fruitful.'
        },
        when: {
          hi: 'भिक्षाव्रत के समय बालक द्वारा माता से।',
          en: 'Recited by the boy to his mother during the begging vow.'
        }
      }
    ],
    significance: {
      hi: 'उपनयन संस्कार बालक को ब्रह्मचर्य आश्रम में प्रवेश देता है। इसके बाद बालक द्विज (दो बार जन्मा) कहलाता है — पहला जन्म माता-पिता से, दूसरा गुरु से। यह संस्कार बालक के जीवन में आध्यात्मिक जागरण का प्रतीक है।',
      en: 'Upanayan Sanskar initiates the boy into the Brahmacharya ashram. After this, he is called Dvija (twice-born) — first birth from parents, second from the guru. This samskara symbolizes spiritual awakening in the boy\'s life.'
    },
    duration: { hi: '3-5 घंटे', en: '3-5 hours' }
  },
  {
    slug: 'chudakaran',
    title: { hi: 'चूड़ाकरण', en: 'Chudakaran' },
    category: 'upanayan',
    tradition: 'maithil',
    phase: 'siddhant',
    order: 2,
    shortDesc: {
      hi: 'शिखा (चोटी) स्थापना — उपनयन से पहले शुभ मुहूर्त में।',
      en: 'Establishment of the shikha (tuft of hair) — before Upanayan in auspicious time.'
    },
    longDesc: {
      hi: 'चूड़ाकरण संस्कार में बालक के सिर पर शिखा (चोटी) स्थापित की जाती है और शेष बाल हटा दिए जाते हैं। शिखा ब्रह्मरंध्र की रक्षा करती है और इसे ब्रह्मा का स्थान माना जाता है। मिथिला परंपरा में यह संस्कार उपनयन से एक दिन पूर्व किया जाता है और इसमें शिखा के साथ एक छोटा सा बाल-सुंदर मुंडन किया जाता है।',
      en: 'In Chudakaran, a shikha (tuft) is established on the boy\'s head and the remaining hair is removed. The shikha protects the Brahmarandhra (crown chakra) and is considered the seat of Brahma. In Mithila tradition, this samskara is performed one day before Upanayan, with a small but beautiful head shave keeping the shikha.'
    },
    materials: [
      { hi: 'नया उस्तरा, दर्पण, दूर्वा, अक्षत, दही, हल्दी', en: 'New razor, mirror, durva, unbroken rice, curd, turmeric' }
    ],
    steps: [
      { number: 1, title: { hi: 'संकल्प', en: 'Resolve' }, description: { hi: 'पिता चूड़ाकरण का संकल्प करते हैं।', en: 'The father resolves to perform Chudakaran.' } },
      { number: 2, title: { hi: 'शिखा निर्धारण', en: 'Shikha Placement' }, description: { hi: 'शिखा का स्थान निर्धारित किया जाता है।', en: 'The position of the shikha is determined.' } },
      { number: 3, title: { hi: 'मुंडन', en: 'Shaving' }, description: { hi: 'नए उस्तरे से मुंडन किया जाता है।', en: 'Shaving is done with a new razor.' } },
      { number: 4, title: { hi: 'स्नान', en: 'Bath' }, description: { hi: 'पवित्र स्नान कराया जाता है।', en: 'A sacred bath is given.' } }
    ],
    mantras: [
      {
        id: 'chudakaran',
        sanskrit: 'ॐ आयुष्यं वर्चस्यं यशस्यं च।\nसर्ववीर्यं बलमोजश्च।\nसर्वमायुरेति शिखा ते भवतु॥',
        transliteration: 'oṃ āyuṣyaṃ varcasyaṃ yaśasyaṃ ca |\nsarvavīryaṃ balamojaśca |\nsarvamāyureti śikhā te bhavatu ||',
        meaning: {
          hi: 'आयु, वर्चस्व, यश, सर्व वीर्य, बल और ओज — यह सब शिखा में स्थित हो।',
          en: 'Longevity, radiance, fame, all heroism, strength and vigor — may all this reside in the shikha.'
        },
        when: {
          hi: 'शिखा स्थापना के समय।',
          en: 'During the establishment of the shikha.'
        }
      }
    ],
    significance: {
      hi: 'शिखा ब्रह्मचर्य, तप और शुद्धि का प्रतीक है। यह ब्रह्मरंध्र की रक्षा करती है और शरीर के ऊर्जा केंद्र को सक्रिय रखती है।',
      en: 'The shikha symbolizes brahmacharya, penance, and purity. It protects the Brahmarandhra and keeps the body\'s energy center active.'
    },
    duration: { hi: '30 मिनट', en: '30 minutes' }
  },
  {
    slug: 'yajnopavit-dharan',
    title: { hi: 'यज्ञोपवीत धारण', en: 'Yajnopavit Dharan' },
    category: 'upanayan',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 3,
    shortDesc: {
      hi: 'यज्ञोपवीत धारण — द्विजत्व का सर्वोच्च प्रतीक।',
      en: 'Wearing the sacred thread — the supreme symbol of twice-born status.'
    },
    longDesc: {
      hi: 'यज्ञोपवीत धारण उपनयन संस्कार का केंद्रीय कर्म है। यज्ञोपवीत (जनेऊ) तीन धागों का बना होता है जो साथ में ब्रह्मग्रंथि में बंधे होते हैं। इसे बाएँ कंधे से दाएँ कमर तक धारण किया जाता है। तीन धागे तीन ऋण (देव ऋण, ऋषि ऋण, पितृ ऋण) के प्रतीक हैं। इसे कभी नहीं उतारा जाता — मल-मूत्र त्याग, स्नान, और शौच के समय कान पर लपेट देते हैं।',
      en: 'Yajnopavit Dharan is the central act of Upanayan. The sacred thread has three strands joined at a knot (Brahma granthi). It is worn from left shoulder to right waist. The three strands symbolize three debts (to gods, sages, ancestors). It is never removed — during bathroom breaks, bathing, and purity rituals it is wrapped around the ear.'
    },
    materials: [
      { hi: 'नया यज्ञोपवीत (तीन धागे), पंचगव्य, गंगाजल, हल्दी', en: 'New sacred thread (three strands), panchagavya, Ganga water, turmeric' }
    ],
    steps: [
      { number: 1, title: { hi: 'यज्ञोपवीत शुद्धि', en: 'Purification of Thread' }, description: { hi: 'पंचगव्य और गंगाजल से शुद्धि।', en: 'Purified with panchagavya and Ganga water.' } },
      { number: 2, title: { hi: 'दाहिना कंधा', en: 'Right Shoulder' }, description: { hi: 'यज्ञोपवीत बाएँ कंधे से दाएँ कमर पर।', en: 'Worn from left shoulder to right waist.' } },
      { number: 3, title: { hi: 'ब्रह्मग्रंथि', en: 'Brahma Knot' }, description: { hi: 'ब्रह्मग्रंथि बाँधी जाती है।', en: 'The Brahma knot is tied.' } },
      { number: 4, title: { hi: 'मंत्रोच्चार', en: 'Mantra Chanting' }, description: { hi: 'यज्ञोपवीत मंत्र का उच्चारण।', en: 'The Yajnopavit mantra is chanted.' } }
    ],
    mantras: [
      {
        id: 'yajnopavit-main',
        sanskrit: 'ॐ यज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात्।\nआयुष्यमग्र्यं प्रतिमुञ्च शुभ्रं यज्ञोपवीतं बलमस्तु तेजः॥',
        transliteration: 'oṃ yajñopavītaṃ paramaṃ pavitraṃ prajāpateryatsahajaṃ purastāt |\nāyuṣyamagryaṃ pratimuñca śubhraṃ yajñopavītaṃ balamastu tejaḥ ||',
        meaning: {
          hi: 'यज्ञोपवीत परम पवित्र है, प्रजापति से सहज उत्पन्न हुआ। शुभ्र यज्ञोपवीत धारण करो, इसमें बल और तेज हो।',
          en: 'The sacred thread is supremely pure, born naturally from Prajapati. Wear the white Yajnopavit — may there be strength and radiance in it.'
        },
        when: {
          hi: 'यज्ञोपवीत धारण करते समय।',
          en: 'While wearing the sacred thread.'
        }
      }
    ],
    significance: {
      hi: 'यज्ञोपवीत द्विजत्व का सर्वोच्च चिह्न है। यह वेद पढ़ने, यज्ञ करने और गायत्री जपने का अधिकार देता है। यह सदा धारण किया जाता है और इसका त्याग केवल संन्यास में होता है।',
      en: 'Yajnopavit is the supreme mark of Dvija status. It grants the right to study Vedas, perform yajnas, and chant Gayatri. It is worn always and abandoned only in sannyasa.'
    },
    duration: { hi: '15 मिनट', en: '15 minutes' }
  },
  {
    slug: 'gayatri-upadesh',
    title: { hi: 'गायत्री उपदेश', en: 'Gayatri Upadesh' },
    category: 'upanayan',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 4,
    shortDesc: {
      hi: 'गुरु द्वारा गायत्री मंत्र का उपदेश — द्विजत्व का मुख्य फल।',
      en: 'Guru imparts the Gayatri Mantra — the main fruit of Dvija status.'
    },
    longDesc: {
      hi: 'गायत्री उपदेश उपनयन संस्कार का चरम क्षण है। गुरु बालक के दाएँ कान में गायत्री मंत्र का उपदेश देते हैं। मंत्र कान में ही दिया जाता है ताकि यह गुप्त रहे — यह ब्रह्मचारी का सबसे बड़ा रहस्य है। गायत्री को "वेदमाता" कहा जाता है — मंत्रों की जननी। इसे "महामंत्र" भी कहते हैं और इसका जप सब मंत्रों में श्रेष्ठ माना जाता है।',
      en: 'Gayatri Upadesh is the climax of Upanayan. The guru whispers the Gayatri Mantra into the boy\'s right ear. The mantra is given in the ear to keep it secret — the greatest secret of a brahmachari. Gayatri is called "Vedamata" — the mother of mantras. It is also called "Mahamantra" and its japa is considered the greatest of all mantras.'
    },
    materials: [
      { hi: 'गायत्री मंत्र, रुद्राक्ष माला, कुशा', en: 'Gayatri Mantra, rudraksha mala, kusha grass' }
    ],
    steps: [
      { number: 1, title: { hi: 'गुरु वंदन', en: 'Guru Vandana' }, description: { hi: 'बालक गुरु को प्रणाम करता है।', en: 'The boy bows to the guru.' } },
      { number: 2, title: { hi: 'दक्षिणा', en: 'Dakshina' }, description: { hi: 'गुरु को दक्षिणा अर्पित की जाती है।', en: 'Dakshina is offered to the guru.' } },
      { number: 3, title: { hi: 'मंत्र उपदेश', en: 'Mantra Initiation' }, description: { hi: 'गुरु दाएँ कान में गायत्री मंत्र कहते हैं।', en: 'The guru whispers Gayatri into the right ear.' } },
      { number: 4, title: { hi: 'जप नियम', en: 'Japa Rules' }, description: { hi: 'गायत्री जप के नियम बताए जाते हैं — संध्या, अर्घ्य, तर्पण।', en: 'Rules of Gayatri japa are taught — sandhya, arghya, tarpana.' } }
    ],
    mantras: [
      {
        id: 'gayatri-mahamantra',
        sanskrit: 'ॐ भूर्भुवः स्वः।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
        transliteration: 'oṃ bhūrbhuvaḥ svaḥ |\ntatsaviturvareṇyaṃ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
        meaning: {
          hi: 'ॐ — तीनों लोकों में व्याप्त उस सविता देव के वरेण्य दिव्य तेज का हम ध्यान करते हैं। वे हमारी बुद्धियों को सन्मार्ग की ओर प्रेरित करें।',
          en: 'Om — We meditate on the divine light of that radiant Savita pervading the three worlds. May he inspire our intellects toward the righteous path.'
        },
        when: {
          hi: 'प्रातः, मध्याह्न और सायं तीनों संध्या में जप।',
          en: 'Recited during all three sandhyas — morning, noon, and evening.'
        }
      }
    ],
    significance: {
      hi: 'गायत्री को वेदमाता और महामंत्र कहा गया है। "गायत्री छन्दसां माता" — गायत्री सब छंदों की माता है। जो इसे जपता है वह सब वेदों का सार जपता है। इसका जप बुद्धि, तेज, और ब्रह्मचर्य को बढ़ाता है।',
      en: 'Gayatri is called Vedamata and Mahamantra. "Gayatri Chandasam Mata" — Gayatri is the mother of all meters. Whoever chants it chants the essence of all Vedas. Its japa increases intellect, radiance, and brahmacharya.'
    },
    duration: { hi: '30 मिनट', en: '30 minutes' }
  },
  {
    slug: 'bhaikshavrat',
    title: { hi: 'भिक्षाव्रत', en: 'Bhaikshavrat' },
    category: 'upanayan',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 5,
    shortDesc: {
      hi: 'बालक अपनी माता से भिक्षा माँगता है — विनम्रता का प्रतीक।',
      en: 'Boy begs from his mother — symbol of humility.'
    },
    longDesc: {
      hi: 'भिक्षाव्रत उपनयन संस्कार का अत्यंत भावुक क्षण है। बालक अपनी माता के पास जाकर भिक्षा माँगता है। माता उसे भिक्षा देती है और आँखों में आँसू के साथ आशीर्वाद देती है। यह विनम्रता और गृहत्याग के प्रतीक का प्रतीक है। मिथिला परंपरा में यह भिक्षा माता के हाथ से ही दी जाती है — यह दर्शाता है कि गृहस्थ जीवन का पहला पाठ माता से मिलता है।',
      en: 'Bhaikshavrat is the most emotional moment of Upanayan. The boy goes to his mother and asks for alms. The mother gives him alms with tears in her eyes and blessings. This symbolizes humility and departure from home. In Mithila tradition, this alms is given by the mother herself — showing that the first lesson of household life comes from the mother.'
    },
    materials: [
      { hi: 'कमंडलु, भिक्षा (चावल, दाल)', en: 'Kamandalu, alms (rice, dal)' }
    ],
    steps: [
      { number: 1, title: { hi: 'कमंडलु ग्रहण', en: 'Take Kamandalu' }, description: { hi: 'बालक कमंडलु लेता है।', en: 'The boy takes the kamandalu.' } },
      { number: 2, title: { hi: 'माता के पास', en: 'Go to Mother' }, description: { hi: 'बालक माता के पास जाता है।', en: 'The boy goes to his mother.' } },
      { number: 3, title: { hi: 'भिक्षा माँगना', en: 'Ask for Alms' }, description: { hi: '"भवति भिक्षां देहि" कहता है।', en: 'He says "Bhavati bhiksham dehi".' } },
      { number: 4, title: { hi: 'भिक्षा दान', en: 'Alms Given' }, description: { hi: 'माता भिक्षा देती है और आशीर्वाद देती है।', en: 'The mother gives alms and blesses him.' } },
      { number: 5, title: { hi: 'आशीर्वाद', en: 'Blessing' }, description: { hi: 'माता की आँखों में आँसू के साथ आशीर्वाद।', en: 'Mother blesses with tears in her eyes.' } }
    ],
    mantras: [
      {
        id: 'bhaiksha',
        sanskrit: 'ॐ भवति भिक्षां देहि।\nॐ भिक्षां देहि मातः।\nसा मे भिक्षा सफला भवतु।\nदीर्घायुष्मान् भव पुत्र।\nआयुष्मान् भव सदा॥',
        transliteration: 'oṃ bhavati bhikṣāṃ dehi |\noṃ bhikṣāṃ dehi mātaḥ |\nsā me bhikṣā saphalā bhavatu |\ndīrghāyuṣmān bhava putra |\nāyuṣmān bhava sadā ||',
        meaning: {
          hi: 'हे माता! भिक्षा दीजिए। मेरी भिक्षा सफल होवे। हे पुत्र, दीर्घायु हो, सदा आयुष्मान् रहो।',
          en: 'O Mother! Please give alms. May my alms be fruitful. O son, may you be long-lived, always blessed with life.'
        },
        when: {
          hi: 'भिक्षाव्रत के समय बालक द्वारा माता से।',
          en: 'Recited by the boy to his mother during the begging vow.'
        }
      }
    ],
    significance: {
      hi: 'भिक्षाव्रत विनम्रता, गृहत्याग और ब्रह्मचर्य का प्रतीक है। यह बालक को सिखाता है कि ब्रह्मचारी जीवन भिक्षा पर निर्भर है और उसे अहंकार त्यागना है। माता से भिक्षा लेना इस बात का प्रतीक है कि माता ही प्रथम गुरु हैं।',
      en: 'Bhaikshavrat symbolizes humility, leaving home, and brahmacharya. It teaches the boy that the brahmachari life depends on alms and ego must be abandoned. Taking alms from the mother symbolizes that the mother is the first guru.'
    },
    duration: { hi: '10 मिनट', en: '10 minutes' }
  },
  {
    slug: 'guru-griha-gaman',
    title: { hi: 'गुरु-गृह गमन', en: 'Guru Griha Gaman' },
    category: 'upanayan',
    tradition: 'maithil',
    phase: 'main-wedding',
    order: 6,
    shortDesc: {
      hi: 'प्रतीकात्मक रूप से गुरु के घर जाने का संकल्प — गुरुकुल परंपरा का प्रतीक।',
      en: 'Symbolic resolution to go to the guru\'s home — symbol of gurukul tradition.'
    },
    longDesc: {
      hi: 'गुरु-गृह गमन उपनयन संस्कार का अंतिम चरण है। बालक प्रतीकात्मक रूप से गुरु के घर जाने का संकल्प करता है और विद्या अर्जन के लिए प्रस्थान करता है। मिथिला परंपरा में वास्तविक गुरुकुल गमन अब नहीं होता, परंतु यह प्रतीक आज भी निभाया जाता है। बालक कुछ कदम गुरु के साथ चलता है और "मैं ब्रह्मचारी हूँ, विद्या के लिए जाता हूँ" का संकल्प लेता है।',
      en: 'Guru Griha Gaman is the final step of Upanayan. The boy symbolically resolves to go to the guru\'s home and depart to acquire knowledge. In Mithila tradition, actual gurukul going no longer happens, but the symbol is still enacted. The boy walks a few steps with the guru and takes the vow: "I am a brahmachari, I go for knowledge."'
    },
    materials: [
      { hi: 'दंड, कमंडलु, मृगछाला', en: 'Staff, kamandalu, deer skin' }
    ],
    steps: [
      { number: 1, title: { hi: 'गुरु चरण स्पर्श', en: 'Touch Guru Feet' }, description: { hi: 'बालक गुरु के चरण स्पर्श करता है।', en: 'The boy touches the guru\'s feet.' } },
      { number: 2, title: { hi: 'कुछ कदम साथ', en: 'Walk a Few Steps' }, description: { hi: 'बालक कुछ कदम गुरु के साथ चलता है।', en: 'The boy walks a few steps with the guru.' } },
      { number: 3, title: { hi: 'प्रतीकात्मक प्रस्थान', en: 'Symbolic Departure' }, description: { hi: 'प्रतीकात्मक रूप से प्रस्थान किया जाता है।', en: 'A symbolic departure is enacted.' } },
      { number: 4, title: { hi: 'वापसी', en: 'Return' }, description: { hi: 'बालक विद्या ग्रहण करने की प्रतीक्षा में वापस आता है।', en: 'The boy returns awaiting knowledge acquisition.' } }
    ],
    mantras: [
      {
        id: 'guru-vandana',
        sanskrit: 'ॐ गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।\nगुरुः साक्षात् परं ब्रह्म तस्मै श्री गुरवे नमः॥',
        transliteration: 'oṃ gururbrahmā gururviṣṇuḥ gururdevo maheśvaraḥ |\nguruḥ sākṣāt paraṃ brahma tasmai śrī gurave namaḥ ||',
        meaning: {
          hi: 'गुरु ब्रह्मा हैं, गुरु विष्णु हैं, गुरु देव महेश्वर हैं। गुरु साक्षात् परब्रह्म हैं — उन श्री गुरु को नमस्कार।',
          en: 'The guru is Brahma, the guru is Vishnu, the guru is Shiva. The guru is the visible Supreme Brahman — salutations to that Shri Guru.'
        },
        when: {
          hi: 'गुरु को प्रणाम करते समय।',
          en: 'While bowing to the guru.'
        }
      }
    ],
    significance: {
      hi: 'गुरुकुल परंपरा प्राचीन भारत की सबसे महान शिक्षा प्रणाली थी। गुरु-गृह गमन ब्रह्मचर्य आश्रम की पूर्णता का प्रतीक है — जहाँ बालक विद्या और जीवन दोनों सीखता है।',
      en: 'Gurukul tradition was ancient India\'s greatest education system. Guru Griha Gaman symbolizes the completion of Brahmacharya ashram — where the boy learns both knowledge and life.'
    },
    duration: { hi: '5 मिनट', en: '5 minutes' }
  }
];