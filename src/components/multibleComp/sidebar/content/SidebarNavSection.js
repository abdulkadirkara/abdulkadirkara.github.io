import React from "react";
import styled from "styled-components/macro";
import { rgba } from "polished";

import NestedSidebarNavSection from "./NestedSidebarNavSection";
import ListItemButtonComp from "../../../ListItemButton";
import ListItemTextComp from "../../../ListItemText";

const Title = styled(ListItemTextComp)`
  margin: 0;
  span {
    color: ${(props) =>
      rgba(
        props.theme.sidebar.color,
        props.depth && props.depth > 0 ? 0.7 : 1
      )};
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
    padding: 0 ${(props) => props.theme.spacing(2)};
  }
`;

const Item = styled(ListItemButtonComp).withConfig({
  shouldForwardProp: (prop) => prop !== "paddingLeft",
})`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: ${(props) => props.theme.spacing(props.paddingLeft)};
  padding-right: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 4 : 7)};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  svg {
    color: ${(props) => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
  }
  &:hover {
    background: ${(props) => props.theme.sidebar.content.hover.background};
    color: ${(props) => props.theme.sidebar.color};
  }
`;

const SidebarNavSection = (props) => {
  const {
    itemInfo,
    component: Component = "nav",
    paddingLeft = 0,
    ...rest
  } = props;

  return (
    <Component {...rest}>
      <NestedSidebarNavSection
        itemInfo={itemInfo}
        Item={Item}
        Title={Title}
        paddingLeft={paddingLeft + 2}
      />
    </Component>
  );
};

export default SidebarNavSection;
