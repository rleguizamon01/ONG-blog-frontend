import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Subscription = () => {
    return (

        <Formik
      initialValues={{
        first_name:"",
        last_name:"",
        email:"",
        phone_number:"",
        birth_date:"",
        body:"",
      }}
      onSubmit={(values) => console.log(values)}
    >
        <section className="newsletter no-padding-top m-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Suscribite a nuestra Newsletter</h2>
                        <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="form-holder">
                            <Form>
                                {/* @csrf   CAMBIAR */}
                                <div className="form-row align-items-end">
                                    <div className="col-12 col-md-3">
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

                                    <div className="col-12 col-md-3">
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

                                    <div className="col-12 col-md-3">
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
                                    <div className="col-12 col-md-3">
                                        <button type="submit" className="submit mt-4">Suscribirse</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Formik>
    )
}
