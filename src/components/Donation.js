import { Formik, Field } from 'formik';
import { useHistory, Link} from 'react-router-dom';
import CategoryApi from './CategoryApi';
import * as Yup from 'yup';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert'


const Donation = () => {

    const history = useHistory();

    const onAddSubmit = async (values) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/donations/', values);
            history.push('/categories');
        }
        catch(error){
            console.log(error.response.data);
            swal("Error", "Hubo un error al darse de alta como voluntario", "error");
        }
    }

    return (
        <Container>
            <div className="m-4">
                <div className="mb-3">
                    <h3>Realizar donación</h3>
                </div>
                
                <Formik
                initialValues={{ email: "", amount: "" }}
                onSubmit = {(values) => { onAddSubmit(values)}}
                validationSchema = {Yup.object().shape({
                    email: Yup.string().email('Email inválido').required('Requerido'),
                    amount: Yup.string().required("Requerido"),
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
                                <Form.Label htmlFor="email" style={{ display: "block" }}>
                                    Email
                                </Form.Label>
                                <Form.Control
                                id="email"
                                placeholder="Ingrese el correo electrónico"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.email}
                                />

                                <Form.Control.Feedback type="invalid">
                                {errors.email}
                                </Form.Control.Feedback>

                                <Form.Label htmlFor="amount" style={{ display: "block" }}>
                                    Monto
                                </Form.Label>
                                <Form.Control
                                id="amount"
                                placeholder="Ingrese el monto"
                                type="number"
                                step="any"
                                value={values.amount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.amount}
                                />

                                <Form.Control.Feedback type="invalid">
                                {errors.amount}
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

export default Donation


