import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --red: tomato;
  --bgColor: bisque;
  // --primary-color: #073a65;
  // --primary-background: #cdb114;

  // --accent-color: #065c97;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: "Eczar", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    margin: 10px;
     
  }

  :root {
    --primary-color: #c7846a
  }

  body {
    // margin: 10px;
    // color: var(--primary-color)
    // display: flex;
    // flex-direction: column;
    // // padding: 60px;

    display: grid;
    place-items: center;
    height: 100vh;
    background-color: var(--bgColor);

  }

  .framed {
    box-shadow:
      -50px -50px 0 -40px var(--red),
      50px 50px 0 -40px var(--red);
  }

a:hover {
  color: black
}

`;
