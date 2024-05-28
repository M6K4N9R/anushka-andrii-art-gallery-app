import Link from "next/link";
import styled from "styled-components";
import Comments from "../Comment";
import CommentForm from "../CommentForm";
import { useRouter } from "next/router";
import { List } from "../List";

export const StyledFulltImg = styled.img`
  width: 70%;
`;

const StyledColor = styled.div`
  width: 20%;
  height: 100px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const StyledColorsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 100px;
  // border: 1px solid orange;
  border-radius: 50px;
  margin-bottom: 50px;
  margin-top: 5px;
`;

export default function ArtPieceDetails({
  image,
  name,
  artist,
  year,
  genre,
  comments,
  colors,
}) {
  const router = useRouter();

  const { slug } = router.query;

  console.log("Colors", colors);

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
        <br />
        <h3>Color palette of the piece</h3>
        <StyledColorsContainer>
          {colors.map((color) => (
            <StyledColor key={color} color={color} />
          ))}
        </StyledColorsContainer>
        {comments && <Comments comments={comments} />}
        <CommentForm slug={slug} />
      </div>
    </>
  );
}
