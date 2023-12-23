import React, { useState, useEffect } from "react";
import LanguageUseContext from "../../../../hooks/LanguageUseContext";

import BoxComp from "../../../Box";
import TitleSection from "./web/Title";
import ContentSection from "./web/Content";

const ExperienceTimelineCard = ({ data }) => {
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

  return isRefresh > 0 && <Section data={data} language={language} />;
};

export default ExperienceTimelineCard;

const sectionRootStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  gap: "140px",
  paddingBottom: "30px",
};

const Section = ({ data, language }) => {
  const { companyName, companyLogo, workingDate } = data;
  const companyLocation = data[language].companyLocation;
  const companyAbout = data[language].companyAbout;
  const myProfession = data[language].myProfession;
  const workingPosition = data[language].workingPosition;

  return (
    <BoxComp style={sectionRootStyle}>
      <TitleSection
        companyName={companyName}
        companyLogo={companyLogo}
        companyLocation={companyLocation}
        workingPosition={workingPosition}
        workingDate={workingDate}
      />
      <ContentSection companyAbout={companyAbout} myProfession={myProfession} />
    </BoxComp>
  );
};

// card content genişliği maxwidth ile sınırlandırılsın
