import React from "react";

import { Link } from "react-router-dom";

export default class Dashboard extends React.Component {

  render() {

    return (

<div>

        <header className="navbar">

          <div className="navbar__title navbar__item">Agriculture Loan</div>

          <div className="navbar__item" id="adminAppliedLoans">

            <Link to="/admin/getAllLoans">Applied Loan</Link>

          </div>

          <div className="navbar__item" id="AdminLoanDetails">

            <Link to="/admin/ViewuserDetails">Loan Details</Link>

          </div>

          <div className="navbar__item" id="Repayment Schedule">

            <Link to="/admin/generateSchedule">Repaymemnt Schedule</Link>

          </div>

          <div className="navbar__item" id="logout">

            <Link to="/">Logout</Link>

          </div>

        </header>

      </div>

);

}

}
