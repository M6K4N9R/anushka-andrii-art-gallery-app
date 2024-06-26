import Image from "next/image";
//import HeartFilled from "/assets/assets/heartFilled.svg?url";
//import HeartOutlined from "../../public/assets/heartOutline.svg?url";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

const StyledFavButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: -7px;
  right: 50px;
`;

export default function FavoriteButton({ slug }) {
  const HeartFilled = "/assets/heartFilled.svg";
  const HeartOutlined = "/assets/heartOutline.svg";

  const [favourites, setFavourites] = useLocalStorageState("favourites", {
    defaultValue: [],
  });

  const onToggleFavorite = (slug) => {
    if (favourites.includes(slug)) {
      setFavourites(favourites?.filter((favourite) => favourite !== slug));
    } else {
      setFavourites([...favourites, slug]);
    }
  };

  return (
    <StyledFavButton onClick={() => onToggleFavorite(slug)}>
      <Image
        src={
          favourites.includes(slug)
            ? "/assets/heartFilled.svg"
            : "/assets/heartOutline.svg"
        }
        aria-label="Mark as Favorite"
        alt="Like button"
        width={30}
        height={30}
      />
    </StyledFavButton>
  );
}
