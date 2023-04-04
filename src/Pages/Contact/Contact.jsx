import React from "react";
import "./contact.scss";

import Git from "../../img/github.png";
import Insta from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import Gmail from "../../img/gmail.png";

const Contact = () => {
  return (
    <div className="containerContact">
      <div className="list">
        <ul>
          <li>
            <img src={Git} alt="" />
            <p>
              <a href="https://github.com/mutantDev-LP">GitHub</a>
            </p>
          </li>
          <li>
            <img src={Insta} alt="" />
            <p>
              <a href="https://www.instagram.com/lp.vinci">Instagram</a>
            </p>
          </li>
          <li>
            <img src={LinkedIn} alt="" />
            <p>
              <a href="https://www.linkedin.com/in/paulo-lucio-1ab311236">
                LinkedIn
              </a>
            </p>
          </li>
          <li>
            <img src={Gmail} alt="" />
            <p>
              <a href="mailto:plsmartins10@gmail.com?subject=Insira-O-Assunto">
                E-mail
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
