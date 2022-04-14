import React from "react";

import Navbar from "./Navbar";

import {

  Link

} from "react-router-dom";


export default class View extends React.Component {

  render() {

    return (

<div>

        <Navbar />

        <div className="wrapper">

          <p id="track_application_text">

            Track loan

          </p>

          <label>Enter Loan ID</label>

          <input type="text" id="enterLoanId" placeholder="ID" ></input>

          <Link to="/admin/UserDetails"><button type="submit" id="trackButton">Track</button></Link>



        </div>

      </div>

);

}

}


