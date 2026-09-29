import type { TextMeta } from './types';

export const shivChalisa: TextMeta = {
  slug: 'shiv-chalisa',
  title: { hi: 'शिव चालीसा', en: 'Shiv Chalisa', sa: 'शिवचालीसा' },
  type: 'chalisa',
  deity: 'shiva',
  language: 'hi',
  description: {
    hi: 'भगवान शिव की चालीसा — महादेव की स्तुति का प्रसिद्ध पाठ। सोमवार और शिवरात्रि को विशेष रूप से पढ़ा जाता है।',
    en: 'The Chalisa of Lord Shiva — the famous hymn praising Mahadeva. Especially recited on Mondays and Shivaratri.'
  },
  source: 'Traditional public domain text', license: 'Public Domain', verseCount: 40,
  verses: [
    { id: 'doha-1', order: 1, meter: 'दोहा',
      sanskrit: 'जय गणेश गिरिजा सुवन, मंगल मूल सुजान।\nकहत अयोध्यादास तुम, देहु अभय वरदान॥',
      transliteration: 'jaya gaṇeśa girijā suvana, maṃgala mūla sujāna |\nkahata ayodhyādāsa tuma, dehu abhaya varadāna ||',
      translations: {
        hi: 'हे गणेश, गिरिजा के पुत्र, मंगल के मूल, सुजान! अयोध्यादास कहता है कि मुझे अभय वरदान दीजिए।',
        en: 'Victory to Ganesha, son of Girija, root of auspiciousness, wise one! Ayodhyadas says: grant me the boon of fearlessness.'
      }
    },
    { id: 'chaupai-1', order: 2, meter: 'चौपाई',
      sanskrit: 'जय गिरिजा पति दीन दयाला। सदा करत सन्तन प्रतिपाला॥\nभाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के॥',
      transliteration: 'jaya girijā pati dīna dayālā | sadā karata santana pratipālā ||',
      translations: {
        hi: 'हे गिरिजा के पति, दीनों पर दया करने वाले, संतों के सदा पालन करने वाले, आपकी जय हो। भाल पर चंद्रमा सुशोभित है, कानों में कुंडल और नागफनी के आभूषण हैं।',
        en: 'Victory to the consort of Girija, compassionate to the poor, always protecting the saints. The moon shines on your forehead, earrings and snake-hoods adorn your ears.'
      }
    },
    { id: 'chaupai-2', order: 3, meter: 'चौपाई',
      sanskrit: 'अंग गौर शिर नीरज धारी। मृगछाला कटि छबि बहु भारी॥\nधनुष बाण हाथन में राजै। सदा करत सन्तन पर छाजै॥',
      transliteration: 'aṃga gaura śira nīraja dhārī | mṛgachālā kaṭi chabi bahu bhārī ||',
      translations: {
        hi: 'आपका शरीर गौर वर्ण है, सिर पर गंगा धारण करते हैं, कमर पर मृगछाला की शोभा है। हाथों में धनुष-बाण राजते हैं, संतों पर सदा छाए रहते हैं।',
        en: 'Your body is fair, you carry Ganga on your head, and a deerskin adorns your waist. Bow and arrow shine in your hands; you always bless the saints.'
      }
    },
    { id: 'chaupai-3', order: 4, meter: 'चौपाई',
      sanskrit: 'चिता भूति चटकन लगाई। नीलकण्ठ तब नाम कहाई॥\nपान सुपारी धतूरा भोजन। धूप दीप मिष्ठान सुभोजन॥',
      transliteration: 'citā bhūti caṭakana lagāī | nīlakaṇṭha taba nāma kahāī ||',
      translations: {
        hi: 'चिता की भस्म शरीर पर लगाते हैं, तब नीलकंठ नाम से प्रसिद्ध हैं। पान, सुपारी, धतूरा भोजन हैं, धूप, दीप, मिष्ठान भोग है।',
        en: 'You smear ash from the funeral pyre, and are known as Nilakantha. Betel, areca nut, and dhatura are your food; incense, lamps, and sweets are your offerings.'
      }
    },
    { id: 'chaupai-4', order: 5, meter: 'चौपाई',
      sanskrit: 'छप्पन भोग छत्तीसों ब्यंजन। सदा करत शिवजी का भोजन॥\nबहु बिधि स्तुति कोई नर गावै। शंकर प्रसन्न मन में लावै॥',
      transliteration: 'chappana bhoga chattīsoṃ byaṃjana | sadā karata śivajī kā bhojana ||',
      translations: {
        hi: 'छप्पन भोग और छत्तीस व्यंजन शिवजी का भोजन है। बहुत प्रकार से कोई मनुष्य स्तुति गाता है और शंकर को प्रसन्न करता है।',
        en: 'Fifty-six offerings and thirty-six dishes are Shiva food. In many ways a person sings praises and pleases Shankara.'
      }
    },
    { id: 'chaupai-5', order: 6, meter: 'चौपाई',
      sanskrit: 'कोई गावै शिव कीर्ति निरंतर। कोई ध्यान धरै मन अंतर॥\nसोई पावै मनवांछित फल। जो सुमिरै हर हर हर प्रतिपल॥',
      transliteration: 'koī gāvai śiva kīrti niraṃtara | koī dhyāna dharai mana aṃtara ||',
      translations: {
        hi: 'कोई शिव की कीर्ति निरंतर गाता है, कोई मन में ध्यान धरता है। वही मनवांछित फल पाता है जो हर पल हर हर हर सुमिरता है।',
        en: 'Someone sings Shiva glory constantly, someone meditates within. They alone get their desired fruit who remember "Har Har Har" every moment.'
      }
    },
    { id: 'chaupai-6', order: 7, meter: 'चौपाई',
      sanskrit: 'शिव शिव जय जय जय शिव भोला। सदा रहे मम मन में ठौला॥\nजय जय जय शिव की जय होवै। प्रेम सहित गावै सो भव तरै॥',
      transliteration: 'śiva śiva jaya jaya jaya śiva bholā | sadā rahe mama mana meṃ ṭhaulā ||',
      translations: {
        hi: 'हे भोले शिव, आपकी जय हो। आप सदा मेरे मन में निवास करें। शिव की सदा जय होवे, जो प्रेम सहित गाता है वह भवसागर तर जाता है।',
        en: 'O innocent Shiva, victory to you. May you always dwell in my mind. May Shiva victory always be — whoever sings with love crosses the ocean of existence.'
      }
    },
    { id: 'doha-2', order: 8, meter: 'दोहा',
      sanskrit: 'प्रेम सहित जो शिव चालीसा पढ़े। सो नर शिवलोक को जाए॥\nशिव चालीसा की महिमा ऐसी। पढ़त सुनत मिट जाते क्लेश सबैसी॥',
      transliteration: 'prema sahita jo śiva cālīsā paṛhe | so nara śivaloka ko jāe ||',
      translations: {
        hi: 'जो प्रेम सहित शिव चालीसा पढ़ता है, वह मनुष्य शिवलोक को जाता है। शिव चालीसा की महिमा ऐसी है कि पढ़ने-सुनने से सब क्लेश मिट जाते हैं।',
        en: 'Whoever recites Shiv Chalisa with love goes to Shivaloka. Such is the glory of Shiv Chalisa that by reading and hearing, all afflictions are destroyed.'
      }
    }
  ]
};