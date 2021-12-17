import { createGlobalStyle } from "styled-components";
import desktopBackground from "../assets/fe-happiness-banner.png"

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

:root {
    --white: #f5f5f5;
    --black: #0C0D0D;
    --green: #458E82;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--black);
    ${'' /* background-color: var(--white); */}
    background-image: url(${desktopBackground});
    background-size: cover;
    background-position: 50% 50%;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
  }

  &::-webkit-scrollbar {
    ${'' /* display: none; */}
    width: 5px;
    ${'' /* color: pink; */}
    background-color: pink;
  }

  /* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
  ${'' /* width: 5px; */}
  ${'' /* color: pink; */}
}
`;