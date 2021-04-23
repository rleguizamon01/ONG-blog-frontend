import React from 'react';

const PostList = ({posts}) => {

    return(
        <div className="container">
            {posts.map(post => 

                <div className="row" key={post.id}>
                    <div className="card col-xl-6 border-0 mb-5 pr-5 pl-5">
                        <div className="card-body">
                            {/* <!-- Photo --> */}
                            <a href="posts/show/{post.id}">
                                <img src={ post.photo } className="card-img-top mb-3"/>
                            </a>
                            {/* <!-- Title --> */}
                            <a href="posts/show/{post.id}" className="text-decoration-none">
                            <h5 className="card-title"> { post.id }</h5>
                                <h5 className="card-title"> { post.title }</h5>
                            </a>
                            <div className="d-flex justify-content-between mt-2 mb-2">
                                {/* <!-- Date --> */}
                                <div className="text-uppercase text-muted font-monospace">
                                {post.created_at}
                                </div>
                                {/* <!-- Category --> */}
                                <div className="text-capitalize text-muted">
                                    { post.category.name }
                                </div>
                            </div>
                            {/* <!-- Author --> */}
                            <p className="card-text text-muted fw-bold"> { post.user.first_name } { post.user.last_name }</p>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};
export default PostList