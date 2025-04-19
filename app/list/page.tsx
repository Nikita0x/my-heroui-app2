"use client";
import BaseCard from "@/components/card";
import { useStore } from "@/store/useStore";

export default function ListPage() {
  const { memes } = useStore();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {memes.map((item, index) => (
        <BaseCard key={index} meme={item} />
      ))}
    </div>
  );
}
