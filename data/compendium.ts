import { CompendiumItem } from "@/lib/types";
import ImageFan from "@/assets/compendium/fan.webp";
import ImageThirteenWords from "@/assets/compendium/thirteen_words.webp";
import ImageBafaWubu from "@/assets/compendium/bafawubu.webp";
import ImageSunGuangbo from "@/assets/compendium/guangbo.webp";
import ImageRuler from "@/assets/compendium/ruler.webp";
import ImageYang24 from "@/assets/compendium/yang24.webp";
import ImageSun12 from "@/assets/compendium/sun12.webp";
import ImageYang32 from "@/assets/compendium/yang32.webp";
import ImageSpiralingExercises from "@/assets/compendium/spiraling.webp";
import ImageTaoistYoga from "@/assets/compendium/taoist_yoga.webp";
import ImageChenHunyuan from "@/assets/compendium/hunyuan.webp";
import ImageEightBrocades from "@/assets/compendium/eight_brocades.webp";
import ImageTempleGuardian from "@/assets/compendium/temple_guardian.webp";

//
// exercises
//

const spiralingExercises: CompendiumItem = {
  id: "spiraling-exercises",
  title: "Spiraling Exercises",
  description:
    "A curated set of exercises to loosen up and prepare for practice. Trains body awareness, coordination, and spiraling techniques.",
  category: "Exercises",
  image: ImageSpiralingExercises,
  otherNames: ["缠丝功", "Chan Si Gong", "Reeling Silk Exercises"]
};

const taoistYogaStretches: CompendiumItem = {
  id: "taoist-yoga-stretches",
  title: "Taoist Yoga Stretches",
  description:
    "A series of stretches taken from Taoist yoga, dating back to the Han dynasty.",
  image: ImageTaoistYoga,
  category: "Exercises",
  otherNames: ["导引", "Daoyin"]
};

const templeGuardianExercises: CompendiumItem = {
  id: "temple-guardian-exercises",
  title: "Temple Guardian Exercises",
  description:
    "A set of exercises practiced by Shaolin temple monks to develop strength, flexibility, and balance.",
  image: ImageTempleGuardian,
  category: "Exercises",
  otherNames: ["金刚如意功"]
};

export const exercises = [
  spiralingExercises,
  taoistYogaStretches,
  templeGuardianExercises
];

//
// qigong
//

const chenHunyuanQigong: CompendiumItem = {
  id: "chen-hunyuan-qigong",
  title: "Chen Hunyuan Qigong",
  description:
    "A qigong practice that integrates the full body, focusing on cultivating sensitivity towards internal energy.",
  image: ImageChenHunyuan,
  category: "Qigong",
  otherNames: ["陈氏混元太极气功"]
};

const thirteenWords: CompendiumItem = {
  id: "thirteen-words",
  title: "Thirteen Words",
  description:
    "A qigong practice that regulates breathing, improves physique, and strengthens the body.",
  image: ImageThirteenWords,
  category: "Qigong",
  otherNames: ["十三字"]
};

const eightBrocades: CompendiumItem = {
  id: "eight-brocades",
  title: "Eight Brocades",
  description:
    "A set of eight movements designed to improve health and vitality, also used to cultivate internal energy.",
  image: ImageEightBrocades,
  category: "Exercises",
  otherNames: ["八段锦", "Baduanjin"]
};

export const qigong = [chenHunyuanQigong, thirteenWords, eightBrocades];

//
// core compulsory
//

const sun12: CompendiumItem = {
  id: "sun12",
  title: "Sun 12",
  description:
    "A simplified form of Sun-style tai chi, focused on developing footwork.",
  image: ImageSun12,
  category: "Core Compulsory",
  otherNames: ["孙氏十二式"]
};

const bafaWubu: CompendiumItem = {
  id: "bafa-wubu",
  title: "Bafa Wubu",
  description:
    "The foundational form of tai chi, covers all eight powers and their expressions in five different directions.",
  image: ImageBafaWubu,
  category: "Core Compulsory",
  otherNames: ["八法五步", "太极十三式", "Thirteen Postures"]
};

const sunGuangbo: CompendiumItem = {
  id: "sun-guangbo",
  title: "Sun Guangbo",
  description:
    "A concise form of Sun-style tai chi, covering a plethora of common Sun style techniques.",
  image: ImageSunGuangbo,
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
    "The yang style 24-form, a quintessential form used in competitions to demonstrate physical aptitude and skill.",
  image: ImageYang24,
  category: "Intermediate Compulsory",
  otherNames: ["杨氏二十四式"]
};

const taijiBaguaFan: CompendiumItem = {
  id: "taiji-bagua-fan",
  title: "Taiji Bagua Fan",
  description:
    "A distilled fan set from the Bagua Kun Lun Fan forms, combining elements of bagua and tai chi.",
  image: ImageFan,
  category: "Intermediate Compulsory",
  otherNames: ["太极八卦扇"]
};

const chenHunyuanRuler10: CompendiumItem = {
  id: "chen-hunyuan-ruler-10",
  title: "Chen Hunyuan Ruler 10",
  description: "The 10 form ruler set from Chen Hunyuan tai chi.",
  image: ImageRuler,
  category: "Intermediate Compulsory",
  otherNames: ["陈氏混元太极棒十式"]
};

const yang32Sword: CompendiumItem = {
  id: "yang32-sword",
  title: "Yang 32 Straight Sword",
  description: "A traditional Yang-style sword form.",
  image: ImageYang32,
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
  templeGuardianExercises,
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
