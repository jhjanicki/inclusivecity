import React from 'react';
import { useContext } from "react";
import { URLStateContext } from "../URLStateContext";


export const Navbar = (props)  => {
  const { language, setLanguage } = useContext(URLStateContext);

  return (
    <div class="container-fluid header_section">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
        <div className="language_logo_wrapper">
            <div className="language inline">
              <span
                onClick={setLanguage}
                id="english"
                className={language === "english" ? "active" : ""}
              >
                EN
              </span>
              <span> / </span>
              <span
                onClick={setLanguage}
                id="dutch"
                className={language === "dutch" ? "active" : ""}
              >
                NL
              </span>
            </div>
          </div>
          <div className="logo navbar-brand">
              <img src="logo1.png" />
              <img src="logo2.png" />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
               {props.children}
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}