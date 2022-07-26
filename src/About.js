import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
import cv from "./img/Priyanshi_CV.pdf";

function About() {
//up to top btn
window.addEventListener("scroll",function(){
  const upToTop = document.querySelector("a.bottom__to__top");
  upToTop.classList.toggle("active",window.scrollY > 0)
});

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi,I'm Priyanshi Shrimali. I Completed My Graduation In Diploma
                Computer Engineering From Government Polytechnic For Girls,
                Ahmedabad In Year 2020. Now,I'm Studying In Degree Computer
                Engineering at Government Engineering College, Modasa. I Learn
                Different Things And Languages.
                <br />
                <br/>
                <b>
                  <u>My Technical Skills-</u>
                </b>
                <br />
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScripts</li>
                  <li>Reactjs</li>
                  <li>Android</li>
                </ul>
              </p>
              <div className="about__button d__flex align__items__center">
                <a href={cv}>
                  
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Contact US</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Up to top btn */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
