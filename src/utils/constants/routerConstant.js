import { ReactComponent as JavascriptFileIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as TypescriptFileIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as VueFileIcon } from "../../assets/icons/vue.svg";
import { ReactComponent as ReadmeFileIcon } from "../../assets/icons/readme.svg";

export const ROUTER = {
  HOME: {
    path: "/",
    text: "Home.js",
    icon: JavascriptFileIcon,
    navbarVisible: true,
  },
  ABOUT: {
    path: "/about",
    text: "About.ts",
    icon: TypescriptFileIcon,
    navbarVisible: true,
  },

  EXPERIENCES: {
    path: "/experiences",
    text: "Experiences.vue",
    icon: VueFileIcon,
    navbarVisible: true,
  },
  CONTACT: {
    path: "/contact",
    text: "Contact.md",
    icon: ReadmeFileIcon,
    navbarVisible: true,
  },
};

export function navbarPrepareForNavbar() {
  let router = Object.values(ROUTER);
  return router;
}
