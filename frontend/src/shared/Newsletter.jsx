import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Subscribe now to get useful travelling information. </h2>
              <div className="newsletter_input">
                <input type="email" placeholder="Enter you email" />
                <button className="btn newsletter_btn">Subscibe</button>
              </div>

              <p>
                Never miss out on the hottest events in town! Subscribe to our
                mailing list and be the first to know about exclusive pre-sales,
                early bird discounts, and upcoming events that match your
                interests. Sign up today and let the excitement come to you!
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="newletter_img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
