import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Meme {
  id: number;
  title: string;
  imageUrl: string;
  likes: number;
}

const memes: Meme[] = [
  {
    id: 1,
    title: "They lied to us",
    imageUrl:
      "https://pbs.twimg.com/media/GoXpD2lWQAAt7Nf?format=jpg&name=medium",
    likes: 23,
  },
  {
    id: 2,
    title: "fr fr",
    imageUrl:
      "https://pbs.twimg.com/media/Go1c536XoAAmYuJ?format=jpg&name=medium",
    likes: 7,
  },
  {
    id: 3,
    title: "classic",
    imageUrl:
      "https://pbs.twimg.com/media/Go1YFX1X0AAofnr?format=jpg&name=large",
    likes: 76,
  },
  {
    id: 4,
    title: "chihuahua farmer",
    imageUrl:
      "https://pbs.twimg.com/media/Goz1-P_WUAE3-o_?format=jpg&name=large",
    likes: 22,
  },
  {
    id: 5,
    title: "spongebob's whip",
    imageUrl:
      "https://pbs.twimg.com/media/Goz17XFXIAAo1JH?format=jpg&name=medium",
    likes: 82,
  },
  {
    id: 6,
    title: "true",
    imageUrl:
      "https://pbs.twimg.com/media/GoxfKP6WUAAHJjO?format=png&name=900x900",
    likes: 18,
  },
  {
    id: 7,
    title: "Rizzler",
    imageUrl:
      "https://pbs.twimg.com/media/GouR7OAXIAA9Knm?format=jpg&name=large",
    likes: 84,
  },
  {
    id: 8,
    title: "MOB SWAWNER!",
    imageUrl:
      "https://pbs.twimg.com/media/GouR0lkXkAAklcX?format=jpg&name=900x900",
    likes: 23,
  },
  {
    id: 9,
    title: "True Story",
    imageUrl:
      "https://pbs.twimg.com/media/GopiS1LWUAAwycZ?format=jpg&name=medium",
    likes: 55,
  },
  {
    id: 10,
    title: "hydrate",
    imageUrl:
      "https://pbs.twimg.com/media/GolfqsFWUAAcqCw?format=jpg&name=large",
    likes: 48,
  },
];

type Store = {
  memes: Meme[];
  updateMeme: (id: number, updatedFields: Partial<Meme>) => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      memes: memes,
      updateMeme: (id: number, updatedFields: Partial<Meme>) =>
        set((state) => ({
          memes: state.memes.map((meme) =>
            meme.id === id ? { ...meme, ...updatedFields } : meme,
          ),
        })),
    }),
    {
      name: "memes-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
