import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-topp navbar-light pads">
          <div className="d-flex flex-row align-self-center">
            <button
              type="button"
              className="navbar-toggler navbar-icn navbar-elementbtn"
            >
              <span className="fas fa-bars fa-fw navbar-element"></span>
            </button>
            <img src={require("../img/logo.png")} width="120px" alt="" />
          </div>

          <div className="collapse navbar-collapse justify-content-end">
            <div className="navbar-nav ">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <a href="#" className="nav-item nav-link">
                About
              </a>
              <a href="#" className="nav-item nav-link">
                Services
              </a>
              <a href="#" className="nav-item nav-link">
                pricing
              </a>
              <Link to="/blog" className="nav-item nav-link">
                blog
              </Link>
              <a href="#" className="nav-item nav-link" tabIndex={-1}>
                contact
              </a>
            </div>
          </div>
          <div className="ml-4 navbar-element">
            <div className="costum-btn">
              <Link to="/login" className="btn-costum">
                Masuk
              </Link>
              <i className="fa fa-user user-icon i-user"></i>
            </div>
          </div>
        </nav>
        <div className="navbarcollapze ">
          <div className=" col teest px-4 py-3">
            <div className="row justify-content-between align-items-center">
              <img src={require("../img/logo.png")} width="120px" alt="." />
              <i className="fa fa-times navbar-elementbtnn"></i>
            </div>
            <div>
              <li className="row align-items-center my-5">
                <i className=" fa fa-angle-right mr-4 ml-3"></i>
                <Link to="/" className="navDir">
                  Home
                </Link>
              </li>
              <li className="row align-items-center my-5">
                <i className=" fa fa-angle-right mr-4 ml-3"></i>
                <a className="navDir" href="#">
                  About
                </a>
              </li>
              <li className="row align-items-center my-5">
                <i className=" fa fa-angle-right mr-4 ml-3"></i>
                <a className="navDir" href="#">
                  Services
                </a>
              </li>
              <li className="row align-items-center my-5">
                <i className=" fa fa-angle-right mr-4 ml-3"></i>
                <a className="navDir" href="#">
                  Pricing
                </a>
              </li>
              <li className="row align-items-center my-5">
                <i className=" fa fa-angle-right mr-4 ml-3"></i>
                <Link to="/bllog" className="navDir">
                  Blog
                </Link>
              </li>
              <li className="row align-items-center my-5">
                <i className=" fa fa-angle-right mr-4 ml-3"></i>
                <a className="navDir" href="#">
                  Contact
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
