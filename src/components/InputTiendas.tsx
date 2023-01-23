import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'
import { useRouter } from 'next/router'

const pais = [
    { name: 'Perú', url: "/tiendas-fisicas/peru" },
    { name: 'Chile', url: "/tiendas-fisicas/chile" },
    { name: 'Bolivia', url: "/tiendas-fisicas/bolivia" },
    { name: 'México', url: "/tiendas-fisicas/mexico" },
    { name: 'EEUU', url: "/tiendas-fisicas/eeuu" },
]



function InputTiendas() {
    const [selected, setSelected] = useState(pais[0])
    const router = useRouter()

    return (
        <div className="w-72 mx-auto">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiChevronDown
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {pais.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    onClick={() => router.push(person.url)}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-green-300 text-green-700' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span

                                                className={`block cursor-pointer hover:bg-opacity-80 truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
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
    )
}

export default InputTiendas