import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Pagination from "react-bootstrap-4-pagination";

const UsersList = () => {
    const [data,setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    // Get Users
    useEffect(() => {
        fetchUsers();
    })
    const fetchUsers=async()=>{
        await axios.get('http://127.0.0.1:8000/api/users')
            .then(res =>setData(res.data))
            .catch(err => console.log(err))
            }
    // const fetchPosts = async (pageNumber = 1) => {
    //     const response = await axios.get(url);
    //     const currentposts = await response.data.data;
    //     const last_page = await response.data.last_page;
    //     setPosts(currentposts);
    //     setTotalPages(last_page);
    // }
            // Delete user
    const deleteUser = async (userDetails) => {
         await axios.delete('http://127.0.0.1:8000/api/users/'+userDetails.id)
            .then(res => res.data)
             .catch(err => console.log(err))
    }
    return (
        <div>
    <Table striped bordered hover size="sm">
        <thead>
        <tr>
            <th>#</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        { data.map(user=>(
            <tr>
                <td>{user.id}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td><Button
                    onClick={() => {setModalShow(true)
                        setUserDetails(user)}}
                    variant="info">Ver detalles</Button>
                    <Button variant="danger" onClick={() => {setModalDelete(true)
                        setUserDetails(user)}}> Borrar</Button></td>
            </tr>
        ))}
        </tbody>
    </Table>
            {/*Modal Details*/}
            <Modal size="lg" show={modalShow}
                onHide={() => setModalShow(false)}
                centered={true} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Detalles del usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Nombre: {userDetails.first_name}</p>
                    <p>Apellido: {userDetails.last_name}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>Tipo de usuario: {userDetails.role}</p>
                </Modal.Body>
            </Modal>
            {/*Modal delete*/}
            <Modal size="sm" show={modalDelete}
                onHide={() => setModalDelete(false)}
                centered={true} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Eliminar usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Desea eliminar al usuario: {userDetails.first_name} {userDetails.last_name}</p>
                    <Button variant="danger" onClick={()=> {
                        deleteUser(userDetails);
                        setModalDelete(false)}}>Borrar</Button>
                </Modal.Body>
            </Modal>
    </div>
    )
}
export default UsersList;

