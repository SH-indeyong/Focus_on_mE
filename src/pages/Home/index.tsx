import React from "react";
import styled from "styled-components";
import CameraImg from "@assets/camera.png";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <img src={CameraImg} width={"500px"} height={"500px"} />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
