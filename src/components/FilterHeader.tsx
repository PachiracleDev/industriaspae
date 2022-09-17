import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { useRouter } from 'next/router'

const bannersInfo = [
  {
    src: "https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/portada-catalogo_wqohsl.jpg",
    query: "catalogo",
    title: "Catálogo",
    description: "Ofreciendo la mejor calidad del mercado, al mejor precio",
  },
  {
    src: "https://res.cloudinary.com/gongian/image/upload/v1663116264/imagenes/5_wnqyci.jpg",
    query: "bonsais",
    title: "Bonsáis",
    description: "Una reliquia ancestral que se adapta a cualquier espacio",
  },
  {
    src: "https://res.cloudinary.com/gongian/image/upload/v1663116263/imagenes/2_eakey6.jpg",
    query: "ollitas",
    title: "Ollitas",
    description: "Un toque de color para tu jardín",
  },
  {
    src: "https://res.cloudinary.com/gongian/image/upload/v1663116263/imagenes/7_o1zb7y.jpg",
    query: "palo-santo",
    title: "Palo Santo",
    description: "El aroma de la naturaleza",
  },
  {
    src: "https://res.cloudinary.com/gongian/image/upload/v1663116263/imagenes/4_pflh8i.jpg",
    query: "palmeras",
    title: "Palmeras",
    description: "El verde de la selva en tu hogar",
  },
  {
    src: "https://res.cloudinary.com/gongian/image/upload/v1663116262/imagenes/6_yjcjof.jpg",
    query: "grutas",
    title: "Grutas",
    description: "Un escondite de paz",
  },
  {
    src: "https://res.cloudinary.com/gongian/image/upload/v1663116263/imagenes/3_whjhfz.jpg",
    query: "jabones",
    title: "Jabones",
    description: "Un toque de naturaleza en tu baño",
  },
  {
    src: "https://res.cloudinary.com/gongian/image/upload/v1663116262/imagenes/1_y6okxf.jpg",
    query: "piramides",
    title: "Pirámides",
    description: "La energía de la tierra en tu hogar",
  }
]

function FilterHeader() {

  const { query }: any = useRouter();
  const [banerState, setBanerState] = useState(bannersInfo);

  useEffect(() => {
    if (query.categoria) {
      const banner = bannersInfo.find(banner => banner.query === query.categoria[0]);
      if (banner) {
        setBanerState([banner]);
      }
    }
  }, [query.categoria]);



  return (
    <div className="flex flex-col text-center lg:my-5">
      <Banner
        size="xl"
        title={banerState[0].title}
        description={banerState[0].description}
        image={banerState[0].src}
        imageAlt={banerState[0].title}
        fullWidth={false}
        overlay={true}
        classNameTitle="text-3xl font-bold  tracking-wider leading-tight laptop:text-7xl"
      />
    </div>
  );
}

export default React.memo(FilterHeader);
