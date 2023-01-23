import { useContext, useState, useEffect, memo } from "react";

import Image from "next/image";
import useModal from "../hooks/useModal";
import OrdenList from "../components/OrdenList";
import { StoreContext } from "../context/store";
import { IProduct } from "../models/Product";

function OrdenIco() {
  const { toggle, modal } = useModal();
  const { state } = useContext(StoreContext);
  const {
    cart: { cartItems },
  } = state;
  //problema de hidratación
  useEffect((): void => {
    const cantidadNew = (cartItems as Array<IProduct>).reduce(
      (a, c) => a + c.quantity,
      0
    );
    setCantidad(cantidadNew);
  }, [cartItems]);

  const [cantidad, setCantidad] = useState<number>(0);

  return (
    <div className="fixed bottom-3 right-4 animate-bounce cursor-pointer" onClick={toggle}>
      <span className="bg-green-600 text-sm text-gray-50 absolute z-[2] bottom-14 right-0 px-2 py-0.5 rounded-full">
        {cantidad}
      </span>

      <div className="relative">
        <Image
          src="https://res.cloudinary.com/gongian/image/upload/v1660796242/imagenes/icon_qjvd7l.png"
          className="w-6 h-6 absolute z-[1]"
          width="60"
          height="70"
          alt="orden-ico"
        />
      </div>
      <OrdenList modal={modal} toggle={toggle} />
    </div>
  );
}

export default memo(OrdenIco);
