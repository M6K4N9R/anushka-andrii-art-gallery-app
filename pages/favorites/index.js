import ArtPieces from "@/components/ArtPieces";
import useLocalStorageState from "use-local-storage-state";

export default function FavouritesPage({ pieces, artPiecesInfo }) {
  console.log({ pieces, artPiecesInfo });
  const [favourites] = useLocalStorageState("favourites");
  console.log("favourites:", favourites);
  const isFavorite = pieces.filter((piece) => favourites?.includes(piece.slug));

  console.log("isFav:", isFavorite);
  return (
    <>
      <ArtPieces pieces={isFavorite} />
    </>
  );
}
