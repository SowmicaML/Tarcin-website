import React from "react";

import "../styles/team.css";
import bs from "../images/girl.jpg";
import { Teamcard, Teammember } from "./Teamcard";
import { Footer } from "./Footer";

export const Team = () => {
  return (
    <div className="Teamcontainer">
      <div className="container text-center">
        <h1 className="py-3 ">MEET OUR AMAZING TEAM</h1>
        <p className="p1 ">
          This the paragraph where you can write more details about your team
        </p>
        <div className="row pt-5">
          <Teamcard
            name="ABCABC"
            email="sddsd"
            src={bs}
            designation="DESIGNATION"
          />
          <Teamcard
            name="ABCABC"
            email="sddsd"
            src={bs}
            designation="DESIGNATION"
          />
          <Teamcard
            name="ABCABC"
            email="sddsd"
            src={bs}
            designation="DESIGNATION"
          />
        </div>
      </div>

      <div className="container text-center pt-5">
        <h3>TEAM MEMBERS</h3>
        <div className="row pt-5 pb-5">
          <Teammember src={bs} name="ABCABC" designation="Designation" />
          <Teammember src={bs} name="ABCABC" designation="Designation" />
          <Teammember src={bs} name="ABCABC" designation="Designation" />
          <Teammember src={bs} name="ABCABC" designation="Designation" />
          <Teammember src={bs} name="ABCABC" designation="Designation" />
          <Teammember src={bs} name="ABCABC" designation="Designation" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
