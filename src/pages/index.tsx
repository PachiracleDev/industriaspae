import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import Main from "../components/Main";
import OrdenIco from "../components/OrdenIco";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Banner
        size="xl"
        title="Industrias<br />PAE"
        subtitle="Productor mayorista de artesanías"
        image="https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/portada_asl015.jpg"
        imageAlt="Industrias PAE"
        fullWidth={true}
        overlay={true}
        classNameTitle="text-3xl font-normal tracking-wider leading-tight laptop:text-7xl"
      />
      <Main />
      <OrdenIco />
    </div>
  );
};

export default Home;
