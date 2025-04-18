"use client";
import { title } from "@/components/primitives";
import BaseCard from "@/components/card";
import { Meme } from "@/components/card";

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

export default function ListPage() {
	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{memes.map((item, index) => (
				<BaseCard
					meme={item}
					key={index}
				/>
			))}
		</div>
	);
}
