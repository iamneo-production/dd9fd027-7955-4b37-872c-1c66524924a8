/*import React from "react";


export default class UserLoandetails extends React.Component {

  
  render() {
    return (
      
    <div></div>
      
    );
  }
}*/

import React from "react";


import Navbar from "./Navbar";
import {
  Link
} from "react-router-dom";


export default class UserLoandetails extends React.Component {



  
  render() {
    return (
      <center>
    <div><Navbar />





    <p><center><strong>LOAN STATUS</strong></center></p>

    <table>
      <h5>
      <tr>
        <td>Applicant Name</td>



       <strong> <td> : </td></strong>
        <td> Arun </td>
      </tr>
      <tr>


        <td>Applicant phone No</td>
        <strong> <td> : </td></strong>
        <td>9899321654</td>
      </tr>
      <tr>


        <td>Applicant PAN no</td>
        <strong> <td> : </td></strong>
        <td>CDFES64869</td>
      </tr>
      <tr>


        <td>applicant Salary</td>
        <strong> <td> : </td></strong>
        <td>20000</td>
      </tr>
      <tr>


        <td>Applicant Addhaar</td>
        <strong> <td> : </td></strong>
        <td>702425469875</td>
      </tr>
      <tr>
        <td>Email</td>



        <strong> <td> : </td></strong>
        <td>arun@gmail.com</td>
      </tr></h5>
    </table>
    <p> <h1>Approved</h1></p>



  <Link to="/user/getProfile"><button className="back_btn">Back</button></Link>

  </div>


  </center>
  
    );
  }


}
