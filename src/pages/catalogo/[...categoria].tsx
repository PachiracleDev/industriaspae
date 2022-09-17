import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Filtrador from "../../components/Filtrador";
import FilterHeader from "../../components/FilterHeader";
import productstotal from "../../products/products.json";
import { atom, useAtom } from 'jotai'



const estadoDelFiltrado = {
  Initialproducts: productstotal.slice(0, 8),
}

export const filterAtom = atom(estadoDelFiltrado)

function Categoria() {
  const route = useRouter();

  const [filerState, setFilerState] = useAtom(filterAtom);

  const { categoria } = route.query;


  useEffect(() => {
    if (categoria) {
      if (categoria[0] && categoria.length === 1) {
        const products = productstotal.filter((product) => {
          return product.categoria === categoria[0];
        })
        setFilerState({
          Initialproducts: products.slice(0, 8),
        })
      }
      if (categoria[1] && categoria.length === 2) { // Como hacer para que 
        const products = productstotal.filter((product) => {
          return product.subcategoria === categoria[1];
        })
        setFilerState({
          Initialproducts: products.slice(0, 8),
        })
      }
      if (categoria[2] && categoria.length === 3) {
        const products = productstotal.filter((product) => {
          return product.subsubcategoria === categoria[2];
        })
        setFilerState({
          Initialproducts: products.slice(0, 8),
        })
      }
    }

  }, [categoria, setFilerState])



  const mostrarMas = () => {
    if (categoria) {
      if (categoria[0] && categoria.length === 1) {
        const products = productstotal.filter((product) => {
          return product.categoria === categoria[0];
        })
        console.log(products)
        setFilerState({
          Initialproducts: products.slice(0, filerState.Initialproducts.length + 8),
        })
      }
      if (categoria[1] && categoria.length === 2) { // Como hacer para que 
        const products = productstotal.filter((product) => {
          return product.subcategoria === categoria[1];
        })
        console.log(products)
        setFilerState({
          Initialproducts: products.slice(0, filerState.Initialproducts.length + 8),
        })
      }
      if (categoria[2] && categoria.length === 3) {
        const products = productstotal.filter((product) => {
          return product.subsubcategoria === categoria[2];
        })
        console.log(products)
        setFilerState({
          Initialproducts: products.slice(0, filerState.Initialproducts.length + 8),
        })
      }
    }
  }

  return (
    <div className="flex flex-col text-center w-full">
      <FilterHeader />
      {filerState.Initialproducts.length > 0 ? <Filtrador products={filerState.Initialproducts} /> : <h1>No hay productos</h1>}
      {filerState.Initialproducts.length >= 8 && (<button
        onClick={() => mostrarMas()}
        className="bg-slate-700  hover:bg-slate-500 shadow-md shadow-gray-600 w-11/12 xl:w-1/4 p-3 text-white mx-auto"
      >
        Mostrar Más
      </button>)}

    </div>
  );
}

export default Categoria;
