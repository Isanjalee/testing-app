import React, { useState, useEffect } from "react";

import Helmet from "../components/helmet/helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import contactimg from "../Assets/Images/contact1.png";

import "../styles/hero.css";
import "../styles/contact.css";

import CommonSection from "../components/UI/common-section/CommonSection";

const Contact = () => {
  return (
    <Helmet title="Contact Us">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <form className="form gap-4">
                <div className="form__group">
                  <input type="text" name="name" placeholder="Name" />
                  <br />

                  <input type="email" name="email" placeholder="Email" />
                  <br />

                  <textarea
                    rows={5}
                    type="text"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <br />

                  <div className="button">
                    <button
                      type="submit"
                      className="addTOCart__btn align-items-center"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </Col>

            <Col lg="6" md="6">
              <div className="contact__img">
                <img
                  src={contactimg}
                  alt="contact-img"
                  className="w-75 mb-3 d-flex align-items-end justify-content-center  "
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
