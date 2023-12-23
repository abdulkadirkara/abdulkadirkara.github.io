import React from "react";
import BoxComp from "../../../../Box";
import CompanyLogo from "../components/CompanyLogo";
import {
  CompanyLocation,
  CompanyName,
  LocationIcon,
  WorkingDate,
  WorkingPosition,
} from "../components/Texts";

const TitleSection = ({
  companyName,
  companyLogo,
  companyLocation,
  workingPosition,
  workingDate,
}) => {
  return (
    <BoxComp
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Left
        companyLogo={companyLogo}
        workingPosition={workingPosition}
        companyName={companyName}
      />
      <Right workingDate={workingDate} companyLocation={companyLocation} />
    </BoxComp>
  );
};

export default TitleSection;

const Left = ({ companyLogo, workingPosition, companyName }) => {
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

const Right = ({ workingDate, companyLocation }) => {
  return (
    <BoxComp style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <WorkingDate dates={workingDate} />

      <BoxComp
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1px",
          alignItems: "center",
        }}
      >
        <LocationIcon />
        <CompanyLocation text={companyLocation} />
      </BoxComp>
    </BoxComp>
  );
};
