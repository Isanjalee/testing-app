/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Helmet from "../components/helmet/helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ReactPaginate from "react-paginate";

import { Container, Row, Col } from "reactstrap";

import products from "../Assets/Deatils/products";
import { ProductCard } from "../components/UI/product-card/ProductCard.jsx";

import "../styles/all.css";
import "../styles/cart-pages.css";

const all = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [productData, setProductData] = useState(products);

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 8;
  const vissitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    vissitedPage,
    vissitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50 ">
                  <option>Default</option>
                  <option value="ascending">Alphabatically, A-Z</option>
                  <option value="descending">Alphabatically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default all;
