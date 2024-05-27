import styled from "styled-components";

const StyledSpotlightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Spotlight({ image, artist }) {
  return (
    <StyledSpotlightDiv>
      <img src={image} height={700} width={700} />
      <h2>{artist}</h2>
    </StyledSpotlightDiv>
  );
}
