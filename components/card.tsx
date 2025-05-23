import { Card, CardHeader, CardBody, Image, CardFooter } from "@heroui/react";
// import type { Meme } from "../../store/useStore";

export interface Meme {
  id: number;
  title: string;
  imageUrl: string;
  likes: number;
}
interface MemeCardProps {
  meme: Meme;
}

const BaseCard = ({ meme }: MemeCardProps) => {
  return (
    <Card className="w-full max-w-xl mx-auto rounded-xl shadow-2xl overflow-hidden dark:bg-[#18181B] bg-[#F4F4F5] border dark:border-slate-900   hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer">
      <CardHeader className="pb-2 pt-4 px-6 gap-5 justify-center">
        <h4 className="text-xl font-bold dark:text-white text-black">
          {meme.title}
        </h4>
      </CardHeader>
      <CardBody className="py-3 px-4">
        <div className="relative overflow-hidden rounded-lg shadow-inner mx-auto">
          <Image
            alt={meme.title}
            className="object-fill w-full h-64 transform hover:scale-105 transition-transform duration-300"
            height={300}
            src={meme.imageUrl}
            width={300}
          />
        </div>
      </CardBody>
      <CardFooter className="px-6 py-4 flex justify-between items-center border-t dark:border-slate-800 border-slate-200 dark:text-white text-black">
        <div>likes: {meme.likes}</div>
        <a
          className="text-blue-500"
          href={meme.imageUrl}
          rel="noreferrer"
          target="_blank"
        >
          Link
        </a>
      </CardFooter>
    </Card>
  );
};

export default BaseCard;
