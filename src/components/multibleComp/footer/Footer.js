import * as React from "react";
import styled from "styled-components/macro";

import GridComp from "../../Grid";
import LeftSection from "./Left";
import RightSection from "./right";

const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing(0.25)}
    ${(props) => props.theme.spacing(4)};
  background: ${(props) => props.theme.footer.background};
  position: relative;
`;

function Footer({ rightTextVisible }) {
  return (
    <Wrapper>
      <GridComp container spacing={0}>
        <GridComp
          sx={{ display: { xs: "none", lg: "flex" } }}
          container
          item
          xs={12}
          md={12}
          lg={6}
          justifyContent="flex-start"
        >
          <LeftSection />
        </GridComp>
        <GridComp
          container
          item
          xs={12}
          md={12}
          lg={6}
          justifyContent="flex-end"
        >
          <RightSection rightTextVisible={rightTextVisible} />
        </GridComp>
      </GridComp>
    </Wrapper>
  );
}

export default Footer;
