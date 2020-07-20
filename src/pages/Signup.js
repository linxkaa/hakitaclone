import React, { Component } from "react";
var loadjs = require("loadjs");

class SignUp extends Component {
  componentWillMount() {
    loadjs([
      "./js/script.js",
      "./js/animatedpic.js, https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js",
    ]);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex ">
                <img
                  className="imgbg js-tilt"
                  width="160px"
                  height="140px"
                  src={require("../img/signup.svg")}
                  alt=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>

                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputUserame"
                      className="form-control"
                      placeholder="Username"
                      required
                      autofocus
                    />
                    <label htmlFor="inputUserame">Username</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputConfirmPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputConfirmPassword">
                      Confirm password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>

                  <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2" /> Sign up with Google
                  </button>
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f mr-2" /> Sign up with
                    Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
