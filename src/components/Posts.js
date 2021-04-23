import React, {useState, useEffect} from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import axios from 'axios';
import Pagination from 'react-bootstrap-4-pagination';
import PostList from './PostList'

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchPosts(pageNumber);
    }, []);

    const fetchPosts = async (pageNumber = 1) => {
        const url = `http://127.0.0.1:8000/api/posts?page=${pageNumber}`;
        const response = await axios.get(url);
        const currentposts = await response.data.data;
        const last_page = await response.data.last_page;
        console.log("fetchPosts");
        console.log("pageNumber",pageNumber);
        console.log("response",response);
        console.log("posts",currentposts);
        console.log("last_page",last_page);
        setPosts(currentposts);
        setTotalPages(last_page);
    }

    return(
        <Container>
            <Row>
                <PostList posts={posts}/>
            </Row>

            <div className="d-flex justify-content-center mb-4">
                <Pagination
                  shadow
                  size="lg"
                  totalPages={totalPages}
                  currentPage={pageNumber}
                  showMax={7}
                  prevNext
                  activeBgColor="#868686"
                  activeBorderColor="#868686"
                  onClick={(page)=>{
                      setPageNumber(page);
                      fetchPosts(page);
                  }}
                />
            </div>
        </Container>
    );
};
