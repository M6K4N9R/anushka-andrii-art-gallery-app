import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";

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
        <img src={image} height={300} width={300} />
      </Link>
      <h2>{`${artist}:`}</h2>
      <p>{`${title}`}</p>

      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
    </>
  );
}
