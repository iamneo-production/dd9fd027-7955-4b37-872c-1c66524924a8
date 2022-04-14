import React from "react";
import Navbar from "./Navbar";

export default class ViewProfile extends React.Component {
  render() {
    return (
      <div>
    <Navbar />
        <div className="wrapper">
          <p id="profile_info_text"><h1>
            Profile information
         </h1> </p>
          <div className="profiles_content"><center>
          <table>
      <h5>
      <tr>
        <td>Applicant Name</td>
      
       <strong> <td> : </td></strong>
        <td> Arun </td>
      </tr>
      <tr>
        <td> Mobile No</td>
        <strong> <td> : </td></strong>
        <td>9899321654</td>
      </tr>
      <tr>
        <td>Address</td>
        <strong> <td> : </td></strong>
        <td>Hyderabad </td>
      </tr>
      <tr>
        <td>Loan Id</td>
        <strong> <td> : </td></strong>
        <td>032882123</td>
      </tr>
      <tr>
        <td>Monthly Emi</td>
        <strong> <td> : </td></strong>
        <td>2000</td>
      </tr>
      <tr>
        <td>Email</td>
        <strong> <td> : </td></strong>
        <td>arun@gmail.com</td>
      </tr></h5>
    </table></center>

          </div>
        </div>
      </div>
    );
  }
}
