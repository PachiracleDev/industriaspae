import { useEffect } from "react";
import { Banner } from "../components/Banner";
import PortadaNosotros from "../../public/nosotros1.jpg";
import OrdenIco from "../components/OrdenIco";
import Video from "../components/Video";




function nosotros() {


  return <div className="text-center">
    <Banner
      size="xl"
      title="Nosotros"
      subtitle="Más de 20 años en el mercado"
      image={PortadaNosotros}
      imageAlt="New Collection - Spring/Summer 2021"
      fullWidth={true}
      overlay={true}
      classNameTitle="text-3xl font-bold  tracking-wider leading-tight laptop:text-7xl"
    />
    <div className="my-12 lg:w-3/4 mx-auto">
      <h2 className="text-xl font-bold text-gray-700">Industrias Artesanales PAE </h2>
      <p className="text-gray-500 text-center text-md font-light p-2">
        Es una empresa con más de 20 años en el mercado, ofreciendo artesanías de calidad y a un precio competitivo para nuestros clientes mayoristas.
      </p>
      <p className="text-gray-500 text-center text-md font-light p-2">
        Innovando a diario para ofrecerle una experiencia única al consumidor final.
      </p>
    </div>

    <div className="w-11/12 h-[250px] md:h-[600px] lg:w-3/4 mx-auto shadow-xl shadow-gray-300">
      <Video />
    </div>


    <OrdenIco />
  </div>;
}

export default nosotros;
