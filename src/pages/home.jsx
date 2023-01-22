import React from "react";

import Helmet from "../components/helmet/helmet";
import { Container, Row, Col } from "reactstrap";
import HeroImg from "../Assets/Images/hero.png";

import "../styles/hero.css";

import { Link } from "react-router-dom";

const home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make Your ORDER!!</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait
                  <br /> Food at <span> your door!!</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis odit atque quaerat delectus praesentium omnis itaque,
                  quisquam perferendis!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order Now<i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button>
                    <Link className="all__foods-btn" to="/all">
                      See all foods
                    </Link>
                  </button>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={HeroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default home;
