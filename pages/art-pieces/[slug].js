import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import useLocalStorageState from "use-local-storage-state";




export default function ArtPieceDetailPage({ pieces }) {
  const [artPiecesInfo] = useLocalStorageState("artPieces");

  const router = useRouter();
  const { slug } = router.query;

  if (!pieces) {
    return <div>Loading...</div>;
  }

  const artPiece = artPiecesInfo?.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <div>Art piece not found</div>;
  }
  console.log("Piece on slug page", artPiece);

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      name={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      comments={artPiece.comments}
      colors={artPiece.colors}
    />
  );
}
