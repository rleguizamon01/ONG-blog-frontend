import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Volunteers = () => {

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

    <div className="container">
      <div className="m-4">
        <div className="mb-3">
          <h3>Unirse al voluntariado</h3>
        </div>
        <Form>
          {/* Name */}
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
            {/* Last name */}
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
            {/* Email */}
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
            {/* Password */}
            {/* <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Contraseña" onChange={formik.handleChange} />
            </div> */}
            {/* Phone number */}
            <div className="form-group">
              <label htmlFor="phone_number">Número de teléfono</label>
              <Field
              className='form-control'
              name='phone_number'
              placeholder=''
              type='text'
              />
              <ErrorMessage
              name='phone_number'
              component='div'
              className='field-error text-danger'
              />
            </div>
            {/* Birth date */}
            <div className="form-group">
              <label htmlFor="birthdate">Fecha de nacimiento</label>
              <Field
              className='form-control'
              name='birth_date'
              placeholder=''
              type='date'
              />
              <ErrorMessage
              name='birth_date'
              component='div'
              className='field-error text-danger'
              />
            </div>
            {/* Body */}
            <div className="form-group">
              <label htmlFor="body">Contanos cómo conociste la ONG y por qué querés unirte al voluntariado</label>
              <Field
              className='form-control'
              name='body'
              as='textarea'
              placeholder=''
              type='text'
              />
              <ErrorMessage
              name='body'
              component='div'
              className='field-error text-danger'
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Unirse</button>
          </Form>
        </div>
      </div>
      </Formik>
      ); 
    }
    
export default Volunteers;