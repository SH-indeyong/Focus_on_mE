import React from "react";
import styled from "styled-components";

interface MenuBarProps {
  currentSection: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ currentSection }) => {
  return <MenuBarContiner>{currentSection}</MenuBarContiner>;
};

const MenuBarContiner = styled.div`
  width: 10vw;
  height: 20vh;
  position: fixed;
  right: 0;
  top: 40vh;
  font-family: "ethos-regular";
  font-size: 16px;
`;

export default MenuBar;
