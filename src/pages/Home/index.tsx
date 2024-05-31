import React from "react";
import styled from "styled-components";
import CameraImg from "@assets/camera.png";
import SlideText from "@components/SlideText";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SlideText />
      <img src={CameraImg} width={"500px"} height={"500px"} />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 5vw;
`;

export default Home;
