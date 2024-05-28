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
  left: 2vw;
  top: 2vw;
`;

const Title = styled.div``;

const SubTitle = styled.div``;

export default Logo;
