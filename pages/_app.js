import Layout from "@/components/Layout";
import GlobalStyle from "../styles";

import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import { useImmer, useEffect } from "react";
import useSWR from "swr";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};

export default function App({ Component, pageProps }) {
  console.log({ Component, pageProps });
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  console.log("data:", data);
  const [artPieces, updateArtPieces] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  useEffect(() => {
    if (data) {
      updateArtPieces(data);
    }
  }, [data, updateArtPieces]);

  const [artPiecesInfo, updatePiecesInfo] = useImmerLocalStorageState(
    "art-pieces-favorites",
    { defaultValue: [] }
  );

  useEffect(() => {
    if (artPieces) {
      const updatedFavoriteInfo = artPieces.map((piece) => {
        
      }, {});

      updatePiecesInfo(artPieces);
    }
  }, [artPieces, updatePiecesInfo]);

  const toggleFavorite = (pieceSlug) => {
    console.log("Piece Slug on home page", pieceSlug);
    updatePiecesInfo((draft) => {
      const piece = draft.find((art) => art.slug === pieceSlug);
      if (piece) {
        piece.isFavorite = !piece.isFavorite;
      }
    });
  };

  //   const toggleFavorite = (pieceSlug) => {
  //   updatePiecesInfo((draft) => {
  //     draft[pieceSlug] = {
  //       ...draft[pieceSlug],
  //       isFavorite: !draft[pieceSlug].isFavorite,
  //     };
  //   });
  // };

  return (
    <>
      <GlobalStyle />
      <Layout />

      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : artPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

// On to userstory 5
// Test commit 1
