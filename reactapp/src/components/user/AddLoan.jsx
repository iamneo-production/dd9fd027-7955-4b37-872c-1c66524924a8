
import React from "react";

import Navbar from "./Navbar";

import { Link } from "react-router-dom";

export default class AddLoan extends React.Component {

  render() {

    return (

<div>

        <Navbar />

        <div className="addloan_wrapper">

          <div className="addloan_form">

            <form>

              <label>Applicant name</label>

              <input type="text" id="enterName" placeholder="Name" required />

              <label>Email</label>

              <input type="email" id="enterEmail" placeholder="name@domain" required />

              <label>Applicant salary (per annum)</label>

              <input type="text" id="enterSalary" placeholder="ex: $100,000" required />

              <label>Loan amount</label>

              <input type="text" id="enterAmount" placeholder="ex: $100,000" required />

              <label for="file_type">Pick a type:</label>

              <select name="file_type" id="chooseFile">

                <option value="aadhar">Aadhar</option>

                <option value="pan">PAN</option>

                <option value="drivers_license">Driver's License</option>

              </select>

            </form>

            <form>
              <label>Mobile number</label>

              <input type="text" id="enterMobile" placeholder="Mobile number" required />

              <label>Aadhar number</label>

              <input type="text" id="enterAadharNo" placeholder="Aadhar number" required />


              <label>PAN number</label>


              <input type="text" id="enterPanNo" placeholder="PAN number" required />


              <label>Loan repayment duration</label>


              <input type="text" id="enterMonths" placeholder="ex: 8 months" required />


              <label>Documents</label> 


              <label>Select File</label> <br />

              <input type="file" name="file" onChange={(e)=>this.handleFile(e)} /> 

            </form>

          </div>

          <Link to="/user/success"><button type="submit" id="applyLoanButton">Apply Loan</button></Link>





        </div>

      </div >

);

}

}
