import type { TextMeta } from './types';

export const prashnaUpanishad: TextMeta = {
  slug: 'prashna-upanishad',
  title: { hi: 'प्रश्न उपनिषद्', en: 'Prashna Upanishad', sa: 'प्रश्नोपनिषत्' },
  type: 'upanishad',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'अथर्ववेदीय प्रश्न उपनिषद् — छह शिष्यों के छह प्रश्न और पिप्पलाद ऋषि के उत्तर।',
    en: 'Prashna Upanishad of Atharva Veda — six questions by six disciples and answers by sage Pippalada.'
  },
  source: 'Atharva Veda (public domain)', license: 'Public Domain', verseCount: 5,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ सुकेशा च भारद्वाजः शैब्यश्च सत्यकामः सौर्यायणी च गार्ग्यः।\nकौसल्यश्चाश्वलायनो भार्गवो वैदर्भिश्च षड् एते ब्रह्म परिप्रच्छन्ति॥',
      transliteration: 'oṃ sukeśā ca bhāradvājaḥ śaibyaśca satyakāmaḥ sauryāyaṇī ca gārgyaḥ |\nkausalyaścāśvalāyano bhārgavo vaidarbhiśca ṣaḍ ete brahma paripracchanti ||',
      translations: {
        hi: 'सुकेशा भारद्वाज, शैब्य सत्यकाम, सौर्यायणी गार्ग्य, कौसल्य आश्वलायन, भार्गव वैदर्भि — ये छह ब्रह्म के विषय में प्रश्न पूछते हैं।',
        en: 'Sukesha Bharadvaja, Shaibya Satyakama, Sauryayani Gargya, Kaushalya Ashvalayana, Bhargava Vaidarbhi — these six ask about Brahman.'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'तान् होवाचात्मनि प्राणं विद्धि इति। अयं हि प्राणः प्रज्ञात्मा यस्मिन् सर्वं प्रतिष्ठितम्।\nएतद्वै सत्यं यत् प्राणः प्रज्ञा च॥',
      transliteration: 'tān hovācātmani prāṇaṃ viddhi iti | ayaṃ hi prāṇaḥ prajñātmā yasmin sarvaṃ pratiṣṭhitam |\netadvai satyaṃ yat prāṇaḥ prajñā ca ||',
      translations: {
        hi: 'उनसे कहा — आत्मा में प्राण को जानो। यह प्राण ही प्रज्ञात्मा है जिसमें सब प्रतिष्ठित है। यह सत्य है कि प्राण और प्रज्ञा ही हैं।',
        en: 'He said to them — know Prana as the Self. This Prana is the conscious Self in which all is established. This is truth — Prana and Prajna.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'प्राणस्य ह वा एते सर्वे वशे भवन्ति। पिता प्राणः पृथिवी प्राणो माता प्राण आकाशः प्राणः।\nसर्वं ह वा एतत् प्राण एव॥',
      transliteration: 'prāṇasya ha vā ete sarve vaśe bhavanti | pitā prāṇaḥ pṛthivī prāṇo mātā prāṇa ākāśaḥ prāṇaḥ |\nsarvaṃ ha vā etat prāṇa eva ||',
      translations: {
        hi: 'इन सब में प्राण के वश में सब होते हैं। पिता प्राण, पृथ्वी प्राण, माता प्राण, आकाश प्राण। यह सब प्राण ही है।',
        en: 'All these are under the control of Prana. Father is Prana, earth is Prana, mother is Prana, space is Prana. All this is indeed Prana.'
      }
    },
    { id: 'v4', order: 4, meter: 'श्लोक',
      sanskrit: 'एष हि वै सर्वेषां भूतानामात्मा। य एवं विद्वान् सर्वज्ञः सर्वात्मा भवति।\nअमृतः प्रज्ञः सत्यः सत्यव्रतो नित्यः सनातनः॥',
      transliteration: 'eṣa hi vai sarveṣāṃ bhūtānāmātmā | ya evaṃ vidvān sarvajñaḥ sarvātmā bhavati |\namṛtaḥ prajñaḥ satyaḥ satyavrato nityaḥ sanātanaḥ ||',
      translations: {
        hi: 'यह सब भूतों की आत्मा है। जो इस प्रकार जानता है, वह सर्वज्ञ, सर्वात्मा, अमृत, प्रज्ञ, सत्य, सत्यव्रत, नित्य और सनातन होता है।',
        en: 'This is the Self of all beings. One who knows thus becomes all-knowing, the Self of all, immortal, wise, true, of true vows, eternal and everlasting.'
      }
    },
    { id: 'phala', order: 5, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीप्रश्नोपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīpraśnopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री प्रश्न उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Prashna Upanishad.'
      }
    }
  ]
};