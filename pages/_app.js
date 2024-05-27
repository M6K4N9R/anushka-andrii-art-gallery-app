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
  const [artPieces, setArtPieces] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  useEffect(() => {
    if (data) {
      setArtPieces(data);
    }
  }, [data, setArtPieces]);

  const [artPiecesInfo, setPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-favorites",
    { defaultValue: [] }
  );

  useEffect(() => {
    if (artPieces) {
      const changedData = artPieces.map((piece) => ({
        ...piece,
        isFavorite: false,
      }));

      setPiecesInfo(changedData);
    }
  });

  const toggleFavorite = (pieceSlug) => {
    setArtPieces((draft) => {
      const piece = draft.find((art) => art.slug === pieceSlug);
      if (piece) {
        piece.isFavorite = !piece.isFavorite;
      }
    });
  };

  return (
    <>
      <GlobalStyle />
      <Layout />

      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : artPieces}
        favorites={artPiecesInfo}
      />
    </>
  );
}

// On to userstory 5
// Test commit 1
