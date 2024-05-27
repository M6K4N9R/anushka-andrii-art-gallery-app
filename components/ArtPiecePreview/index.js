import styled from "styled-components";
const StyledHeading = styled.h2`
  font-size: 22px;
`;

const styledTitle = styled.p`
  font-size: 18px;
`;

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <img src={image} height={350} width={400} />
      <StyledHeading>{`${artist}`}</StyledHeading>
      <styledTitle>{`${title}`}</styledTitle>
    </>
  );
}
