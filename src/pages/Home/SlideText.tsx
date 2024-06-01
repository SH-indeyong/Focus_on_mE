import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Typography from "@components/ui/Typography/Typography";

const texts: string[] = [
  "사용자 친화적인 서비스를 추구하는",
  "함께 성장하고 싶은",
  "끈기있고 열정있는",
  "가치를 높이고 싶은",
];

const SlideText: React.FC = () => {
  const [currentText, setCurrentText] = useState<string>(texts[0]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex: number = (index + 1) % texts.length;
      setCurrentText(texts[nextIndex]);
      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <TextAnimation>
      <Typography content={currentText} size={24} />
    </TextAnimation>
  );
};

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(30%);
  }
`;

const TextAnimation = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: row-reverse;
  animation: ${slideDown} 3s ease-in-out infinite;
`;

export default SlideText;
