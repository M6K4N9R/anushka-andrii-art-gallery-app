import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <img src={image} height={300} width={300} />
      <p>{`${artist}: ${title}`}</p>
    </>
  );
}
