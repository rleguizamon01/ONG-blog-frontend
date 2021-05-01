import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const PostCreate = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    },[]);

    const fetchCategories = async () => {
        const url = `http://127.0.0.1:8000/api/categories`;
        const response = await axios.get(url);
        const currentcategories = await response.data;
        setCategories(currentcategories);
    };

    const formSchema = Yup.object().shape({
        title: Yup.string('Debe ingresar un titulo válido.').required('Debe ingresar un titulo.'),
        body: Yup.string('Debe ingresar un texto válido').required('Debe ingresar el cuerpo del post.'),
      });

    
    return (
        <Formik
            initialValues={{
                category_id: "",
                title: "",
                body: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values) => console.log(values)}
        >{formik => (
            <Container>
                <Row>
                    <Col md={12}>
                        <Form id="post-form" method='POST' onSubmit={formik.handleSubmit}  >
                            <div className="form-group m-4">
                                <Form.Label htmlFor="category_id">Categoria</Form.Label>
                                <Field as="select" type="text" name="category_id" id="category_id" className="form-control" aria-describedby="category_idError">
                                    {categories.map(
                                        category=><option key={category.id} value={category.id} label={category.name}/>
                                    )}
                                </Field>
                            </div>
                            <div className="form-group m-4">
                                <Form.Label htmlFor="title">Titulo</Form.Label>
                                <Field className='form-control' name='title' placeholder='Ingrese un titulo ...' type='text'/>
                                <ErrorMessage name='title' component='div' className='field-error text-danger'/>
                            </div>

                            <div className="form-group m-4">
                                <Form.Label htmlFor="body">Cuerpo del Post</Form.Label>
                                <Field as="textarea" name="body" className="form-control" rows={6} />
                                <ErrorMessage name='body' component='div' className='field-error text-danger'/>
                            </div>
                        </Form>
                        <Button type="submit" className="btn btn-primary" form="post-form">Enviar</Button>
                    </Col>
                </Row>
            </Container>
            )}
        </Formik>
    )
}

export default PostCreate
