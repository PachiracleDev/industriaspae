import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import logo from "../../public/logopae.png";
import NextLink from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <div className="border-2 flex flex-col p-2 mt-4 text-gray-700 text-sm panel-footer">
      <div className="p-3">
        <Image
          src={logo}
          width="60"
          height="30"
          alt="logopae"
          className="lg:w-[100px] lg:h-[100px]"
        />
      </div>

      <div className="flex border-y-2 p-3 text-gray-500 gap-3 justify-center items-center">
        <BsFacebook className="w-6 h-6" />
        <BsInstagram className="w-6 h-6" />
        <FaTiktok className="w-6 h-6" />
        <BsYoutube className="w-6 h-6" />
      </div>
      <div className="mx-auto p-2 flex items-center">
        <p>Hecho con ❤</p>
      </div>
    </div>
  );
}

export default Footer;
