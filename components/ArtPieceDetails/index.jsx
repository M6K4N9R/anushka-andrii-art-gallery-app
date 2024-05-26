import Link from "next/link";
import styled from "styled-components";

export const StyledFulltImg = styled.img`
  width: 100%;
`;

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  return (
    <>
      <Link href="/art-pieces">
        <button> &#8592; Go Back</button>
      </Link>
      <h2>
        Learn more about {name} by{" "}
        <span className="autor-styled">{artist}</span>
      </h2>
      <StyledFulltImg src={image} alt={name}></StyledFulltImg>
      <div>
        <h3>About</h3>
        <p>
          <strong>{name}</strong> is a captivating {genre} artwork created by
          the renowned artist {artist} in {year}. This masterpiece showcases the
          artist exceptional talent and unique artistic vision, inviting viewers
          to embark on a journey of exploration and discovery. Through skillful
          brushstrokes {artist} masterfully captures the essence of their
          subject matter, evoking a range of emotions and provoking
          thought-provoking interpretations.
          {name} stands as a testament to the artist creativity and their
          ability to transcend boundaries, leaving a lasting impression on all
          who experience it.
        </p>
      </div>
    </>
  );
}
