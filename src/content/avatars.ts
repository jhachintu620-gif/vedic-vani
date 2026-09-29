export interface AvatarInfo {
  slug: string;
  number: number;
  name: { hi: string; en: string };
  icon: string;
  form: { hi: string; en: string };
  story: { hi: string; en: string };
  texts: string[];
}

export const avatars: AvatarInfo[] = [
  {
    slug: 'matsya',
    number: 1,
    name: { hi: 'मत्स्य अवतार', en: 'Matsya Avatar' },
    icon: '🐟',
    form: { hi: 'मछली', en: 'Fish' },
    story: {
      hi: 'प्रलय में वेदों और मनु की रक्षा के लिए प्रकट। हयग्रीव असुर का संहार किया।',
      en: 'Appeared in the great deluge to protect the Vedas and Manu. Killed the demon Hayagriva.'
    },
    texts: ['matsya-avatar']
  },
  {
    slug: 'kurma',
    number: 2,
    name: { hi: 'कूर्म अवतार', en: 'Kurma Avatar' },
    icon: '🐢',
    form: { hi: 'कछुआ', en: 'Tortoise' },
    story: {
      hi: 'समुद्र मंथन में मंदराचल को पीठ पर धारण किया। अमृत और चौदह रत्न निकले।',
      en: 'Held Mount Mandara on his back during the churning of the ocean. Nectar and fourteen jewels emerged.'
    },
    texts: ['kurma-avatar']
  },
  {
    slug: 'varaha',
    number: 3,
    name: { hi: 'वराह अवतार', en: 'Varaha Avatar' },
    icon: '🐗',
    form: { hi: 'वराह', en: 'Boar' },
    story: {
      hi: 'हिरण्याक्ष असुर को मारकर पृथ्वी को रसातल से उठाया।',
      en: 'Killed the demon Hiranyaksha and lifted the earth from the cosmic ocean.'
    },
    texts: ['varaha-avatar']
  },
  {
    slug: 'narasimha',
    number: 4,
    name: { hi: 'नृसिंह अवतार', en: 'Narasimha Avatar' },
    icon: '🦁',
    form: { hi: 'नर-सिंह', en: 'Man-Lion' },
    story: {
      hi: 'भक्त प्रह्लाद की रक्षा के लिए स्तंभ से प्रकट होकर हिरण्यकशिपु का संहार किया।',
      en: 'Emerged from a pillar to protect devotee Prahlada and killed Hiranyakashipu.'
    },
    texts: ['narasimha-avatar', 'narasimha-kavach']
  },
  {
    slug: 'vamana',
    number: 5,
    name: { hi: 'वामन अवतार', en: 'Vamana Avatar' },
    icon: '🧍',
    form: { hi: 'बौना ब्राह्मण', en: 'Dwarf Brahmin' },
    story: {
      hi: 'राजा बलि से तीन पग भूमि माँगकर तीनों लोक नापे। बलि को सुतल का राजा बनाया।',
      en: 'Asked for three steps of land from King Bali and measured the three worlds. Made Bali ruler of Sutala.'
    },
    texts: ['vamana-avatar']
  },
  {
    slug: 'parashurama',
    number: 6,
    name: { hi: 'परशुराम अवतार', en: 'Parashurama Avatar' },
    icon: '🪓',
    form: { hi: 'परशुधारी ब्राह्मण', en: 'Axe-wielding Brahmin' },
    story: {
      hi: 'जमदग्नि के पुत्र। अत्याचारी क्षत्रियों का 21 बार संहार किया।',
      en: 'Son of Jamadagni. Destroyed tyrannical Kshatriyas 21 times.'
    },
    texts: ['parashurama-stotra']
  },
  {
    slug: 'rama',
    number: 7,
    name: { hi: 'राम अवतार', en: 'Rama Avatar' },
    icon: '🏹',
    form: { hi: 'मर्यादा पुरुषोत्तम', en: 'Ideal Man' },
    story: {
      hi: 'अयोध्या के राजा। रावण का वध, सीता का उद्धार, रामराज्य की स्थापना।',
      en: 'King of Ayodhya. Killed Ravana, rescued Sita, established Rama Rajya.'
    },
    texts: ['ram-chalisa', 'sita-stuti', 'rama-raksha-stotra']
  },
  {
    slug: 'krishna',
    number: 8,
    name: { hi: 'कृष्ण अवतार', en: 'Krishna Avatar' },
    icon: '🪈',
    form: { hi: 'मुरलीधर', en: 'Flute-player' },
    story: {
      hi: 'वसुदेव-देवकी के पुत्र। कंस का वध, महाभारत में गीता का उपदेश, गोवर्धन उठाया।',
      en: 'Son of Vasudeva and Devaki. Killed Kamsa, gave Gita in Mahabharata, lifted Govardhan.'
    },
    texts: ['krishna-chalisa', 'krishna-aarti', 'krishna-ashtakam', 'madhurashtakam', 'bhagavad-gita']
  },
  {
    slug: 'kalki',
    number: 9,
    name: { hi: 'कल्कि अवतार', en: 'Kalki Avatar' },
    icon: '⚔️',
    form: { hi: 'खड्गधारी अश्वारोही', en: 'Sword-bearing horseman' },
    story: {
      hi: 'भावी अवतार। कलियुग के अंत में अधर्म का नाश करके सत्ययुग की स्थापना करेंगे।',
      en: 'Future avatar. Will destroy unrighteousness at the end of Kali Yuga and establish Satya Yuga.'
    },
    texts: ['kalki-stotra']
  }
];

export function getAvatarBySlug(slug: string): AvatarInfo | undefined {
  return avatars.find((a) => a.slug === slug);
}