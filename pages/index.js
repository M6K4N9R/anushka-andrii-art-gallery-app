import ArtPieces from "@/components/ArtPieces/index.js";

export default function SpotlightPage({ pieces }) {
  console.log({ pieces });
  const spotlightArtPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (
    <div>
      <h1>Art-Gallery App</h1>
      {/* <title>Gallery-Spotlight</title> */}
      <ArtPieces pieces={pieces} />
    </div>
  );
}
