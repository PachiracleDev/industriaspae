import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import Main from "../components/Main";
import BannerImage from "../../public/portada.jpg";
import OrdenIco from "../components/OrdenIco";
const Home: NextPage = () => {
  return (
    <div className="relative">
      <Banner
        size="xl"
        title="Industrias<br />PAE"
        subtitle="Productor mayorista de artesanías"
        image={BannerImage}
        imageAlt="New Collection - Spring/Summer 2021"
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
