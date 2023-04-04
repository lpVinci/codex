import React from "react";
import "./home.scss";
import Think from "../../img/think.png";
import Create from "../../img/create.png";
import Code from "../../img/code.png";

const Home = () => {
  return (
    <div className="containerHome">
      <div className="title">
        <div className="title-div">
          <h1>CODEX</h1>
        </div>
      </div>
      <div className="points">
        <ul>
          <li className="think">
            <img src={Think} alt="" className="think-img" />
            <p className="long">Think</p>
            <p>Any idea?</p>
          </li>
          <li className="create">
            <img src={Create} alt="" className="create-img" />
            <p className="long">Sketch</p>
            <p>Put it on paper</p>
          </li>
          <li className="code">
            <img src={Code} alt="" className="code-img" />
            <p className="long">Code</p>
            <p>Let's start building</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
