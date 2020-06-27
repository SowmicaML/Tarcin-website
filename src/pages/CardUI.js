import React from "react";
import "../styles/blog.css";

export const Card = (props) => {
  return (
    <div className=" col-lg-4 main-div">
      <img src={props.src} width="90%;" height="250px;" />
      <div className="blog-head">
        <p>
          <i
            className="fa fa-long-arrow-right"
            style={{ fontSize: "20px", color: "red" }}
          ></i>
          {props.heading}
        </p>
        <h5 className="blog-date">{props.date}</h5>
        <br />
        <br />
        <h6 className="blog-data">{props.description}..</h6>
        <button className="blog-btn">Read More..</button>
      </div>
    </div>
  );
};
