import React from "react";
import BoxComp from "../../../../Box";
import {
  CompanyLocation,
  LocationIcon,
  WorkingDate,
} from "../components/Texts";

const MobileTitleTopSection = ({ companyLocation, workingDate }) => {
  return (
    <BoxComp
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
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

      <WorkingDate dates={workingDate} />
    </BoxComp>
  );
};

export default MobileTitleTopSection;
