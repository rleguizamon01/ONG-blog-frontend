import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const AdminPostList = ({posts}) => {

    const handleClickDelete=(id)=> {
        deletePost(id);
        console.log(id);
    }
    const deletePost = async (id) => {
        const url = `http://127.0.0.1:8000/api/posts/${id}`;
        const response = await axios.delete(url);
        console.log(response);
    }

    const handleClickDeleteForEver=(id)=> {
        deletePostForEver(id);
        console.log(id);
    }
    const deletePostForEver = async (id) => {
        const url = `http://127.0.0.1:8000/api/posts/destroy/${id}`;
        const response = await axios.delete(url);
        console.log(response);
    }

  return (
    <div className="container">
        <div className="m-4">
            <h2>
                Listado de Posts
            </h2>

            <div className="table-responsive bg-light">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Categoria</th>
                            <th>Autor</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post =>
                        <tr key={post.id}>
                            <td>
                                <Link to={`posts/${post.id}`}>
                                    {post.title}
                                </Link>
                            </td>
                            <td>
                                {post.category.name}
                            </td>
                            <td>
                                {post.user.first_name} {post.user.last_name}
                            </td>
                            <td>
                                {post.approved_at ? "approved" : "pending"}
                            </td>
                            <td>
                                <button onClick={()=>handleClickDelete(post.id)} type="button" className="btn btn-info"><i className="fas fa-eye-slash text-white"></i></button>
                                <button onClick={()=>handleClickDeleteForEver(post.id)} type="button" className="btn btn-danger"><i className="fa fa-trash text-white"></i></button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    </div>
  );
};
export default AdminPostList