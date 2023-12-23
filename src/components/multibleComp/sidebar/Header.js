import React from "react";
import styled from "styled-components/macro";

import TypographyComp from "../../Typography";
import BoxComp from "../../Box";

const Box = styled(BoxComp)`
  display: flex;
  align-items: center;
  height: 36px;
  background-color: ${(props) => props.theme.sidebar.header.background};

  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 36px;
  }
  &:hover {
    background-color: ${(props) => props.theme.sidebar.header.background};
  }
`;

const CustomTypographyComp = styled(TypographyComp)`
  color: ${(props) => props.theme.sidebar.header.color};
  padding-left: ${(props) => props.theme.spacing(3)};
  padding-right: ${(props) => props.theme.spacing(6)};
  font-weight: 300;
`;

const Header = () => {
  return (
    <Box>
      <CustomTypographyComp>sidebar.explorer</CustomTypographyComp>
    </Box>
  );
};

export default Header;
