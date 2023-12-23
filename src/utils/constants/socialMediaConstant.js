import { mySocialMediaAccountLinks } from "../config/config";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactComponent as StackoverflowIcon } from "../../assets/custom/stackoverflow.svg";
import { ReactComponent as MediumIcon } from "../../assets/custom/medium.svg";

export const SOCIAL_MEDIA_ACCOUNTS = {
  GITHUB: {
    logo: GitHubIcon,
    altText: "Github Logo",
    text: "Github",
    href: mySocialMediaAccountLinks.GITHUB,
    footerVisible: true,
  },
  LINKEDIN: {
    logo: LinkedInIcon,
    altText: "Linkedin Logo",
    text: "Linkedin",
    href: mySocialMediaAccountLinks.LINKEDIN,
    footerVisible: true,
  },
  MEDIUM: {
    logo: MediumIcon,
    altText: "Medium Logo",
    text: "Medium",
    href: mySocialMediaAccountLinks.MEDIUM,
    footerVisible: true,
  },
  STACKOVERFLOW: {
    logo: StackoverflowIcon,
    altText: "Stackoverflow Logo",
    text: "Stackoverflow",
    href: mySocialMediaAccountLinks.STACKOVERFLOW,
    footerVisible: true,
  },
};

export function socialMediaAccountEnumPrepareForFooter() {
  let socialMediaAccounts = SOCIAL_MEDIA_ACCOUNTS;
  let socialMediaAccountArr = Object.values(socialMediaAccounts);
  let activeSMAccountArr = socialMediaAccountArr.filter((x) => x.footerVisible);

  return activeSMAccountArr;
}
