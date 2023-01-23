import React from "react";
import Helmet from "../components/helmet/helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../Assets/Deatils/products";
import { ProductCard } from "../components/UI/product-card/ProductCard.jsx";

const all = () => {
  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget">
                <input type="text" placeholder="Search here" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="sorting__widget">
                <select>
                  <option>Default</option>
                  <option value="ascending">Alphabatically, A-Z</option>
                  <option value="descending">Alphabatically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {products.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default all;
