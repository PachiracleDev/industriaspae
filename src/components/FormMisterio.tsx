import React from 'react'
import { useAtomValue } from 'jotai/utils'
import { Formik, Field, Form } from "formik";
import { dataAtom } from '../pages/misterio/index'
import axios from 'axios';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { infoFraseAtom } from '../pages/misterio/congratulations'
import { useUpdateAtom } from 'jotai/utils'

function FormMisterio() {
    const router = useRouter()

    const updateInfoFrase = useUpdateAtom(infoFraseAtom)

    const errorToast = () => toast.error("Codigo Invalido")
    const successToast = () => toast.success('Perfecto!')
    const data = useAtomValue(dataAtom)

    return (
        <div className='flex justify-center w-11/12 mx-auto'>

            <Formik
                initialValues={{ codigo: '' }}
                onSubmit={async (values, { setSubmitting }) => {
                    const enviarData = {
                        codigo: values.codigo,
                        categoria: data.category
                    }
                    try {
                        const rta = await axios.post('/api/misterio', enviarData)
                        if (rta.status === 200) {
                            successToast()
                            updateInfoFrase({ frase: rta.data.frase })
                            router.push('/misterio/congratulations')
                        }
                    } catch (error) {
                        errorToast()
                    }

                    setSubmitting(false);



                }}
            >
                <Form className='flex justify-center w-11/12 mx-auto'>
                    <Field type='text' name='codigo' className='border border-gray-300 w-full sm:w-1/2 xl:w-1/4 bg-white outline-none rounded-l-lg h-10 px-5  text-sm shadow-md' placeholder='Ingresa el codigo' />
                    <button type='submit' className='bg-gradient-to-tl from-emerald-500 to-green-500  hover:opacity-80 duration-500 text-white font-bold py-2 px-4 rounded-r-lg shadow-md'>Enviar</button>
                </Form>
            </Formik>


        </div>
    )
}

export default FormMisterio