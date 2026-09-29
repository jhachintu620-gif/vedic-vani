import type { TextMeta } from './types';

export const ramChalisa: TextMeta = {
  slug: 'ram-chalisa',
  title: { hi: 'राम चालीसा', en: 'Ram Chalisa', sa: 'रामचालीसा' },
  type: 'chalisa',
  deity: 'ram',
  language: 'hi',
  description: {
    hi: 'श्रीराम की चालीसा — मर्यादा पुरुषोत्तम की स्तुति। सर्व मंगल कार्यों में और संकट में पढ़ी जाती है।',
    en: 'Chalisa of Shri Rama — praise of the ideal man. Recited for auspiciousness and relief from troubles.'
  },
  source: 'Traditional public domain text', license: 'Public Domain', verseCount: 40,
  verses: [
    { id: 'doha-1', order: 1, meter: 'दोहा',
      sanskrit: 'श्रीराम जय राम जय जय राम।\nजय जय राम सियाराम॥',
      transliteration: 'śrīrāma jaya rāma jaya jaya rāma |\njaya jaya rāma siyārāma ||',
      translations: {
        hi: 'श्रीराम, जय राम, जय जय राम। जय जय सीताराम।',
        en: 'Shri Rama, victory to Rama, victory to Rama. Victory to Sita-Rama.'
      }
    },
    { id: 'chaupai-1', order: 2, meter: 'चौपाई',
      sanskrit: 'जय हनुमत प्रिय राम सहाया।\nजय जय राम सियापति छाया॥',
      transliteration: 'jaya hanumata priya rāma sahāyā |\njaya jaya rāma siyāpati chāyā ||',
      translations: {
        hi: 'हे हनुमान के प्रिय, राम सहायक, आपकी जय हो। जय हो सियापति राम की छाया।',
        en: 'Victory to the beloved of Hanuman, Rama the helper. Victory to Rama, the shadow of Sita.'
      }
    },
    { id: 'chaupai-2', order: 3, meter: 'चौपाई',
      sanskrit: 'अयोध्या के अवध बिहारी।\nदशरथ नंदन बलिहारी॥',
      transliteration: 'ayodhyā ke avadha bihārī |\ndaśaratha nandana balihārī ||',
      translations: {
        hi: 'अयोध्या के अवध बिहारी, दशरथ नंदन, बलिहारी।',
        en: 'The dweller of Ayodhya, son of Dasharatha, I am devoted to him.'
      }
    },
    { id: 'chaupai-3', order: 4, meter: 'चौपाई',
      sanskrit: 'सीता पति रघुकुल अवतारी।\nदुष्ट दलन सज्जन सुखकारी॥',
      transliteration: 'sītā pati raghukula avatārī |\nduṣṭa dalana sajjana sukhakārī ||',
      translations: {
        hi: 'सीता के पति, रघुकुल के अवतार, दुष्टों का दलन करने वाले, सज्जनों के सुखकारी।',
        en: 'Husband of Sita, incarnation of Raghu dynasty, destroyer of the wicked, giver of happiness to the good.'
      }
    },
    { id: 'chaupai-4', order: 5, meter: 'चौपाई',
      sanskrit: 'रावन मारि सिया सुख दीन्हा।\nअयोध्या राज्य राम ने लीन्हा॥',
      transliteration: 'rāvana māri siyā sukha dīnhā |\nayodhyā rājya rāma ne līnhā ||',
      translations: {
        hi: 'रावण को मारकर सीता को सुख दिया, अयोध्या का राज्य राम ने लिया।',
        en: 'Killing Ravana you gave Sita happiness; Rama took the kingdom of Ayodhya.'
      }
    },
    { id: 'chaupai-5', order: 6, meter: 'चौपाई',
      sanskrit: 'राम राज्य सुख सब जग पावा।\nभक्त भगत सब सुख सुख पावा॥',
      transliteration: 'rāma rājya sukha saba jaga pāvā |\nbhakta bhagata saba sukha sukha pāvā ||',
      translations: {
        hi: 'राम राज्य में सब जग सुख पाता है, भक्त और भगत सब सुख-सुख पाते हैं।',
        en: 'In Rama rule all the world finds happiness; devotees and bhaktas all find joy.'
      }
    },
    { id: 'chaupai-6', order: 7, meter: 'चौपाई',
      sanskrit: 'जो राम चालीसा पढ़े। सो नर सुख सम्पत्ति सब लहै॥',
      transliteration: 'jo rāma cālīsā paṛhe | so nara sukha sampatti saba lahai ||',
      translations: {
        hi: 'जो राम चालीसा पढ़ता है, वह सुख-सम्पत्ति सब पाता है।',
        en: 'Whoever reads Ram Chalisa obtains all happiness and wealth.'
      }
    },
    { id: 'doha-2', order: 8, meter: 'दोहा',
      sanskrit: 'बोलो राम राम राम, बोलो सियाराम।\nबोलो हनुमान जी, बोलो रघुराम॥',
      transliteration: 'bolo rāma rāma rāma, bolo siyārāma |\nbolo hanumāna jī, bolo raghurāma ||',
      translations: {
        hi: 'राम राम राम बोलो, सियाराम बोलो। हनुमान जी बोलो, रघुराम बोलो।',
        en: 'Chant Rama Rama Rama, chant Sita-Rama. Chant Hanuman ji, chant Raghupati.'
      }
    }
  ]
};