import React from "react";

import {

  Link

} from "react-router-dom";


export default class Login extends React.Component {

  render() {

    return (

<div className="wrapper">

        <div className="squeeze_wrapper">

          <div className="squeeze_header">

            <h2 id="main_title">

              <Link to="/">Agriculture Loan</Link>

            </h2>

          </div>

          <div className="squeeze_form">

            <div className="login">

              <form>

                <h4 id="login_">Login</h4>

                <label>Email</label>

                <input type="email" id="email" placeholder="name@domain" className="email"  required/>

                <label>Password</label>

                <input type="password" id="password" placeholder="Password" required />

                <Link to="/admin/getAllLoans"><button type="submit" id="loginButton">Login</button></Link>

              </form>

            </div>

            <div className="not_a">

              <p>

                Signup here: &nbsp;

                <Link to="/user/signup">Signup</Link>

              </p>

            </div>

          </div>

        </div>

      </div>

);

}

}
