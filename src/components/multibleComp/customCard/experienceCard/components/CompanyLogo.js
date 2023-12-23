import React from "react";
import styled from "styled-components";
import AvatarComp from "../../../../Avatar";
import BusinessIcon from "@mui/icons-material/Business";

const CustomAvatar = styled(AvatarComp)`
  height: 60px;
  width: 60px;
  border-radius: 15px;
`;

const CompanyLogo = ({ src }) => {
  return (
    <CustomAvatar alt="Company Logo" src={src}>
      <BusinessIcon />
    </CustomAvatar>
  );
};

export default CompanyLogo;
