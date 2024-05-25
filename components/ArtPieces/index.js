import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: 0;
  gap: 0.8rem;
  justify-content: center;

  li {
    width: 30rem;
    min-width: 5rem;
    height: 30rem;
  }
`;

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
          />
        </li>
      ))}
    </List>
  );
}
