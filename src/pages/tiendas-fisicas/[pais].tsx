import { useState, Fragment, useEffect } from 'react'
import { Banner } from '../../components/Banner'
import { useRouter } from 'next/router'
import CardTienda from '../../components/CardTienda'
import { Listbox, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'
import { useAtom, atom } from 'jotai'
import { paisAtom } from './index'
import { motion } from 'framer-motion'



const paises = [
    {
        id: 1, pais: 'Perú', unavailable: true, paisquery: 'peru', tiendas: [{
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
        },]
    },
    {
        id: 2, pais: 'Chile', unavailable: false, paisquery: 'chile', tiendas: [
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
            }
        ],
    },
    {
        id: 3, pais: 'Bolivia', unavailable: false, paisquery: 'bolivia', tiendas: [
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
            }, {
                id: 7,
                nombre: 'Tienda 7',
                pais: 'Bolivia',
                paisquery: 'bolivia',
                departamento: 'Antioquia',
                ciudad: 'Medellín',
                direccion: 'Calle 10 # 10 - 10',
                src: 'https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg',
                alt: 'Tienda 1'
            },]
    },
    { id: 4, pais: 'México', unavailable: false, paisquery: 'mexico', tiendas: [] },
    { id: 5, pais: 'EE. UU.', unavailable: false, paisquery: 'eeuu', tiendas: [] },
]

const initialTiendas = paises[0].tiendas

export const tiendasAtom = atom(initialTiendas)


function Pais() {
    const [selectedPais, setSelectedPais] = useAtom(paisAtom)
    const [selectedPaisQuery, setSelectedPaisQuery] = useAtom(tiendasAtom)

    const router = useRouter();
    const { pais }: any = router.query;
    const paisQuery = pais;



    const paisSelected = router.asPath.split('/')[2]


    useEffect(() => {

        if (paisQuery) {
            const pais = paises.filter((paises) => paises.paisquery === paisQuery)
            setSelectedPaisQuery(pais[0].tiendas)
            setSelectedPais({
                id: pais[0].id,
                pais: pais[0].pais,
                unavailable: pais[0].unavailable,
                paisquery: pais[0].paisquery,
            })
        } // seteo las tiendas del pais seleccionado


    }, [paisQuery, setSelectedPaisQuery, setSelectedPais])


    return (
        <div className='text-center'>
            <Banner
                size="xl"
                title="Tiendas físicas"
                description="Encuentra tu tienda más cercana"
                image="https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/nosotros1_f3zait.jpg"
                imageAlt="Industrias PAE - Tiendas físicas"
                fullWidth={true}
                overlay={true}
                classNameTitle="text-3xl font-bold  tracking-wider leading-tight laptop:text-7xl"
            />
            <div className='my-12 relative'>
                <div className="w-72 mx-auto">
                    <h2>Elige el País</h2>
                    <Listbox value={selectedPais} onChange={setSelectedPais}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full rounded-lg bg-white hover:bg-gray-100 cursor-pointer duration-500 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selectedPais.pais}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <HiChevronDown size={24} />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {paises.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            onClick={() => router.push(`/tiendas-fisicas/${person.paisquery.toLowerCase()}`)}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${paisSelected === person.paisquery ? 'bg-green-300 text-green-700' : 'text-gray-900'
                                                }  ${active ? 'bg-green-300 text-green-700' : 'text-gray-900'}`
                                            }
                                            value={person}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span

                                                        className={`block cursor-pointer hover:bg-opacity-80  truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {person.pais}
                                                    </span>
                                                    {paisSelected === person.paisquery ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                                                            <AiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                                                        </span>

                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>

                        </div>
                    </Listbox>
                </div>
                <div className='flex flex-col gap-2 lg:justify-around lg:pl-12 h-full'>
                    <motion.ul className='text-center flex  flex-wrap   w-11/12 mx-auto gap-12 my-12'>

                        {selectedPaisQuery.map((tienda) => (
                            <motion.li
                                key={tienda.id}
                                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className='flex flex-wrap justify-center gap-12 mx-auto'
                            >
                                <CardTienda key={tienda.id} {...tienda} />
                            </motion.li>
                        ))
                        }

                    </motion.ul>
                </div>
            </div>
        </div>
    )
}

export default Pais