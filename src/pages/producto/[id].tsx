import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import OrdenIco from "../../components/OrdenIco";
import { useRouter } from "next/router";
import productos from "../../products/products.json";
import Image from "next/image";

import Input from "../../components/Input";
import Card from "../../components/Card";

function Producto() {
  const router = useRouter();
  const { id } = router.query;

  const [productoEncontrado, setProducto] = useState<any>();
  const [productosparecidos, setProductosparecidos] = useState<any>();

  useEffect((): void => {
    const productoListo = productos.find((producto) => producto.id === id);
    const productosparecidoslist = productos.filter((producto) => producto.categoria === productoListo?.categoria);
    const listos = productosparecidoslist.filter((producto) => producto.id !== id);
    const reduceproducts = listos.slice(0, 4);

    if (productosparecidoslist) {
      setProductosparecidos(reduceproducts);
    }
    if (productoListo) {
      setProducto(productoListo);
    }
  }, [id]);

  return (
    <div className="relative">
      <Head>
        <title>
          {productoEncontrado
            ? productoEncontrado.name
            : "Producto no encontrado"}
          - Artesanía peruana
        </title>
        <meta name="description" content={productoEncontrado && productoEncontrado.name} />



      </Head>
      <div className="w-11/12 mx-auto my-10">
        {productoEncontrado ? (
          <>
            <div className="flex flex-col gap-4 lg:flex-row justify-center">
              <div className="flex flex-col gap-2 w-full lg:w-1/2">
                <h2 className="text-2xl text-gray-700 text-center p-2 font-bold">
                  {productoEncontrado.name}
                </h2>
                <div className="flex flex-col gap-2 max-h-[500px] max-w-[500px] mx-auto">
                  <Image
                    src={productoEncontrado.image}
                    alt={productoEncontrado.name}
                    width={500}
                    height={500}
                  />
                  <div>

                  </div>
                </div>
                <div className="w-11/12 mx-auto flex justify-center gap-3">
                  <div className="flex gap-4 items-center">
                    <span className="text-green-600 lg:text-xl whitespace-nowrap">
                      S/ {productoEncontrado.price}
                    </span>
                    <span className="text-gray-300 line-through text-sm lg:text-xl whitespace-nowrap">
                      S/ {(productoEncontrado.price * 1.3).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-md whitespace-nowrap">
                      Cantidad mínima:
                    </span>
                    <span className="text-yellow-600"> 25</span>
                  </div>
                </div>
                <Input productoEncontrado={productoEncontrado} />
              </div>

              <div className="w-11/12 border mx-auto p-3 lg:w-1/3">
                <h3 className="text-xl text-gray-700 my-3 text-center">
                  Detalles
                </h3>
                <div className="border-y-2">
                  <span>Significado</span>
                  <p className="font-light text-center text-sm p-1">
                    {productoEncontrado.significado}
                  </p>
                </div>
                <div className="border-b-2">
                  <span>Materiales</span>
                  <p className="font-light text-center text-sm p-1">
                    {productoEncontrado.materiales}
                  </p>
                </div>
                <div className="border-b-2">
                  <span>Ancho:</span>
                  <p className="font-light text-center text-sm p-1">
                    {productoEncontrado.ancho} cm
                  </p>
                </div>
                <div className="border-b-2">
                  <span>Alto:</span>
                  <p className="font-light text-center text-sm p-1">
                    {productoEncontrado.alto} cm
                  </p>
                </div>
                <div className="text-center p-4 font-bold text-gray-700">
                  <span className="text-yellow-500">Inluye gratis su cajita</span>
                  <div className="w-11/12 mx-auto p-1">
                    {productoEncontrado.cajita && (
                      <Image
                        src={productoEncontrado.cajita}
                        alt={productoEncontrado.name}
                        width={200}
                        height={200}
                      />
                    )
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="my-12 flex flex-col gap-3 w-11/12 mx-auto items-center justify-center">
              <h2 className="text-2xl text-gray-700 font-bold">Artesanías parecidas</h2>
              <div className="flex flex-wrap w-11/12 mx-auto gap-4 justify-center">
                {productosparecidos && productosparecidos.map((producto: any) => (
                  <div key={producto.id}>
                    <Card {...producto} key={producto.id} />
                  </div>
                ))}
              </div>
            </div>

          </>
        ) : (
          <div>Producto no encontrado</div>
        )}
      </div>
      <OrdenIco />
    </div>
  );
}

export default Producto;
