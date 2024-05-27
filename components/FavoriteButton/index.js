import Image from "next/image";
import HeartFilled from "../../assets/heartFilled.svg?url";
import HeartOutlined from "../../assets/heartOutline.svg?url";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  console.log("Heart", HeartFilled);
  return (
    <button onClick={onToggleFavorite}>
      <Image
        src={isFavorite ? HeartFilled : HeartOutlined}
        aria-label="Mark as Favorite"
        alt="Like button"
      />
    </button>
  );
}
