import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <div className="art-pieces__images">
      <div className="art-pieces__container">
        <ArtPieces
          pieces={pieces}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
    </div>
  );
}
