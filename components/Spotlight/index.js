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
      <img src={image} height={300} width={300} alt={name} />
      <h2>{artist}</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
    </>
  );
}
