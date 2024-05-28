import Image from "next/image";
import HeartFilled from "../../assets/heartFilled.svg?url";
import HeartOutlined from "../../assets/heartOutline.svg?url";
import useLocalStorageState from "use-local-storage-state";

export default function FavoriteButton({ slug }) {
  const [favourites, setFavourites] = useLocalStorageState("favourites", {
    defaultValue: [],
  });

  const onToggleFavorite = (slug) => {
    if (favourites.includes(slug)) {
      setFavourites(favourites.filter((favourite) => favourite !== slug));
    } else {
      setFavourites([...favourites, slug]);
    }
  };

  return (
    <button onClick={() => onToggleFavorite(slug)}>
      <Image
        src={favourites.includes(slug) ? HeartFilled : HeartOutlined}
        aria-label="Mark as Favorite"
        alt="Like button"
      />
    </button>
  );
}
