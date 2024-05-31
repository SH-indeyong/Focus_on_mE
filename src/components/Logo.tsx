import React from "react";
import styled from "styled-components";

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <Title>Focus-on-mE</Title>
      <SubTitle>Oh Seohyun Portfolio Website</SubTitle>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 5vw;
  top: 2vw;
  gap: 1vh;
`;

const Title = styled.div`
  font-family: "ethos-regular-italic";
  font-size: 36px;
`;

const SubTitle = styled.div`
  font-family: "ethos-regular-italic";
  font-size: 14px;
`;

export default Logo;
