export default function Comments({ comments }) {
  return (
    <>
      <h2>Comments</h2>
      {comments && comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>
                <q>{comment}</q>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </>
  );
}
