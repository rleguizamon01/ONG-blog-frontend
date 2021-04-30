import React, {useState, useEffect} from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import PostList from './PostList'

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPosts, setTotalPosts] = useState(1);
    const [perPage, setPerPage] = useState(1);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async (pageNumber = 1) => {
        setPageNumber(pageNumber)
        const url = `http://127.0.0.1:8000/api/posts?page=${pageNumber}`;
        const response = await axios.get(url);
        const currentposts = await response.data.data;
        const total = await response.data.total;
        const perPage = await response.data.per_page;
        setPosts(currentposts);
        setTotalPosts(total);
        setPerPage(perPage);
    }
    const handlePageChange=(pageNumber)=> {
        setPageNumber(pageNumber);
        fetchPosts(pageNumber);
    }
    return(
        <Container>
            <Row>
                <PostList posts={posts}/>
            </Row>

            <div className="d-flex justify-content-center mb-4">
                <Pagination
                activePage={pageNumber}
                itemsCountPerPage={perPage}   
                totalItemsCount={totalPosts}
                pageRangeDisplayed={5}
                onChange={(pageNumber)=>handlePageChange(pageNumber)}
                itemClass="page-item"
                linkClass="page-link"
                />
            </div>
        </Container>
    );
};