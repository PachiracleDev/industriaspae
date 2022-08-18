

import { Banner } from "../components/Banner";

import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import OrdenIco from "../components/OrdenIco";
function contacto() {
  return <div className="min-h-[650px] text-center">

    <Banner
      size="xl"
      title="Contacto"
      subtitle="Encantados en contactarnos"
      image="https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/contacto_y4vdxh.jpg"
      imageAlt="Industria Pae"
      fullWidth={true}
      overlay={true}
      classNameTitle="text-3xl font-bold tracking-wider leading-tight laptop:text-7xl"
    />
    <div className="text-center w-11/12 lg:w-1/2 text-gray-700 mx-auto grid content-center shadow-md my-12">
      <h2 className="text-2xl my-4 font-bold">Medios de Contácto</h2>
      <p className="font-light text-center text-sm p-1">
        Puede comunicarse con nosotros por estas plataformas, estaremos encantados de responderle.
      </p>
      <div className="p-4 flex flex-col gap-6 lg:">
        <div className="flex gap-5">
          <BsWhatsapp className="w-7 h-7 " />
          <p>+51 972 215 929</p>
        </div>
        <div className="flex gap-5">
          <GrMail className="w-7 h-7" />
          <p>industriaspae@gmail.com</p>
        </div>
        <div className="flex gap-5">
          <BsInstagram className="w-7 h-7" />
          <p>IndustriasPAE</p>
        </div>
        <div className="flex gap-5">
          <BsFacebook className="w-7 h-7" />
          <p>Industrias PAE</p>
        </div>
      </div>
      <OrdenIco />
    </div>
  </div>;
}

export default contacto;
