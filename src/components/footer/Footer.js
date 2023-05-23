import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">MultiMart</h1>
              </div>
            </div>
            <p className="footer-text mt-4">
              Anim sit eiusmod adipisicing adipisicing sint nisi cupidatat.
              Deserunt magna dolore nisi ullamco esse. pariatur aliquip do
              labore officia amet.
            </p>
          </Col>
          <Col lg="3" className="mb-4" md="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Category</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Mobile Phone</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className="mb-4" md="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="mb-3 footer__content ">
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>305/4, Greater Noida (201306)</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  <p>+91 9267900106</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>mohd.aman9267@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyRight">
              Copyright 2023 developed By Mohd Aman
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
