import React, { useEffect, useState} from 'react';
import { Container, Table, Form, FormControl } from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from 'axios';
import CategoryAdd from './CategoryAdd';
import CategoryApi from './CategoryApi';


const Category = () => {
    const [categories, setCategories] = useState(null);

    const fetchCategories = () => {
        CategoryApi.getCategories().then(res => {
            console.log(res.data);
            setCategories(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    function renderCategories(){
        if(!categories){
            return (
                <tr>
                    <td colSpan="4">
                        Cargando...
                    </td>
                </tr>
            );
        }

        if(categories.length === 0){
            return (
                <tr>
                    <td colSpan="4">
                        No hay categorías
                    </td>
                </tr>
            );
        }

        console.log("Hay categorías");
        console.log(categories);
        return categories.map((category => (
            <tr key={category.id}>
                <th>{category.name}</th>
                <td>{category.posts_count}</td>
                <td>
                    <Link className="btn btn-warning"
                    to={'/categories/edit/'+category.id}>
                        Editar
                    </Link>
                </td>
                <td>
                    <button 
                        className="btn btn-danger"
                        onClick={() => {
                            CategoryApi.deleteCategory(category.id)
                            .then(fetchCategories)
                            .catch(err => {
                                alert('Error al borrar el post');
                            });
                        }}
                    >
                        Borrar
                    </button>
                </td>
            </tr>
        )))
    }

    return (
        <Container>
        <div className="d-flex justify-content-center my-4">
          <div className="col-xs-12 col-sm-11 col-md-11 col-lg-10 col-xl-10">
            <header>
              <h5 className="mt-3 mb-3">Categorías</h5>
            </header>
            {/* Create category button */}
            <Link to="/categories/add">
                <a className="btn btn-secondary btn-lg btn-block p-1" role="button">Crear categoría</a>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad de posts</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                  {renderCategories()}
                </tbody>
            </table>
            {/* Pagination buttons */}
            <div className="d-flex justify-content-center mb-4">
            </div>
          </div>
        </div>
      </Container>
    )
}

export default Category;