import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Filtrador from "../../components/Filtrador";
import FilterHeader from "../../components/FilterHeader";
import productstotal from "../../products/products.json";
import OrdenIco from "../../components/OrdenIco";
function Categoria() {
  const route = useRouter();
  const { categoria } = route.query;

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const productsFiltered = productstotal.filter(
      (producto: any) => producto.categoria === categoria
    );
    setProducts(productsFiltered);
  }, [categoria]);

  return (
    <div className="flex flex-col text-center w-full">
      <FilterHeader />
      <Filtrador products={products} />
      <OrdenIco />
    </div>
  );
}

export default Categoria;
