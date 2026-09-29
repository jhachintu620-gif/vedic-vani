export interface RigvedaMandala {
  number: number;
  name: { hi: string; en: string };
  suktas: number;
  mantras: number;
  rishi: { hi: string; en: string };
  description: { hi: string; en: string };
}

export const rigvedaMandalas: RigvedaMandala[] = [
  { number: 1, name: { hi: 'प्रथम मण्डल', en: 'First Mandala' }, suktas: 191, mantras: 2006, rishi: { hi: 'विश्वामित्र, गृत्समद, कण्व, दीर्घतमा आदि', en: 'Vishvamitra, Gritsamada, Kanva, Dirghatamas and others' }, description: { hi: 'सबसे बड़ा मण्डल — 191 सूक्त। अग्नि, इन्द्र, वायु, अश्विन, मित्रावरुण, उषा आदि देवताओं की स्तुतियाँ। गायत्री मंत्र इसी मण्डल के 62वें सूक्त में है।', en: 'The largest Mandala — 191 Suktas. Hymns to Agni, Indra, Vayu, Ashvins, Mitra-Varuna, Usha and others. The Gayatri Mantra is in Sukta 62 of this Mandala.' } },
  { number: 2, name: { hi: 'द्वितीय मण्डल', en: 'Second Mandala' }, suktas: 43, mantras: 429, rishi: { hi: 'गृत्समद शौनक', en: 'Gritsamada Shaunaka' }, description: { hi: 'अग्नि और इन्द्र की मुख्य स्तुतियाँ। गृत्समद ऋषि द्वारा दृष्ट।', en: 'Main hymns to Agni and Indra. Seen by Rishi Gritsamada.' } },
  { number: 3, name: { hi: 'तृतीय मण्डल', en: 'Third Mandala' }, suktas: 62, mantras: 617, rishi: { hi: 'विश्वामित्र', en: 'Vishvamitra' }, description: { hi: 'विश्वामित्र द्वारा दृष्ट। गायत्री मंत्र यहाँ सूक्त 62.10 में है। अग्नि, इन्द्र, मित्रावरुण की स्तुतियाँ।', en: 'Seen by Vishvamitra. The Gayatri Mantra is here in Sukta 62.10. Hymns to Agni, Indra, Mitra-Varuna.' } },
  { number: 4, name: { hi: 'चतुर्थ मण्डल', en: 'Fourth Mandala' }, suktas: 58, mantras: 589, rishi: { hi: 'वामदेव', en: 'Vamadeva' }, description: { hi: 'वामदेव द्वारा दृष्ट। अग्नि, इन्द्र, ऋभु, दधिक्रा की स्तुतियाँ।', en: 'Seen by Vamadeva. Hymns to Agni, Indra, Rbhus, Dadhikra.' } },
  { number: 5, name: { hi: 'पञ्चम मण्डल', en: 'Fifth Mandala' }, suktas: 87, mantras: 727, rishi: { hi: 'अत्रि', en: 'Atri' }, description: { hi: 'अत्रि द्वारा दृष्ट। अग्नि, इन्द्र, विश्वेदेव की स्तुतियाँ।', en: 'Seen by Atri. Hymns to Agni, Indra, Vishvedevas.' } },
  { number: 6, name: { hi: 'षष्ठम मण्डल', en: 'Sixth Mandala' }, suktas: 75, mantras: 765, rishi: { hi: 'भारद्वाज', en: 'Bharadvaja' }, description: { hi: 'भारद्वाज द्वारा दृष्ट। अग्नि, इन्द्र, मरुत्, उषा, पूषन् की स्तुतियाँ।', en: 'Seen by Bharadvaja. Hymns to Agni, Indra, Maruts, Usha, Pushan.' } },
  { number: 7, name: { hi: 'सप्तम मण्डल', en: 'Seventh Mandala' }, suktas: 104, mantras: 841, rishi: { hi: 'वसिष्ठ', en: 'Vasishtha' }, description: { hi: 'वसिष्ठ द्वारा दृष्ट। अग्नि, इन्द्र, वरुण, मित्रावरुण, अश्विन, उषा की स्तुतियाँ।', en: 'Seen by Vasishtha. Hymns to Agni, Indra, Varuna, Mitra-Varuna, Ashvins, Usha.' } },
  { number: 8, name: { hi: 'अष्टम मण्डल', en: 'Eighth Mandala' }, suktas: 103, mantras: 1716, rishi: { hi: 'कण्व और अन्य', en: 'Kanva and others' }, description: { hi: 'कण्व और अन्य ऋषियों द्वारा दृष्ट। इन्द्र, अग्नि, अश्विन, सोम की स्तुतियाँ। सोम-मण्डल।', en: 'Seen by Kanva and others. Hymns to Indra, Agni, Ashvins, Soma. Soma-mandala.' } },
  { number: 9, name: { hi: 'नवम मण्डल', en: 'Ninth Mandala' }, suktas: 114, mantras: 1108, rishi: { hi: 'अनेक ऋषि', en: 'Many sages' }, description: { hi: 'पूर्णतः सोम देवता को समर्पित — "सोम मण्डल"। 114 सूक्त सोम की स्तुति में।', en: 'Entirely dedicated to Soma Deva — "Soma Mandala". 114 Suktas praising Soma.' } },
  { number: 10, name: { hi: 'दशम मण्डल', en: 'Tenth Mandala' }, suktas: 191, mantras: 1754, rishi: { hi: 'अनेक ऋषि', en: 'Many sages' }, description: { hi: 'अंतिम मण्डल — नासदीय सूक्त (सृष्टि का रहस्य), पुरुष सूक्त (विराट पुरुष), देवी सूक्त। दर्शन की गहराई।', en: 'Final Mandala — Nasadiya Sukta (mystery of creation), Purusha Sukta (Cosmic Person), Devi Sukta. Deep philosophy.' } },
];

export const famousSuktas = [
  { slug: 'nasadiya-sukta', ref: 'RV 10.129', name: { hi: 'नासदीय सूक्त', en: 'Nasadiya Sukta' }, desc: { hi: 'सृष्टि के आदि का रहस्य', en: 'Mystery of creation' } },
  { slug: 'purusha-suktam', ref: 'RV 10.90', name: { hi: 'पुरुष सूक्त', en: 'Purusha Sukta' }, desc: { hi: 'विराट पुरुष से सृष्टि', en: 'Creation from Cosmic Person' } },
  { slug: 'gayatri-mantra', ref: 'RV 3.62.10', name: { hi: 'गायत्री मंत्र', en: 'Gayatri Mantra' }, desc: { hi: 'सर्वोच्च वैदिक मंत्र', en: 'Supreme Vedic mantra' } },
  { slug: 'agni-sukta', ref: 'RV 1.1', name: { hi: 'अग्नि सूक्त', en: 'Agni Sukta' }, desc: { hi: 'ऋग्वेद का प्रथम सूक्त', en: 'First Sukta of Rig Veda' } },
  { slug: 'devi-sukta', ref: 'RV 10.125', name: { hi: 'देवी सूक्त', en: 'Devi Sukta' }, desc: { hi: 'वाक् देवी का सूक्त', en: 'Hymn of Vak Devi' } },
  { slug: 'vishnu-sukta', ref: 'RV 1.154', name: { hi: 'विष्णु सूक्त', en: 'Vishnu Sukta' }, desc: { hi: 'विष्णु के त्रिविक्रम', en: 'Vishnu Trivikrama' } },
  { slug: 'manyu-sukta', ref: 'RV 10.83-84', name: { hi: 'मन्यु सूक्त', en: 'Manyu Sukta' }, desc: { hi: 'वीरता और उत्साह', en: 'Heroism and valor' } },
  { slug: 'shanti-mantras', ref: 'Various', name: { hi: 'शांति मंत्र', en: 'Shanti Mantras' }, desc: { hi: 'वैदिक शांति प्रार्थनाएँ', en: 'Vedic peace prayers' } },
  { slug: 'mahamrityunjaya-mantra', ref: 'RV 7.59.12', name: { hi: 'महामृत्युंजय मंत्र', en: 'Mahamrityunjaya Mantra' }, desc: { hi: 'रुद्र की स्तुति', en: 'Praise of Rudra' } },
  { slug: 'rigveda-mandala-1', ref: 'Mandala 1', name: { hi: 'मण्डल 1 (सूक्त 1-10)', en: 'Mandala 1 (Suktas 1-10)' }, desc: { hi: 'अग्नि, वायु, अश्विन, इन्द्र', en: 'Agni, Vayu, Ashvins, Indra' } },
];