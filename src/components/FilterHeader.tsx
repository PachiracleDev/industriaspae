import React from "react";
import { Banner } from "../components/Banner";


function FilterHeader() {
  return (
    <div className="flex flex-col text-center">
      <Banner
        size="xl"
        title="Catálogo"
        description="Ofreciendo la mejor calidad del mercado, al mejor precio"
        image="https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/portada-catalogo_wqohsl.jpg"
        imageAlt="Arbolito de huayruro"
        fullWidth={true}
        overlay={true}
        classNameTitle="text-3xl font-bold  tracking-wider leading-tight laptop:text-7xl"
      />
    </div>
  );
}

export default FilterHeader;
