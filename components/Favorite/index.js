import Image from "next/image";
import HeartFilled from "../../assets/heartFilled.svg?url";
import HeartOutlined from "../../assets/heartOutline.svg?url";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  console.log("Is Favourite from toggle Button", isFavorite);
  return (
    <button onClick={onToggleFavorite}>
      <Image
        src={isFavorite ? HeartOutlined : HeartFilled}
        aria-label="Mark as Favorite"
      />
    </button>
  );
}
