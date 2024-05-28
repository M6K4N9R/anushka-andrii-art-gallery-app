import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import Image from "next/image";

const StyledHeading = styled.h2`
  font-size: 22px;
`;

const StyledTitle = styled.p`
  font-size: 18px;
  margin-top: -10px;
`;

export const StyledArtInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 20px;
`;
export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          className="framed"
          src={image}
          height={350}
          width={400}
          alt={"art-pieces"}
        />
      </Link>
      <StyledArtInfoContainer>
        <StyledHeading>{`${artist}`}</StyledHeading>
        <FavoriteButton slug={slug} />
        <StyledTitle>{`${title}`}</StyledTitle>
      </StyledArtInfoContainer>
    </>
  );
}
