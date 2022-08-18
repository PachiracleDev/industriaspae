import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { IProduct } from "../models/Product";
import { useContext } from "react";
import { StoreContext } from "../context/store";
import { actionTypes } from "../context/store";

function CardList({ item }: any) {
  const { dispatch } = useContext(StoreContext);

  const removeItemHandler = (item: IProduct) => {
    dispatch({ type: actionTypes.CART_REMOVE_ITEM, payload: item });
  };

  return (
    <div className="flex border-b-2 shadow-md flex-col">
      <h3 className="text-md p-2 text-gray-700 text-center font-bold">
        {item.name}
      </h3>
      <div className="flex">
        <div className="max-w-[100px] max-h-[100px]">
          <Image alt="palmera" src={item.image} width="100" height="100" />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center mx-auto text-sm text-gray-700 text-center">
          <p className="whitespace-nowrap">{item.quantity} unidades</p>
          <p>Precio: S/ {item.price}</p>
          <p className="whitespace-nowrap">
            Subtotal: S/ {(item.quantity * item.price).toFixed(2)}
          </p>
          <p></p>
        </div>
        <div className="flex items-center mx-4">
          <FaTrash
            className="w-5 h-5 text-red-500 hover:text-red-300 cursor-pointer"
            onClick={() => removeItemHandler(item)}
          />
        </div>
      </div>
    </div>
  );
}

export default CardList;
