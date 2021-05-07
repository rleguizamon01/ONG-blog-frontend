import React, {useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Header from './Header'
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";

const Login = () => {
    let history = useHistory();
    const formSchema = Yup.object().shape({
        email: Yup.string().email('El email debe tener el formato "mi_email@ejemplo.com"')
            .required('Debe ingresar dirección de email.'),
        password: Yup.string('Debe ingresar una contraseña valida.')
            .required('Debe ingresar una contraseña.'),
    });

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
                email: "",
                password: "",
            }}
                    validationSchema={formSchema}
                    onSubmit={(values) =>
                    {
                        axios({
                            method:'POST',
                            url: "http://127.0.0.1:8000/api/login",
                            data: {
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
                        history.push("/");
                    }}
            >
            <div className="col-sm-6 offset-sm-3">
                <h1>Login</h1>
                <Form>
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
                 <Button type="submit" className="btn btn-success mb-4">Ingresar</Button>
                </Form>
            </div>
            </Formik>
        </>
    )
}

export default Login

