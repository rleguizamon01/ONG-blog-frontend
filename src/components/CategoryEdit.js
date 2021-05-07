import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import CategoryApi from './CategoryApi';
import * as Yup from 'yup';
import { Container, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert'

const CategoryEdit = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        CategoryApi.getOneCategory(id).then( res => {
            console.log(res);
            setName(res.data.name);
        })
        .catch(err =>{
            console.log(err);
        })
    }, [])

    const onEditSubmit = async (values) => {
        setLoading(true);
        try {
            await CategoryApi.updateCategory(values, id);
            history.push('/categories');
        }
        catch (error){
            console.log(error.response.data);
            swal("Error", "Hubo un error al editar la categoría", "error");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <div className="m-4">
                <Link to="/categories">
                    <i className="fa fa-arrow-left mb-4"></i>
                </Link>

                <h5 className="mb-4">Editar categoría</h5>

                <Formik
                initialValues={{ name: name }}
                onSubmit = {(values) => { onEditSubmit(values)}}
                validationSchema = {Yup.object().shape({
                    name: Yup.string()
                        .min(2, 'Muy corto')
                        .max(50, 'Muy largo')
                        .required('Requerido')
                })}
                enableReinitialize = {true}
                >
                    {props => {
                        const {
                        values,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                        isInvalid,
                    } = props;
                    return (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="name" style={{ display: "block" }}>
                                Nombre de categoría
                                </Form.Label>
                                <Form.Control
                                id="name"
                                placeholder="Ingrese el nombre de la categoría"
                                type="text"
                                value={values.name} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button 
                            variant="light"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                            >
                                Resetear
                            </Button>{' '}


                            <Button 
                            type="submit" 
                            variant="primary"
                            >
                                Editar
                            </Button>{' '}
                        </Form>
                    );
                }}
                </Formik>
            </div>
        </Container>
    )
}

export default CategoryEdit;

