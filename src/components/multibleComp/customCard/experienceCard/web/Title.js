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

const titleRootStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const topRootStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  alignItems: "center",
};

const bottomRootStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
};

const locationWrapperStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "1px",
  alignItems: "center",
};

const companyNameAndPositionWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

const TitleSection = ({
  companyName,
  companyLogo,
  companyLocation,
  workingPosition,
  workingDate,
}) => {
  return (
    <BoxComp style={titleRootStyle}>
      <Top workingDate={workingDate} companyLocation={companyLocation} />
      <Bottom
        companyName={companyName}
        companyLogo={companyLogo}
        workingPosition={workingPosition}
      />
    </BoxComp>
  );
};

export default TitleSection;

const Top = ({ workingDate, companyLocation }) => {
  return (
    <BoxComp style={topRootStyle}>
      <WorkingDate dates={workingDate} />

      <BoxComp style={locationWrapperStyle}>
        <LocationIcon />
        <CompanyLocation text={companyLocation} />
      </BoxComp>
    </BoxComp>
  );
};

const Bottom = ({ companyName, companyLogo, workingPosition }) => {
  return (
    <BoxComp style={bottomRootStyle}>
      <BoxComp>
        <CompanyLogo src={companyLogo} />
      </BoxComp>

      <BoxComp style={companyNameAndPositionWrapperStyle}>
        <WorkingPosition text={workingPosition} />
        <CompanyName text={companyName} />
      </BoxComp>
    </BoxComp>
  );
};
