import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Pagination from 'react-bootstrap-4-pagination';
import VolunteersTable from './VolunteersTable'

export const Volunteers = () => {

    const [volunteers, setVolunteers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchVolunteers(pageNumber);
    }, []);

    const fetchVolunteers = async (pageNumber = 1) => {
      setPageNumber(pageNumber)
        const url = `http://127.0.0.1:8000/api/volunteers?page=${pageNumber}`;
        const response = await axios.get(url);
        const currentVolunteers = await response.data.data;
        const last_page = await response.data.last_page;
        setVolunteers(currentVolunteers);
        setTotalPages(last_page);
    }

    return(
        <Container>
            <Row>
                <VolunteersTable volunteers={volunteers}/>
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
                      fetchVolunteers(page);
                  }}
                />
            </div>
        </Container>
    );
};
export default Volunteers
