import Layout from "@/components/Layout";
import GlobalStyle from "../styles";

import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import { useEffect } from "react";
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
  const [artPieces, setArtPieces] = useImmerLocalStorageState("art-pieces", {
    defaultValue: [],
  });

  useEffect(() => {
    setArtPieces(data);
  }, [data]);

  function addComment(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
              : { ...pieceInfo, comments: [newComment] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [newComment] },
      ]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : artPieces}
        onSubmitComment={addComment}
      />
    </>
  );
}

// On to userstory 5
// Test commit 1
