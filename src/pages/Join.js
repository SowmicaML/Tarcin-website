import React from "react";
import "../styles/join.css";
import { Footer } from "./Footer";

export const Join = () => (
  <div className="join-page-container">
    <div className="row pt-5">
      <div className="col-md-6 col-xs-12 join">
        <h2 className="pb-5">JOIN OUR TEAM</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <a href="#link" className="btn btn-info" role="button">
          Join
        </a>
      </div>
      <div className="col-md-6 col-xs-12 pl-3 pt-2">
        <img
          className="img-fluid"
          src="https://via.placeholder.com/500x300.png?text=TEAM+PIC"
          alt=""
        />
      </div>
    </div>

    <div className="whyjoin">
      <h3>Why you should join us</h3>
      <hr />
      <div className="row details mx-auto">
        <div className="col-md-4 col-xs-12 border-left pb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
        <div className="col-md-4 col-xs-12 border-left pb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
        <div className="col-md-4 col-xs-12 border-left pb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>
    </div>
    <div className="whyjoin">
      <h3>We focus on</h3>
      <hr />
      <div className="row services mx-auto">
        <div className="col-md-4 col-xs-4 border-left pb-5">
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industryLorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
        <div className="col-md-4 col-xs-4 border-left pb-5 ">
          2.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
        <div className="col-md-4 col-xs-4 border-left pb-5">
          3.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
