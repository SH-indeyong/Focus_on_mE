import React from "react";
import styled from "styled-components";
import CameraImg from "@assets/camera.png";
import Text from "@pages/Home/Text";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Text />
      <img src={CameraImg} width={"500px"} height={"500px"} />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10vw 5vw;
  gap: 2vw;
`;

export default Home;
