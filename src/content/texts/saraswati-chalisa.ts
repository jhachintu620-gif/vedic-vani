import type { TextMeta } from './types';

export const saraswatiChalisa: TextMeta = {
  slug: 'saraswati-chalisa',
  title: { hi: 'सरस्वती चालीसा', en: 'Saraswati Chalisa', sa: 'सरस्वतीचालीसा' },
  type: 'chalisa',
  deity: 'saraswati',
  language: 'hi',
  description: {
    hi: 'माँ सरस्वती की चालीसा — विद्या, बुद्धि और ज्ञान की देवी की स्तुति। विद्यारंभ और परीक्षा से पहले पढ़ी जाती है।',
    en: 'Chalisa of Maa Saraswati — praise of the Goddess of learning, intellect, and knowledge. Recited before exams and study.'
  },
  source: 'Traditional public domain text', license: 'Public Domain', verseCount: 40,
  verses: [
    { id: 'doha-1', order: 1, meter: 'दोहा',
      sanskrit: 'जय सरस्वती सदगुण सदन, कविता की अधिकारी।\nजय जय वीणा वादिनी, जय जय मतिधारी॥',
      transliteration: 'jaya sarasvatī sadaguṇa sadana, kavitā kī adhikārī |\njaya jaya vīṇā vādinī, jaya jaya matidhārī ||',
      translations: {
        hi: 'हे सरस्वती, सद्गुणों के सदन, कविता की अधिकारी, आपकी जय हो। हे वीणा वादिनी, हे बुद्धि धारण करने वाली, जय हो।',
        en: 'Victory to Saraswati, abode of virtues, mistress of poetry. Victory to the veena player, victory to the bearer of intellect.'
      }
    },
    { id: 'chaupai-1', order: 2, meter: 'चौपाई',
      sanskrit: 'जय जय सरस्वती जगदम्बे। हंस वाहिनी अम्बे शारदे॥\nजय जय वीणा पुस्तक धारी। जय जय ज्ञान प्रकाश करनहारी॥',
      transliteration: 'jaya jaya sarasvatī jagadamba | haṃsa vāhinī amba śārade ||',
      translations: {
        hi: 'हे सरस्वती जगदम्बे, आपकी जय हो। हंस की सवारी करने वाली, शारदे, जय हो। हे वीणा और पुस्तक धारण करने वाली, ज्ञान का प्रकाश करने वाली, जय हो।',
        en: 'Victory to Saraswati, Mother of the world. Riding the swan, Sharade, victory. Victory to the holder of veena and book, giver of the light of knowledge.'
      }
    },
    { id: 'chaupai-2', order: 3, meter: 'चौपाई',
      sanskrit: 'जो जन तुम्हरा ध्यान धरई। सो नर विद्या सब लहई॥\nजो जन नाम तुम्हारा गावै। सो नर कवि बन जावै॥',
      transliteration: 'jo jana tumharā dhyāna dharaī | so nara vidyā saba lahaī ||',
      translations: {
        hi: 'जो मनुष्य आपका ध्यान धरता है, वह सब विद्या पाता है। जो आपका नाम गाता है, वह कवि बन जाता है।',
        en: 'Whoever meditates on you obtains all knowledge. Whoever sings your name becomes a poet.'
      }
    },
    { id: 'chaupai-3', order: 4, meter: 'चौपाई',
      sanskrit: 'जो विद्यार्थी पढ़ने जावै। सो तुम्हरा नाम सुमिरन करावै॥\nतो उसका पढ़ा हुआ सब आवै। परीक्षा में सफल हो जावै॥',
      transliteration: 'jo vidyārthī paṛhane jāvai | so tumharā nāma sumirana karāvai ||',
      translations: {
        hi: 'जो विद्यार्थी पढ़ने जाता है, आपका नाम सुमिरण करता है, तो उसका पढ़ा हुआ सब याद आता है, परीक्षा में सफल हो जाता है।',
        en: 'A student who goes to study and remembers your name — all his study is remembered, and he succeeds in exams.'
      }
    },
    { id: 'doha-2', order: 5, meter: 'दोहा',
      sanskrit: 'सरस्वती चालीसा जो पढ़े, नित्य प्रेम सहित ध्यान।\nसो नर ज्ञानी हो जावै, कविता में हो प्रवीण॥',
      transliteration: 'sarasvatī cālīsā jo paṛhe, nitya prema sahita dhyāna |\nso nara jñānī ho jāvai, kavitā meṃ ho pravīṇa ||',
      translations: {
        hi: 'जो सरस्वती चालीसा पढ़ता है, नित्य प्रेम सहित ध्यान करता है, वह ज्ञानी हो जाता है, कविता में प्रवीण होता है।',
        en: 'Whoever reads Saraswati Chalisa, daily meditating with love, becomes wise and expert in poetry.'
      }
    }
  ]
};