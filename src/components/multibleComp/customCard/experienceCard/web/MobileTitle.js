import React from "react";
import BoxComp from "../../../../Box";
import CompanyLogo from "../components/CompanyLogo";
import { CompanyName, WorkingPosition } from "../components/Texts";

const MobileTitleSection = ({ companyName, companyLogo, workingPosition }) => {
  return (
    <BoxComp style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <BoxComp>
        <CompanyLogo src={companyLogo} />
      </BoxComp>
      <BoxComp style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <WorkingPosition text={workingPosition} />
        <CompanyName text={companyName} />
      </BoxComp>
    </BoxComp>
  );
};

export default MobileTitleSection;
