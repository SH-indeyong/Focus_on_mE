import React from "react";
import styled from "styled-components";

const menuItems: string[] = ["home", "introduce", "project", "contact"];

const MenuBar: React.FC = () => {
  return (
    <MenuBarContiner>
      {menuItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </MenuBarContiner>
  );
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
