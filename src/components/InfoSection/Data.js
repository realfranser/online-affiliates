/*Define images path*/
let moomoo = process.env.PUBLIC_URL + '/assets/moomoo.png';

export const homeObjOne = {
  id: "contactus",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "How it works",
  headLine: "Get paid loging in the apps from services",
  description: "Descripción en texto pequeño para añadir",
  buttonLabel: "Check available bonus",
  imgStart: false, //false=imagen a la izquierda
  alt: "Contact",
  dark: true,
  primary: true,
  darkText: false,
  img: `${moomoo}`,
};

export const homeObjTwo = {
  id: "getnotified",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Contact",
  headLine: "Still having any doubt?",
  description: "No problem, please, do not hesitate to contact us in our contact page. Also, feel free to make us any suggestions. Help us improve our services !",
  email: "Email: nuestromail@gmail.com",
  buttonLabel: "Copy email",
  imgStart: true, //false=imagen a la izquierda
  alt: "Savings",
  dark: false,
  primary: true,
  darkText: true,
  img: `${moomoo}`,
};

export const homeObjThree = {
  id: "signin",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "Online Affiliates",
  headLine: "Get paid only by introducing the following codes",
  description: "Descripción en texto pequeño para añadir",
  buttonLabel: "Get Started",
  imgStart: false, //false=imagen a la izquierda
  alt: "Savings",
  dark: true,
  primary: true,
  darkText: false,
  img: `${moomoo}`,
};
