import styled from "styled-components";

import FavoriteButton from "../FavoriteButton";
import Image from "next/image";

// const ButtonFav = styled.button`
//   border: none;
//   background-color: var(--granite);
//   color: var(--foam);
//   border-radius: 999px;
//   width: 2.5em;
//   height: 2.5em;
//   padding: 0;
//   display: grid;
//   place-items: center;
// `

//   ${({ $isFavorite }) =>
//     $isFavorite &&
//     css`
//       opacity: 0.5;
//     `}

//   &:hover {
//     background-color: var(--nemo);
//   }
// `;
export const StyledSpotlightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSpotlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export default function Spotlight({ image, artist, slug }) {
  return (
    <>
      <StyledSpotlightDiv className="framed">
        <Image src={image} height={700} width={700} alt={slug} />
      </StyledSpotlightDiv>
      <StyledSpotlightContainer>
        <h2>{artist}</h2>
        <FavoriteButton slug={slug} />
      </StyledSpotlightContainer>
    </>
  );
}
