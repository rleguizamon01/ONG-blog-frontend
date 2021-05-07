import react, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Category from './Category';
import CategoryApi from './CategoryApi';

const CategoryAdd = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await CategoryApi.addCategory({
                name
            })
            history.push('/');
        }
        catch {
            alert('Error al agregar post');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center my-4 py-4">
                <div className="col-xs-12 col-sm-10 col-md-10 col-lg-8 col-xl-6">
                    <form action method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Nombre de categoría</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" name="name" 
                            placeholder="Nombre" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            defaultValue 
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={onAddSubmit} disabled={loading}> {loading ? 'Cargando...' : 'Ingresar'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CategoryAdd;

