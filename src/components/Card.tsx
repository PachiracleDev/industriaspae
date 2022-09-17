import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion"
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          layoutId={id}
        >
          <Image
            className="w-full hover:scale-110 duration-500"
            alt={name}
            src={image}
            width="500"
            height="500"
          />
        </motion.div>
        <div className="p-4 flex flex-col justify-center">
          <span className="tracking-normal font-bold gray-600">{name}</span>

        </div>
      </div>
    </NextLink >
  );
}

export default React.memo(Card);
