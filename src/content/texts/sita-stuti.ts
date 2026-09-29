import type { TextMeta } from './types';

export const sitaStuti: TextMeta = {
  slug: 'sita-stuti',
  title: { hi: 'सीता स्तुति', en: 'Sita Stuti', sa: 'सीतास्तुतिः' },
  type: 'stotra',
  deity: 'sita',
  language: 'hi',
  description: {
    hi: 'माता सीता की स्तुति — श्रीराम की शक्ति, जानकी माता की महिमा। नित्य पाठ से सौभाग्य और सुख-शांति मिलती है।',
    en: 'Praise of Maa Sita — the energy of Shri Rama, glory of Mother Janaki. Daily recitation brings fortune, happiness, and peace.'
  },
  source: 'Traditional public domain text', license: 'Public Domain', verseCount: 10,
  verses: [
    { id: 'dhyana', order: 1, meter: 'ध्यानम्',
      sanskrit: 'जानकी जगजननी सीता, रामप्रिया सती सुशीला।\nभूमिजा भक्तवत्सला, जय सिये जय जय सिये॥',
      transliteration: 'jānakī jagajanānī sītā, rāmapriyā satī suśīlā |\nbhūmijā bhaktavatsalā, jaya siye jaya jaya siye ||',
      translations: {
        hi: 'जानकी जगत की जननी हैं, रामप्रिया, सती, सुशीला, भूमिजा, भक्तवत्सला। जय सीता, जय जय सीता।',
        en: 'Janaki is the Mother of the world, beloved of Rama, chaste, virtuous, born of earth, loving to devotees. Victory to Sita, victory victory to Sita.'
      }
    },
    { id: 'verse-1', order: 2, meter: 'श्लोक',
      sanskrit: 'सीता सीता जपो नित्यं, सीता राम प्रियं वदेत्।\nसीता सीता जपेन्नित्यं, सीता रामस्य मातृका॥',
      transliteration: 'sītā sītā japо nityaṃ, sītā rāma priyaṃ vadet |\nsītā sītā japen nityaṃ, sītā rāmasya mātṛkā ||',
      translations: {
        hi: 'सीता-सीता का नित्य जप करो, सीता राम को प्रिय कहो। सीता-सीता का नित्य जप करो, सीता राम की मातृका हैं।',
        en: 'Chant Sita Sita daily, speak Sita dear to Rama. Chant Sita Sita daily — Sita is the mother of Rama.'
      }
    },
    { id: 'verse-2', order: 3, meter: 'श्लोक',
      sanskrit: 'भूमिपुत्री जगन्माता, वेदवेदांग पारगा।\nरामभक्ति परा देवी, सीता श्रीरघुनन्दिनी॥',
      transliteration: 'bhūmiputrī jaganmātā, vedavedāṅga pāragā |\nrāmabhakti parā devī, sītā śrīraghunandinī ||',
      translations: {
        hi: 'भूमि की पुत्री, जगत की माता, वेद-वेदांग पारंगत, रामभक्ति में परा देवी, श्रीरघुनंदिनी सीता।',
        en: 'Daughter of earth, mother of the world, learned in Vedas and Vedangas, supreme goddess in devotion to Rama — Sita, delight of Raghu dynasty.'
      }
    },
    { id: 'verse-3', order: 4, meter: 'श्लोक',
      sanskrit: 'सीता पतिव्रता श्रेष्ठा, सीता धर्म परायणा।\nसीता सर्वसुखं दात्री, सीता मोक्ष प्रदायिनी॥',
      transliteration: 'sītā pativratā śreṣṭhā, sītā dharma parāyaṇā |\nsītā sarvasukhaṃ dātrī, sītā mokṣa pradāyinī ||',
      translations: {
        hi: 'सीता पतिव्रता में श्रेष्ठ, धर्म परायण, सब सुख देने वाली, मोक्ष प्रदायिनी हैं।',
        en: 'Sita is the greatest of chaste wives, devoted to dharma, giver of all happiness, grantor of liberation.'
      }
    },
    { id: 'verse-4', order: 5, meter: 'श्लोक',
      sanskrit: 'जय जय सीते सीते जगदम्बे, जय जय जानकी रामप्रिये।\nजय जय पावन चरित सुहावन, जय जय भक्त जन काम्य फले॥',
      transliteration: 'jaya jaya sīte sīte jagadamba, jaya jaya jānakī rāmapriye |\njaya jaya pāvana carita suhāvana, jaya jaya bhakta jana kāmya phale ||',
      translations: {
        hi: 'जय जय सीता, सीता जगदम्बे, जय जय जानकी, रामप्रिये। जय जय पावन चरित, सुहावन, जय जय भक्त जन के मनोवांछित फल।',
        en: 'Victory to Sita, Mother of the world, victory to Janaki, beloved of Rama. Victory to your pure and beautiful deeds, victory to the fulfiller of devotees desires.'
      }
    },
    { id: 'verse-5', order: 6, meter: 'श्लोक',
      sanskrit: 'सीता माता प्रसन्ना च, यदि स्यात् सर्वमंगलम्।\nसीता कोप प्रदग्धानां, कुतः शान्तिर्भविष्यति॥',
      transliteration: 'sītā mātā prasannā ca, yadi syāt sarvamaṅgalam |\nsītā kopa pradagdhānāṃ, kutaḥ śāntirbhaviṣyati ||',
      translations: {
        hi: 'सीता माता प्रसन्न हों तो सब मंगल होता है। सीता के कोप से जलने वालों को शांति कहाँ मिलेगी?',
        en: 'When Mother Sita is pleased, all auspiciousness comes. For those burned by Sita wrath, where will peace be found?'
      }
    },
    { id: 'verse-6', order: 7, meter: 'श्लोक',
      sanskrit: 'सीता रामौ च मां पातु, सीता रामौ सदा मम।\nसीता रामौ च हृदये, सीता रामौ सदा गतिः॥',
      transliteration: 'sītā rāmau ca māṃ pātu, sītā rāmau sadā mama |\nsītā rāmau ca hṛdaye, sītā rāmau sadā gatiḥ ||',
      translations: {
        hi: 'सीता-राम मेरी रक्षा करें, सीता-राम सदा मेरे हैं। सीता-राम हृदय में, सीता-राम सदा गति हैं।',
        en: 'May Sita-Rama protect me; Sita-Rama are always mine. Sita-Rama in my heart; Sita-Rama are always my goal.'
      }
    },
    { id: 'verse-7', order: 8, meter: 'श्लोक',
      sanskrit: 'या सीता सा सती नारी, न भूता न भविष्यति।\nतां सीतां शरणं यामि, सर्वसौभाग्य दायिनीम्॥',
      transliteration: 'yā sītā sā satī nārī, na bhūtā na bhaviṣyati |\ntāṃ sītāṃ śaraṇaṃ yāmi, sarvas_aubhāgya dāyinīm ||',
      translations: {
        hi: 'जैसी सती नारी सीता न हुई और न होगी। मैं उन सीता की शरण जाता हूँ, जो सब सौभाग्य देने वाली हैं।',
        en: 'Such a chaste woman as Sita has not been and will not be. I take refuge in that Sita, giver of all good fortune.'
      }
    },
    { id: 'verse-8', order: 9, meter: 'श्लोक',
      sanskrit: 'सीता कीर्ति जपेन्नित्यं, सीता स्मरणतत्परः।\nसीतायाः स्मरणेनैव, सर्वपापैः प्रमुच्यते॥',
      transliteration: 'sītā kīrti japen nityaṃ, sītā smaraṇatatparaḥ |\nsītāyāḥ smaraṇenaiva, sarvapāpaiḥ pramucyate ||',
      translations: {
        hi: 'सीता की कीर्ति नित्य जपे, सीता के स्मरण में तत्पर रहे। सीता के स्मरण मात्र से सब पापों से मुक्त होता है।',
        en: 'Chant Sita glory daily, be devoted to remembering Sita. By merely remembering Sita, one is freed from all sins.'
      }
    },
    { id: 'doha-2', order: 10, meter: 'दोहा',
      sanskrit: 'जय जय जय जानकी, जय जय जय सियराम।\nजय जय जय सीतापति, जय जय जय रघुराम॥',
      transliteration: 'jaya jaya jaya jānakī, jaya jaya jaya siyarāma |\njaya jaya jaya sītāpati, jaya jaya jaya raghurāma ||',
      translations: {
        hi: 'जय जय जय जानकी, जय जय जय सियाराम। जय जय जय सीतापति, जय जय जय रघुराम।',
        en: 'Victory to Janaki, victory to Sita-Rama. Victory to Sita consort, victory to Raghupati.'
      }
    }
  ]
};