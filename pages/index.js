import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  // console.log({ pieces });
  const spotlightArtPiece = pieces
    ? pieces[Math.floor(Math.random() * (pieces.length - 1))]
    : {};
  console.log(spotlightArtPiece);

  return (
    <div>
      <h1>Art-Gallery App</h1>
      <Spotlight
        image={spotlightArtPiece?.imageSource}
        artist={spotlightArtPiece?.artist}
      />
    </div>
  );
}
