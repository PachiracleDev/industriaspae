import React from 'react'
import logo from "../../public/logopae.png";
import Image from "next/image";
import NextLink from "next/link";
function Logo() {
    return (
        <div className="p-2 flex items-center pl-10 cursor-pointer ">
            <NextLink href="/">
                <Image src={logo} width="80" height="40" alt="logopae" className='hover: w-full p-4' />
            </NextLink>
        </div>
    )
}

export default Logo