import type { TextMeta } from './types';

export const kenaUpanishad: TextMeta = {
  slug: 'kena-upanishad',
  title: { hi: 'केन उपनिषद्', en: 'Kena Upanishad', sa: 'केनोपनिषत्' },
  type: 'upanishad',
  deity: 'narayan',
  language: 'sa',
  description: {
    hi: 'सामवेदीय केन उपनिषद् — "किसके द्वारा?" — मन, प्राण, वाणी को चलाने वाले ब्रह्म की खोज।',
    en: 'Kena Upanishad of Sama Veda — "By whom?" — the inquiry into the Brahman that moves mind, breath, and speech.'
  },
  source: 'Sama Veda (public domain)', license: 'Public Domain', verseCount: 6,
  verses: [
    { id: 'v1', order: 1, meter: 'श्लोक',
      sanskrit: 'ॐ केनेषितं पतति प्रेषितं मनः केन प्राणः प्रथमः प्रैति युक्तः।\nकेनेषितां वाचमिमां वदन्ति चक्षुः श्रोत्रं क उ देवो युनक्ति॥',
      transliteration: 'oṃ keneṣitaṃ patati preṣitaṃ manaḥ kena prāṇaḥ prathamaḥ praiti yuktaḥ |\nkeneṣitāṃ vācamimāṃ vadanti cakṣuḥ śrotraṃ ka u devo yunakti ||',
      translations: {
        hi: 'किसकी प्रेरणा से मन विषयों में जाता है? किससे प्रेरित प्राण चलता है? किसकी प्रेरणा से वाणी बोलती है? कौन देवता चक्षु और श्रोत्र को युक्त करता है?',
        en: 'By whose will does the mind fall on objects? By whom directed does the first breath proceed? By whose will do people speak this speech? What deity yokes the eye and ear?'
      }
    },
    { id: 'v2', order: 2, meter: 'श्लोक',
      sanskrit: 'श्रोत्रस्य श्रोत्रं मनसो मनो यद्वाचो ह वाचं स उ प्राणस्य प्राणः।\nचक्षुषश्चक्षुरतिमुच्य धीराः प्रेत्यास्माल्लोकादमृता भवन्ति॥',
      transliteration: 'śrotrasya śrotraṃ manaso mano yadvāco ha vācaṃ sa u prāṇasya prāṇaḥ |\ncakṣuṣaścakṣuratimucya dhīrāḥ pretyāsmāllokādamṛtā bhavanti ||',
      translations: {
        hi: 'वह श्रोत्र का श्रोत्र, मन का मन, वाणी की वाणी, प्राण का प्राण, चक्षु का चक्षु है। धीर पुरुष इसे जानकर इस लोक से मुक्त होकर अमर होते हैं।',
        en: 'That is the ear of the ear, the mind of the mind, the speech of speech, the breath of breath, the eye of the eye. The wise, knowing this, become immortal after departing this world.'
      }
    },
    { id: 'v3', order: 3, meter: 'श्लोक',
      sanskrit: 'न तत्र चक्षुर्गच्छति न वाग्गच्छति नो मनः।\nन विद्मो न विजानीमो यथैतदनुशिष्यात्॥',
      transliteration: 'na tatra cakṣurgacchati na vāggacchati no manaḥ |\nna vidmo na vijānīmo yathaitadanuśiṣyāt ||',
      translations: {
        hi: 'वहाँ चक्षु नहीं जाता, वाणी नहीं जाती, मन नहीं जाता। हम नहीं जानते, न समझते हैं कि इसे कैसे सिखाया जाए।',
        en: 'There the eye does not go, nor speech, nor mind. We do not know, we do not understand how one could teach this.'
      }
    },
    { id: 'v4', order: 4, meter: 'श्लोक',
      sanskrit: 'अन्यदेव तद्विदितादथो अविदितादधि।\nइति शुश्रुम पूर्वेषां ये नस्तद्व्याचचक्षिरे॥',
      transliteration: 'anyadeva tadviditādatho aviditādadhi |\niti śuśruma pūrveṣāṃ ye nastadvyācacakṣire ||',
      translations: {
        hi: 'वह जाने हुए से अन्य है, और अजाने से भी परे है — ऐसा हमने पूर्वजों से सुना, जिन्होंने हमें यह समझाया।',
        en: 'It is other than the known, and beyond the unknown — thus we have heard from our predecessors who explained this to us.'
      }
    },
    { id: 'v5', order: 5, meter: 'श्लोक',
      sanskrit: 'यद्वाचानभ्युदितं येन वागभ्युद्यते।\nतदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते॥',
      transliteration: 'yadvācānabhyuditaṃ yena vāgabhyudyate |\ntadeva brahma tvaṃ viddhi nedaṃ yadidamupāsate ||',
      translations: {
        hi: 'जो वाणी से नहीं कहा जाता, जिससे वाणी कही जाती है — उसे ही ब्रह्म जानो, इसको नहीं जिसकी उपासना की जाती है।',
        en: 'That which speech cannot express, but by which speech is expressed — know that alone as Brahman, not this which people worship here.'
      }
    },
    { id: 'phala', order: 6, meter: 'फलश्रुति',
      sanskrit: 'इति श्रीकेनोपनिषत् सम्पूर्णा।',
      transliteration: 'iti śrīkenopaniṣat sampūrṇā |',
      translations: {
        hi: 'इस प्रकार श्री केन उपनिषद् सम्पूर्ण हुई।',
        en: 'Thus concludes the Shri Kena Upanishad.'
      }
    }
  ]
};