import { Form } from "./types";

const Sun12: Form = {
  name: "Sun 12",
  chinese: "孙氏十二式",
  link: "https://youtube.com/embed/fRA7bMWEpjo?si=wBVSZ3zUnTAXfPPP"
};

const BaFaWuBu: Form = {
  name: "8 Powers 5 Directions (Sun)",
  chinese: "孙氏八法五步",
  link: "https://youtube.com/embed/XoW25w-Uusg?si=A_GvIjK5rif8wtJU"
};

const SunGuangbo: Form = {
  name: "Sun Guangbo",
  chinese: "孙氏广播操",
  link: "https://youtube.com/embed/U6fGm8ungYg?si=CWcZxgM2iSCx9E8a"
};

const ThirteenWords: Form = {
  name: "Thirteen Words",
  chinese: "十三字功法",
  link: "https://youtube.com/embed/_0_lwrfgC_Q?si=rLIWDfGKM9BELnYY"
};

const ChenHunyuan10: Form = {
  name: "Chen Hunyuan 10",
  chinese: "陈氏混元太极棒十式",
  link: "https://youtube.com/embed/CczCUMiJKso?si=ZUoChPJFnrXWO-T5"
};

const Yang24: Form = {
  name: "Yang 24",
  chinese: "杨氏二十四式",
  link: "https://youtube.com/embed/07RpDGewcpc?si=O8_WN7FwlxhzRlSA"
};

const Yang32: Form = {
  name: "Yang 32",
  chinese: "杨氏三十二式",
  link: "https://youtube.com/embed/4Qf2zk7FLuo?si=QBZ_gwM_v9KhkNpr"
};

const XingyiLinkedFiveElements: Form = {
  name: "Xingyi Linked Five Elements",
  chinese: "形意连环五行苗刀",
  link: "https://youtube.com/embed/gr8t_GJnJyU?si=ahAlO9gme9nsn2wq"
};

const COMPENDIUM = {
  core: [Sun12, BaFaWuBu, SunGuangbo, ThirteenWords],
  ruler: [ChenHunyuan10],
  taijiquan: [Sun12, BaFaWuBu, Yang24],
  straightSword: [Yang32],
  broadsword: [XingyiLinkedFiveElements]
};

export default COMPENDIUM;
