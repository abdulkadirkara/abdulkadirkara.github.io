import { ReactComponent as ComponentsFolderIcon } from "../../assets/icons/folder-components.svg";
import { ReactComponent as LayoutFolderIcon } from "../../assets/icons/folder-layout.svg";
import { ReactComponent as RoutesFolderIcon } from "../../assets/icons/folder-routes.svg";

import { ReactComponent as JavascriptFileIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as TypescriptFileIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as VueFileIcon } from "../../assets/icons/vue.svg";
import { ReactComponent as MarkdownFileIcon } from "../../assets/icons/markdown.svg";
import { ReactComponent as CssFileIcon } from "../../assets/icons/css.svg";
import { ReactComponent as SassFileIcon } from "../../assets/icons/sass.svg";
import { ReactComponent as LessFileIcon } from "../../assets/icons/less.svg";

const WRAPPER = {
  REACT: {
    key: "REACT",
    label: "sidebar.reactProjects",
    icon: ComponentsFolderIcon,
  },
  REDUX: {
    key: "REDUX",
    label: "sidebar.reduxProjects",
    icon: LayoutFolderIcon,
  },
  NEXT: { key: "NEXT", label: "sidebar.nextProjects", icon: RoutesFolderIcon },
};

const PROJECTS = {
  PROJECT_ONE: {
    sidebarVisible: true,
    icon: JavascriptFileIcon,
    isWrapper: true,
    wrapperKey: WRAPPER.REACT.key,
    label: "React-Mui-Core ",
    href: "https://github.com/mzehir/react-mui-core",
  },
  PROJECT_TWO: {
    sidebarVisible: true,
    icon: TypescriptFileIcon,
    isWrapper: true,
    wrapperKey: WRAPPER.REDUX.key,
    label: "React-Redux",
    href: "https://github.com/mzehir/react-redux-example",
  },
  PROJECT_THREE: {
    sidebarVisible: true,
    icon: VueFileIcon,
    isWrapper: true,
    wrapperKey: WRAPPER.REACT.key,
    label: "React-Context",
    href: "https://github.com/mzehir/react-context-example",
  },
  PROJECT_FOUR: {
    sidebarVisible: true,
    icon: MarkdownFileIcon,
    isWrapper: true,
    wrapperKey: WRAPPER.REACT.key,
    label: "React-Router",
    href: "https://github.com/mzehir/react-router-example",
  },
  PROJECT_FIVE: {
    sidebarVisible: true,
    icon: CssFileIcon,
    isWrapper: true,
    wrapperKey: WRAPPER.REACT.key,
    label: "Mern-Memories-App",
    href: "https://github.com/mzehir/mern_memories_app",
  },
  PROJECT_SIX: {
    sidebarVisible: true,
    icon: SassFileIcon,
    isWrapper: true,
    wrapperKey: WRAPPER.REACT.key,
    label: "UseCallback-UseMemo-ReactMemo",
    href: "https://github.com/mzehir/useCallback_useMemo_ReactMemo_Example",
  },
  PROJECT_SEVEN: {
    sidebarVisible: true,
    icon: LessFileIcon,
    isWrapper: true,
    wrapperKey: WRAPPER.NEXT.key,
    label: "Next.Js Learning",
    href: "https://github.com/mzehir/nextjs-learning",
  },
};

export const projectsPrepareForSidebar = () => {
  let returnArr = [];
  let routerKeys = Object.keys(PROJECTS);

  for (let i = 0; i < routerKeys.length; i++) {
    if (PROJECTS[routerKeys[i]].sidebarVisible) {
      if (PROJECTS[routerKeys[i]].isWrapper) {
        let isWrapperKeyIncludes = false;
        let kCount = -1;

        for (let k = 0; k < returnArr.length; k++) {
          if (returnArr[k].key === PROJECTS[routerKeys[i]].wrapperKey) {
            isWrapperKeyIncludes = true;
            kCount = k;
          }
        }

        if (isWrapperKeyIncludes) {
          returnArr[kCount].childrens.push(PROJECTS[routerKeys[i]]);
        } else {
          let wrapperObj = WRAPPER[PROJECTS[routerKeys[i]].wrapperKey];
          wrapperObj.childrens = [PROJECTS[routerKeys[i]]];
          returnArr.push(wrapperObj);
        }
      } else {
        returnArr.push(PROJECTS[routerKeys[i]]);
      }
    }
  }

  let wrapperAdd = [{ label: "sidebar.myProjects", childrens: returnArr }];

  return wrapperAdd;
};
