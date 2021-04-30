import React from 'react';
import {Link} from "react-router-dom";

const PostList = ({posts}) => {

  return (
    <div className="container">
      {posts.map(post =>

        <div className="row" key={post.id}>
          <div className="card col-xl-6 border-0 mb-5 pr-5 pl-5">
            <div className="card-body">
              {/* <!-- Photo --> */}
              <Link to={`posts/${post.id}`}>
                <img src={post.photo} className="card-img-top mb-3"/>
              </Link>
              {/* <!-- Title --> */}
              <Link to={`posts/${post.id}`} className="text-decoration-none">
                <h5 className="card-title"> {post.title}</h5>
              </Link>
              <div className="d-flex justify-content-between mt-2 mb-2">
                <div className="text-uppercase text-muted font-monospace">
                  {post.created_at}
                </div>
                <div className="text-capitalize text-muted">
                  {post.category.name}
                </div>
              </div>
              <p className="card-text text-muted fw-bold"> {post.user.first_name} {post.user.last_name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PostList
