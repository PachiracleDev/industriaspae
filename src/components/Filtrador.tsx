import React from "react";

import Card from "./Card";
import { motion } from 'framer-motion'
import { BsSliders } from 'react-icons/bs'
import { useUpdateAtom } from 'jotai/utils'
import { FilterPanelExpandedAtom } from './FilterModal'

function Filtrador({ products }: any) {
  const updateFilterExpanded = useUpdateAtom(FilterPanelExpandedAtom);



  return (
    <div className="my-10">

      <div className="w-11/12 mx-auto flex justify-around p-1 flex-wrap gap-5 items-center">
        <div className="text-sm flex px-16 gap-1 cursor-pointer border lg:px-24 py-3 hover:bg-gray-100 shadow-md" onClick={() => updateFilterExpanded(true)}>
          <BsSliders size={20} />
          Filtrar artesanías
        </div>
      </div>

      <motion.ul

        className="flex flex-wrap w-11/12 xl:shrink-1 mx-auto gap-4 justify-center my-4 text-left">
        {products.map((producto: any) => (
          <motion.li
            initial={{ opacity: 0, scale: 0.5, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}

            key={producto.id}>
            <Card key={producto.id} {...producto} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}


export default React.memo(Filtrador);
