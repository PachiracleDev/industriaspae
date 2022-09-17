import { useEffect, useState } from "react";
import productsNuevo from "../products/nuevos.json";
import productsDestacados from "../products/destacados.json";
import Card from "../components/Card";
import { motion } from 'framer-motion'

import NextLink from "next/link";
import { IProduct } from "../models/Product";
function Main() {
  const [productsDestacado, setProducts] = useState<IProduct | any>([]);
  const [productsNuevos, setProductsNuevos] = useState<IProduct | any>([]);

  useEffect(() => {
    setProducts(productsDestacados);
    setProductsNuevos(productsNuevo);
  }, []);

  return (
    <div className="my-6">
      <h2 className="text-2xl text-gray-700 text-center font-bold p-1 lg:text-3xl">
        Artesanías Destacadas
      </h2>
      <p className="font-light text-center text-sm p-1">
        Las artesanías que más se venden a diario.
      </p>
      <div className="flex flex-wrap w-11/12 mx-auto gap-4 justify-center">
        <motion.ul className="flex flex-wrap w-11/12 mx-auto gap-4 justify-center">
          {productsDestacado.map((product: IProduct) => (
            <motion.li
              initial={{ opacity: 0, scale: 0.5, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}

              key={product.id}>
              <Card {...product} key={product.id} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <h2 className="text-2xl text-gray-700 text-center font-bold p-1 lg:text-3xl mt-12">
        Artesanías Nuevas
      </h2>
      <p className="font-light text-center text-sm p-1">
        Innovando a diario para ofrecerte unicidad en el mercado.
      </p>
      <div className="flex flex-wrap w-11/12 mx-auto gap-4 justify-center">
        <motion.ul className="flex flex-wrap w-11/12 mx-auto gap-4 justify-center">
          {productsNuevos.map((product: IProduct) => (
            <motion.li
              initial={{ opacity: 0, scale: 0.5, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}

              key={product.id}>
              <Card {...product} key={product.id} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <NextLink href={`/catalogo/`} passHref>
        <button className="rounded py-2 px-3 border text-gray-50 bg-gray-800 mx-auto block my-5 shadow-xl">
          Ver catálogo completo
        </button>
      </NextLink>
    </div>
  );
}

export default Main;
