import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";
import NextLink from "next/link";

function Footer() {
  return (
    <div className="w-full panel border-t text-xs laptop:text-sm">
      <div className="p-3 laptop:mx-12">
        <Image
          src="https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/logopae_ncob8l.png"
          width="60"
          height="30"
          alt="logopae"
          className="lg:w-[100px] lg:h-[100px]"
        />
      </div>
      {/* <div className="grid grid-cols-2 mx-auto w-11/12 gap-2 text-center laptop:grid-cols-4">
        <div className="hover:bg-gray-100 p-2 duration-500 cursor-pointer">
          <NextLink href="">Términos y condiciones</NextLink>
        </div>
        <div className="hover:bg-gray-100 p-2 duration-500 cursor-pointer">
          <NextLink href="">Politicas de privacidad de datos Personales</NextLink>
        </div>
        <div className="hover:bg-gray-100 p-2 duration-500 cursor-pointer">
          <NextLink href="">Medios de Pago</NextLink>
        </div>
        <div className="hover:bg-gray-100 p-2 duration-500 cursor-pointer">
          <NextLink href="">Medios de Pago</NextLink>
        </div>
      </div> */}
      <div className="font-bold p-3 text-sm laptop:text-xl text-center">
        <p className="pb-3">Siguenos</p>
        <div className="flex justify-center gap-3">

          <a href="https://www.facebook.com/IndustriasArtesanalesPAE" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 duration-500 hover:scale-105">
            <BsFacebook className="w-7 h-7" />
          </a>
          <a
            href=""
            className="hover:text-gray-500 duration-500 hover:scale-105"
          >
            <BsFacebook className="w-7 h-7" />
          </a>
          <a
            href=""
            className="hover:text-gray-500 duration-500 hover:scale-105"
          >
            <BsFacebook className="w-7 h-7" />
          </a>
          <a
            href=""
            className="hover:text-gray-500 duration-500 hover:scale-105"
          >
            <BsFacebook className="w-7 h-7" />
          </a>
        </div>
      </div>
      <div className="text-center  p-2 text-gray-800 ">
        Copyright © 2022 Industrias Pae.
      </div>
    </div>
  );
}

export default Footer;
