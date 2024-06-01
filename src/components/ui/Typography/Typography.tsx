import React from "react";
import styled from "styled-components";

interface TypoProps {
  content: string;
  size?: number;
  color?: string;
}

const Typography: React.FC<TypoProps> = ({ content, size, color }) => {
  return (
    <StyledText size={size} color={color}>
      {content}
    </StyledText>
  );
};

export default Typography;

const StyledText = styled.span<{ size?: number; color?: string }>`
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  color: ${({ color }) => color || "white"};
`;
