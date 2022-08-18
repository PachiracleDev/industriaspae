import ReactDOM from "react-dom";
import { useState, useEffect, useContext } from "react";
import { GrClose } from "react-icons/gr";
import CardList from "./CardList";
import { useRouter } from "next/router";
import { StoreContext } from "../context/store";
import { IProduct } from "../models/Product";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


interface props {
  modal: boolean;
  toggle: () => void;
}

const OrdenList = ({ modal, toggle }: props) => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  const { state } = useContext(StoreContext);

  const {
    cart: { cartItems },
  } = state;

  const pushLink = () => {
    if (cartItems.length > 0) {
      router.push("/tramitando");
    } else {
      return MySwal.fire({
        icon: "error",
        title: "Oops...",
        html: "<b>No hay artesanías en la orden</b>",
        confirmButtonText: "Ok",
        confirmButtonColor: "#f43f5e"
      });
    }
  };

  useEffect(() => {
    setShow(true);
  }, []);

  if (show) {
    return ReactDOM.createPortal(
      <div
        className={`hidden ${modal && "active-modal"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <GrClose className="w-8 h-8 text-gray-900  m-3" onClick={toggle} />
        <h2 className="text-2xl text-gray-700 text-center">Orden</h2>

        <div className="flex w-11/12 h-4/5 my-auto mx-auto border shadow-md gap-3 flex-col ">
          <div className="h-full max-h-[400px] overflow-y-auto flex flex-col gap-2 w-full p-1 shadow-md">
            {cartItems.length === 0 ? (
              <div>
                <h2 className="text-md text-gray-700 text-center p-4">
                  No agrego nada aún
                </h2>
              </div>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <CardList key={index} item={item} />
                ))}
              </div>
            )}
          </div>

          <div className="text-right p-3 flex flex-col">
            <p className="p-4">
              Total: {" "}
              <span>
                S/{(cartItems as Array<IProduct>)
                  .reduce((a, c) => a + c.quantity * c.price, 0)
                  .toFixed(2)}
              </span>
            </p>

            <button
              onClick={pushLink}
              className="shadow-md shadow-green-700 my-4 bg-green-500 text-gray-50 text-sm p-2 rounded-full"
            >
              Tramitar Orden
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("modal") as HTMLElement
    ) as JSX.Element;
  } else {
    return null;
  }
};

export default OrdenList;
