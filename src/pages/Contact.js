import React from "react";
import Form from "./Form";
import "../styles/contact.css";
import { Footer } from "./Footer";

export const Contact = () => {
  return (
    <div id="contact-section">
      <div className="container md-5">
        <div className=" row contact-form">
          <div className="col-lg-4 contact-details">
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span className="form-info">123 Address of the company</span>
            </p>

            <p>
              <i className="fas fa-phone-alt"></i>
              <span className="form-info"> +91 1234567998</span>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <span className="form-info"> example@gmail.com</span>
            </p>
          </div>
          <div className="col-lg-8 p-5">
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
