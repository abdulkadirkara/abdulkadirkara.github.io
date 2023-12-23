import React from "react";

import SidebarNavSection from "./content/SidebarNavSection";
import { projectsPrepareForSidebar } from "../../../utils/constants/projectConstant";
import "../../../vendor/perfect-scrollbar.css";

import ReactPerfectScrollbar from "react-perfect-scrollbar";
import styled, { css } from "styled-components/macro";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { List } from "@mui/material";

const baseScrollbar = css`
  background-color: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  flex-grow: 1;
`;

const Scrollbar = styled.div`
  ${baseScrollbar}
`;

const PerfectScrollbar = styled(ReactPerfectScrollbar)`
  ${baseScrollbar}
`;

const Items = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)};
  padding-bottom: ${(props) => props.theme.spacing(2.5)};
`;

let projectItems = projectsPrepareForSidebar();

const Content = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const ScrollbarComponent = matches ? PerfectScrollbar : Scrollbar;

  return (
    <ScrollbarComponent>
      <List disablePadding>
        <Items>
          {projectItems.map((project, index) => (
            <SidebarNavSection key={index} itemInfo={project} paddingLeft={0} />
          ))}
        </Items>
      </List>
    </ScrollbarComponent>
  );
};

export default Content;
