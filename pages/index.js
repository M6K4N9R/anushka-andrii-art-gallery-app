import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  // console.log({ pieces });
  const spotlightArtPiece = pieces
    ? pieces[Math.floor(Math.random() * (pieces.length - 1))]
    : {};
  console.log(spotlightArtPiece);

  return (
    <div>
      <title>Art-Gallery App</title>
      <Spotlight
        image={spotlightArtPiece?.imageSource}
        artist={spotlightArtPiece?.artist}
      />
    </div>
  );
}
