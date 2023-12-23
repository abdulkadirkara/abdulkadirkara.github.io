import { ReactComponent as HtmlFileIcon } from "../../assets/icons/html.svg";
import { ReactComponent as CssFileIcon } from "../../assets/icons/css.svg";
import { ReactComponent as JavascriptFileIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as TypescriptFileIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as NodejsFileIcon } from "../../assets/icons/nodejs.svg";
import { ReactComponent as ReactFileIcon } from "../../assets/icons/react.svg";
import { ReactComponent as ReduxFileIcon } from "../../assets/icons/redux-action.svg";
import { ReactComponent as NextFileIcon } from "../../assets/icons/next.svg";
import { ReactComponent as VueFileIcon } from "../../assets/icons/vue.svg";
import { ReactComponent as VuexFileIcon } from "../../assets/icons/vuex-store.svg";
import { ReactComponent as FirebaseFileIcon } from "../../assets/icons/firebase.svg";
import { ReactComponent as GitFileIcon } from "../../assets/icons/git.svg";
import { ReactComponent as CypressFileIcon } from "../../assets/icons/cypress.svg";

export const MY_SKILLS = {
  HTML: {
    logo: HtmlFileIcon,
    altText: "Html Logo",
    text: "Html",
    footerVisible: true,
    aboutPageVisible: true,
  },
  CSS: {
    logo: CssFileIcon,
    altText: "CSS Logo",
    text: "CSS",
    footerVisible: true,
    aboutPageVisible: true,
  },
  JAVASCRIPT: {
    logo: JavascriptFileIcon,
    altText: "JavaScript Logo",
    text: "JavaScript",
    footerVisible: true,
    aboutPageVisible: true,
  },
  TYPESCRIPT: {
    logo: TypescriptFileIcon,
    altText: "TypeScript Logo",
    text: "TypeScript",
    footerVisible: true,
    aboutPageVisible: true,
  },
  NODEJS: {
    logo: NodejsFileIcon,
    altText: "Stackoverflow Logo",
    text: "Node.js",
    footerVisible: true,
    aboutPageVisible: true,
  },
  REACTJS: {
    logo: ReactFileIcon,
    altText: "React Logo",
    text: "React",
    footerVisible: true,
    aboutPageVisible: true,
  },
  REDUX: {
    logo: ReduxFileIcon,
    altText: "Redux Logo",
    text: "Redux",
    footerVisible: true,
    aboutPageVisible: true,
  },
  NEXTJS: {
    logo: NextFileIcon,
    altText: "Next.js Logo",
    text: "Next.js",
    footerVisible: true,
    aboutPageVisible: true,
  },
  VUEJS: {
    logo: VueFileIcon,
    altText: "Vue.js Logo",
    text: "Vue.js",
    footerVisible: true,
    aboutPageVisible: true,
  },
  VUEX: {
    logo: VuexFileIcon,
    altText: "Vuex Logo",
    text: "Vuex",
    footerVisible: true,
    aboutPageVisible: true,
  },
  FIREBASE: {
    logo: FirebaseFileIcon,
    altText: "Firebase Logo",
    text: "Firebase",
    footerVisible: true,
    aboutPageVisible: true,
  },
  //   MATERIAL_UI: {
  //     logo: StackoverflowIcon,
  //     altText: "Stackoverflow Logo",
  //     text: "Stackoverflow",
  //   },
  //   BOOTSTRAP: {
  //     logo: StackoverflowIcon,
  //     altText: "Stackoverflow Logo",
  //     text: "Stackoverflow",
  //   },
  GIT: {
    logo: GitFileIcon,
    altText: "Git Logo",
    text: "Git",
    footerVisible: true,
    aboutPageVisible: true,
  },
  CYPRESS: {
    logo: CypressFileIcon,
    altText: "Cypress Logo",
    text: "Cypress",
    footerVisible: true,
    aboutPageVisible: true,
  },
};

export function skillsPrepareForFooter() {
  let mySkills = MY_SKILLS;
  let mySkillsArr = Object.values(mySkills);
  let activeMySkillsArr = mySkillsArr.filter((x) => x.footerVisible);

  return activeMySkillsArr;
}

export function skillsPrepareForAboutPage() {
  let mySkills = MY_SKILLS;
  let mySkillsArr = Object.values(mySkills);
  let activeMySkillsArr = mySkillsArr.filter((x) => x.aboutPageVisible);

  return activeMySkillsArr;
}
