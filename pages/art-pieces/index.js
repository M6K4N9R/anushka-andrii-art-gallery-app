import useLocalStorageState from "use-local-storage-state";
import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage({ pieces, artPiecesInfo }) {
  return (
    <div className="art-pieces__images">
      <div className="art-pieces__container">
        <ArtPieces pieces={pieces} />
      </div>
    </div>
  );
}
