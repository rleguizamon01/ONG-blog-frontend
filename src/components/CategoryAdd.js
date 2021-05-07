import { Formik, Field } from 'formik';
import { useHistory, Link} from 'react-router-dom';
import CategoryApi from './CategoryApi';
import * as Yup from 'yup';
import { Container, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert'


const CategoryAdd = () => {

    const history = useHistory();

    const onAddSubmit = async (values) => {
        try {
            await CategoryApi.addCategory(values);
            history.push('/categories');
        }
        catch(error){
            console.log(error.response.data);
            swal("Error", "Hubo un error al ingresar la categoría", "error");
        }
    }

    return (
        <Container>
            <div className="m-4">
            <Link to="/categories">
                    <i className="fa fa-arrow-left mb-4"></i>
                </Link>

                <h5 className="mb-4">Agregar categoría</h5>

                <Formik
                initialValues={{ name: "" }}
                onSubmit = {(values) => { onAddSubmit(values)}}
                validationSchema = {Yup.object().shape({
                    name: Yup.string()
                        .min(2, 'Muy corto')
                        .max(50, 'Muy largo')
                        .required('Requerido')
                })}
                >
                    {props => {
                        const {
                        values,
                        touched,
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
                                Ingresar
                            </Button>{' '}
                        </Form>
                    );
                }}
                </Formik>
            </div>
        </Container>
    )
}

export default CategoryAdd;

