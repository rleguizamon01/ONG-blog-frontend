import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Post = () => { 
  return (
    <main className="post blog-post col-lg-10">
        <Container>
            <div className="post-single">
                <div className="post-thumbnail"><img src="https://via.placeholder.com/640x480.png/0077ee?text=eligendi" className="img-fluid" alt="Imagen post"></img></div>
                <div className="post-details">
                    <div className="post-meta d-flex justify-content-between">
                        <div className="title">Categoria: categoria</div>
                    </div>
                </div>

                {/* <!--User--> */}
                <div className="post-footer d-flex flex-column flex-sm-row">
                    <div className="author d-flex align-items-center flex-wrap">
                        <div className="title">
                            <i className="fas fa-user"></i>
                            <span>Autor</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                        <div className="date">
                            <i className="fas fa-table"></i>
                            Fecha creacion
                        </div>
                        <div className="comments meta-last">
                            <i className="fas fa-comments"></i>
                            cantidad comentarios
                        </div>
                    </div>
                </div>

                <h1>Titulo</h1>

                <div className="post-body">
                    <p>Magnam voluptatem ea repellat reiciendis ut nulla et dolore. Porro possimus id voluptates rerum dolores et dolor. Voluptate ad quis dolore qui sit pariatur.</p>.
                </div>

                <div className="post-comments">
                    <header>
                        <h3 className="h6">Comentarios del post<span className="no-of-comments"></span></h3>
                    </header>

                    <div className="add-comment">
                        <header>
                            <h3 className="h6">Deja tu comentario</h3>
                        </header>
                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Control type="email" name="email" id="email" placeholder="Direccion de email"></Form.Control>
                                    
                                    {/* <!-- Email error --> */}
                                    {/* <p id="email-error" className="d-none alert alert-danger mt-3 small p-2">{{ $errors->first('email') }}</p> */}
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                <Form.Control as="textarea" name="body" id="body" placeholder="Tu comentario"></Form.Control>

                                    {/* <!-- Body error --> */}
                                    <p id="body-error" className=" d-none alert alert-danger mt-3 small p-2"></p>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Button id="submit-comment" className="btn btn-secondary">Enviar comentario</Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                    {/* <!-- Comments --> */}
                    <div id="comment-section"></div> 
                </div>                    
            </div>
        </Container>
    </main>
  );
}

export default Post;