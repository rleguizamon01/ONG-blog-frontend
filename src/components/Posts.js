import React from 'react';

export const Posts = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="card col-xl-6 border-0 mb-5 pr-5 pl-5">
                    <div className="card-body">
                         {/*Photo*/}
                        <a href="#"><img src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="card-img-top mb-3"></img></a>
                         {/*Title*/}
                        <a href="{{ route('posts.show', $post->id) }}" className="text-decoration-none">
                            <h5 className="card-title">Titulo</h5>
                        </a>
                        <div className="d-flex justify-content-between mt-2 mb-2">
                            {/* Date*/}
                            <div className="text-uppercase text-muted font-monospace">
                                Fecha de creacion
                            </div>
                             {/*Category*/}
                            <div className="text-capitalize text-muted">
                                Categoria: categoria
                            </div>
                        </div>
                         {/*Author*/}
                        <p className="card-text text-muted fw-bold">Nombre autor</p>
                        </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">links</div>
        </div>
    );
};