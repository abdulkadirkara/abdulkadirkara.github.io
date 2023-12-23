import React, { useEffect, useState } from "react";
import LanguageUseContext from "../../hooks/LanguageUseContext";

import TextAnimation from "../../components/customizedComp/TextAnimation";
import TypographyComp from "../../components/Typography";
import BoxComp from "../../components/Box";
import DividerComp from "../../components/Divider";
import PageTitleTextComp from "../common/PageTitle";
import PageTitleBottomSpaceComp from "../common/PageTitleBottomSpace";

import { getAboutTextWordColor, elementsProps } from "./aboutPageSetting";
import { skillsPrepareForAboutPage } from "../../utils/constants/skillsConstant";

let mySkills = skillsPrepareForAboutPage();

const AboutPage = () => {
  const { language } = LanguageUseContext();
  const [isRefresh, setIsRefresh] = useState(2);

  useEffect(() => {
    if (isRefresh === 2) {
      setIsRefresh(1);
    }

    if (isRefresh !== 2) {
      setIsRefresh(0);

      setTimeout(() => {
        setIsRefresh(1);
      }, 10);
    }
  }, [language]);

  return (
    <BoxComp
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
        justifyContent: "space-around",
        gap: "50px",
      }}
    >
      <BoxComp sx={{ width: { md: "100%", lg: "50%" } }}>
        {isRefresh > 0 && <AboutMeSection />}
      </BoxComp>

      <DividerComp
        sx={{ display: { md: "none", lg: "block" } }}
        orientation="vertical"
        variant="middle"
        flexItem
      />

      <DividerComp
        sx={{ display: { md: "block", lg: "none" } }}
        orientation="horizontal"
        variant="middle"
        flexItem
      />

      <BoxComp sx={{ width: { md: "100%", lg: "50%" } }}>
        <MySkillsSection />
      </BoxComp>
    </BoxComp>
  );
};

export default AboutPage;

const AboutMeSection = () => {
  const { i18nFields, language } = LanguageUseContext();
  const langWord = i18nFields.store.data[language].translation.aboutPage;

  const aboutMeText = {
    textArray: langWord.aboutMe,
    typographyStyle: elementsProps.aboutMe.typographyStyle,
  };
  return (
    <>
      <PageTitleTextComp>aboutPage.aboutSectionTitle</PageTitleTextComp>
      <PageTitleBottomSpaceComp />
      <TextAnimation
        {...aboutMeText}
        isTextWordColor={true}
        getTextWordColorMethod={getAboutTextWordColor}
      />
    </>
  );
};

const MySkillsSection = () => {
  return (
    <>
      <PageTitleTextComp>aboutPage.mySkillsSectionTitle</PageTitleTextComp>
      <PageTitleBottomSpaceComp />
      <BoxComp
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {mySkills.map((skill, index) => (
          <div
            key={index.toString()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "150px",
              width: "150px",
              background: "rgba(57, 92, 124, 0.15)",
              borderRadius: "10px",
            }}
          >
            <skill.logo style={{ height: "50px", width: "50px" }} />
            <TypographyComp variant="h4">{skill.text}</TypographyComp>
          </div>
        ))}
      </BoxComp>
    </>
  );
};
