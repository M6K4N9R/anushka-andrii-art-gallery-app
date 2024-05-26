export default function Spotlight({ image, artist }) {
  return (
    <>
      <img src={image} height={300} width={300} />
      <h2>{artist}</h2>
    </>
  );
}
