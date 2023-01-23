import React, { useCallback } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'
import { overlayFilterAtom } from './OverlayFilter'
import classNames from 'classnames';
import { BsXLg, BsSliders, BsArrowReturnRight, BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import { useLockedBody } from "../hooks/useLockerdBody";
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { freezeAtom } from 'jotai/utils';

const filterExpandedAtom = atom(false)
export const FilterPanelExpandedAtom = atom(
    (get) => get(filterExpandedAtom) && get(overlayFilterAtom),
    (get, set, value: boolean) => {
        set(filterExpandedAtom, value);
        set(overlayFilterAtom, value);
    }
);


const categorias = [
    {
        "id": 1,
        "category": "bonsais",
        "expanded": false
    },
    {
        "id": 2,
        "category": "grutas",
        "expanded": false
    },
    {
        "id": 3,
        "category": "base-de-madera",
        "expanded": false
    },
    {
        "id": 4,
        "category": "base-animalitos",
        "expanded": false
    }
]

const categoryAtom = freezeAtom(atom(categorias))


const categoryPanelAtom = atom(
    (get) => get(categoryAtom),
    (get, set, value: any) => {
        set(categoryAtom, value);
    }
)

function FilterModal() {

    const [expandedValues, setExpandedValues] = useAtom(categoryPanelAtom)

    const [filterExpanded, setFilterExpanded] = useAtom(FilterPanelExpandedAtom);
    useLockedBody(filterExpanded);
    const cn = classNames('FilterModal', {
        'FilterModalExpanded': filterExpanded,
    })

    const router = useRouter()
    const handleLink = useCallback((url: string) => {
        router.push(url)
    }, [router])

    const handleExpanded = useCallback((id: number): any => {

        const newExpandedValues = expandedValues.map((item) => {
            if (item.id === id) {

                return {
                    ...item,
                    expanded: !item.expanded
                }
            }
            return item
        })
        setExpandedValues(newExpandedValues)
    }, [expandedValues, setExpandedValues])







    return (
        <div className={cn}>
            <BsXLg
                className="w-6 h-6 my-2 absolute right-5 top-4 cursor-pointer hover:opacity-70"
                onClick={() => setFilterExpanded(false)}
            />
            <div className='flex gap-2 p-4 items-center my-2 '>
                <BsSliders size={30} />
                <span className='block text-xl font-bold'>Filtrar</span>
            </div>

            <div className='flex flex-col w-full '>
                <div className='shadow-lg pb-4'>
                    <h3 className='text-lg font-bold text-center'>Categorías</h3>
                </div>
                <div className='flex flex-col border w-full overflow-y-auto max-h-[500px] text-lg'>
                    <div className='flex flex-col w-full justify-center text-lg'>
                        <NextLink href="/catalogo/bonsais">
                            <div className='px-8 py-3 w-full cursor-pointer hover:text-black border relative bg-slate-100 shadow-md' onClick={() => handleExpanded(1)}>
                                Bonsáis
                                {
                                    expandedValues[0].expanded ? <BsChevronCompactUp className='absolute right-4 top-4' size={25} /> : <BsChevronCompactDown className='absolute right-4 top-4' size={25} />
                                }
                            </div>
                        </NextLink>
                        <motion.ol
                            initial={{ height: 0 }}
                            animate={{ height: expandedValues[0].expanded ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`text-sm hidden ${expandedValues[0].expanded && 'block'}`}>
                            <motion.li className='flex flex-col w-full '>
                                <NextLink href="/catalogo/bonsais/base-madera">
                                    <div className='px-8 cursor-pointer hover:text-black pl-10 py-3 w-full border relative bg-slate-200 shadow-md text-' onClick={() => { handleExpanded(3) }}>
                                        <BsArrowReturnRight className='absolute left-4 top-3' size={16} />
                                        Base de Madera
                                        {
                                            expandedValues[2].expanded ? <BsChevronCompactUp className='absolute right-4 top-4' /> : <BsChevronCompactDown className='absolute right-4 top-4' />
                                        }
                                    </div>
                                </NextLink>

                                <motion.ol
                                    initial={{ height: 0 }}
                                    animate={{ height: expandedValues[2].expanded ? 'auto' : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.li className='px-8 py-3 cursor-pointer hover:text-black pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-madera/minis")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Minis
                                    </motion.li>
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-madera/estandar")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Estandar
                                    </motion.li>
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-madera/medianos")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Medianos
                                    </motion.li>
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-madera/grandes")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Grandes
                                    </motion.li>
                                </motion.ol>

                            </motion.li>


                            <motion.li>
                                <NextLink href="/catalogo/bonsais/base-animalitos">
                                    <div className='px-8 py-3 cursor-pointer hover:text-black pl-10 w-full border relative bg-slate-200 shadow-md' onClick={() => handleExpanded(4)}>
                                        <BsArrowReturnRight className='absolute left-4 top-3' size={16} />
                                        Base Animalitos
                                        {
                                            expandedValues[3].expanded ? <BsChevronCompactUp className='absolute right-4 top-4' /> : <BsChevronCompactDown className='absolute right-4 top-4' />
                                        }
                                    </div>
                                </NextLink>
                                <motion.ol initial={{ height: 0, opacity: 0 }}
                                    animate={
                                        {
                                            height: expandedValues[3].expanded ? 'auto' : 0,
                                            opacity: expandedValues[3].expanded ? 1 : 0,
                                        }

                                    }
                                    transition={{ duration: 0.3 }}
                                    className={`text-sm w-full`}
                                >
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-animalitos/elefantes")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Elefantes
                                    </motion.li>
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-animalitos/elefantes-copa")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Elefantes con copa
                                    </motion.li>
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-animalitos/sapos")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Sapos
                                    </motion.li>
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-animalitos/conejos")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Conejos
                                    </motion.li>
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-animalitos/tigres")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Tigres
                                    </motion.li>
                                    <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-12 w-full border relative bg-slate-300 shadow-md' onClick={() => handleLink("/catalogo/bonsais/base-animalitos/buhos")}>
                                        <BsArrowReturnRight className='absolute left-8 top-3' size={14} />
                                        Buhos
                                    </motion.li>

                                </motion.ol>
                            </motion.li>


                            <NextLink href="/catalogo/bonsais/base-huamanga">
                                <div className='px-8 cursor-pointer hover:text-black py-3 pl-10 w-full border relative bg-slate-200 shadow-md'>
                                    <BsArrowReturnRight className='absolute left-4 top-3' size={16} />
                                    Base Huamanga
                                </div>
                            </NextLink>
                        </motion.ol>


                    </div>

                    <NextLink href="/catalogo/ollitas">
                        <div className='px-8 cursor-pointer hover:text-black py-3 w-full border relative bg-slate-100 shadow-md' >
                            Ollitas
                        </div>
                    </NextLink>
                    <NextLink href="/catalogo/palo-santo">
                        <div className='px-8 cursor-pointer hover:text-black py-3 w-full border relative bg-slate-100 shadow-md' >
                            Palo Santo
                        </div>
                    </NextLink>

                    <NextLink href="/catalogo/palmeras">
                        <div className='px-8 cursor-pointer hover:text-black py-3 w-full border relative bg-slate-100 shadow-md' >
                            Palmeras
                        </div>
                    </NextLink>
                    <div className='flex flex-col w-full justify-center text-lg'>
                        <NextLink href="/catalogo/grutas">
                            <div className='px-8 cursor-pointer hover:text-black py-3 w-full border relative bg-slate-100 shadow-md' onClick={() => handleExpanded(2)}>
                                Grutas
                                <BsChevronCompactDown className='absolute right-4 top-3' size={25} />
                            </div>
                        </NextLink>
                        <motion.ol
                            initial={{ height: 0 }}
                            animate={{ height: expandedValues[1].expanded ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`hidden text-sm w-full ${expandedValues[1].expanded && 'block'}`}>
                            <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-10 w-full border relative bg-slate-200 shadow-md' onClick={() => handleLink("/catalogo/grutas/arbolitos")}>
                                <BsArrowReturnRight className='absolute left-4 top-3' size={16} />
                                Con Arbolito
                            </motion.li>
                            <motion.li className='px-8 cursor-pointer hover:text-black py-3 pl-10 w-full border relative bg-slate-200 shadow-md' onClick={() => handleLink("/catalogo/grutas/santa-muertes")}>
                                <BsArrowReturnRight className='absolute left-4 top-3' size={16} />
                                Con Santa Muerte
                            </motion.li>
                        </motion.ol>
                    </div>

                    <NextLink href="/catalogo/piramides">
                        <div className='px-8 py-3 cursor-pointer hover:text-black w-full border relative bg-slate-100 shadow-md'  >
                            Pirámides
                        </div>

                    </NextLink>

                    <NextLink href="/catalogo/jabones">
                        <div className='px-8 py-3 cursor-pointer hover:text-black w-full border relative bg-slate-100 shadow-md' >
                            Jabones
                        </div>
                    </NextLink>


                </div>
            </div>


        </div>
    )
}

export default FilterModal