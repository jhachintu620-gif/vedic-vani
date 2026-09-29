import type { TextMeta } from './types';

export const hanumanAshtak: TextMeta = {
  slug: 'hanuman-ashtak',
  title: { hi: 'हनुमान अष्टक', en: 'Hanuman Ashtak', sa: 'हनुमदष्टकम्' },
  type: 'stotra',
  deity: 'hanuman',
  language: 'hi',
  description: {
    hi: 'हनुमान जी के आठ श्लोक — जो भक्त उनका नित्य पाठ करता है, उसके सब कष्ट दूर होते हैं।',
    en: 'Eight verses in praise of Hanuman ji — whoever recites them daily has all troubles removed.'
  },
  source: 'Traditional public domain text',
  license: 'Public Domain',
  verseCount: 10,
  verses: [
    { id: 'doha-1', order: 1, meter: 'दोहा',
      sanskrit: 'बाल समय रबि भक्षि लियो, तबहिं तीनहुँ लोक भयो अँधियारो।\nताहि सों त्रास भयो जग को, जबहिं तुम प्रकट भए बलधारी॥',
      transliteration: 'bāla samaya rabi bhakṣi liyo, tabahiṃ tīnahuṃ loka bhayo aṃdhiyāro |\ntāhi soṃ trāsa bhayo jaga ko, tabahiṃ tuma prakaṭa bhae baladhārī ||',
      translations: {
        hi: 'बाल्यकाल में जब आपने सूर्य को निगल लिया, तब तीनों लोकों में अंधकार छा गया। जगत को भय हुआ, तब आप प्रकट हुए।',
        en: 'In childhood you swallowed the sun, causing darkness in all three worlds. The world was terrified, and you appeared as the mighty one.'
      }
    },
    { id: 'chaupai-1', order: 2, meter: 'चौपाई',
      sanskrit: 'को नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो।\nकौन कहै तुम्हरो बल बरनै, तुम सम अतुलित बलधारी॥',
      transliteration: 'ko nahiṃ jānata hai jaga meṃ kapi, saṃkaṭamocana nāma tihāro |\nkauna kahai tumharo bala baranai, tuma sama atulita baladhārī ||',
      translations: {
        hi: 'जगत में कौन नहीं जानता कि आपका नाम संकटमोचन है। आपके बल को कौन बयान कर सकता है? आपके समान अतुलित बल धारण करने वाला कोई नहीं।',
        en: 'Who in the world does not know you as Sankatamochana (remover of troubles)? Who can describe your strength? There is none equal to you in incomparable power.'
      }
    },
    { id: 'chaupai-2', order: 3, meter: 'चौपाई',
      sanskrit: 'राम काज लगि तव अवतारा।\nसुनि दसकंठ नख अधिकारा॥',
      transliteration: 'rāma kāja lagi tava avatārā |\nsuni dasakaṇṭha nakha adhikārā ||',
      translations: {
        hi: 'आपका अवतार श्रीराम के कार्य के लिए हुआ। रावण ने यह सुनकर अपना अधिकार खो दिया।',
        en: 'Your incarnation was for the mission of Shri Rama. Hearing this, Ravana lost his dominion.'
      }
    },
    { id: 'chaupai-3', order: 4, meter: 'चौपाई',
      sanskrit: 'भीम रूप धरि असुर संहारे।\nरामचंद्र के काज सँवारे॥',
      transliteration: 'bhīma rūpa dhari asura saṃhāre |\nrāmacandra ke kāja sãvāre ||',
      translations: {
        hi: 'आपने भीम रूप धरकर असुरों का संहार किया और श्रीरामचंद्र के कार्यों को सफल बनाया।',
        en: 'You destroyed demons in a massive form and accomplished Shri Ramachandra missions.'
      }
    },
    { id: 'chaupai-4', order: 5, meter: 'चौपाई',
      sanskrit: 'लाय सजीवन लखन जियाये।\nश्री रघुबीर हरषि उर लाये॥',
      transliteration: 'lāya sajīvana lakhana jiyāye |\nśrī raghubīra haraṣi ura lāye ||',
      translations: {
        hi: 'संजीवनी लाकर लक्ष्मण को जीवित किया। श्री रघुवीर ने हर्षित होकर आपको हृदय से लगाया।',
        en: 'You revived Lakshmana with the Sanjivani herb, and Shri Raghuvira joyfully embraced you.'
      }
    },
    { id: 'chaupai-5', order: 6, meter: 'चौपाई',
      sanskrit: 'रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥',
      transliteration: 'raghupati kīnhī bahuta baṛāī |\ntuma mama priya bharatahi sama bhāī ||',
      translations: {
        hi: 'श्रीराम ने आपकी बहुत प्रशंसा की और कहा कि तुम मुझे भरत के समान प्रिय भाई हो।',
        en: 'Shri Rama praised you greatly and said, "You are as dear to me as my brother Bharata."'
      }
    },
    { id: 'chaupai-6', order: 7, meter: 'चौपाई',
      sanskrit: 'सहस बदन तुम्हरो जस गावैं।\nअस कहि श्रीपति कंठ लगावैं॥',
      transliteration: 'sahasa badana tumharo jasa gāvaiṃ |\nasa kahi śrīpati kaṇṭha lagāvaiṃ ||',
      translations: {
        hi: 'हजारों मुख आपका यश गाते हैं। ऐसा कहकर श्रीराम ने आपको गले से लगाया।',
        en: 'Thousands of mouths sing your glory. Saying this, Shri Rama embraced you.'
      }
    },
    { id: 'chaupai-7', order: 8, meter: 'चौपाई',
      sanskrit: 'सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥',
      transliteration: 'sanakādika brahmādi munīsā |\nnārada sārada sahita ahīsā ||',
      translations: {
        hi: 'सनक आदि ऋषि, ब्रह्मा आदि देवता, नारद, सरस्वती और शेषनाग आपका यश गाते हैं।',
        en: 'Sages like Sanaka, gods like Brahma, Narada, Saraswati, and Sheshanaga all sing your glory.'
      }
    },
    { id: 'chaupai-8', order: 9, meter: 'चौपाई',
      sanskrit: 'जम कुबेर दिगपाल जहाँ ते।\nकबि कोबिद कहि सके कहाँ ते॥',
      transliteration: 'jama kubera digapāla jahāṃ te |\nkabi kobida kahi sake kahāṃ te ||',
      translations: {
        hi: 'यमराज, कुबेर और दिक्पाल आपका यश गाते हैं। कवि और विद्वान कहाँ तक कह सकते हैं?',
        en: 'Yama, Kubera, and the guardians of directions sing your praise. How far can poets describe you?'
      }
    },
    { id: 'doha-2', order: 10, meter: 'दोहा',
      sanskrit: 'संकट से जो कोई सुमिरे, हनुमत नाम हृदय में धारे।\nसब संकट मिट जाते हैं, भक्त को कष्ट न पावै॥',
      transliteration: 'saṃkaṭa se jo koī sumire, hanumata nāma hṛdaya meṃ dhāre |\nsaba saṃkaṭa miṭa jāte haiṃ, bhakta ko kaṣṭa na pāvai ||',
      translations: {
        hi: 'संकट में जो हनुमान का नाम हृदय में धारण करता है, उसके सब संकट मिट जाते हैं, भक्त को कष्ट नहीं सताता।',
        en: 'Whoever holds Hanuman name in the heart during troubles, all their troubles are removed; sorrow does not touch the devotee.'
      }
    }
  ]
};