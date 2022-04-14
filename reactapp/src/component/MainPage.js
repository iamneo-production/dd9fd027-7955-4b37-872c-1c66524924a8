import React from "react";

import {

  Link

} from "react-router-dom";



export default class MainPage extends React.Component {

  render() {

    return (

<div align="center">

          <h2>Agricultural Loan</h2>

          <h4>Logins</h4>

          <Link to="/user/Login"><button type="submit" id="loginButton">User Login</button></Link>

          <Link to="/admin/Login"><button type="submit" id="loginButton">Admin Login</button></Link> 

      </div>

);

}

}


