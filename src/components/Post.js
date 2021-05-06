import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header'

export const Post = () => { 

    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
    const [author, setAuthor] = useState("");
    const [created_at, setCreated_at] = useState("");
    const [body, setBody] = useState("");
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchPost(id);
    }, []);

    const fetchPost = async (id) => {
        const url = `http://127.0.0.1:8000/api/posts/${id}`;
        const response = await axios.get(url);
        const post = await response.data;
        setCategory(post.category.name);
        setPhoto(post.photo);
        setAuthor(post.user.first_name+' '+post.user.last_name);
        setCreated_at(post.created_at);
        setBody(post.body);
        setComments(post.comments);

    }
  return (
    <>
    <Header/>
    <main className="post blog-post col-lg-10">
        <Container>
            <div className="post-single">
                <div className="post-thumbnail"><img src={photo} className="img-fluid" alt="Imagen post"></img></div>
                <div className="post-details">
                    <div className="post-meta d-flex justify-content-between">
                        <div className="title">Categoria: {category}</div>
                    </div>
                </div>

                {/* <!--User--> */}
                <div className="post-footer d-flex flex-column flex-sm-row">
                    <div className="author d-flex align-items-center flex-wrap">
                        <div className="title">
                            <i className="fas fa-user"></i>
                            <span>{author}</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                        <div className="date">
                            <i className="fas fa-table"></i>
                            {created_at}
                        </div>
                        <div className="comments meta-last">
                            <i className="fas fa-comments"></i>
                            {comments.length}
                        </div>
                    </div>
                </div>

                <div className="post-body">
                    <p>{body}</p>
                </div>

                <div className="post-comments">
                    <header>
                        <h3 className="h6">Comentarios del post<span className="no-of-comments">{comments.length}</span></h3>
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
                    <div>
                    {comments.map( comment => (
                        <div class="comment" key={comment.id}>
                            <div class="comment-header d-flex justify-content-between">
                                <div class="user d-flex align-items-center">
                                    <div class="title"><strong>{comment.email}</strong></div>
                                </div>
                            </div>
                            <div class="comment-body">
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>                    
            </div>
        </Container>
    </main>
    </>
  );
}

export default Post;