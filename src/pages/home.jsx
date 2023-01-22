import React, { useState, useEffect } from "react";

import Helmet from "../components/helmet/helmet";
import { Container, Row, Col } from "reactstrap";
import HeroImg from "../Assets/images/hero.png";

import "../styles/hero.css";
import "../styles/home.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category";

import featureImage01 from "../Assets/images/service-01.png";
import featureImage02 from "../Assets/images/service-02.png";
import featureImage03 from "../Assets/images/service-03.png";

import products from "../Assets/Deatils/products";

import foodCategoryImg01 from "../Assets/images/hamburger.png";
import foodCategoryImg02 from "../Assets/images/pizza.png";
import foodCategoryImg03 from "../Assets/images/bread.png";

import { ProductCard } from "../components/UI/product-card/ProductCard";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImage01,
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, natus.",
  },
  {
    title: "Quick Delivery",
    imgUrl: featureImage02,
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, natus.",
  },
  {
    title: "Quick Delivery",
    imgUrl: featureImage03,
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, natus.",
  },
];

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [category, setCategory] = useState("ALL");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [allProducts, setAllProducts] = useState(products);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

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
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order Now<i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button>
                    <Link className="all__foods-btn" to="/all">
                      See all foods
                    </Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-roadster-line"></i>
                    </span>
                    No delivery charges
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
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

      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Order your food</h5>
              <h2 className="feature__title">Just one click</h2>
              <h2 className="feature__title">
                we will be <span>at your door!</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quae, nostrum optio dolorum perspiciatis saepe!!
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, sit.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold m-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Top Menu of This Week!!</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center  justify-content-center gap-5">
                <button
                  className="all__btn foodBtnActive"
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className=" d-flex align-items-center gap-2"
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className=" d-flex align-items-center gap-2"
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className=" d-flex align-items-center gap-2"
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default home;
