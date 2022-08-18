import React from "react";
import Image from "next/image";
import NextLink from "next/link";
type Props = {
  name: string;
  price: number;
  image: string;
  id: string;
  categoria: string;
};

function Card({ name, price, image, id }: Props) {
  return (
    <NextLink href={`/producto/${id}`} passHref>
      <div className="rounded-sm  flex flex-col gap-2 cursor-pointer text-gray-800 hover:shadow-md max-w-[350px] max-h-[500px]">
        <Image
          className="w-full hover:scale-110 duration-500"
          alt={name}
          src={image}
          width="500"
          height="500"
        />
        <div className="p-4 flex flex-col justify-center">
          <span className="tracking-normal font-bold gray-600">{name}</span>
          <div className="flex gap-3 items-center">
            <p className="text-emerald-400 font-bold">S/ {price}</p>
            <span className="text-gray-300 line-through text-sm">
              S/{(Number(price) * 1.3).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </NextLink>
  );
}

export default React.memo(Card);
