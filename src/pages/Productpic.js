import React from "react";
import "../styles/product.css";

export const Product = (props) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12 product">
      <img alt="" src={props.src} className="img-fluid" />
    </div>
  );
};
