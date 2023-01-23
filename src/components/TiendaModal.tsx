import { useEffect, useState } from 'react'
import { overlayTiendaAtom } from './OverlayTienda'
import { atom, useAtom } from 'jotai'
import classNames from 'classnames'
import { useLockedBody } from "../hooks/useLockerdBody";
import { BsXLg } from "react-icons/bs";
import Image from 'next/image';
const Tiendas = [
    {
        id: 1,
        nombre: 'Tienda 1',
        pais: 'Perú',
        paisquery: 'peru',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 1'
    },
    {
        id: 2,
        nombre: 'Tienda 2',
        pais: 'Perú',
        paisquery: 'peru',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 2'
    },
    {
        id: 3,
        nombre: 'Tienda 3',
        pais: 'Perú',
        paisquery: 'peru',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 3'
    },
    {
        id: 4,
        nombre: 'Tienda 4',
        pais: 'Perú',
        paisquery: 'peru',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 1'
    },
    {
        id: 8,
        nombre: 'Tienda 8',
        pais: 'Chile',
        paisquery: 'chile',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 2'
    },
    {
        id: 9,
        nombre: 'Tienda 9',
        pais: 'Chile',
        paisquery: 'chile',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 3'
    },
    {
        id: 10,
        nombre: 'Tienda 10',
        pais: 'Chile',
        paisquery: 'chile',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 3'
    },
    {
        id: 5,
        nombre: 'Tienda 5',
        pais: 'Bolivia',
        paisquery: 'bolivia',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 2'
    },
    {
        id: 6,
        nombre: 'Tienda 6',
        pais: 'Bolivia',
        paisquery: 'bolivia',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 3'
    },
    {
        id: 7,
        nombre: 'Tienda 7',
        pais: 'Bolivia',
        paisquery: 'bolivia',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        direccion: 'Calle 10 # 10 - 10',
        src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
        alt: 'Tienda 1'
    },
]



type TiendaModalProps = {
    active: boolean
    id: any
}

const TiendaExpandedAtom = atom({
    active: false,
    id: null,
});

export const TiendaPanelExpandedAtom = atom(
    (get) => get(TiendaExpandedAtom),
    (get, set, value: TiendaModalProps) => {
        set(TiendaExpandedAtom, {
            active: value.active,
            id: value.id || null,
        });
        set(overlayTiendaAtom, value.active);
    }
)


function TiendaModal() {
    const [TiendaExpanded, setTiendaExpanded] = useAtom(TiendaPanelExpandedAtom);
    useLockedBody(TiendaExpanded.active);
    const cn = classNames("TiendaModal", {
        TiendaModalExpanded: TiendaExpanded.active,
    })

    const [infoTienda, setInfoTienda] = useState<any>({})
    useEffect(() => {
        const Tienda = Tiendas.find((Tienda) => Tienda.id === TiendaExpanded.id);
        if (Tienda) {
            setInfoTienda(Tienda)
            console.log(infoTienda)
        }

    }, [TiendaExpanded.id, infoTienda])

    return (
        <div className={cn}>
            <div className='absolute left-7 top-5'>
                <span className='text-4xl text-blue-500 font-extrabold'> {infoTienda.pais}</span>
            </div>
            <div className='absolute right-7 top-5'>
                <BsXLg size={25} onClick={() => setTiendaExpanded({
                    active: false,
                    id: null,
                })} className="cursor-pointer hover:opacity-70" />
            </div>
            <div className='flex flex-col lg:flex-row justify-start my-24 items-center h-full w-11/12 mx-auto'>
                <div className='lg:w-1/2'>
                    <h3 className='text-xl text-gray-700 font-bold '> {infoTienda.nombre} </h3>
                    <div className='mx-auto'>
                        <Image src={infoTienda.src} objectFit="cover" alt={infoTienda.alt} width={500} height={300} />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <h4 className='text-lg font-bold text-gray-700 text-center'>Información</h4>
                    <div className='flex flex-col gap-3'>
                        <div className='text-left text-sm'>
                            <p><span className='font-bold'>Departamento: </span>{infoTienda.departamento}</p>
                            <p><span className='font-bold'>Ciudad: </span>{infoTienda.ciudad}</p>
                            <p><span className='font-bold'>Dirección: </span>{infoTienda.direccion}</p>
                            <p><span className='font-bold'>Telefono: </span>+51 972 215 929</p>
                            <p><span className='font-bold'>Horario: </span>10:00AM - 18:00PM</p>
                        </div>
                        <div>
                            <iframe
                                className='w-full h-56 shadow-md'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9711328235394!2d-77.03457618457546!3d-12.045507145158146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5e92b50d5%3A0x4c45b3ed6e6c6232!2zSmlyw7NuIENhbGxhbyAmIEppcsOzbiBDYW1hbsOhLCBMaW1hIDE1MDAx!5e0!3m2!1ses!2spe!4v1663260755476!5m2!1ses!2spe"
                                width="600"
                                height="450"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TiendaModal