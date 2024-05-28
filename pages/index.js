import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  const spotlightArtPiece = pieces
    ? pieces[Math.floor(Math.random() * (pieces.length - 1))]
    : {};

  return (
    <div>
      <title>Art-Gallery App</title>
      <Spotlight
        image={spotlightArtPiece?.imageSource}
        artist={spotlightArtPiece?.artist}
        name={spotlightArtPiece?.name}
        slug={spotlightArtPiece?.slug}
      />
    </div>
  );
}
