import ArtPieces from "@/components/ArtPieces";

export default function FavouritesPage({ pieces }) {
  const isFavorite = pieces.filter((piece) => {
    if (Array.isArray(artPiecesInfo) && artPiecesInfo.length > 0) {
      return artPiecesInfo.find(
        (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
      );
    }
    return false;
  });
  console.log(isFavorite);
  return (
    <>
      <ArtPieces pieces={pieces} isFavorite={isFavorite} />
    </>
  );
}
