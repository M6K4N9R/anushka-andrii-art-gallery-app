import useLocalStorageState from "use-local-storage-state";
import dayjs from "dayjs";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-width: 600px;
`;

const StyledLabel = styled.label`
  align-self: flex-start;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 10vh;
`;

// const StyledSubmitButton = styled.button`
// `

export default function CommentForm({ slug }) {
  const [artPiecesInfo, setPiecesInfo] = useLocalStorageState("artPieces");
  console.log({ artPiecesInfo });

  const addComment = (slug, newComment) => {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
              : { ...pieceInfo, comments: [newComment] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      setPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [newComment] },
      ]);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { comment } = e.target.elements;
    console.log("comment", comment.value);
    addComment(
      slug,
      `${comment.value} - ${dayjs().format("YYYY-MM-DD HH:mm:ss A")}`
    );
    e.target.reset();
  }

  return (
    <StyledForm
      onSubmit={handleSubmit}
      aria-label="add a comments for the art piece"
    >
      <StyledLabel htmlFor="comment">Add your comment here:</StyledLabel>
      <StyledTextArea type="text" id="comment" name="comment" required />
      <button className="button-submit" type="submit">
        Send
      </button>
    </StyledForm>
  );
}
