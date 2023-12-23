import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components/macro";

import BoxComp from "../../Box";
import CustomRouterLink from "../sidebar/content/CustomRouterLink";
import IconButtonComp from "../../IconButton";
import { navbarPrepareForNavbar } from "../../../utils/constants/routerConstant";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const CustomIconButtonComp = styled(IconButtonComp)`
  border-radius: 5%;
`;

const Item = styled(CustomRouterLink).withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 100%;

  padding-left: ${(props) => props.theme.spacing(3)};
  padding-right: ${(props) => props.theme.spacing(3)};
  padding-top: 5px;
  padding-bottom: 5px;

  text-decoration: none;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};

  border-right: 1px solid ${(props) => props.theme.header.item.borderColor};
  background: ${(props) =>
    props.active
      ? props.theme.header.item.activeBackground
      : props.theme.header.item.background};
  color: ${(props) =>
    props.active
      ? props.theme.header.item.activeColor
      : props.theme.header.item.color};

  svg {
    color: ${(props) =>
      props.active
        ? props.theme.header.item.activeColor
        : props.theme.header.item.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
  }
  &:hover {
    background: ${(props) =>
      props.active
        ? props.theme.header.item.activeBackground
        : props.theme.header.item.background};
    color: ${(props) => props.theme.header.item.activeColor};
  }
`;

const navbarItems = navbarPrepareForNavbar();

const NavbarLeft = ({ sidebarOpen }) => {
  const location = useLocation();

  return (
    <BoxComp
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "flex" },
        height: "100%",
      }}
    >
      <BoxComp sx={{ display: { xs: "flex", md: "none" } }}>
        <CustomIconButtonComp onClick={sidebarOpen}>
          <MenuIcon />
        </CustomIconButtonComp>
      </BoxComp>

      {navbarItems.map((route, index) => (
        <Item
          key={index.toString()}
          to={route.path}
          active={route.path == location.pathname}
        >
          <route.icon />
          <span>{route.text}</span>
          <CloseIcon />
        </Item>
      ))}
    </BoxComp>
  );
};

export default NavbarLeft;
