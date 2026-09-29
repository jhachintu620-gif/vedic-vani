import type { TextMeta } from './types';

export const gayatriMantra: TextMeta = {
  slug: 'gayatri-mantra',
  title: { hi: 'गायत्री मंत्र', en: 'Gayatri Mantra', sa: 'गायत्रीमन्त्रः' },
  type: 'veda',
  deity: 'saraswati',
  language: 'sa',
  description: {
    hi: 'ऋग्वेद का सर्वोच्च मंत्र — सविता देव की स्तुति। सब वेदों का सार, बुद्धि और ज्ञान की प्रार्थना।',
    en: 'The supreme mantra of Rig Veda — praise of Savita Deva. The essence of all Vedas, prayer for intellect and knowledge.'
  },
  source: 'Rig Veda 3.62.10 (public domain)', license: 'Public Domain', verseCount: 4,
  verses: [
    { id: 'dhyanam', order: 1, meter: 'ध्यानम्',
      sanskrit: 'ॐ भूर्भुवः स्वः।\nतत्सवितुर्वरेण्यं।\nभर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
      transliteration: 'oṃ bhūrbhuvaḥ svaḥ |\ntatsaviturvareṇyaṃ |\nbhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
      translations: {
        hi: 'ॐ — तीनों लोकों (भू, भुवः, स्वः) में व्याप्त परमात्मा। उस प्रकाशमान सविता देव के दिव्य तेज का हम ध्यान करते हैं। वे हमारी बुद्धियों को सन्मार्ग की ओर प्रेरित करें।',
        en: 'Om — the Supreme Being pervading the three worlds (earth, mid-space, heaven). We meditate on the divine light of that radiant Savita. May he inspire our intellects toward the righteous path.'
      }
    },
    { id: 'v1', order: 2, meter: 'श्लोक',
      sanskrit: 'ॐ भूर्भुवः स्वः।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
      transliteration: 'oṃ bhūrbhuvaḥ svaḥ |\ntatsaviturvareṇyaṃ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
      translations: {
        hi: 'ॐ — तीनों लोकों में व्याप्त। उस सविता देव के वरेण्य, दिव्य भर्ग (तेज) का हम ध्यान करते हैं। वे हमारी बुद्धियों को प्रेरित करें।',
        en: 'Om, pervading the three worlds. We meditate on the excellent, divine radiance of Savita. May he inspire our intellects.'
      }
    },
    { id: 'v2', order: 3, meter: 'श्लोक',
      sanskrit: 'ऋषिर्विश्वामित्रः। देवता सविता। छन्दो गायत्री।\nॐ बीजं, शक्तिः, कीलकं न्यासमेव च कथ्यते॥',
      transliteration: 'ṛṣirviśvāmitraḥ | devatā savitā | chando gāyatrī |\noṃ bījaṃ, śaktiḥ, kīlakaṃ nyāsameva ca kathyate ||',
      translations: {
        hi: 'ऋषि विश्वामित्र, देवता सविता, छंद गायत्री। ॐ बीज, शक्ति, कीलक और न्यास कहे जाते हैं।',
        en: 'Sage Vishvamitra, deity Savita, meter Gayatri. Om is the seed, the power, the lock, and the placement.'
      }
    },
    { id: 'phala', order: 4, meter: 'फलश्रुति',
      sanskrit: 'गायत्री मंत्रस्य जपेन सर्वपापं प्रणश्यति।\nसर्वरोगा विनश्यन्ति सत्यमेतन्न संशयः॥',
      transliteration: 'gāyatrī mantrasya japena sarvapāpaṃ praṇaśyati |\nsarvarogā vinaśyanti satyametanna saṃśayaḥ ||',
      translations: {
        hi: 'गायत्री मंत्र के जप से सब पाप नष्ट होते हैं, सब रोग नष्ट होते हैं, यह सत्य है, संदेह नहीं।',
        en: 'By chanting the Gayatri Mantra all sins are destroyed, all diseases destroyed — this is true, without doubt.'
      }
    }
  ]
};