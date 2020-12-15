/*Define images path*/
let moomoo = process.env.PUBLIC_URL + '/assets/moomoo.png';
let mujerNegocios = process.env.PUBLIC_URL + '/assets/lateral/mujerNegocios.jpg';
let onlineStore = process.env.PUBLIC_URL + '/assets/lateral/onlineStore.png';
let movilNegocios = process.env.PUBLIC_URL + '/assets/lateral/movilNegocios.png';
let megafonoDinero = process.env.PUBLIC_URL + '/assets/lateral/megafonoDinero.png';
let affiliateMarketing = process.env.PUBLIC_URL + '/assets/lateral/affiliateMarketing.png';
let contactUs = process.env.PUBLIC_URL + '/assets/lateral/contactUs.png';

export const homeObjOne = {
  id: "contactus",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "How it works",
  headLine: "Get paid loging in the apps from services",
  description: "Log in the apps listed in services section and receive considerable bonus. Follow the instructions and requirements asked by each website to claim your prize.",
  buttonLabel: "Check available bonus",
  imgStart: false, //false=imagen a la izquierda
  alt: "Contact",
  dark: true,
  primary: true,
  darkText: false,
  img: `${mujerNegocios}`,
};

export const homeObjTwo = {
  id: "getnotified",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Contact us",
  headLine: "Still having any doubt?",
  description: "No problem, contact us through our email or check the FAQ section. Also, feel free to make us any suggestions. Help us improve our services !",
  email: "Email: nuestromail@gmail.com",
  buttonLabel: "Copy email",
  imgStart: true, //false=imagen a la izquierda
  alt: "Savings",
  dark: false,
  primary: true,
  darkText: true,
  img: `${contactUs}`,
};

export const homeObjThree = {
  id: "signin",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "Become affiliate",
  headLine: "Create your own affiliate account",
  description: "If you are a content creator who wants to create a new source of income... Request your affiliate account ! This is a free service that allows any creator, who suits our requirements, to have their own online affiliates link and make money sharing it.",
  buttonLabel: "Get Started",
  imgStart: false, //false=imagen a la izquierda
  alt: "Savings",
  dark: true,
  primary: true,
  darkText: false,
  img: `${affiliateMarketing}`,
};
