import React from "react";
import { Card } from "./CardUI";
import "../styles/blog.css";
import { Footer } from "./Footer";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

export const Blogs = () => {
  return (
    <div id="blog-sec">
      <div className="container">
        <h1 className="main-heading">READ OUR BLOGS</h1>
        <p className="para">Read our latest news and updates </p>
        <div className=" row blog-pics">
          <Card
            src={img1}
            heading="title1"
            date="15 May 2020"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          />
          <Card
            src={img2}
            heading="title2"
            date="15 June 2020"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          />
          <Card
            src={img3}
            heading="title3"
            date="15 April 2020"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
