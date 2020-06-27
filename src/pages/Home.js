import React from "react";
import "../styles/style.css";
import bgvideo from "../videos/bgvideo.mp4";
import bg from "../videos/poster.PNG";

export const Home = () => (
  <header className="v-header container">
    <div className="fullscreen-video-wrap">
      <video poster={bg} autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
    </div>
    <div className="row mx-auto content">
      <div className="col text-center">
        <h1>TARCIN ROBOTICS</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
        <div id="home-btn">
          <a href="/products" className="btn btn-general" role="button">
            Explore our products
          </a>
        </div>
      </div>
    </div>
  </header>
);
