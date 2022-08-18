import axios from 'axios';
import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { StoreContext } from "../context/store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function FormularioDeEnvio() {

    const { state } = useContext(StoreContext);
    const { cartItems } = state.cart;

    const SignupSchema = Yup.object().shape({
        fullname: Yup.string()
            .min(5, 'Muy corto!')
            .max(70, 'Muy largo!')
            .matches(/^[aA-zZ\s]+$/, "Solo letras o espacios en blanco")
            .typeError('Solo letras')
            .required('Es requerido'),
        celular: Yup.number().required('Es requerido').min(8, 'Minimo 8 caracteres').positive('Debe ser un número positivo'),
        dni: Yup.number().required('Es requerido').positive('Debe ser un número positivo'),
        pais: Yup.string()
            .min(3, 'Muy corto!')
            .max(20, 'Muy largo!')
            .matches(/^[aA-zZ\s]+$/, "Solo letras o espacios en blanco")
            .required('Es requerido'),
        ciudad: Yup.string()
            .min(3, 'Muy corto!')
            .max(20, 'Muy largo!')
            .matches(/^[aA-zZ\s]+$/, "Solo letras o espacios en blanco")
            .required('Es requerido'),
        provincia: Yup.string()
            .min(3, 'Muy corto!')
            .max(20, 'Muy largo!')
            .matches(/^[aA-zZ\s]+$/, "Solo letras o espacios en blanco")
            .required('Es requerido')


    });


    interface Values {
        fullname: string;
        celular: string;
        dni: string;
        ciudad: string;
        provincia: string;
        pais: string;
    }

    return (
        <div className="lg:w-1/2 border rounded-md h-full shadow-lg">
            <h3 className="text-center my-2 text-2xl font-bold text-gray-600">
                Comprobante
            </h3>
            <div className='w-11/12 mx-auto flex flex-col gap-2'>



                <Formik
                    initialValues={{
                        fullname: '',
                        ciudad: '',
                        provincia: '',
                        dni: '',
                        celular: '',
                        pais: '',

                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (
                        values: Values,
                        actions: any,


                    ) => {
                        MySwal.fire({
                            icon: "success",
                            title: "Listo!",
                            html: "<b>Orden Enviada</b>",
                            confirmButtonColor: "#22c55e",
                            confirmButtonText: "Okey",
                        })

                        actions.resetForm();
                        actions.setSubmitting(false);

                        const itemsResumidos = cartItems.map(item => {
                            return {
                                name: item.name,
                                cantidad: item.quantity,
                            }
                        })

                        const response = await axios.post("./api/peticion", { datos: values, ordenFull: itemsResumidos })
                        console.log(response)


                    }}>
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit} >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="fullname">Nombre Completo</label>
                                <Field type="text" name="fullname" className="px-2 py-0 border-b outline-none focus:border-b-gray-700" />
                                <ErrorMessage name="fullname" component="div" className='text-red-500 text-sm' />

                                <label htmlFor="dni">DNI</label>
                                <Field name="dni" type="number" className="px-2 py-0 border-b outline-none focus:border-b-gray-700" />
                                <ErrorMessage name="dni" component="div" className='text-red-500 text-sm' />

                                <label htmlFor="celular">Número de Celular</label>
                                <Field name="celular" type="number" className="px-2 py-0 border-b outline-none focus:border-b-gray-700" />
                                <ErrorMessage name="celular" component="div" className='text-red-500 text-sm' />

                                <label htmlFor="pais">País</label>
                                <Field name="pais" type="text" className="px-2 py-0 border-b outline-none focus:border-b-gray-700" />
                                <ErrorMessage name="pais" component="div" className='text-red-500 text-sm' />

                                <label htmlFor="provincia">Provincia</label>
                                <Field name="provincia" type="text" className="px-2 py-0 border-b outline-none focus:border-b-gray-700" />
                                <ErrorMessage name="provincia" component="div" className='text-red-500 text-sm' />

                                <label htmlFor="ciudad">Ciudad</label>
                                <Field name="ciudad" type="text" className="px-2 py-0 border-b outline-none focus:border-b-gray-700" />
                                <ErrorMessage name="ciudad" component="div" className='text-red-500 text-sm' />

                                <button type="submit" className="shadow-gray-500 my-4 shadow-md border-none py-2 mx-auto mb-4 w-3/4 text-center border text-white bg-gradient-to-r from-zinc-800 to-slate-500">Enviar Orden</button>
                            </div>
                        </Form>)}

                </Formik>
            </div>
        </div >
    )
}

export default FormularioDeEnvio