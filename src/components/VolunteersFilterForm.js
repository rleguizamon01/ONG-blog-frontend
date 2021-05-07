import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

export const VolunteersFilterForm = () => {

  


  return (
    <Formik initialValues={{
      status: "",
      filter: "",
    }}
        onSubmit={(values) => console.log(values)}
    >
      <Form>
      <div className="form-row align-items-end">

        <div className="form-group col-md-2">
          <label for="status">Estado:</label>
          <Field
          className="form-control" 
          name="status"
          as="select">
          <option value='accepted'>Aceptados</option>
          <option value='rejected'>Rechazados</option>
          <option value='pending'>Pendientes</option>
          </Field>
          <ErrorMessage
            name='status'
            component='div'
            className='field-error text-danger'
          />
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="filter">Buscar</label>
          <Field
            className='form-control'
            name='filter'
            placeholder=''
            type='text'
          />
          <ErrorMessage
            name='filter'
            component='div'
            className='field-error text-danger'
          />
        </div>
        <div class="form-group col-md-2">
          <button type="submit" className="btn btn-primary mt-2">Filtrar</button>
        </div>
      </div>
      </Form>
    </Formik>
    

  );
}

export default VolunteersFilterForm;