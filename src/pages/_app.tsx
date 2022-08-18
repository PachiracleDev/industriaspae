import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import { Banner } from "../components/Banner";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";
import { StoreProvider } from "../context/store";
import Buscador from "../components/Buscador";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Head>
        <title>Industrias Pae - Mayorista de Artesanías</title>
        <meta name="description" content="Mayorista de artesanías de alta calidad al mejor precio del mercado." />
        <meta name="keywords" content="artesanias, industrias artesanales, bonsais, bonsais significado, arbolitos bonsai, artesanias del peru, arbolitos pequeños, arbolitos chinos" />
        <meta name="author" content="Industrias Pae" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="es" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />


      </Head>
      <Banner size="xs-large" className="z-20 bg-gradient-to-r from-neutral-900 to-zinc-700" fullWidth={true}>
        Por la compra de más de 200 Artesanías, recibe un folleto publicitario gratis.
      </Banner>

      <Header />
      <Buscador />
      <Component {...pageProps} />
      <Footer />

    </StoreProvider>
  );
}

export default MyApp;
