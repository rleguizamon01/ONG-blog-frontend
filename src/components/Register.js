import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Header from './Header';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from 'axios';


const Register = () => {
    const formSchema = Yup.object().shape({
        first_name: Yup.string('Debe ingresar un nombre válido.')
            .required('Debe ingresar un nombre.'),
        last_name: Yup.string('Debe ingresar un apellido válido.')
            .required('Debe ingresar un apellido.'),
        email: Yup.string().email('El email debe tener el formato "mi_email@ejemplo.com"')
            .required('Debe ingresar dirección de email.'),
        password: Yup.string('Debe ingresar una contraseña valida.')
            .required('Debe ingresar una contraseña.'),
    });
    let history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/");
        }
    }, [])

    return (
        <>
            <Header/>
            <Formik initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                password: "",
            }}
                    validationSchema={formSchema}
                    onSubmit={(values) =>
                    {
                        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
                            axios({
                                method:'POST',
                                url: "http://127.0.0.1:8000/api/register",
                                data: {
                                    first_name: values.first_name,
                                    last_name: values.last_name,
                                    email: values.email,
                                    password: values.password
                                },
                                headers:{
                                    'Access-Control-Allow-Origin' : '*',
                                    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                    "Content-Type":"application/json",
                                    "Accept":"application/json"
                                }
                            })
                            .then(res => localStorage.setItem("user-info",JSON.stringify(res)));
                        });
                        history.push("/home");

                    }}
            >
                <div className="col-sm-6 offset-sm-3">
                    <h3>Registrarse</h3>
                    <Form>
                    <div className="form-group">
                        <label htmlFor="first_name">Nombre</label>
                        <Field
                            className='form-control'
                            name='first_name'
                            placeholder=''
                            type='text'
                        />
                        <ErrorMessage
                            name='first_name'
                            component='div'
                            className='field-error text-danger'
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Apellido</label>
                        <Field
                            className='form-control'
                            name='last_name'
                            placeholder=''
                            type='text'
                        />
                        <ErrorMessage
                            name='last_name'
                            component='div'
                            className='field-error text-danger'
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                            className='form-control'
                            name='email'
                            placeholder=''
                            type='text'
                        />
                        <ErrorMessage
                            name='email'
                            component='div'
                            className='field-error text-danger'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field
                            className='form-control'
                            name='password'
                            placeholder=''
                            type='password'
                        />
                        <ErrorMessage
                            name='password'
                            component='div'
                            className='field-error text-danger'
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">Registrarse</button>
                    </Form>
                </div>
            </Formik>
        </>
    );
}

export default Register;