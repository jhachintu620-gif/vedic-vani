import type { TextMeta } from './types';

export const ganeshChalisa: TextMeta = {
  slug: 'ganesh-chalisa',
  title: { hi: 'गणेश चालीसा', en: 'Ganesh Chalisa', sa: 'गणेशचालीसा' },
  type: 'chalisa',
  deity: 'ganesh',
  language: 'hi',
  description: {
    hi: 'श्री गणेश जी की चालीसा — विघ्नहर्ता की स्तुति। हर शुभ कार्य के आरंभ में पढ़ी जाती है।',
    en: 'Chalisa of Lord Ganesha — praise of the remover of obstacles. Recited at the start of every auspicious work.'
  },
  source: 'Traditional public domain text', license: 'Public Domain', verseCount: 40,
  verses: [
    { id: 'doha-1', order: 1, meter: 'दोहा',
      sanskrit: 'जय गणपति सदगुण सदन, कविवर बदन कृपाल।\nविघ्न हरण मंगल करण, जय जय गिरिजालाल॥',
      transliteration: 'jaya gaṇapati sadaguṇa sadana, kavivara badana kṛpāla |\nvighna haraṇa maṃgala karaṇa, jaya jaya girijālāla ||',
      translations: {
        hi: 'हे सद्गुणों के सदन गणपति, कवियों के वरदान, कृपालु। विघ्न हरने वाले, मंगल करने वाले, हे गिरिजा के लाल, आपकी जय हो।',
        en: 'Victory to Ganapati, abode of virtues, blessing of poets, compassionate. Remover of obstacles, bestower of auspiciousness — victory to Girija beloved son.'
      }
    },
    { id: 'chaupai-1', order: 2, meter: 'चौपाई',
      sanskrit: 'जय गणेश जग वंदन कारन। मंगल मूरति रूप अनूपम॥\nजय श्री गणपति दीन दयाला। सदा करत सन्तन प्रतिपाला॥',
      transliteration: 'jaya gaṇeśa jaga vaṃdana kārana | maṃgala mūrati rūpa anūpama ||',
      translations: {
        hi: 'हे गणेश, जगत के वंदन के कारण, मंगलमूर्ति, अनुपम रूप वाले, आपकी जय हो। हे श्री गणपति, दीनों पर दया करने वाले, संतों के सदा पालन करने वाले, जय हो।',
        en: 'Victory to Ganesha, the reason for the world salutation, embodiment of auspiciousness, of incomparable form. Victory to Shri Ganapati, compassionate to the poor, always protecting the saints.'
      }
    },
    { id: 'chaupai-2', order: 3, meter: 'चौपाई',
      sanskrit: 'सिद्धि बुद्धि तुम्हारी सहाई। तुम्हरे बिन नहिं कोऊ भाई॥\nतुम्हरे बिन नहिं कोऊ दाता। तुम्हरे बिन नहिं कोऊ त्राता॥',
      transliteration: 'siddhi buddhi tumhārī sahāī | tumhare bina nahiṃ koū bhāī ||',
      translations: {
        hi: 'सिद्धि और बुद्धि आपके सहायक हैं। आपके बिना कोई भाई नहीं, आपके बिना कोई दाता नहीं, आपके बिना कोई त्राता नहीं।',
        en: 'Siddhi and Buddhi are your helpers. Without you there is no brother, no giver, no protector.'
      }
    },
    { id: 'chaupai-3', order: 4, meter: 'चौपाई',
      sanskrit: 'शुभ लाभ तुम्हरे दोउ भाई। प्रेम सहित तुम्हरो जस गाई॥\nतुम्हरे भजन करत सुख पावैं। तुम्हरे नाम रटत भव तरैं॥',
      transliteration: 'śubha lābha tumhare dou bhāī | prema sahita tumharo jasa gāī ||',
      translations: {
        hi: 'शुभ और लाभ आपके दोनों भाई हैं। प्रेम सहित आपका यश गाते हैं। आपके भजन से सुख मिलता है, आपका नाम रटने से भवसागर तरते हैं।',
        en: 'Shubha and Labha are your two brothers. They sing your glory with love. From your bhajan happiness comes; by chanting your name one crosses the ocean of existence.'
      }
    },
    { id: 'chaupai-4', order: 5, meter: 'चौपाई',
      sanskrit: 'जो गणेश जी की चालीसा पढ़े। सो नर सुख सम्पत्ति सब लहै॥\nजन्म जन्म के पाप नसावै। अन्त समय गणपति पद पावै॥',
      transliteration: 'jo gaṇeśa jī kī cālīsā paṛhe | so nara sukha sampatti saba lahai ||',
      translations: {
        hi: 'जो गणेश जी की चालीसा पढ़ता है, वह मनुष्य सुख और सम्पत्ति सब पाता है। जन्म-जन्म के पाप नष्ट होते हैं, अंत समय गणपति का पद पाता है।',
        en: 'Whoever recites Ganesh Chalisa obtains all happiness and wealth. Sins of many births are destroyed, and at the end he attains the state of Ganapati.'
      }
    },
    { id: 'doha-2', order: 6, meter: 'दोहा',
      sanskrit: 'गणेश चालीसा की महिमा, कहि न सकै कोउ नर।\nजो पढ़े प्रेम सहित नित, सो पावै सुख अपार॥',
      transliteration: 'gaṇeśa cālīsā kī mahimā, kahi na sakai kou nara |\njo paṛhe prema sahita nita, so pāvai sukha apāra ||',
      translations: {
        hi: 'गणेश चालीसा की महिमा को कोई मनुष्य बता नहीं सकता। जो प्रेम सहित नित्य पढ़ता है, वह अपार सुख पाता है।',
        en: 'No person can describe the glory of Ganesh Chalisa. Whoever reads with love daily attains boundless happiness.'
      }
    }
  ]
};