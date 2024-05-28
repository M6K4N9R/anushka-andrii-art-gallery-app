import Navigation from "../Navigation";
import styled from "styled-components";

const StyledHead = styled.h1`
  font-size: 35px;
  text-align: center;
  margin-top: 50px;
`;

export default function Layout() {
  return (
    <>
      <Navigation />
      <StyledHead>Anushka and Andrii Art Gallery</StyledHead>
    </>
  );
}
