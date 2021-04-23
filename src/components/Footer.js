import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <Row>
        <Col md={8}>
          <div className="logo">
            <h6 className="text-white">ONG TEAM</h6>
          </div>
          <div className="contact-details">
            <p>53 Broadway, Broklyn, NY 11249</p>
            <p>Phone: (020) 123 456 789</p>
            <p>Email: Info@Company.com</p>
            <ul className="social-menu">
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-behance"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="menus d-flex">
            <ul className="list-unstyled">
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/volunteers/create">Volunteers</Link></li>
              <li><Link to="/subscribers/create">Subscribers</Link></li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="copyrights">
        <Row>
          <Col md={6}>
            <p>&copy; 2017. All rights reserved. Your great site.</p>
          </Col>
          <Col md={6} className="text-right">
            <p>Template By <a href="https://bootstrapious.com/p/bootstrap-carousel"
                              className="text-white">Bootstrapious</a>
              {/* <!-- Please do not remove the backlink to Bootstrap Temple unless you purchase an attribution-free license @ Bootstrap Temple or support us at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :)                         --> */}
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  )
}
