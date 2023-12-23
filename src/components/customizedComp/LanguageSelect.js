import React from "react";
import LanguageUseContext from "../../hooks/LanguageUseContext";
import MenuItemComp from "../MenuItem";
import { LANGUAGES } from "../../utils/constants/languageConstant";

import LanguageIcon from "@mui/icons-material/Language";

const LanguageSelect = () => {
  const { language, setLanguage } = LanguageUseContext();

  const onClick = () => {
    if (language === LANGUAGES.EN.key) {
      setLanguage(LANGUAGES.TR.key);
    } else {
      setLanguage(LANGUAGES.EN.key);
    }
  };

  const textRetun = () => {
    if (language === LANGUAGES.EN.key) {
      return LANGUAGES.TR.key;
    } else {
      return LANGUAGES.EN.key;
    }
  };

  return (
    <MenuItemComp Icon={LanguageIcon} onClick={onClick}>
      {textRetun()}
    </MenuItemComp>
  );
};

export default LanguageSelect;
