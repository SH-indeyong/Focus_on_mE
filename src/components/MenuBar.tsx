import React from "react";
import styled from "styled-components";

const menuItems: string[] = ["home", "introduce", "project", "contact"];

const MenuBar: React.FC = () => {
  return (
    <MenuBarContiner>
      {menuItems.map((item, index) => (
        <li key={index}>{item}</li>
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
`;

export default MenuBar;
