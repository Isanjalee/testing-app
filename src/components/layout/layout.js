import React from "react";

import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Routes from "../../routes/routers.js";

import "../../styles/header.css";

const layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default layout;
