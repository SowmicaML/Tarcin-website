import React from "react";
import "../styles/team.css";

export const Teamcard = (props) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12 column">
      <img src={props.src} className="image-fluid" alt="" />
      <h4 className="pt-2">{props.name}</h4>
      <small>{props.designation}</small>
      <br />
      <span>
        <i
          className="fas fa-envelope-square"
          style={{ fontSize: "10px", padding: "10px" }}
        ></i>
        Email : {props.email}
      </span>
    </div>
  );
};

export const Teammember = (props) => {
  return (
    <div className="col-md-2 col-sm-4 col-xs-6 column">
      <img
        src={props.src}
        className="image-fluid"
        alt=""
        style={{ borderRadius: "50%", height: "150px", width: "150px" }}
      />
      <h6 className="pt-2">{props.name}</h6>
      <h5>{props.designation}</h5>
    </div>
  );
};
