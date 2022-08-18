import React from "react";

function Buscador() {
  return (
    <div className="panel flex w-full xl:justify-end ">
      <div className="w-full xl:w-1/3 xl:border-l-2 xl:p-2 ">
        <input
          className="p-3 border w-full outline-none bg-transparent "
          type="text"
          placeholder="Buscar... "
        />
      </div>
    </div>
  );
}

export default Buscador;
