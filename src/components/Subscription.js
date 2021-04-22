import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Subscription = () => {
    return (
        <section className="newsletter no-padding-top m-3">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Suscribite a nuestra Newsletter</h2>
                        <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col md={12}>
                        <div className="form-holder">
                            <Form method="post" action="{{route('subscribers.store')}}">
                                {/* @csrf   CAMBIAR */}
                                <Form.Row className="align-items-end">
                                    <Col xs={12} md={3}>
                                        <Form.Label htmlFor="first_name">Nombre</Form.Label>
                                        <Form.Control type="text" size="sm" id="first_name" name="first_name" placeholder="Ingrese su nombre ..." defaultValue=""/>

                                        {/* @error('first_name')    CAMBIAR */}
                                            {/* <div className="error"> {{ $errors->first('first_name') }} </div>  CAMBIAR */}
                                        {/* @enderror */}
                                    </Col>

                                    <Col xs={12} md={3}>
                                        <Form.Label htmlFor="last_name">Apellido</Form.Label>
                                        <Form.Control type="text" size="sm" id="last_name" name="last_name" placeholder="Ingrese su apellido" defaultValue=""/>

                                        {/* @error('last_name')   CAMBIAR */}
                                            {/* <div className="error"> {{ $errors->first('last_name') }} </div>   CAMBIAR */}
                                        {/* @enderror    CAMBIAR */}
                                    </Col>

                                    <Col xs={12} md={3}>
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control type="email" size="sm" id="email" name="email" placeholder="Ingrese su email" defaultValue=""/>

                                        {/* @error('email')    CAMBIAR */}
                                            {/* <div className="error"> {{ $errors->first('email') }} </div>   CAMBIAR */}
                                        {/* @enderror    CAMBIAR */}
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
    )
}
