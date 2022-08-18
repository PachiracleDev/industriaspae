import React, { useMemo } from "react";

import NextLink from "next/link";

import { FaBars, FaTiktok } from "react-icons/fa";

import { MdGroups } from "react-icons/md";
import { ImList } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import { BsFacebook, BsInstagram, BsYoutube, BsMailbox, BsWhatsapp } from "react-icons/bs";
import useBars from "../hooks/useBars";
import Logo from "./Logo";

function Header() {
  const { bars, toggleBars } = useBars();

  return (
    <div className="sticky top-0 bg-white z-30">
      <div className="border flex justify-between w-full gap-3 panel">
        <Logo />
        <div className="flex items-center p-2 md:hidden cursor-pointer">
          {bars ? (
            <GrClose className="w-8 h-8 text-gray-900" onClick={toggleBars} />
          ) : (
            <FaBars className="w-8 h-8 text-gray-900" onClick={toggleBars} />
          )}
        </div>
        <div className="hidden gap-5 md:flex items-center pt-1 pr-10 text-md">
          <NextLink href="/catalogo">
            <div className="flex gap-2 items-center cursor-pointer hover:text-gray-400 duration-300">
              <ImList className="w-5 h-5" />
              Catálogo
            </div>
          </NextLink>
          <NextLink href="/nosotros">
            <div className="flex gap-2 items-center cursor-pointer hover:text-gray-400 duration-300">
              <MdGroups className="w-5 h-5" />
              Nosotros
            </div>
          </NextLink>
          <NextLink href="/contacto">
            <div className="flex gap-2 items-center cursor-pointer hover:text-gray-400 duration-300">
              <BsMailbox className="w-5 h-5" />
              Contácto
            </div>
          </NextLink>
        </div>
      </div>
      <div
        className={`absolute top-[56px] z-30 w-full hidden ${bars && "active-bar"
          }`}
      >
        <div className="flex flex-col w-full text-gray-500 md:hidden">
          <div className="flex flex-col p-2 text-xl text-center ">
            <NextLink href="/catalogo">
              <div className="border-b-2 p-2 flex gap-2 justify-center items-center">
                <ImList className="w-5 h-5" />
                <p>Catálogo</p>
              </div>
            </NextLink>
            <NextLink href="/nosotros">
              <div className="border-b-2 p-2 flex gap-2 justify-center items-center">
                <MdGroups className="w-5 h-5" />
                <p>Nosotros</p>
              </div>
            </NextLink>
            <NextLink href="/contacto">
              <div className="border-b-2 p-2 flex gap-2 justify-center items-center">
                <BsMailbox className="w-5 h-5" />
                <p>Contacto</p>
              </div>
            </NextLink>

          </div>

          <div className="w-full flex p-3 text-gray-500 gap-3 justify-center items-center">
            <a href="https://www.facebook.com/IndustriasArtesanalesPAE" target="_blank" rel="noopener noreferrer">
              <BsFacebook className="w-6 h-6" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=51972215929&text=Hola%20quisiera%20saber%20mas%20sobre%20el%20producto%20que%20quiero%20comprar" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/industriasartesanalespae/" target="_blank" rel="noopener noreferrer">
              <BsInstagram className="w-6 h-6" />
            </a>

            <FaTiktok className="w-6 h-6" />
            <BsYoutube className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;


