import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";
import Link from "next/link";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 20px;
  margin-left: 10px
  gap: 0.8rem;
  justify-content: center;

  li {
    width: 30rem;
    min-width: 5rem;
    height: 30rem;
  }
`;

export default function ArtPieces({ pieces, isFavorite }) {
  return (
    <List>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              title={piece.name}
              image={piece.imageSource}
              artist={piece.artist}
              slug={piece.slug}
              isFavorite={isFavorite}
            />
          </Link>
        </li>
      ))}
    </List>
  );
}
