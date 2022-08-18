import React from "react";
import { Banner } from "../components/Banner";
import PortadaCatalogo from "../../public/portada-catalogo.jpg";

function FilterHeader() {
  return (
    <div className="flex flex-col text-center">
      <Banner
        size="xl"
        title="Catálogo"
        subtitle="Ofreciendo la mejor calidad del mercado, al mejor precio"
        image={PortadaCatalogo}
        imageAlt="New Collection - Spring/Summer 2021"
        fullWidth={true}
        overlay={true}
        classNameTitle="text-3xl font-bold  tracking-wider leading-tight laptop:text-7xl"
      />
    </div>
  );
}

export default FilterHeader;
