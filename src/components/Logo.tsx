
import Image from "next/image";
import NextLink from "next/link";
function Logo() {
    return (
        <div className="p-2 flex items-center pl-10 cursor-pointer ">
            <NextLink href="/">
                <Image src="https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/logopae_ncob8l.png" width="80" height="40" alt="logopae" className='hover: w-full p-4' />
            </NextLink>
        </div>
    )
}

export default Logo