import { CompendiumItem } from "@/lib/types";
import Fan from "@/assets/compendium/fan.webp";
import ThirteenWords from "@/assets/compendium/thirteen_words.webp";
import BafaWubu from "@/assets/compendium/bafawubu.webp";
import SunGuangbo from "@/assets/compendium/guangbo.webp";
import Ruler from "@/assets/compendium/ruler.webp";
import Yang24 from "@/assets/compendium/yang24.webp";
import Sun12 from "@/assets/compendium/sun12.webp";
import Yang32 from "@/assets/compendium/yang32.webp";

//
// exercises
//

const spiralingExercises: CompendiumItem = {
  id: "spiraling-exercises",
  title: "Spiraling Exercises",
  description:
    "A curated set of exercises to loosen up and prepare for practice. Trains body awareness, coordination, and spiraling techniques.",
  category: "Exercises",
  image:
    "https://images.unsplash.com/photo-1631556269791-fff05a526613?q=80&w=1000&auto=format&fit=crop",
  otherNames: ["缠丝功", "Chan Si Gong", "Reeling Silk Exercises"]
};

const taoistYogaStretches: CompendiumItem = {
  id: "taoist-yoga-stretches",
  title: "Taoist Yoga Stretches",
  description:
    "A series of stretches used by Taoists, dating back to the Jin dynasty or earlier.",
  image: "https://images.unsplash.com/photo-1661308411865-4fce7576bef8",
  category: "Exercises",
  otherNames: ["导引"]
};

export const exercises = [spiralingExercises, taoistYogaStretches];

//
// qigong
//

const chenHunyuanQigong: CompendiumItem = {
  id: "chen-hunyuan-qigong",
  title: "Chen Hunyuan Qigong",
  description:
    "A qigong practice that integrates the whole body and mind, focusing on energy cultivation and health.",
  image: "https://images.unsplash.com/photo-1647039726235-bc7dbbc9a681",
  category: "Qigong",
  otherNames: ["陈氏心意混元太极气功"]
};

const thirteenWords: CompendiumItem = {
  id: "thirteen-words",
  title: "Thirteen Words",
  description:
    "A qigong practice that emphasizes the cultivation of internal energy through specific postures and breathing techniques.",
  image: ThirteenWords,
  category: "Qigong",
  otherNames: ["十三字"]
};

const templeGuardianQigong: CompendiumItem = {
  id: "temple-guardian-qigong",
  title: "Temple Guardian Qigong",
  description:
    "A qigong practice used by temple guardian monks to develop strength and cultivate internal energy.",
  image: "https://images.unsplash.com/photo-1619400521895-d17d2f7be1cc",
  category: "Qigong",
  otherNames: ["金刚如意功"]
};

const eightBrocades: CompendiumItem = {
  id: "eight-brocades",
  title: "Eight Brocades",
  description:
    "A set of eight traditional Chinese exercises that promote health and vitality. Each movement is designed to enhance energy flow and balance.",
  image:
    "https://images.unsplash.com/photo-1659434567251-c98f02eb47a0?q=80&w=1173&auto=format&fit=crop",
  category: "Exercises",
  otherNames: ["八段锦"]
};

export const qigong = [
  chenHunyuanQigong,
  thirteenWords,
  templeGuardianQigong,
  eightBrocades
];

//
// core compulsory
//

const sun12: CompendiumItem = {
  id: "sun12",
  title: "Sun 12",
  description:
    "A simplified form of Sun-style tai chi, focused on developing footwork.",
  image: Sun12,
  category: "Core Compulsory",
  otherNames: ["孙氏十二式"]
};

const bafaWubu: CompendiumItem = {
  id: "bafa-wubu",
  title: "Bafa Wubu",
  description:
    "A foundational form of tai chi, covers all eight powers and their expressions in five different directions.",
  image: BafaWubu,
  category: "Core Compulsory",
  otherNames: ["八法五步", "Thirteen Postures"]
};

const sunGuangbo: CompendiumItem = {
  id: "sun-guangbo",
  title: "Sun Guangbo",
  description:
    "A concise form of Sun-style tai chi, covering a plethora of common Sun style techniques.",
  image: SunGuangbo,
  category: "Core Compulsory",
  otherNames: ["孙氏太极广播操"]
};

export const coreCompulsory = [sun12, bafaWubu, sunGuangbo];

//
// intermediate compulsory
//

const yang24: CompendiumItem = {
  id: "yang24",
  title: "Yang 24",
  description:
    "A widely practiced form of Yang-style tai chi, commonly used for competitions to demonstrate physical aptitude. Not a health form.",
  image: Yang24,
  category: "Intermediate Compulsory",
  otherNames: ["杨氏二十四式"]
};

const taijiBaguaFan: CompendiumItem = {
  id: "taiji-bagua-fan",
  title: "Taiji Bagua Fan",
  description:
    "A distilled fan set from the Bagua Kun Lun Fan forms, combining elements of bagua and tai chi.",
  image: Fan,
  category: "Intermediate Compulsory",
  otherNames: ["太极八卦扇"]
};

const chenHunyuanRuler10: CompendiumItem = {
  id: "chen-hunyuan-ruler-10",
  title: "Chen Hunyuan Ruler 10",
  description: "The 10 form ruler set from Chen Hunyuan tai chi.",
  image: Ruler,
  category: "Intermediate Compulsory",
  otherNames: ["陈氏心意混元棒十式"]
};

const yang32Sword: CompendiumItem = {
  id: "yang32-sword",
  title: "Yang 32 Straight Sword",
  description: "A traditional Yang-style sword form.",
  image: Yang32,
  category: "Intermediate Compulsory",
  otherNames: ["杨氏三十二式剑"]
};

export const intermediateCompulsory = [
  yang24,
  taijiBaguaFan,
  chenHunyuanRuler10,
  yang32Sword
];

// featured items for carousel

export const featuredCompendiumItems: CompendiumItem[] = [
  spiralingExercises,
  templeGuardianQigong,
  chenHunyuanQigong,
  taijiBaguaFan,
  bafaWubu
];

// index

export const allCompendiumItems = [
  ...exercises,
  ...qigong,
  ...coreCompulsory,
  ...intermediateCompulsory
];

export const compendiumIndex = allCompendiumItems.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {} as Record<string, CompendiumItem>);
