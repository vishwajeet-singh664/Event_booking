import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear;

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt=" " />
              <p>
                Experience the magic of seamless event planning with our
                innovative event booking website. Discover a world of endless
                possibilities as you effortlessly browse through a vast array of
                events, from electrifying concerts to captivating conferences.
              </p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-instagram-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Discovery</h5>
            <ListGroup className="footer_quick-links">
              {quick_links.map((intem, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to="{item.path}">{intem.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              {quick_links2.map((intem, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to="{item.path}">{intem.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title">Contact</h5>
            <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Udaipur, Rajasthan</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">dev@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">91+1234567891</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, design and develop by Team Blaze. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
