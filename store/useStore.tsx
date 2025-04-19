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
		title: "Distracted Boyfriend",
		imageUrl: "https://i.imgur.com/JbZ5C.jpg",
		likes: 1,
	},
	{
		id: 2,
		title: "Woman Yelling at a Cat",
		imageUrl: "https://i.imgur.com/5hYJZ.jpg",
		likes: 37,
	},
	{
		id: 3,
		title: "Drake Hotline Bling",
		imageUrl: "https://i.imgur.com/ZB9yy.jpg",
		likes: 58,
	},
	{
		id: 4,
		title: "Two Buttons",
		imageUrl: "https://i.imgur.com/xTgHS.jpg",
		likes: 21,
	},
	{
		id: 5,
		title: "Change My Mind",
		imageUrl: "https://i.imgur.com/b9VzC.jpg",
		likes: 66,
	},
	{
		id: 6,
		title: "Mocking Spongebob",
		imageUrl: "https://i.imgur.com/LbZKa.jpg",
		likes: 11,
	},
	{
		id: 7,
		title: "Surprised Pikachu",
		imageUrl: "https://i.imgur.com/M3NpF.jpg",
		likes: 74,
	},
	{
		id: 8,
		title: "Expanding Brain",
		imageUrl: "https://i.imgur.com/j84aA.jpg",
		likes: 25,
	},
	{
		id: 9,
		title: "UNO Draw 25",
		imageUrl: "https://i.imgur.com/s0FiQ.jpg",
		likes: 39,
	},
	{
		id: 10,
		title: "This Is Fine",
		imageUrl: "https://i.imgur.com/pDw6n.jpg",
		likes: 88,
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
