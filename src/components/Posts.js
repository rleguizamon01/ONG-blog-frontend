import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';

export const Posts = () => {
    return(
        <Container>
            <Row>
                <Card border="0" className="col-xl-6 mb-5 pr-5 pl-5">
                    <Card.Body>
                         {/*Photo*/}
                         <Card.Img variant="top" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="mb-3"></Card.Img>
                         {/*Title*/}
                        <a href="{{ route('posts.show', $post->id) }}" className="text-decoration-none">
                            <Card.Title>Titulo</Card.Title>
                        </a>
                        <Card.Text>
                            <div className="d-flex justify-content-between mt-2 mb-2">
                                {/* Date*/}
                                <div className="text-uppercase text-muted font-monospace">
                                    Fecha de creacion
                                </div>
                                {/*Category*/}
                                <div className="text-capitalize text-muted">
                                    Categoria: categoria
                                </div>
                            </div>
                            {/*Author*/}
                            <p className="card-text text-muted fw-bold">Nombre autor</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <div className="d-flex justify-content-center mb-4">links</div>
        </Container>
    );
};