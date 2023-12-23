import React from "react";
import styled from "styled-components";
import ListItemButtonComp from "../../ListItemButton";
import ListItemTextComp from "../../ListItemText";
import LinkComp from "../../Link";
import { socialMediaAccountEnumPrepareForFooter } from "../../../utils/constants/socialMediaConstant";
import { List } from "@mui/material";

const CustomList = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

const ListItemButton = styled(ListItemButtonComp)`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  svg {
    color: ${(props) => props.theme.footer.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  &:hover {
    background: ${(props) => props.theme.footer.item.activeBackground};
    color: ${(props) => props.theme.footer.color};
  }
`;

const ListItemText = styled(ListItemTextComp)`
  span {
    color: #ffffff;
  }
`;

const socialMediaAccounts = socialMediaAccountEnumPrepareForFooter();

const RightSection = ({ rightTextVisible }) => {
  return (
    <CustomList>
      {socialMediaAccounts.map((item, index) => (
        <ListItemButton
          key={index.toString()}
          component={LinkComp}
          href={item.href}
          target="_blank"
        >
          <item.logo />
          {rightTextVisible && <ListItemText>{item.text}</ListItemText>}
        </ListItemButton>
      ))}
    </CustomList>
  );
};

export default RightSection;
