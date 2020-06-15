import * as React from "react";
import styled from "styled-components";

import Chefs from "./Chefs/Chefs";

const Header = styled.strong`
  display: block;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60rem;
`;

const Root = () => {
  return (
    <Wrapper>
      <Header>Chefs and theirs Restaurants</Header>
      <Chefs />
    </Wrapper>
  );
};

export default Root;
