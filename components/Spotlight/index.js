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
const StyledSpotlightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Spotlight({
  image,
  artist,
  isFavorite,
  name,
  onToggleFavorite,
  slug,
}) {
  return (
    <>
      <StyledSpotlightDiv>
        <img src={image} height={700} width={700} />
        <h2>{artist}</h2>
      </StyledSpotlightDiv>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
    </>
  );
}
