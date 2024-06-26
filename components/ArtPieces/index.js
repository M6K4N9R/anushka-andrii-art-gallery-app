import useLocalStorageState from "use-local-storage-state";
import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

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

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces?.map((piece) => {
        // const hasInfo = artPiecesInfo?.find(
        //   (artPiece) => artPiece.slug === piece.slug
        // );
        // const isFavorite = piece.isFavorite;
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              title={piece.name}
              image={piece.imageSource}
              artist={piece.artist}
              slug={piece.slug}
            />
          </li>
        );
      })}
    </List>
  );
}
