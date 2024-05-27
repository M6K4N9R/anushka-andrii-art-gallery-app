import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  // console.log({ pieces });
  const spotlightArtPiece = pieces
    ? pieces[Math.floor(Math.random() * (pieces.length - 1))]
    : {};
  console.log(spotlightArtPiece);

  const hasInfo = artPiecesInfo.find(
    (piece) => piece.slug === spotlightArtPiece.slug
  );
  const isFavorite = hasInfo ? hasInfo.isFavorite : false;

  return (
    <div>
      <h1>Art-Gallery App</h1>
      <Spotlight
        image={spotlightArtPiece?.imageSource}
        artist={spotlightArtPiece?.artist}
        isFavorite={isFavorite}
        name={spotlightArtPiece?.name}
        onToggleFavorite={onToggleFavorite}
        slug={spotlightArtPiece?.slug}
      />
    </div>
  );
}
