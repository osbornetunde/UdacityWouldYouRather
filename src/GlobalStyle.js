import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}


html, body {
    padding: 0;
    margin: 0;
    width: 100vw;
height: 100vh;
font-family: 'Nunito', sans-serif;
background-color: #f7f7f7;
/* font-size: 62.5%; */
}
h1, h2, h3, h4, h5, h6{
        font-family: 'Kaushan Script';
        color: #00263b;
    }

#root{
  height: 100%;
}
`;
export default GlobalStyle;
