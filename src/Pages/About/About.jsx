import React from "react";
import "./about.scss";

import Node from "../../img/nodejs.png";
import Reactjs from "../../img/reactjs.png";
import Python from "../../img/python.png";

import Brazil from "../../img/brazil.png";
import France from "../../img/france.png";
import Japan from "../../img/japan.png";
import English from "../../img/united-kingdom.png";
import Spanish from "../../img/spain.png";

import Unity from "../../img/unity.png";
import Fl from "../../img/fl.png";
import Blender from "../../img/blender.png";

const About = () => {
  return (
    <div className="container-about">
      <div className="cards">
        <div class="slider">
          <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
          <a href="#slide-4">4</a>
          <a href="#slide-5">5</a>

          <div class="slides">
            <div id="slide-1">
              <p className="name">Paulo Lucio Zimmermann</p>
              <p>07/2003</p>
              <p>~1,75cm</p>
            </div>
            <div id="slide-2">
              <p className="name">Ciência da Computação</p>
              <p>Cruzeiro do Sul Virtual</p>
              <br />
              <p className="name">2021</p>
              <p>---------------</p>
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div id="slide-3">
              <div className="row">
                <div className="nodes">
                  <img className="img" src={Node} alt="" />
                  <p className="names">Node JS</p>
                </div>
                <div className="nodes">
                  <img className="img" src={Reactjs} alt="" />
                  <p className="names">React JS</p>
                </div>
                <div className="nodes">
                  <img className="img" src={Python} alt="" />
                  <p className="names">Python</p>
                </div>
              </div>
            </div>
            <div id="slide-4">
              <div className="row">
                <div className="nodes">
                  <img className="img" src={Brazil} alt="" />
                  <p className="names">Portuguese</p>
                </div>
                <div className="nodes">
                  <img className="img" src={English} alt="" />
                  <p className="names">English</p>
                </div>
                <div className="nodes">
                  <img className="img" src={Spanish} alt="" />
                  <p className="names">Spanish</p>
                </div>
              </div>
              <div className="row">
                <div className="nodes">
                  <img className="img" src={France} alt="" />
                  <p className="names">French</p>
                </div>
                <div className="nodes">
                  <img className="img" src={Japan} alt="" />
                  <p className="names">Japanese</p>
                </div>
              </div>
            </div>
            <div id="slide-5">
              <div className="row">
                <div className="nodes">
                  <img className="img" src={Unity} alt="" />
                  <p className="names">Unity Game</p>
                  <p className="names">Developer</p>
                </div>
                <div className="nodes">
                  <img className="img" src={Fl} alt="" />
                  <p className="names">FL Studio</p>
                </div>
                <div className="nodes">
                  <img className="img" src={Blender} alt="" />
                  <p className="names">Blender 3D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
