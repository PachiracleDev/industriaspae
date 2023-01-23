import CardList from "./CardList";
import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../context/store";
import { useRouter } from "next/router";
import { IProduct } from "../models/Product";
import FormularioDeEnvio from "./FormularioDeEnvio";

function OrdenContainer() {


  const [productos, setProductos] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);

  const router = useRouter();
  const { state } = useContext(StoreContext);

  const {
    cart: { cartItems },
  } = state;



  useEffect((): void => {

    if (cartItems.length === 0) {
      router.push("/");
    }
    setProductos(cartItems);
    const totalPice = (cartItems as Array<IProduct>)
      .reduce((a, c) => a + c.quantity * c.price, 0)
      .toFixed(2)

    setTotal(Number(totalPice))
  }, [cartItems, router]);



  return (
    <div className="my-4 w-11/12 mx-auto min-h-[800px] grid content-center">
      <h1 className="text-center text-3xl font-bold my-4 text-gray-600">
        Procesar Orden
      </h1>
      <div className="flex flex-col lg:flex-row-reverse gap-5 lg:w-3/4 lg:mx-auto">
        <div className="flex max-h-[400px] my-20 lg:w-1/2 border rounded-md flex-col gap-4 w-11/12 sm:w-3/4 mx-auto shadow-lg mt-4">
          <div className="overflow-y-auto border min-h-[400px]">
            {productos.length === 0 ? (
              <div>
                <h2 className="text-md text-gray-700 text-center p-4">
                  No agrego nada aún
                </h2>
              </div>
            ) : (
              <div className="lg:w-3/4 grid content-center mx-auto">
                {productos.map((item: any, index: number) => (
                  <CardList key={index} item={item} />
                ))}
              </div>
            )}
          </div>
          <div className="shadow-gray-500 shadow-md border-none py-2 mx-auto mb-4 w-3/4 text-center border text-white bg-gradient-to-r from-zinc-800 to-slate-500">
            <h2>Total: S/   {total}</h2>
          </div>
        </div>

        <FormularioDeEnvio />
      </div>

    </div>
  );
}

export default OrdenContainer;
