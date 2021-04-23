import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export const Subscription = () => {

  const formSchema = Yup.object().shape({
    first_name: Yup.string('Debe ingresar un nombre válido.')
      .required('Debe ingresar un nombre.'),
    last_name: Yup.string('Debe ingresar un apellido válido.')
      .required('Debe ingresar un apellido.'),
    email: Yup.string().email('El email debe tener el formato "mi_email@ejemplo.com"')
      .required('Debe ingresar dirección de email.'),
  });

  return (

    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values) => console.log(values)}
    >
      <section className="newsletter no-padding-top m-3">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Suscribite a nuestra Newsletter</h2>
              <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </Col>
            <Col md={12}>
              <div className="form-holder">
                <Form method="post" action="{{route('subscribers.store')}}">
                  <Form.Row className="align-items-end">
                    <Col xs={12} md={3}>
                      <Form.Label htmlFor="first_name">Nombre</Form.Label>
                      <Form.Control type="text" size="sm" id="first_name" name="first_name"
                                    placeholder="Ingrese su nombre ..." defaultValue=""/>

                      <Field
                        className='form-control' name='first_name' placeholder='' type='text'/>
                      <ErrorMessage
                        name='first_name' component='div' className='field-error text-danger'/>
                    </Col>

                    <Col xs={12} md={3}>
                      <Form.Label htmlFor="last_name">Apellido</Form.Label>
                      <Form.Control type="text" size="sm" id="last_name" name="last_name"
                                    placeholder="Ingrese su apellido" defaultValue=""/>

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
                    </Col>

                    <Col xs={12} md={3}>
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control type="email" size="sm" id="email" name="email" placeholder="Ingrese su email"
                                    defaultValue=""/>
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
                    </Col>
                    <Col xs={12} md={3}>
                      <Button type="submit" className="submit mt-4">Suscribirse</Button>
                    </Col>
                  </Form.Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Formik>
)
}
