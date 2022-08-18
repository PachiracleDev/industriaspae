import { useMemo, useRef, useState } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import Link from 'next/link'
import productos from '../products/products.json'

const AutocompleteItem = ({ id, name, price }: any) => {
  return (
    <li className=' text-gray-700'>
      <Link href={`/producto/${id}`}>
        <a className='hover:bg-gray-300 flex gap-4 p-4'>
          <div className='flex gap-3 items-center'>
            <h3 className='text-sm font-semibold'>{name}</h3>
            <p className='text-xs text-gray-600 whitespace-nowrap '>S/ {price}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default function Search(props: any) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete: any = useMemo(() => createAutocomplete({
    placeholder: 'Buscar artesanías',
    onStateChange: ({ state }: any) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'offers-next-api',
      getItems: ({ query }: any) => {
        if (!!query) {
          const results = productos.filter((product) => {
            const { name } = product;
            return name.toLowerCase().includes(query.toLowerCase());
          })

          return results.slice(0, 5)
        }

      }
    }],
    ...props
  }), [props])

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps: any = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps: any = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} className="flex justify-center shadow-md sticky top-[55px] z-10 panel" {...formProps}>
      <div className="flex p-1 sticky top-0 w-11/12">
        <input ref={inputRef} className='flex-1 p-2 pl-4 w-full outline-none border rounded-full' {...inputProps} />
        {
          autocompleteState.isOpen && (
            <div className="absolute mt-12 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shadow-lg z-10" ref={panelRef} {...autocomplete.getPanelProps()}>
              {autocompleteState.collections.map((collection, index) => {
                const { items }: any = collection

                return (
                  <section key={`section-${index}`} className="shadow-md">
                    {items.length > 0 && (
                      <ul {...autocomplete.getListProps()}>
                        {
                          items.map((item: any) => <AutocompleteItem key={item.id} {...item} />)
                        }
                      </ul>
                    )}
                  </section>
                )
              })}
            </div>
          )
        }
      </div>
    </form>
  )
}