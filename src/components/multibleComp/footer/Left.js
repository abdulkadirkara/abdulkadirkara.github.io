import React from "react";
import styled from "styled-components/macro";
import ListItemButtonComp from "../../ListItemButton";
import LinkComp from "../../Link";
import { skillsPrepareForFooter } from "../../../utils/constants/skillsConstant";
import { List } from "@mui/material";

const CustomList = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
`;

const ListItemButton = styled(ListItemButtonComp)`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  svg {
    font-size: 20px;
    width: 20px;
    height: 20px;
  }
  &:hover {
    background: ${(props) => props.theme.footer.item.activeBackground};
  }
`;

const skills = skillsPrepareForFooter();

const LeftSection = () => {
  return (
    <CustomList>
      {skills.map((item, index) => (
        <ListItemButton
          key={index.toString()}
          component={LinkComp}
          href={item.href}
          target="_blank"
        >
          <item.logo />
        </ListItemButton>
      ))}
    </CustomList>
  );
};

export default LeftSection;
