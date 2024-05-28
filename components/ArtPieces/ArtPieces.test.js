import ArtPieces from "./index.js";
import { render, screen } from "@testing-library/react";

const SampleData = [
  {
    slug: "kiwi-juice-on-glass",
    artist: "Alexander Mils",
    name: "Kiwi Juice on Glass",
    imageSource:
      "https://example-apis.vercel.app/assets/art/kiwi-juice-on-glass.jpg",
    year: "2015",
    genre: "Veggie Foods",
    colors: ["#a6b33f", "#356e0b", "#eeeee4", "#bec99e", "#635523"],
    dimensions: {
      height: 2899,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "silhouette-of-trees",
    artist: "Min An",
    name: "Silhouette Photo of Trees",
    imageSource:
      "https://example-apis.vercel.app/assets/art/silhouette-trees.jpg",
    year: "2017",
    genre: "Nature",
    colors: ["#f1f3f4", "#161718", "#979898", "#7c7c7c", "#7c747c"],
    dimensions: {
      height: 1278,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "split-shot-of-whale",
    artist: "Elianne Dipp",
    name: "Split Shot of Whale",
    imageSource:
      "https://example-apis.vercel.app/assets/art/split-shot-of-whale.jpg",
    year: "2016",
    genre: "Nature",
    colors: ["#bccbd5", "#13517b", "#80acc5", "#78a2c4", "#081931"],
    dimensions: {
      height: 2875,
      width: 1920,
      type: "jpg",
    },
  },
];

test("renders all art pieces displayed as list", () => {
  render(<ArtPieces pieces={SampleData} />);
  const artPieces = screen.getAllByRole("listitem");

  expect(artPieces).toHaveLength(3);
});
