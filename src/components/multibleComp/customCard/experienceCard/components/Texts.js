import React from "react";
import TypographyComp from "../../../../Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const WorkingDate = ({ dates }) => {
  return (
    <TypographyComp
      style={{ fontSize: "16px", fontWeight: "600", color: "#607B96" }}
    >
      {dates.startDate} -{dates.startDate ? dates.startDate : "Devam Ediyor"}
    </TypographyComp>
  );
};

export const LocationIcon = () => {
  return <LocationOnIcon style={{ color: "#607B96" }} />;
};

export const CompanyLocation = ({ text }) => {
  return (
    <TypographyComp style={{ fontSize: "16px", color: "#607B96" }}>
      {text}
    </TypographyComp>
  );
};

export const WorkingPosition = ({ text }) => {
  return (
    <TypographyComp
      style={{ fontSize: "x-large", fontWeight: "700", color: "#FFF" }}
    >
      {text}
    </TypographyComp>
  );
};

export const CompanyName = ({ text }) => {
  return (
    <TypographyComp
      style={{ fontSize: "20px", fontWeight: "500", color: "#B4C5D7" }}
    >
      {text}
    </TypographyComp>
  );
};

export const AboutTitle = () => {
  return (
    <TypographyComp
      isTranslation={false}
      style={{
        fontSize: "16px",
        fontWeight: "600",
        color: "#607B96",
      }}
    >
      About
    </TypographyComp>
  );
};

export const AboutContent = ({ text }) => {
  return (
    <TypographyComp
      style={{ fontSize: "18px", fontWeight: "400", color: "#B4C5D7" }}
    >
      {text}
    </TypographyComp>
  );
};

export const MyProfessionTitle = () => {
  return (
    <TypographyComp
      style={{
        fontSize: "16px",
        fontWeight: "600",
        color: "#607B96",
      }}
    >
      My Profession
    </TypographyComp>
  );
};

export const MyProfessionContent = ({ text }) => {
  return (
    <TypographyComp
      style={{ fontSize: "18px", fontWeight: "400", color: "#B4C5D7" }}
    >
      {text}
    </TypographyComp>
  );
};
