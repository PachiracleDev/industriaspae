import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube, BsMailbox } from "react-icons/bs";
import NextLink from "next/link";
import { ImList } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { FaBars, FaTiktok } from "react-icons/fa";

function BarResponsive(bars: any) {
    return (
        <div
            className={`absolute shadow-md top-[74px] z-10 w-full hidden ${bars && "active-bar"
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
                    <BsFacebook className="w-6 h-6" />
                    <BsInstagram className="w-6 h-6" />
                    <FaTiktok className="w-6 h-6" />
                    <BsYoutube className="w-6 h-6" />
                </div>
            </div>
        </div>
    )
}

export default BarResponsive