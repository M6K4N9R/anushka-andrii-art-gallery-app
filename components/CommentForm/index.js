export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(e) {
    e.preventDefault();
    const { comment } = e.target.elements;
    onSubmitComment(comment.value);
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
