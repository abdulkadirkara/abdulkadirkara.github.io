import React from "react";

import BoxComp from "../../../../Box";
import {
  AboutContent,
  AboutTitle,
  MyProfessionContent,
  MyProfessionTitle,
} from "../components/Texts";

const contentRootStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  flex: "1",
};

const ContentSection = ({ companyAbout, myProfession }) => {
  return (
    <BoxComp style={contentRootStyle}>
      <BoxComp>
        <AboutTitle />
        <AboutContent text={companyAbout} />
      </BoxComp>

      <BoxComp>
        <MyProfessionTitle />
        <MyProfessionContent text={myProfession} />
      </BoxComp>
    </BoxComp>
  );
};

export default ContentSection;
