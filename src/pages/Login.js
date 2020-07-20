import React, { Component } from "react";
import { Link } from "react-router-dom";
var loadjs = require("loadjs");

class Login extends Component {
  componentWillMount() {
    loadjs([
      "./js/script.js",
      "./js/animatedpic.js, https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js",
    ]);
  }
  render() {
    return (
      <div>
        <div className="limiter mx-auto">
          <div className="container-login100 d-flex flex-row justify-content-center align-items-center">
            <div className="wrap-login shadow d-flex flex-row flex-wrap justify-content-space-between">
              <form className="login-form">
                <span className="login-form-title">Member Login</span>
                <div className="wrap-input">
                  <input
                    className="input-login"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <span className="focus-input" />
                  <span className="symbol-input">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                <div className="wrap-input">
                  <input
                    className="input-login"
                    type="password"
                    name="pass"
                    placeholder="Password"
                  />
                  <span className="focus-input" />
                  <span className="symbol-input">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div className="container-login-form-btn flex justify-content-center">
                  <button className="login-form-btn d-flex justify-content-center align-items-center">
                    Login
                  </button>
                </div>
                <div className="text-center mt-5">
                  <p className="txt1">Forgot</p>
                  <a className="txt2" href="#">
                    Username / Password?
                  </a>
                  <a
                    className="txt2 row justify-content-center align-items-center"
                    href="#"
                  >
                    <Link to="/signup"> Create your Account</Link>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </form>
              <div className="login-pic js-tilt my-auto" data-tilt>
                <img
                  src={require("../img/login.png")}
                  className="rounded-circle"
                  alt="IMG"
                />
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default Login;
