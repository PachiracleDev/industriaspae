import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import NextLink from "next/link";
import { TiMinus } from "react-icons/ti";
function FilterContainer() {
  const [show, setShow] = useState(true);
  const [tamañosShow, setTamañosShow] = useState(false);
  const [ceramicasShow, setCeramicasShow] = useState(false);
  const [grutasShow, setGrutasShow] = useState(false);


  const showTamaños = () => {
    setTamañosShow(!tamañosShow);
  };
  const showCeramicas = () => {
    setCeramicasShow(!ceramicasShow);
  };
  const showGrutas = () => {
    setGrutasShow(!grutasShow);
  };

  const showCategory = () => {
    setShow(!show);
  }

  return (
    <>
      <div
        className="flex flex-col py-4 px-8 font-bold"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="border" onClick={showCategory}>
          <p className="text-md p-3 text-white bg-slate-700 flex gap-2 items-center justify-between ">
            Categorias
            {show ? (<TiMinus className="w-4 h-4 first-letter:text-gray-400" />) : (<FiPlus className="w-4 h-4 text-gray-400" />)}
          </p>

        </button>
        <div
          className={`flex-col hidden border-b text-left  font-bold w-full text-gray-600 ${show && "active-filter"}`}
        >
          <div className="flex flex-col gap-2 border  ">
            <button
              className="flex justify-between p-3 w-full items-center hover:bg-gray-100 duration-300"
              onClick={showTamaños}
            >
              Bonsáis
              {tamañosShow ? (<TiMinus className="w-4 h-4 first-letter:text-gray-400" />) : (<FiPlus className="w-4 h-4 text-gray-400" />)}

            </button>
            <div
              className={`hidden flex-col ${tamañosShow && "active-filter"}`}
            >
              <NextLink href="/catalogo/mini">
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Minis
                </div>
              </NextLink>

              <NextLink
                className="p-3 cursor-pointer hover:bg-gray-100 duration-300"
                href="/catalogo/estandar"
              >
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Estandar
                </div>
              </NextLink>

              <NextLink
                className="p-3 cursor-pointer hover:bg-gray-100 duration-300"
                href="/catalogo/mediano"
              >
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Medianos
                </div>
              </NextLink>

              <NextLink
                className="p-3 cursor-pointer hover:bg-gray-100 duration-300"
                href="/catalogo/grande"
              >
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Grandes
                </div>
              </NextLink>
            </div>
          </div>
          <div className="flex flex-col gap-2 border">
            <button
              className="flex justify-between w-full p-3 items-center hover:bg-gray-100 duration-300"
              onClick={showCeramicas}
            >
              Bonsáis con Animalito
              {ceramicasShow ? (<TiMinus className="w-4 h-4 first-letter:text-gray-400" />) : (<FiPlus className="w-4 h-4 text-gray-400" />)}
            </button>
            <div
              className={`hidden flex-col ${ceramicasShow && "active-filter"}`}
            >
              <NextLink href="/catalogo/elefante">
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Elefantes
                </div>
              </NextLink>

              <NextLink
                className="cursor-pointer hover:bg-gray-100 duration-300"
                href="/catalogo/elefante-copa"
              >
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Elefantes con Copa
                </div>
              </NextLink>

              <NextLink
                className="p-3 cursor-pointer hover:bg-gray-100 duration-300"
                href="/catalogo/sapo"
              >
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Sapos
                </div>
              </NextLink>

              <NextLink
                className="p-3 cursor-pointer hover:bg-gray-100 duration-300"
                href="/catalogo/buhos"
              >
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Buhos
                </div>
              </NextLink>

              <NextLink
                className="p-3 cursor-pointer hover:bg-gray-100 duration-300"
                href="/catalogo/tigre"
              >
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Tigres
                </div>
              </NextLink>
            </div>
          </div>

          <NextLink
            className="p-3 cursor-pointer hover:bg-gray-100 duration-300"
            href="/catalogo/piramides"
          >
            <div className="flex gap-2 justify-between  cursor-pointer border p-3 items-center hover:bg-gray-100 duration-300">
              Pirámides
            </div>
          </NextLink>
          <NextLink
            className="p-3 cursor-pointer hover:bg-gray-100 duration-300"
            href="/catalogo/bonsai-piedra-huamanga"
          >
            <div className="flex gap-2 justify-between  cursor-pointer border p-3 items-center hover:bg-gray-100 duration-300">
              Bonsáis con Piedra Huamanga
            </div>
          </NextLink>
          <NextLink href="/catalogo/palo-santo">
            <div className="flex gap-2 cursor-pointer justify-between border p-3 items-center hover:bg-gray-100 duration-300">
              Palo Santo
            </div>
          </NextLink>
          <NextLink href="/catalogo/ollitas">
            <div className="flex gap-2 cursor-pointer justify-between border p-3 items-center hover:bg-gray-100 duration-300">
              Ollitas
            </div>
          </NextLink>
          <NextLink href="/catalogo/palmeras">
            <div className="flex gap-2 cursor-pointer justify-between border p-3 items-center hover:bg-gray-100 duration-300">
              Palmeras
            </div>
          </NextLink>

          <div className="flex flex-col gap-2 border">
            <button
              className="flex justify-between w-full p-3 cursor-pointer items-center hover:bg-gray-100 duration-300"
              onClick={showGrutas}
            >
              Grutas
              {grutasShow ? (<TiMinus className="w-4 h-4 first-letter:text-gray-400" />) : (<FiPlus className="w-4 h-4 text-gray-400" />)}
            </button>
            <div
              className={`hidden cursor-pointer flex-col ${grutasShow && "active-filter"
                }`}
            >
              <NextLink href="/catalogo/gruta-santa-muerte">
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Santa Muerte
                </div>
              </NextLink>

              <NextLink href="/catalogo/gruta-arbolito">
                <div className="p-3 cursor-pointer hover:bg-gray-100 duration-300">
                  ➡ Minis X
                </div>
              </NextLink>
            </div>
          </div>

          <NextLink href="/catalogo/jabones">
            <div className="flex gap-2 justify-between cursor-pointer border p-3 items-center hover:bg-gray-100 duration-300">
              Jabones Artesanales
            </div>
          </NextLink>
        </div>
      </div>
    </>
  );
}

export default FilterContainer;
