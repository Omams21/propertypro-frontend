import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Companylogo from "./Companylogo";

const Navbar = () => {
  return (
    <nav id="header">
    
      <div className="navbar-link-first-child">
        <span className="navbar-link "> <Link to="/buy">BUY</Link></span>
        <span className="navbar-link "> <Link to="/rent">RENT</Link></span>
        <span className="navbar-link ">
        <Link to="/properties">PROPERTIES</Link></span>
      </div>
      <div className = "navbar-icon">
          <i className="fa fa-bars"></i>
        </div>
      {/* <div className="companyLogo">
        <i class="fa fa-home" aria-hidden="true">
        </i>
        <span className = "name">PropertyPro</span>
      </div> */}
      <Companylogo/>
      <div className="navbar-link-second-child">
        <span className="navbar-link-1">
          <Link to="/sign-up">SIGN UP</Link>
          
        </span>
        <span className="navbar-link-1">
        <Link to="/sign-in">SIGN IN</Link>
        </span>
      </div>
      
    </nav>
  );
};



export default Navbar;
