import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "@pages/Home";
import Logo from "@components/header/Logo";
import MenuBar from "@components/header/MenuBar";

const sectionPages: { [key: string]: React.FC } = {
  home: Home,
};

type Section = {
  name: string;
  ref: React.RefObject<HTMLDivElement>;
};

const App: React.FC = () => {
  const sections: Section[] = [
    { name: "home", ref: React.createRef<HTMLDivElement>() },
    { name: "introduce", ref: React.createRef<HTMLDivElement>() },
    { name: "project", ref: React.createRef<HTMLDivElement>() },
    { name: "contact", ref: React.createRef<HTMLDivElement>() },
  ];
  const [currentSection, setCurrentSection] = useState("home");

  const handleScroll = () => {
    const foundSection = sections.find((section) => {
      const rect = section.ref.current?.getBoundingClientRect();
      return (
        rect &&
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      );
    });
    if (foundSection && foundSection.name !== currentSection) {
      setCurrentSection(foundSection.name);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <Container>
      {sections.map((section) => {
        const SectionPage = sectionPages[section.name];

        return (
          <div key={section.name} ref={section.ref} style={{ height: "100vh" }}>
            {SectionPage ? <SectionPage /> : null}
          </div>
        );
      })}
      <Logo />
      <MenuBar currentSection={currentSection} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export default App;
