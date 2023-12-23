import React, { useEffect, useState } from "react";
import LanguageUseContext from "../../hooks/LanguageUseContext";

import TextAnimation from "../../components/customizedComp/TextAnimation";
import SyntaxHighlighterComp from "../../components/syntaxHighlighter/SyntaxHighlighter";
import BoxComp from "../../components/Box";

import { elementsProps, getHomeCodingWordColor } from "./homePageSettings";
import { mySocialMediaAccountLinks } from "../../utils/config/config";

import myResume from "../../assets/pdf/myResume.pdf";
import { DownloadCvButton } from "../../components/customizedComp/CustomButtons";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    isRefresh > 0 && <Section language={language} windowWidth={windowWidth} />
  );
};

export default HomePage;

const Section = ({ language, windowWidth }) => {
  const { i18nFields } = LanguageUseContext();

  const langWord = i18nFields.store.data[language].translation.homePage;
  const LINKEDIN = mySocialMediaAccountLinks.LINKEDIN;
  const GITHUB = mySocialMediaAccountLinks.GITHUB;

  const [myProfile] = useState([
    `${langWord.linkedInProfileDesc}`,
    `${langWord.githubProfileDesc}`,
    `const linkedInLink = "${LINKEDIN}";`,
    `const githubLink = "${GITHUB}";`,
  ]);

  const welcomeText = {
    textArray: langWord.welcome,
    typographyStyle: elementsProps.welcomeText.typographyStyle,
  };
  const whoAmI = {
    textArray: langWord.whoAmI,
    typographyStyle:
      windowWidth < 540
        ? elementsProps.whoAmI.typographyMobileStyle
        : elementsProps.whoAmI.typographyStyle,
    spanStyle: elementsProps.whoAmI.spanStyle,
  };

  return (
    <BoxComp style={{ paddingTop: windowWidth < 540 ? "75px" : "" }}>
      <TextAnimation {...welcomeText} />
      <br />
      <br />

      <BoxComp sx={{ height: windowWidth < 540 ? "185px" : "250px" }}>
        <TextAnimation
          {...whoAmI}
          isCodingCharacterColoring={true}
          isTextWordColor={true}
          getTextWordColorMethod={getHomeCodingWordColor}
        />
      </BoxComp>

      <BoxComp id="syntaxHighlighterWrapper">
        <SyntaxHighlighterComp
          data={myProfile}
          showLineNumbers={false}
          fontSize={windowWidth < 540 ? "15px" : "20px"}
        />
      </BoxComp>

      <br />
      <br />

      <BoxComp style={{ textAlign: "start" }}>
        <DownloadCvButton
          sx={{ fontWeight: "700" }}
          size="large"
          onClick={() => {
            const link = document.createElement("a");
            link.href = myResume;
            link.download = "MyResume.pdf";
            link.click();
          }}
        />
      </BoxComp>
    </BoxComp>
  );
};
