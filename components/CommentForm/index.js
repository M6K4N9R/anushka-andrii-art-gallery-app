import useLocalStorageState from "use-local-storage-state";
import dayjs from "dayjs";

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
    <form onSubmit={handleSubmit} aria-label="add a comments for the art piece">
      <label htmlFor="comment">Add a comment here:</label>
      <textarea type="text" id="comment" name="comment" rows="4" required />
      <button type="submit">Send</button>
    </form>
  );
}
