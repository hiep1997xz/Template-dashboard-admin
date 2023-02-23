import React, { Fragment } from "react";

import blue from "../../assets/img-cart/blue.png";
import black from "../../assets/img-cart/black.png";
import green from "../../assets/img-cart/green.png";
import red from "../../assets/img-cart/red.png";
import orange from "../../assets/img-cart/orange.png";

const ProductImages = () => {
  return (
    <Fragment>
      <img src={blue} alt="blue shoe" className="shoe show unset-img" color="blue" />
      <img src={red} alt="red shoe" className="shoe unset-img" color="red" />
      <img src={green} alt="green shoe" className="shoe unset-img" color="green" />
      <img src={orange} alt="orange shoe" className="shoe unset-img" color="orange" />
      <img src={black} alt="black shoe" className="shoe unset-img" color="black" />
    </Fragment>
  );
};

export default ProductImages;
