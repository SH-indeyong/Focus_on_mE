import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ethos-regular-italic';
    src: url('/fonts/ETHOS-REGULARITALIC.OTF') format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'ethos-regular';
    src: url('/fonts/ETHOS-REGULAR.OTF') format('opentype');
    font-display: swap;
  }

   @font-face {
    font-family: 'aleo-regular';
    src: url('/fonts/aleo-regular-webfont.woff') format('woff');
    font-display: swap;
  }

   @font-face {
    font-family: 'aleo-bold';
    src: url('/fonts/aleo-bold-webfont.woff') format('woff');
    font-display: swap;
  }
`;

export default GlobalStyle;
