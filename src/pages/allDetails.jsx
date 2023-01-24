import React, { useState, useEffect } from "react";

import products from "../Assets/Deatils/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/helmet/helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const allDetails = () => {
  return (
    <Helmet title="Product-Details">
      <CommonSection title="Product01" />
    </Helmet>
  );
};

export default allDetails;
