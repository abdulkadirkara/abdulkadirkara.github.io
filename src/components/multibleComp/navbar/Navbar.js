import * as React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

import styled, { withTheme } from "styled-components/macro";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
  height: 34px;

  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CustomToolbar = styled(Toolbar)`
  min-height: 34px;
  padding: 0;
`;

const Navbar = ({ onDrawerToggle }) => {
  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <CustomToolbar variant="dense">
          <NavbarLeft sidebarOpen={onDrawerToggle} />
          <NavbarRight />
        </CustomToolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(Navbar);
