import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImage01 from "../../../Assets/images/category-01.png";
import categoryImage02 from "../../../Assets/images/category-02.png";
import categoryImage03 from "../../../Assets/images/category-03.png";
import categoryImage04 from "../../../Assets/images/category-04.png";

import "../../../styles/categorey.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImage01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImage02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImage03,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImage04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
            <div className="category__item d-flex align-items-center gap-3 ">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
