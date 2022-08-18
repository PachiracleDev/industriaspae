import { useState } from "react";
import OrdenIco from "../../components/OrdenIco";
import Filtrador from "../../components/Filtrador";
import FilterHeader from "../../components/FilterHeader";

import productosTotal from "../../products/products.json";

function Catalogo() {
  let initialProducts = productosTotal.slice(0, 8);
  const [productos, setProductos] = useState<any>(initialProducts);

  const mostrarMas = () => {
    const productosMas = productosTotal.slice(0, productos.length + 8);
    setProductos(productosMas);
  };

  return (
    <div className="flex flex-col text-center">
      <FilterHeader />
      <Filtrador products={productos} />
      <button
        onClick={mostrarMas}
        className="bg-slate-700  hover:bg-slate-500 shadow-md shadow-gray-600 w-11/12 xl:w-1/4 p-3 text-white mx-auto"
      >
        Mostrar Más
      </button>
      <OrdenIco />
    </div>
  );
}

export default Catalogo;
