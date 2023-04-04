/** @format */

import React from "react";
import styled from "styled-components";
import { DashBoardBody, DashBoardHeader, DashBoardSlider } from "../../blocks";

const DashBoardLayout = () => {
  return (
    <Container>
      <DashBoardHeader />
      <Wrapper>
        <DashBoardSlider />
        <DashBoardBody />
      </Wrapper>
    </Container>
  );
};

export default DashBoardLayout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
