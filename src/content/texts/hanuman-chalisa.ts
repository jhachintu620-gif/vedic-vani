import type { TextMeta } from './types';

export const hanumanChalisa: TextMeta = {
  slug: 'hanuman-chalisa',
  title: {
    hi: 'हनुमान चालीसा',
    en: 'Hanuman Chalisa',
    sa: 'हनुमानचालीसा'
  },
  type: 'chalisa',
  deity: 'hanuman',
  language: 'awa',
  description: {
    hi: 'गोस्वामी तुलसीदास द्वारा रचित, हनुमान जी की स्तुति का सर्वाधिक प्रचलित पाठ।',
    en: 'Composed by Goswami Tulsidas, the most widely recited hymn in praise of Hanuman ji.'
  },
  source: 'Traditional public domain text',
  license: 'Public Domain',
  verseCount: 43,
  verses: [
    { id: 'doha-1', order: 1, meter: 'दोहा',
      sanskrit: 'श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।\nबरनउँ रघुबर बिमल जसु, जो दायकु फल चारि॥',
      transliteration: 'śrī guru carana saroja raja, nija manu mukuru sudhāri |\nbarana ũ raghubara bimala jasu, jo dāyaku phala cāri ||',
      translations: {
        hi: 'श्री गुरु के चरण-कमलों की धूलि से अपने मन रूपी दर्पण को स्वच्छ करके, श्री रघुवर के निर्मल यश का वर्णन करता हूँ, जो चारों फल देने वाला है।',
        en: 'Cleansing the mirror of my mind with the dust of my Guru lotus feet, I describe the unblemished glory of Shri Raghuvara, which bestows the four fruits of life.'
      }
    },
    { id: 'doha-2', order: 2, meter: 'दोहा',
      sanskrit: 'बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।\nबल बुधि बिद्या देहु मोहिं, हरहु कलेस बिकार॥',
      transliteration: 'buddhihīna tanu jānike, sumiraũ pavana-kumāra |\nbala budhi bidyā dehu mohĩ, harahu kalesa bikāra ||',
      translations: {
        hi: 'अपने शरीर को बुद्धिहीन जानकर मैं पवन-पुत्र का स्मरण करता हूँ। मुझे बल, बुद्धि और विद्या दीजिए तथा क्लेश दूर कीजिए।',
        en: 'Knowing my body to be devoid of intelligence, I remember the Son of the Wind. Grant me strength, wisdom, and knowledge, and remove my afflictions.'
      }
    },
    { id: 'chaupai-1', order: 3, meter: 'चौपाई',
      sanskrit: 'जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुँ लोक उजागर॥',
      transliteration: 'jaya hanumāna jñāna guna sāgara |\njaya kapīsa tihũ loka ujāgara ||',
      translations: {
        hi: 'हे ज्ञान और गुण के सागर हनुमान जी, आपकी जय हो। हे वानरराज, तीनों लोकों में आपका प्रकाश फैला है।',
        en: 'Victory to Hanuman, ocean of wisdom and virtue. Victory to the Lord of monkeys who illuminates the three worlds.'
      }
    },
    { id: 'chaupai-2', order: 4, meter: 'चौपाई',
      sanskrit: 'राम दूत अतुलित बल धामा।\nअंजनि-पुत्र पवनसुत नामा॥',
      transliteration: 'rāma dūta atulita bala dhāmā |\nañjani-putra pavanasuta nāmā ||',
      translations: {
        hi: 'आप श्रीराम के दूत हैं, अतुलनीय बल के धाम हैं। अंजनी के पुत्र और पवनसुत के नाम से प्रसिद्ध हैं।',
        en: 'You are the messenger of Rama and the abode of incomparable strength.'
      }
    },
    { id: 'chaupai-3', order: 5, meter: 'चौपाई',
      sanskrit: 'महाबीर बिक्रम बजरंगी।\nकुमति निवार सुमति के संगी॥',
      transliteration: 'mahābīra bikrama bajaraṅgī |\nkumati nivāra sumati ke saṅgī ||',
      translations: {
        hi: 'आप महावीर, पराक्रमी और वज्र के समान शरीर वाले हैं। दुर्बुद्धि दूर करते हैं और सद्बुद्धि के साथी हैं।',
        en: 'You are the great hero, mighty with a body strong as a thunderbolt.'
      }
    },
    { id: 'chaupai-4', order: 6, meter: 'चौपाई',
      sanskrit: 'कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥',
      transliteration: 'kañcana barana birāja subesā |\nkānana kuṇḍala kuñcita kesā ||',
      translations: {
        hi: 'आप स्वर्ण के समान वर्ण वाले, सुंदर वेशभूषा से सुशोभित हैं। कानों में कुंडल और घुँघराले केश हैं।',
        en: 'Radiant with a golden complexion and beautifully adorned, with earrings and curly hair.'
      }
    },
    { id: 'chaupai-5', order: 7, meter: 'चौपाई',
      sanskrit: 'हाथ बज्र औ ध्वजा बिराजै।\nकाँधे मूँज जनेऊ साजै॥',
      transliteration: 'hātha bajra au dhvajā birājai |\nkā̃dhe mū̃ja janeū sājai ||',
      translations: {
        hi: 'हाथ में वज्र और ध्वजा सुशोभित है, कंधे पर मूँज का जनेऊ है।',
        en: 'A mace and flag shine in your hands, and the sacred thread is on your shoulder.'
      }
    },
    { id: 'chaupai-6', order: 8, meter: 'चौपाई',
      sanskrit: 'संकर सुवन केसरीनंदन।\nतेज प्रताप महा जग बंदन॥',
      transliteration: 'saṅkara suvana kesarīnandana |\nteja pratāpa mahā jaga bandana ||',
      translations: {
        hi: 'आप शंकर के अंश और केसरी के पुत्र हैं। आपका तेज और प्रताप महान है, जगत नमन करता है।',
        en: 'You are the son of Shankara and Kesari. Your radiance and glory are great.'
      }
    },
    { id: 'chaupai-7', order: 9, meter: 'चौपाई',
      sanskrit: 'बिद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर॥',
      transliteration: 'bidyāvāna gunī ati cātura |\nrāma kāja karibe ko ātura ||',
      translations: {
        hi: 'आप विद्वान, गुणवान और अत्यंत चतुर हैं। श्रीराम के कार्य के लिए सदा उत्सुक हैं।',
        en: 'You are learned, virtuous, and clever, always eager to serve Rama.'
      }
    },
    { id: 'chaupai-8', order: 10, meter: 'चौपाई',
      sanskrit: 'प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥',
      transliteration: 'prabhu caritra sunibe ko rasiyā |\nrāma lakhana sītā mana basiyā ||',
      translations: {
        hi: 'आप श्रीराम के चरित्र सुनने में आनंद लेते हैं। राम, लक्ष्मण और सीता आपके मन में बसे हैं।',
        en: 'You delight in hearing the deeds of the Lord. Rama, Lakshmana, and Sita dwell in your heart.'
      }
    },
    { id: 'chaupai-9', order: 11, meter: 'चौपाई',
      sanskrit: 'सूक्ष्म रूप धरि सियहिं दिखावा।\nबिकट रूप धरि लंक जलावा॥',
      transliteration: 'sūkṣma rūpa dhari siyahĩ dikhāvā |\nbikaṭa rūpa dhari laṅka jalāvā ||',
      translations: {
        hi: 'सूक्ष्म रूप धरकर सीता को दर्शन दिए और विकट रूप धरकर लंका जलाई।',
        en: 'Taking a subtle form you appeared before Sita, and taking a terrifying form you burned Lanka.'
      }
    },
    { id: 'chaupai-10', order: 12, meter: 'चौपाई',
      sanskrit: 'भीम रूप धरि असुर सँहारे।\nरामचंद्र के काज सँवारे॥',
      transliteration: 'bhīma rūpa dhari asura sãhāre |\nrāmacandra ke kāja sãvāre ||',
      translations: {
        hi: 'भीम रूप धरकर असुरों का संहार किया और रामचंद्र के कार्य सफल किए।',
        en: 'Taking a massive form you destroyed demons and accomplished Ramachandra missions.'
      }
    },
    { id: 'chaupai-11', order: 13, meter: 'चौपाई',
      sanskrit: 'लाय सजीवन लखन जियाये।\nश्रीरघुबीर हरषि उर लाये॥',
      transliteration: 'lāya sajīvana lakhana jiyāye |\nśrīraghubīra haraṣi ura lāye ||',
      translations: {
        hi: 'संजीवनी लाकर लक्ष्मण को जीवित किया। श्री रघुवीर ने हर्षित होकर हृदय से लगाया।',
        en: 'Bringing the Sanjivani herb you revived Lakshmana, and Shri Raghuvira joyfully embraced you.'
      }
    },
    { id: 'chaupai-12', order: 14, meter: 'चौपाई',
      sanskrit: 'रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥',
      transliteration: 'raghupati kīnhī bahuta baṛāī |\ntuma mama priya bharatahi sama bhāī ||',
      translations: {
        hi: 'श्रीराम ने आपकी बहुत प्रशंसा की, कहा कि तुम मुझे भरत के समान प्रिय भाई हो।',
        en: 'The Lord praised you saying, "You are as dear to me as my brother Bharata."'
      }
    },
    { id: 'chaupai-13', order: 15, meter: 'चौपाई',
      sanskrit: 'सहस बदन तुम्हरो जस गावैं।\nअस कहि श्रीपति कंठ लगावैं॥',
      transliteration: 'sahasa badana tumharo jasa gāvaĩ |\nasa kahi śrīpati kaṇṭha lagāvaĩ ||',
      translations: {
        hi: 'हजारों मुख आपका यश गाते हैं। ऐसा कहकर श्रीराम ने आपको गले से लगाया।',
        en: 'Thousands of mouths sing your glory. Saying this, Shri Rama embraced you.'
      }
    },
    { id: 'chaupai-14', order: 16, meter: 'चौपाई',
      sanskrit: 'सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥',
      transliteration: 'sanakādika brahmādi munīsā |\nnārada sārada sahita ahīsā ||',
      translations: {
        hi: 'सनक आदि ऋषि, ब्रह्मा आदि देवता, नारद, सरस्वती और शेषनाग आपका यश गाते हैं।',
        en: 'Sages like Sanaka, gods like Brahma, Narada, Saraswati, and Sheshanaga all sing your glory.'
      }
    },
    { id: 'chaupai-15', order: 17, meter: 'चौपाई',
      sanskrit: 'जम कुबेर दिगपाल जहाँ ते।\nकबि कोबिद कहि सके कहाँ ते॥',
      transliteration: 'jama kubera digapāla jahā̃ te |\nkabi kobida kahi sake kahā̃ te ||',
      translations: {
        hi: 'यमराज, कुबेर और दिक्पाल आपका यश गाते हैं। कवि और विद्वान कहाँ तक कह सकते हैं?',
        en: 'Yama, Kubera, and the guardians of directions sing your praise.'
      }
    },
    { id: 'chaupai-16', order: 18, meter: 'चौपाई',
      sanskrit: 'तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥',
      transliteration: 'tuma upakāra sugrīvahĩ kīnhā |\nrāma milāya rāja pada dīnhā ||',
      translations: {
        hi: 'आपने सुग्रीव पर उपकार किया - उन्हें श्रीराम से मिलाया और राजगद्दी दिलवाई।',
        en: 'You favored Sugriva by introducing him to Rama and securing his throne.'
      }
    },
    { id: 'chaupai-17', order: 19, meter: 'चौपाई',
      sanskrit: 'तुम्हरो मंत्र बिभीषन माना।\nलंकेस्वर भए सब जग जाना॥',
      transliteration: 'tumharo mantra bibhīṣana mānā |\nlaṅkesvara bhae saba jaga jānā ||',
      translations: {
        hi: 'विभीषण ने आपकी सलाह मानी और लंकापति बने - यह सारा जगत जानता है।',
        en: 'Vibhishana followed your counsel and became the Lord of Lanka.'
      }
    },
    { id: 'chaupai-18', order: 20, meter: 'चौपाई',
      sanskrit: 'जुग सहस्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥',
      transliteration: 'juga sahasra jojana para bhānū |\nlīlyo tāhi madhura phala jānū ||',
      translations: {
        hi: 'जो सूर्य हजारों योजन दूर है, आपने उसे मीठा फल जानकर निगल लिया।',
        en: 'The sun thousands of yojanas away - you swallowed it thinking it a sweet fruit.'
      }
    },
    { id: 'chaupai-19', order: 21, meter: 'चौपाई',
      sanskrit: 'प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लाँघि गये अचरज नाहीं॥',
      transliteration: 'prabhu mudrikā meli mukha māhī̃ |\njaladhi lā̃ghi gaye acaraja nāhī̃ ||',
      translations: {
        hi: 'प्रभु की अंगूठी मुँह में रखकर आप समुद्र को लाँघ गए - इसमें कोई आश्चर्य नहीं।',
        en: 'Keeping the Lord ring in your mouth you crossed the ocean - no surprise.'
      }
    },
    { id: 'chaupai-20', order: 22, meter: 'चौपाई',
      sanskrit: 'दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥',
      transliteration: 'durgama kāja jagata ke jete |\nsugama anugraha tumhare tete ||',
      translations: {
        hi: 'संसार में जितने भी कठिन कार्य हैं, वे सब आपकी कृपा से सुगम हो जाते हैं।',
        en: 'All difficult tasks in the world become easy by your grace.'
      }
    },
    { id: 'chaupai-21', order: 23, meter: 'चौपाई',
      sanskrit: 'राम दुआरे तुम रखवारे।\nहोत न आज्ञा बिनु पैसारे॥',
      transliteration: 'rāma duāre tuma rakhavāre |\nhota na ājñā binu paisāre ||',
      translations: {
        hi: 'आप श्रीराम के द्वार के रखवाले हैं। आपकी आज्ञा के बिना कोई प्रवेश नहीं कर सकता।',
        en: 'You are the guardian of Rama door. Without your permission no one can enter.'
      }
    },
    { id: 'chaupai-22', order: 24, meter: 'चौपाई',
      sanskrit: 'सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डर ना॥',
      transliteration: 'saba sukha lahai tumhārī saranā |\ntuma rakṣaka kāhū ko ḍara nā ||',
      translations: {
        hi: 'आपकी शरण में आने से सब सुख मिलते हैं। जब आप रक्षक हैं तो किसी का भय नहीं।',
        en: 'All happiness is found in your refuge. When you are the protector, there is no fear.'
      }
    },
    { id: 'chaupai-23', order: 25, meter: 'चौपाई',
      sanskrit: 'आपन तेज सम्हारो आपै।\nतीनों लोक हाँक तें काँपै॥',
      transliteration: 'āpana teja samhāro āpai |\ntīnõ loka hā̃ka tẽ kā̃pai ||',
      translations: {
        hi: 'आप अपने तेज को स्वयं संभालते हैं। आपकी हुंकार से तीनों लोक काँप उठते हैं।',
        en: 'You alone contain your own radiance. The three worlds tremble at your roar.'
      }
    },
    { id: 'chaupai-24', order: 26, meter: 'चौपाई',
      sanskrit: 'भूत पिसाच निकट नहिं आवै।\nमहाबीर जब नाम सुनावै॥',
      transliteration: 'bhūta pisāca nikaṭa nahĩ āvai |\nmahābīra jaba nāma sunāvai ||',
      translations: {
        hi: 'जब महावीर हनुमान का नाम सुनाया जाता है, तब भूत-पिशाच पास नहीं आते।',
        en: 'When the name of Mahavira is uttered, ghosts and evil spirits do not come near.'
      }
    },
    { id: 'chaupai-25', order: 27, meter: 'चौपाई',
      sanskrit: 'नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥',
      transliteration: 'nāsai roga harai saba pīrā |\njapata niraṃtara hanumata bīrā ||',
      translations: {
        hi: 'वीर हनुमान का निरंतर जप करने से सब रोग नष्ट हो जाते हैं और सब पीड़ाएँ दूर होती हैं।',
        en: 'By constantly chanting the brave Hanuman, all diseases are destroyed and all pains removed.'
      }
    },
    { id: 'chaupai-26', order: 28, meter: 'चौपाई',
      sanskrit: 'संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥',
      transliteration: 'saṅkaṭa tẽ hanumāna chuṛāvai |\nmana krama bacana dhyāna jo lāvai ||',
      translations: {
        hi: 'जो मन, कर्म और वचन से ध्यान लगाता है, हनुमान जी उसे संकटों से छुड़ा लेते हैं।',
        en: 'Whoever meditates with mind, action, and speech - Hanuman frees them from troubles.'
      }
    },
    { id: 'chaupai-27', order: 29, meter: 'चौपाई',
      sanskrit: 'सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥',
      transliteration: 'saba para rāma tapasvī rājā |\ntina ke kāja sakala tuma sājā ||',
      translations: {
        hi: 'तपस्वी राजा श्रीराम सबके ऊपर हैं, और उनके सभी कार्य आपने सिद्ध किए।',
        en: 'The ascetic king Rama is above all, and you accomplished all his tasks.'
      }
    },
    { id: 'chaupai-28', order: 30, meter: 'चौपाई',
      sanskrit: 'और देवता चित्त न धरई।\nहनुमत सेइ सर्ब सुख करई॥',
      transliteration: 'aura devatā citta na dharaī |\nhanumata sei sarba sukha karaī ||',
      translations: {
        hi: 'अन्य देवताओं पर चित्त न धरो, हनुमान जी की सेवा करो - इससे सब सुख प्राप्त होंगे।',
        en: 'Do not set your mind on other deities. Serve Hanuman and attain all happiness.'
      }
    },
    { id: 'chaupai-29', order: 31, meter: 'चौपाई',
      sanskrit: 'संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥',
      transliteration: 'saṅkaṭa kaṭai miṭai saba pīrā |\njo sumirai hanumata balabīrā ||',
      translations: {
        hi: 'जो बलवीर हनुमान का स्मरण करता है, उसके संकट कट जाते हैं और सब पीड़ाएँ मिट जाती हैं।',
        en: 'Whoever remembers the mighty Hanuman - their troubles are cut away and all pains removed.'
      }
    },
    { id: 'chaupai-30', order: 32, meter: 'चौपाई',
      sanskrit: 'जय जय जय हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं॥',
      transliteration: 'jaya jaya jaya hanumāna gosāī̃ |\nkṛpā karahu gurudeva kī nāī̃ ||',
      translations: {
        hi: 'हे हनुमान गोसाईं, आपकी बार-बार जय हो। गुरुदेव के समान मुझ पर कृपा कीजिए।',
        en: 'Victory, victory, victory to Hanuman Gosai. Bestow your grace upon me as a Guru would.'
      }
    },
    { id: 'chaupai-31', order: 33, meter: 'चौपाई',
      sanskrit: 'जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई॥',
      transliteration: 'jo sata bāra pāṭha kara koī |\nchūṭahi bandi mahā sukha hoī ||',
      translations: {
        hi: 'जो इसका सौ बार पाठ करता है, वह बंधनों से छूट जाता है और उसे महासुख प्राप्त होता है।',
        en: 'Whoever recites this a hundred times is freed from bondage and attains great happiness.'
      }
    },
    { id: 'chaupai-32', order: 34, meter: 'चौपाई',
      sanskrit: 'जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्धि साखी गौरीसा॥',
      transliteration: 'jo yaha paṛhai hanumāna cālīsā |\nhoya siddhi sākhī gaurīsā ||',
      translations: {
        hi: 'जो इस हनुमान चालीसा का पाठ करता है, उसे सिद्धि प्राप्त होती है - गौरीश साक्षी हैं।',
        en: 'Whoever reads this Hanuman Chalisa attains success - Lord Shiva himself is the witness.'
      }
    },
    { id: 'chaupai-33', order: 35, meter: 'चौपाई',
      sanskrit: 'तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय महँ डेरा॥',
      transliteration: 'tulasīdāsa sadā hari cerā |\nkījai nātha hṛdaya mahā̃ ḍerā ||',
      translations: {
        hi: 'तुलसीदास सदा हरि का सेवक है। हे नाथ! आप मेरे हृदय में निवास कीजिए।',
        en: 'Tulsidas is forever a servant of Hari. O Lord, please make your dwelling in my heart.'
      }
    },
    { id: 'doha-3', order: 36, meter: 'दोहा',
      sanskrit: 'पवनतनय संकट हरन, मंगल मूरति रूप।\nराम लखन सीता सहित, हृदय बसहु सुर भूप॥',
      transliteration: 'pavanatanaya saṅkaṭa harana, maṅgala mūrati rūpa |\nrāma lakhana sītā sahita, hṛdaya basahu sura bhūpa ||',
      translations: {
        hi: 'हे पवन-पुत्र, संकट हरने वाले, मंगलमूर्ति! श्रीराम, लक्ष्मण और सीता सहित मेरे हृदय में निवास कीजिए।',
        en: 'O son of the Wind, remover of troubles! Dwell in my heart with Rama, Lakshmana, and Sita.'
      }
    }
  ]
};