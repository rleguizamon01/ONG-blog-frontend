import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import VolunteersTable from './VolunteersTable'

export const Volunteers = () => {

    const [volunteers, setVolunteers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalVolunteers, setTotalVolunteers] = useState(1);
    const [perPage, setPerPage] = useState(1);

    useEffect(() => {
        fetchVolunteers(pageNumber);
    }, []);

    const fetchVolunteers = async (pageNumber = 1) => {
      setPageNumber(pageNumber)
        const url = `http://127.0.0.1:8000/api/volunteers?page=${pageNumber}`;
        const response = await axios.get(url);
        const currentVolunteers = await response.data.data;
        const total = await response.data.total;
        const perPage = await response.data.per_page;
        setVolunteers(currentVolunteers);
        setTotalVolunteers(total);
        setPerPage(perPage);
    }
    const handlePageChange=(pageNumber)=> {
        setPageNumber(pageNumber);
        fetchVolunteers(pageNumber);
    }

    return(
        <Container>
            <Row>
                
                <VolunteersTable volunteers={volunteers}/>
            </Row>

            <div className="d-flex justify-content-center mb-4">
            <Pagination
                activePage={pageNumber}
                itemsCountPerPage={perPage}   
                totalItemsCount={totalVolunteers}
                pageRangeDisplayed={5}
                onChange={(pageNumber)=>handlePageChange(pageNumber)}
                itemClass="page-item"
                linkClass="page-link"
                />                
            </div>
        </Container>
    );
};
export default Volunteers
