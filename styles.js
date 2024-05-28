import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --red: tomato;
  --bgColor: white;
  // --primary-color: #d89e39;
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

// Submit Button custom Styling


.button-submit {
  width: 30%;
  appearance: none;
  background-color: #d89e39;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-submit:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-submit:hover {
  background-color: #8a621c;
}

.button-submit:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-submit:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-submit:active {
  background-color: #8a621c;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

`;
