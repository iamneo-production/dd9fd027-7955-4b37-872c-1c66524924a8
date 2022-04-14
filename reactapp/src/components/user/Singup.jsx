import React from "react";

import {

  Link

} from "react-router-dom";


export default class Signup extends React.Component {



  state = {

    username : "",

    email : "",


    mobileNumber : "",

    password : "",

    confirmPassword : "",

    errors : {}

  }


  
  onChange = (e) => {
  
    this.setState({[e.target.name] : e.target.value});
  
  }


  
  formValidation = () => {
  
    const {username, email, mobileNumber, password, confirmPassword} = this.state;
  
    let isValid = true;
  
    const errors = {};
  
    if(username.trim().length > 20 ){
  
      errors.usernameLength ="Username can't be more than 20 characters";
  
      isValid=false;
  
    }
  
    if(mobileNumber.trim().length <10){
  
      errors.mobileNumberLength ="Mobile number must be 10";
  
      isValid=false;
  
    }
  
    if(mobileNumber.trim().length >10){
  
      errors.mobileNumberLength ="Mobile number must be 10";
  
      isValid=false;
  
    }
  
    if(password.trim().length < 6){
  
      errors.passwordLength ="Password must be length 8 or higher";
  
      isValid=false;
  
    }
  
    if(password!==confirmPassword){
  
      errors.passwordCheck ="Password and confirm password should be same";
  
      isValid=false;
  
    }
  
    if(!email.includes('@gmail.com')){
  
      errors.emailCheck="Invalid email";
  
    }
  
    this.setState({errors});
  
    return isValid;
  
  }


  
  onSubmit = (e) => {
  
    e.preventDefault();
  
    const isValid = this.formValidation();
  
  }

  render() {
 
    const {username, email, mobileNumber, password, confirmPassword, errors}= this.state;
 
    return (
 
 <div className="wrapper">
 
        <div className="squeeze_wrapper">
 
          <div className="squeeze_header">
 
            <h2 id="main_title">
 
              <Link to="/">Agriculture Loan</Link>
            </h2>

          </div>

          <div className="squeeze_form">

            <div className="register">

              <form onSubmit={this.onSubmit}>

                <h4 id="register_">Register</h4>

                <label>Enter admin/user</label>

                <input type="text" id="admin/user" placeholder="Admin/User" onChange={this.onChange} required />

                <label>Name</label>

                <input type="text" id="username" value={username} name="username" placeholder="Username" onChange={this.onChange} required />

                <label>Email</label>

                <input type="email" id="email" value={email} name="email" placeholder="Email" onChange={this.onChange} required />



                <label>Mobile number</label>


                <input type="text" id="mobileNumber" value={mobileNumber} name="mobileNumber" placeholder="Mobile number" onChange={this.onChange} required />

                <label>Password</label>

                <input type="password" id="password" value={password} name="password" placeholder="Password" onChange={this.onChange} required />


                <label>Confirm password</label>


                <input type="password" id="confirmPassword" value={confirmPassword} name="confirmPassword" placeholder="Confirm password" onChange={this.onChange} required />

                <button type="submit" id="submitButton" onClick={()=>{alert("Registered successfully")}}>Register</button>

                {Object.keys(errors).map((key)=>{


return <div style={{color : "red"}}key={key}>{errors[key]}</div>

})}

              </form>

            </div>

            <div className="not_a">

              <p>

                Already a user? &nbsp;

                <Link to="/user/login">Login</Link>


              </p>

            </div>

          </div>

        </div>

      </div>

);

}

}
