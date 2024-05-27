import Layout from "@/components/Layout";
import GlobalStyle from "../styles";

import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import { useState, useEffect } from "react";
import useSWR, { SWRConfig } from "swr";

// const fetcher = async (...args) => {
//   const response = await fetch(...args);
//   if (!response.ok) {
//     throw new Error(`Request with ${JSON.stringify(args)} failed.`);
//   }
//   return await response.json();
// };

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  console.log("data:", data);

  const [artPiecesInfo, setPiecesInfo] = useState([]);

  const toggleFavorite = (pieceSlug) => {
    console.log("Piece Slug", pieceSlug);

    const hasPiece = artPiecesInfo.find((art) => art?.slug === pieceSlug);
    if (hasPiece) {
      const newArtPieces = artPiecesInfo.map((piece) => {
        return piece.slug === pieceSlug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece;
      });
      setPiecesInfo(newArtPieces);
    } else {
      const newArtPieces = [
        ...artPiecesInfo,
        { isFavorite: true, slug: pieceSlug },
      ];
      setPiecesInfo(newArtPieces);
    }
  };

  console.log("ArtPiece Info", artPiecesInfo);

  return (
    <>
      <GlobalStyle />
      <Layout />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          pieces={isLoading || error ? [] : data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={toggleFavorite}
          
        />
      </SWRConfig>
    </>
  );
}

// On to userstory 5
// Test commit 1
