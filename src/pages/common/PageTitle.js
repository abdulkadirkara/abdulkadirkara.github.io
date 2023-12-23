import React from "react";
import TypographyComp from "../../components/Typography";

const PageTitleTextComp = (props) => {
  const { children, ...other } = props;

  return (
    <TypographyComp {...other} style={{ fontFamily: "monospace" }} variant="h1">
      {children}
    </TypographyComp>
  );
};

export default PageTitleTextComp;
