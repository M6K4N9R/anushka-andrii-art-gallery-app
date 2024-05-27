import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";

const StyledHeading = styled.h2`
  font-size: 22px;
`;

const styledTitle = styled.p`
  font-size: 18px;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>

      <Link href={`/art-pieces/${slug}`}>
        <img src={image} height={350} width={400} />
      </Link>
      <StyledHeading>{`${artist}`}</StyledHeading>
      <styledTitle>{`${title}`}</styledTitle>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />

    </>
  );
}
