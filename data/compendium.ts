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
import ImageXingyiDrills from "@/assets/compendium/xingyi_drills.webp";
import ImageChenHunyuan24 from "@/assets/compendium/chenhunyuan24.webp";
import ImageYangStaff13 from "@/assets/compendium/yang-staff-13.webp";
import ImageBaguaFan1 from "@/assets/compendium/bagua-fan-1.webp";
import ImageTigerTamingCane from "@/assets/compendium/tiger-taming-cane.webp";

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
  category: "Qigong",
  otherNames: ["八段锦", "Baduanjin"]
};

export const qigong = [chenHunyuanQigong, thirteenWords, eightBrocades];

//
// core exercises
//

const sun12: CompendiumItem = {
  id: "sun12",
  title: "Sun 12",
  description:
    "A simplified form of Sun-style tai chi, focused on developing footwork.",
  image: ImageSun12,
  category: "Core",
  otherNames: ["孙氏十二式"]
};

const bafaWubu: CompendiumItem = {
  id: "bafa-wubu",
  title: "Bafa Wubu",
  description:
    "The foundational form of tai chi, covers all eight powers and their expressions in five different directions.",
  image: ImageBafaWubu,
  category: "Core",
  otherNames: ["八法五步", "太极十三式", "Thirteen Postures"]
};

const sunGuangbo: CompendiumItem = {
  id: "sun-guangbo",
  title: "Sun Guangbo",
  description:
    "A concise form of Sun-style tai chi, covering a plethora of common Sun style techniques.",
  image: ImageSunGuangbo,
  category: "Core",
  otherNames: ["孙氏太极广播操"]
};

export const coreExercises = [sun12, bafaWubu, sunGuangbo];

//
// performance/competition forms
//

const yang24: CompendiumItem = {
  id: "yang24",
  title: "Yang 24",
  description:
    "The yang style 24-form, a quintessential form used in competitions to demonstrate physical aptitude and skill.",
  image: ImageYang24,
  category: "Competition",
  otherNames: ["杨氏二十四式"]
};

const taijiBaguaFan: CompendiumItem = {
  id: "taiji-bagua-fan",
  title: "Taiji Bagua Fan",
  description:
    "A distilled fan set from the Bagua Kun Lun Fan forms, combining elements of bagua and tai chi.",
  image: ImageFan,
  category: "Competition",
  otherNames: ["太极八卦扇"]
};

const chenHunyuanRuler10: CompendiumItem = {
  id: "chen-hunyuan-ruler-10",
  title: "Chen Hunyuan Ruler 10",
  description: "The 10 form ruler set from Chen Hunyuan tai chi.",
  image: ImageRuler,
  category: "Competition",
  otherNames: ["陈氏混元太极棒十式"]
};

const yang32Sword: CompendiumItem = {
  id: "yang32-sword",
  title: "Yang 32 Straight Sword",
  description: "A traditional Yang-style sword form.",
  image: ImageYang32,
  category: "Competition",
  otherNames: ["杨氏三十二式剑"]
};

export const competitionTrack = [
  yang24,
  taijiBaguaFan,
  yang32Sword,
  chenHunyuanRuler10
];

//
// project forms
//

export const xingyiFiveElements: CompendiumItem = {
  id: "xingyi-five-elements-drills",
  title: "Xingyi Five Element Dao",
  description:
    "A set of drills for the five element Dao from Xingyi, which can be linked together to create a form.",
  image: ImageXingyiDrills,
  category: "Project",
  otherNames: ["形意五行功"]
};

export const chenHunyuan24: CompendiumItem = {
  id: "chen-hunyuan-24",
  title: "Chen Hunyuan 24",
  description:
    "The 24 movement set of techniques and transitions from the Chen Hunyuan tai chi style.",
  image: ImageChenHunyuan24,
  category: "Project",
  otherNames: ["陈氏混元太极二十四式"]
};

export const tigerTamingCane: CompendiumItem = {
  id: "tiger-taming-cane",
  title: "Tiger Taming Dragon Cane",
  description:
    "A rare cane form in the tai chi praying mantis style, associated with Northern Shaolin.",
  image: ImageTigerTamingCane,
  category: "Project",
  otherNames: ["伏虎神龙杖"]
};

export const yangStaff13: CompendiumItem = {
  id: "yang-staff-13",
  title: "Yang Thirteen Staff",
  description: "A set of 13 movements in Yang style tai chi staff.",
  image: ImageYangStaff13,
  category: "Project",
  otherNames: ["杨氏太极棍十三式"]
};

export const baguaFan1: CompendiumItem = {
  id: "bagua-fan-1",
  title: "Kun Lun Fan",
  description:
    "The first of three Bagua fan forms, also called the Kun Lun Fan.",
  image: ImageBaguaFan1,
  category: "Project",
  otherNames: ["昆仑扇"]
};

export const projectForms = [
  xingyiFiveElements,
  chenHunyuan24,
  tigerTamingCane,
  yangStaff13,
  baguaFan1
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
  ...coreExercises,
  ...competitionTrack,
  ...projectForms
];

export const compendiumIndex = allCompendiumItems.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {} as Record<string, CompendiumItem>);
