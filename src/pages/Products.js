import React from "react";
import { Product } from "./Productpic";
import drone from "../images/drone.jpg";
import "../styles/product.css";
import { Footer } from "./Footer";

export const Products = () => (
  <div class="Product-container">
    <div className="heading">
      <h2>OUR PRODUCTS</h2>
    </div>
    <div className="container">
      <div class="row  products">
        <Product src={drone} />
        <Product src={drone} />
        <Product src={drone} />
        <Product src={drone} />
      </div>
      <div class="row products">
        <Product src={drone} />
        <Product src={drone} />
        <Product src={drone} />
        <Product src={drone} />
      </div>
    </div>
    <Footer />
  </div>
);
