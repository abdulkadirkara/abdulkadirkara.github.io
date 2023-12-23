import React from "react";
import SidebarNavSection from "./SidebarNavSection";
import LinkComp from "../../../Link";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

const NestedSidebarNavSection = ({ itemInfo, Item, Title, paddingLeft }) => {
  const [open, setOpen] = React.useState(paddingLeft == 2 ? true : false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Item component="div" onClick={handleClick} paddingLeft={paddingLeft}>
        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        {itemInfo.icon && <itemInfo.icon />}
        <Title>{itemInfo.label}</Title>
      </Item>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {itemInfo.childrens.map((child, index) =>
          !child.childrens ? (
            <List key={index} disablePadding>
              <Item
                paddingLeft={paddingLeft + 8}
                component={LinkComp}
                href={child.href}
                target="_blank"
                activeclassname="active"
              >
                {child.icon && <child.icon />}
                <Title>{child.label}</Title>
              </Item>
            </List>
          ) : (
            <SidebarNavSection
              key={index}
              itemInfo={child}
              paddingLeft={paddingLeft}
            />
          )
        )}
      </Collapse>
    </>
  );
};

export default NestedSidebarNavSection;
