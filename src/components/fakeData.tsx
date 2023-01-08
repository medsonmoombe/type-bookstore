import song from "../assets/images/as_long.jpg";
import dragon from "../assets/images/dragon.jpeg";
import fire from "../assets/images/fire.jpeg";
import game from "../assets/images/game_of_thrones.jpg";

export type Book = {
  title: string;
  img: string;
  description: string;
  author: string;
  rating:number;
  id: number;
};

type Options = {
  id: number;
  name: string;
};

export const options: Options[] = [
  { name: "religious", id: 1 },
  { name: "fiction", id: 2 },
  { name: "sports", id: 3 },
];

export const data: Book[] = [
  {
    title: "Game of thrones",
    img: game,
    rating: 3,
    author: "Geoge R.R Martin",
    description:
      "This book is aimed at people who want to learn how to trade forex. It is written for people who want to learn basics about forex trading. This book will show you how to trade forex, and it will show you how to make a profit from trading.",
    id: 1,
  },
  {
    title: "A song of Ice and fire",
    img: song,
    rating: 5,
    author: "Geoge R.R Martin",
    description:
      "This book is aimed at people who want to learn how to trade forex. It is written for people who want to learn basics about forex trading. This book will show you how to trade forex, and it will show you how to make a profit from trading.",
    id: 2,
  },
  {
    title: "Rise of Dragon",
    img: dragon,
    rating: 1,
    author: "Geoge R.R Martin",
    description:
      "This book is aimed at people who want to learn how to trade forex. It is written for people who want to learn basics about forex trading. This book will show you how to trade forex, and it will show you how to make a profit from trading.",
    id: 3,
  },
  {
    title: "Fire and Blood",
    img: fire,
    author: "Geoge R.R Martin",
    rating: 3,
    description:
      "This book is aimed at people who want to learn how to trade forex. It is written for people who want to learn basics about forex trading. This book will show you how to trade forex, and it will show you how to make a profit from trading.",
    id: 4,
  },
];
