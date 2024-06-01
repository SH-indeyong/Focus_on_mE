import React from "react";
import styled from "styled-components";
import Home from "@pages/Home";
import Logo from "@components/header/Logo";
import MenuBar from "@components/header/MenuBar";

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
