import React from "react";
import classNames from "classnames";
// import { Link, useLocation } from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { overlayAtom } from "./Overlay";
import { useAtom, atom } from "jotai";
import { useLockedBody } from "../hooks/useLockerdBody";
import NextLink from "next/link";
import { MdGroups } from "react-icons/md";
import { ImList } from "react-icons/im";
import { BsMailbox } from "react-icons/bs";
// import IconLabel from "..//UI/icon-label/icon-label";

const barExpandedAtom = atom(false);
export const barPanelExpandedAtom = atom(
    (get) => get(barExpandedAtom) && get(overlayAtom),
    (get, set, value: boolean) => {
        set(barExpandedAtom, value);
        set(overlayAtom, value);
    }
);

function BarModal() {
    const [barExpanded, setbarExpanded] = useAtom(barPanelExpandedAtom);
    useLockedBody(barExpanded);
    const cn = classNames("BarPanel", {
        BarPanelExpanded: barExpanded,
    });


    //   const url = useLocation();

    //Como saber si un texto contiene el url actual
    //   const isObsequio = url.pathname.includes("obsequiar");
    //   const isDecorar = url.pathname.includes("hogar");
    //   const isTendencias = url.pathname.includes("tendencias");
    //   const isNuevos = url.pathname.includes("nuevos");

    return (
        <section className={cn}>
            <div className="p-3 gap-12  text-2xl flex relative w-full items-center">
                <div className="flex gap-2 items-center absolute left-5 top-4">
                    <HiOutlineMenuAlt2 />
                    <span className="font-bold">Menu</span>
                </div>
                <BsXLg
                    className="w-6 h-6 my-2 absolute right-5 top-4"
                    onClick={() => setbarExpanded(false)}
                />
            </div>
            <div className="flex flex-col items-start p-5 gap-8 mt-12 font-bold text-md">
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
        </section>
    );
}

export default BarModal;
