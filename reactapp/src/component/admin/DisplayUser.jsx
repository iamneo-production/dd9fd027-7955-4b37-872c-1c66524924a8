import React from "react";


export default class Dashboard extends React.Component {



  applicant = {

    name: ["arun", "Jenny"],

    email: ["arun@agricultureloan.com", "jenny@agricultureloan.com"],

    loan_amt: ["10,000,000", "100,000,000"],

    pan:["adegd52145","dsetc98520"],

    phonono:["9985475625","9852465826"],

    address:["hyderabad","guntur"],

    loanid:["032882123","0321552113"],

    addhaar:["yyyyyy","xxxxx"]

  };



  render() {

    return (

<div className="display_users_wrapper">

        <div className="applicants_list">

          <div className="applicant_deets">

            <p id="applicant_name">

              {this.applicant.name[0]}

            </p>

            <p>

              Applicant email: {this.applicant.email[0]}

            </p>

            <p>

            Applicant Loan amount: {this.applicant.loan_amt[0]}

            </p>

            <p>

            Applicant PAN no: {this.applicant.pan[0]}

            </p>

            <p>

            Applicant phone no: {this.applicant.phonono[0]}

            </p>

            <p>

            Applicant address: {this.applicant.address[0]}

            </p>

            <p>

            Applicant Loan id: {this.applicant.loanid[0]}

            </p>

            <p>

            Applicant addhaar: {this.applicant.addhaar[0]}

            </p>





            <button className="approve_btn">Approve</button> &nbsp;

            <button className="reject_btn">Reject</button> &nbsp;

          </div>

          <br />

          <div className="applicant_deets">

            <p id="applicant_name">

              {this.applicant.name[1]}

            </p>

            <p>

              Applicant email: {this.applicant.email[1]}

            </p>

            <p>

            Applicant Loan amount: {this.applicant.loan_amt[1]}

            </p>

            <p>


            Applicant PAN no: {this.applicant.pan[1]}

            </p>

            <p>

            Applicant phone no: {this.applicant.phonono[1]}

            </p>

            <p>

            Applicant address: {this.applicant.address[1]}

            </p>

            <p>

            Applicant Loan id: {this.applicant.loanid[1]}

            </p>

            <p>

            Applicant addhaar: {this.applicant.addhaar[1]}

            </p>



              <button className="approve_btn">Approve</button> &nbsp;

            <button className="reject_btn">Reject</button> &nbsp;

          </div>

        </div>

      </div>

);

}

}


