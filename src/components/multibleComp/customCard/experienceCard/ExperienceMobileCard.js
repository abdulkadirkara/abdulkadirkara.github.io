import React, { useState, useEffect } from "react";
import LanguageUseContext from "../../../../hooks/LanguageUseContext";

import BoxComp from "../../../Box";
import TitleSection from "./mobile/Title";
import ContentSection from "./mobile/Content";
import MobileTitleSection from "./web/MobileTitle";
import MobileTitleTop from "./web/MobileTitleTop";

const ExperienceMobileCard = ({ data, windowWidth }) => {
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
    isRefresh > 0 && (
      <Section data={data} windowWidth={windowWidth} language={language} />
    )
  );
};

export default ExperienceMobileCard;

const Section = ({ data, windowWidth, language }) => {
  const { companyName, companyLogo, workingDate } = data;
  const companyLocation = data[language].companyLocation;
  const companyAbout = data[language].companyAbout;
  const myProfession = data[language].myProfession;
  const workingPosition = data[language].workingPosition;

  return (
    <BoxComp
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "15px",
        borderRadius: "5px",
        // background: "#312162",
      }}
    >
      {windowWidth < 600 && (
        <MobileTitleTop
          companyLocation={companyLocation}
          workingDate={workingDate}
        />
      )}

      {windowWidth < 600 ? (
        <MobileTitleSection
          companyName={companyName}
          companyLogo={companyLogo}
          companyLocation={companyLocation}
          workingPosition={workingPosition}
          workingDate={workingDate}
        />
      ) : (
        <TitleSection
          companyName={companyName}
          companyLogo={companyLogo}
          companyLocation={companyLocation}
          workingPosition={workingPosition}
          workingDate={workingDate}
        />
      )}

      <ContentSection companyAbout={companyAbout} myProfession={myProfession} />
    </BoxComp>
  );
};
