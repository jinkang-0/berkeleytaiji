import { CompendiumItem } from "@/lib/types";

//
// exercises
//

const spiralingExercises: CompendiumItem = {
  title: "Spiraling Exercises",
  description:
    "A curated set of exercises to loosen up and prepare for practice. Trains body awareness, coordination, and spiraling techniques.",
  category: "Exercises",
  image:
    "https://images.unsplash.com/photo-1636545672666-391bda04f4d0?q=80&w=1170&auto=format&fit=crop",
  link: "https://austinchentaichi.com/wp-content/uploads/2009/10/ReelingSilkBook.pdf",
  otherNames: ["缠丝功"]
};

const taoistYogaStretches: CompendiumItem = {
  title: "Taoist Yoga Stretches",
  description:
    "A series of stretches used by Taoists, dating back to the Jin dynasty or earlier.",
  image: "https://images.unsplash.com/photo-1661308411865-4fce7576bef8",
  category: "Exercises",
  otherNames: ["导引"]
};

const eightBrocades: CompendiumItem = {
  title: "Eight Brocades",
  description:
    "A set of eight traditional Chinese exercises that promote health and vitality. Each movement is designed to enhance energy flow and balance.",
  image:
    "https://images.squarespace-cdn.com/content/v1/59615e9b36e5d31cf08fd6ed/1567265624172-HZPXSV8CYCTBU061Z48E/8-brocades.jpg?format=2500w",
  link: "https://en.wikipedia.org/wiki/Baduanjin_qigong",
  category: "Exercises",
  otherNames: ["八段锦"]
};

export const exercises = [
  spiralingExercises,
  taoistYogaStretches,
  eightBrocades
];

//
// qigong
//

const chenHunyuanQigong: CompendiumItem = {
  title: "Chen Hunyuan Qigong",
  description:
    "A qigong practice that integrates the whole body and mind, focusing on energy cultivation and health.",
  image: "https://images.unsplash.com/photo-1647039726235-bc7dbbc9a681",
  link: "https://en.m.wikipedia.org/wiki/Chen-style_tai_chi#Xinyi_Hunyuan_tai_chi",
  category: "Qigong",
  otherNames: ["陈式心意混元太极气功"]
};

const thirteenWords: CompendiumItem = {
  title: "Thirteen Words",
  description:
    "A qigong practice that emphasizes the cultivation of internal energy through specific postures and breathing techniques.",
  youtubeLink: "https://youtu.be/_0_lwrfgC_Q?si=Bs9NU5qEPwYZmofx",
  category: "Qigong",
  otherNames: ["十三字"]
};

const templeGuardianQigong: CompendiumItem = {
  title: "Temple Guardian Qigong",
  description:
    "A qigong practice used by temple guardian monks to develop strength and cultivate internal energy.",
  image: "https://images.unsplash.com/photo-1619400521895-d17d2f7be1cc",
  category: "Qigong",
  otherNames: ["金刚瑞功"]
};

export const qigong = [chenHunyuanQigong, thirteenWords, templeGuardianQigong];

//
// core compulsory
//

const sun12: CompendiumItem = {
  title: "Sun 12",
  description:
    "A simplified form of Sun-style tai chi, focused on developing footwork.",
  youtubeLink: "https://youtu.be/fRA7bMWEpjo?si=ni2YRwMO8IFM0bRr",
  category: "Core Compulsory",
  otherNames: ["孙氏十二式"]
};

const yangBafawubu: CompendiumItem = {
  title: "Yang Bafawubu",
  description:
    "A foundational form of Yang-style tai chi, emphasizing the eight powers and five directions commonly used in tai chi.",
  youtubeLink: "https://youtu.be/XoW25w-Uusg?si=JoxnYKWidihfxH2G",
  category: "Core Compulsory",
  otherNames: ["杨氏八法五步"]
};

const sunGuangbo: CompendiumItem = {
  title: "Sun Guangbo",
  description:
    "A concise form of Sun-style tai chi, focusing on the core principles of the style.",
  youtubeLink: "https://youtu.be/U6fGm8ungYg?si=qY4LHsgVT1bKrM3_",
  category: "Core Compulsory",
  otherNames: ["孙式太极广播操"]
};

export const coreCompulsory = [sun12, yangBafawubu, sunGuangbo];

//
// intermediate compulsory
//

const yang24: CompendiumItem = {
  title: "Yang 24",
  description:
    "A widely practiced form of Yang-style tai chi, commonly used for competitions to demonstrate physical aptitude. Not a health form.",
  youtubeLink: "https://youtu.be/XkCwv9oNM3c?si=9WS9315Fls5pzjq1",
  category: "Intermediate Compulsory",
  otherNames: ["杨氏二十四式", "Beijing Form"]
};

const taijiBaguaFan: CompendiumItem = {
  title: "Taiji Bagua Fan",
  description:
    "A distilled fan set from the Bagua Kun Lun Fan forms, combining elements of bagua and tai chi.",
  youtubeLink: "https://youtu.be/K72qsZavBN0?si=tLR2IvJKExOUO_rQ",
  category: "Intermediate Compulsory",
  otherNames: ["太极八卦扇"]
};

const chenHunyuanRuler10: CompendiumItem = {
  title: "Chen Hunyuan Ruler 10",
  description: "The 10 form ruler set from Chen Hunyuan tai chi.",
  youtubeLink: "https://youtu.be/CczCUMiJKso?si=GzIy_CvB1r96_hV8",
  category: "Intermediate Compulsory",
  otherNames: ["陈式心意混元棒十式"]
};

export const intermediateCompulsory = [
  yang24,
  taijiBaguaFan,
  chenHunyuanRuler10
];

// featured items for carousel

export const featuredCompendiumItems: CompendiumItem[] = [
  spiralingExercises,
  chenHunyuanQigong,
  taijiBaguaFan
];
