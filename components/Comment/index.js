export default function Comments({ comments }) {
  return (
    <>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>
              <q>{comment}</q>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
