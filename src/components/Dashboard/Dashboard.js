import React from "react";
import { Link } from "react-router-dom";
import Uploadproperty from "../../pages/Uploadproperty/Uploadproperty";
import "./dashboard.css";
// import Companylogo from "../navbar/Companylogo";

export const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <div>
        <div className="sidebar_container">
          <div className="dashboard_logo">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span className="logo_name">PropertyPro</span>
          </div>
          <div className="agent_info">
            <img className="agent_img" src="../../Images/portrait.jpg" alt="" />
            <span className="agent_details">
              <p>Kemi Adetiba</p>
              <p> Real Estate consultant</p>
            </span>
          </div>
          <div className=" dashboard_icon">
            <i className="icon" class="fa fa-th-large" aria-hidden="true"></i>
            {/* <p className=" title"> */}
            <p className="title">
              <Link to="/dashboard">Dashboard</Link>
            </p>
            {/* </p> */}
          </div>

          <div className=" dashboard_icon">
            <i className="icon" class="fa fa-building-o" aria-hidden="true"></i>
            <p className="title">
              <Link to="/agent/properties">My Properties</Link>
            </p>
          </div>

          <div className="dashboard_icon">
            <i className="icon" class="fa fa-upload" aria-hidden="true"></i>
            <p className="title">
              <Link to="/post-property">Post a Property</Link>
            </p>
          </div>

          <div className="dashboard_icon">
            <i
              className="icon"
              class="fa fa-user-circle"
              aria-hidden="true"
            ></i>
            <p className="title"> Profile </p>
          </div>

          <div className="dashboard_icon">
            <i className="icon" class="fa fa-sign-out" aria-hidden="true"></i>
            <p className="title">
              <Link to="/">Sign Out</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="right-container">
        <p className="header-tag"> Dashboard</p>
        <div className="welcome-box">
          <p className="welcome-tag"> Welcome back, Kemi </p>
         
        </div>

        <div className="New-application-box">
          <img src="form-icons.png" alt="form" />
        </div>
      </div>

    </div>
  );
};

export const PostProperty = () => {
  return (
    <>
      <Uploadproperty />
    </>
  );
};
