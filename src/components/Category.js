import React, { useEffect, useState} from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import {Link} from "react-router-dom";
import CategoryApi from './CategoryApi';
import swal from 'sweetalert';
import Pagination from 'react-js-pagination';

const Category = () => {
    const [categories, setCategories] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [total, setTotal] = useState(0);

    const fetchCategories = (currentPage) => {
        CategoryApi.getCategories(currentPage).then(res => {
            console.log(res.data);
            setCategories(res.data.data);
            setPerPage(res.data.per_page);
            setCurrentPage(res.data.current_page);
            setTotal(res.data.total);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchCategories(0);
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
                    <Link
                    to={'/categories/edit/'+category.id}>
                        <Button variant="secondary">
                            Editar
                        </Button>
                    </Link>
                </td>
                <td>
                    <button 
                        className="btn btn-danger"
                        onClick={() => {
                            swal({
                                title: "¿Está seguro?",
                                text: (category.posts_count > 1) 
                                      ? "Borrar la categoría borrará los " + category.posts_count + " posts relacionados."
                                      : (category.posts_count) == 1
                                          ? "Borrar la categoría borrará 1 post relacionado."
                                          : "Borrará permanentemente la categoría",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                            .then((willDelete) => {
                                if(willDelete){
                                    CategoryApi.deleteCategory(category.id)
                                    .then(fetchCategories)
                                    .catch(err => {
                                        console.log(err);
                                        swal("Error", "Hubo un error al eliminar la categoría", "error");
                                    })
                                }
                            })}
                        }
                    >
                        Borrar
                    </button>
                </td>
            </tr>
        )))
    }

    return (
        <Container>
            <div className="m-4">
                <h5 className="mt-3 mb-3">Categorías</h5>

                <Link to="/categories/add">
                    <Button variant="primary" className="mb-3">
                        Crear categoría
                    </Button>
                </Link>
                
                <Table striped bordered hover responsive>
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
                </Table>
            </div>

            <div className="m-4">
                <Pagination
                    activePage = { currentPage }
                    totalItemsCount = { total }
                    itemsCountPerPage = { perPage }
                    onChange={(pageNumber) => fetchCategories(pageNumber) }
                    itemClass = "page-item"
                    linkClass = "page-link"
                />
            </div>
      </Container>
    )
}

export default Category;