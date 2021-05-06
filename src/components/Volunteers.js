import React from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Header from './Header';


export const Volunteers = () => {

  const maxDate = new Date()
  maxDate.setFullYear(maxDate.getFullYear() - 18)

  const formSchema = Yup.object().shape({
    first_name: Yup.string('Debe ingresar un nombre válido.')
      .required('Debe ingresar un nombre.'),
    last_name: Yup.string('Debe ingresar un apellido válido.')
      .required('Debe ingresar un apellido.'),
    email: Yup.string().email('El email debe tener el formato "mi_email@ejemplo.com"')
      .required('Debe ingresar dirección de email.'),
    phone_number: Yup.string()
      .matches(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/, 'El numero telefonico no tiene el formato correcto.')
      .required('Debe ingresar su numero telefonico'),
    birth_date: Yup.date().max(maxDate, 'Debe ser mayor de 18 años para poder ser voluntario')
      .required('Debe ingresar su fecha de nacimiento'),
    body: Yup.string().min(50, 'Debe tener al menos 50 caracteres.')
      .max(500, 'No debe superar los 500 caracteres.')
      .required('El campo es obligatorio'),
  });

  return (
    <>
    <Header/>
    <Formik initialValues={{
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      birth_date: "",
      body: "",
    }}
            validationSchema={formSchema}
            onSubmit={(values) => console.log(values)}
    >
      <div className="row flex-column p-5">
        <div className="col">
          <h3>Unirse al voluntariado</h3>
        </div>

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
      </div>
    </Formik>
  </>
  );
}

export default Volunteers;
