import React from "react";
import BoxComp from "../../../Box";

import SchoolIcon from "@mui/icons-material/School";
import TypographyComp from "../../../Typography";

const EducationCard = () => {
  return (
    <BoxComp
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "500px",
      }}
    >
      <Title />
      <Description />
    </BoxComp>
  );
};

export default EducationCard;

const Title = () => {
  return (
    <BoxComp
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        gap: "5px",
      }}
    >
      <BoxComp
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <SchoolIcon fontSize="large" />
      </BoxComp>

      <BoxComp
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          flex: "1",
        }}
      >
        <BoxComp
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <TypographyComp
            style={{ color: "#5565E8", fontSize: "x-large", fontWeight: "700" }}
          >
            Kocaali Anadolu Lisesi
          </TypographyComp>
          <TypographyComp
            style={{ color: "#607B96", fontSize: "large", fontWeight: "400" }}
          >
            Sözel Bölümü
          </TypographyComp>
        </BoxComp>

        <BoxComp>
          <TypographyComp
            style={{
              color: "#FFF",
              fontSize: "large",
              fontWeight: "400",
              fontFamily: "monospace",
            }}
          >
            10/10/2008
          </TypographyComp>
        </BoxComp>
      </BoxComp>
    </BoxComp>
  );
};

const Description = () => {
  return (
    <BoxComp
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        background: "#011221",
        borderRadius: "5px",
        paddingTop: "15px",
        paddingBottom: "115px",
        paddingLeft: "25px",
        paddingRight: "25px",
      }}
    >
      <TypographyComp>Detay Hakkında Başlık</TypographyComp>

      <BoxComp>
        <TypographyComp>Lorem Ipsum</TypographyComp>
      </BoxComp>
    </BoxComp>
  );
};
