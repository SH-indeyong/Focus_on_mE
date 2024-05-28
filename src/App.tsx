import React from "react";
import styled from "styled-components";
import Home from "@pages/Home";
import Logo from "@components/Logo";
import MenuBar from "@components/MenuBar";

const App: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Home />
      <MenuBar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default App;
