import { useContext } from "react";
import { IProduct } from "../models/Product";
import { Formik, Form, Field } from 'formik';
import { StoreContext, actionTypes } from "../context/store";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);





function Input({ productoEncontrado }: any) {
  const { state, dispatch } = useContext(StoreContext);

  const addToCartHandler = (product: IProduct, cantidad: number) => {
    if (cantidad >= 25) {



      const existItem = state.cart.cartItems.find((x) => x.id === product.id);

      const quantity = existItem ? existItem.quantity + cantidad : cantidad;


      dispatch({
        type: actionTypes.CART_ADD_ITEM,
        payload: { ...product, quantity },
      });
      return MySwal.fire({
        icon: "success",
        title: "Listo!",
        html: "<b>Agregado a la orden</b>",
        confirmButtonColor: "#22c55e",
        confirmButtonText: "Okey",
      })
    } else {
      return MySwal.fire({
        icon: "error",
        title: "Oops...",
        html: "<b>La cantidad mínima es 25 unidades</b>",
        confirmButtonText: "Ok",
        confirmButtonColor: "#f43f5e"
      });
    }



  };


  interface Values {
    cantidad: string;
  }

  return (
    <>
      <Formik
        initialValues={{
          cantidad: '',
        }}
        onSubmit={(
          values: Values,
          actions: any,
        ) => {
          actions.resetForm();
          actions.setSubmitting(false);
          addToCartHandler(productoEncontrado, Number(values.cantidad))
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <Field name="cantidad" placeholder="Cantidad" type="number" className="w-1/2 mx-auto shadow-md outline-none py-2 px-3" />

              <button
                type="submit"
                className="w-11/12 lg:w-1/2 mx-auto my-3 shadow-md rounded shadow-green-700 bg-green-500 text-gray-50 p-3 "
              >
                Agregar a la orden
              </button>
            </div>

          </Form>

        )}

      </Formik>
    </>
  );
}

export default Input;
