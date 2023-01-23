import React from 'react'
import Image from 'next/image'
import { useUpdateAtom } from 'jotai/utils'
import { TiendaPanelExpandedAtom } from './TiendaModal'

export type CardTiendaProps = {
    id: number
    src: string
    alt: string
    nombre: string
    departamento: string
    ciudad: string
    direccion: string
}




function CardTienda({
    id,
    src,
    alt,
    nombre,
    departamento,
    ciudad,
    direccion
}: CardTiendaProps) {

    const updateTiendaPanelExpanded = useUpdateAtom(TiendaPanelExpandedAtom)


    return (
        <div key={id} className='flex shadow-md  justify-center mx-auto border text-gray-700 max-w-[600px]'>
            <div className='w-1/2 flex flex-col gap-1 lg:gap-4 h-full px-1 pt-3 '>
                <div className='text-sm lg:text-md'>
                    <span className='whitespace-nowrap'>{nombre}</span>
                    <p className='text-md font-bold text-gray-900 whitespace-nowrap'>{departamento}</p>
                </div>
                <div className='text-left px-4 text-xs lg:text-sm'>
                    <span className='text-md font-bold'>Ciudad</span>
                    <p className='text-xs lg:text-sm mb-1 lg:mb-3  whitespace-nowrap'>{ciudad}</p>
                    <span className='text-md font-bold'>Dirección</span>
                    <p className='text-xs lg:text-sm whitespace-nowrap'>{direccion}</p>
                </div>
                <div className="pb-2">
                    <button onClick={() => updateTiendaPanelExpanded({ active: true, id: id })} className='w-full lg:w-3/4 whitespace-nowrap mx-auto px-3 py-1 lg:py-2 lg:text-sm  hover:scale-110 duration-300  text-xs font-bold shadow-md shadow-emerald-600 bg-green-500 text-white rounded-full'>
                        Más información
                    </button>
                </div>
            </div>
            <div className='w-1/2 h-full flex items-center '>
                <Image
                    width={400}
                    height={400}
                    objectFit="cover"
                    className=''
                    objectPosition="center"
                    src={src}
                    alt={alt}
                />
            </div>
        </div>
    )
}

export default CardTienda