import { useEffect, useState } from "react";
import destacados from "../products/destacados.json";
import Card from "./Card";
import FilterContainer from "./FilterContainer";
import { MdFilterList } from "react-icons/md";

function Filtrador({ products }: any) {
  return (
    <div className="xl:flex my-10">
      <div className="xl:w-1/4 xl:my-10">
        <p className="text-gray-600 font-semibold flex items-center justify-center gap-3 mx-auto ">
          <MdFilterList className="text-2xl" />
          Filtrar artesanías
        </p>
        <FilterContainer />
      </div>
      <div className="flex flex-wrap w-11/12 xl:shrink-1 mx-auto gap-4 justify-center my-4 text-left">
        {products.map((producto: any) => (
          <Card key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
}

export default Filtrador;
