import React, {Component} from "react";


import './Review.css';


import {


    Link

} from "react-router-dom";


export default class Review extends Component {



    render() {


        return (

<div className="container" align="center">


                <h2 >Review</h2>


                <textarea


placeholder="What's your experience?"


/>


                <br />


                <button onClick={()=>{alert("Review submitted successfully")}}>Submit</button>

                <br />

                <Link to="/user/getProfile"><button type="submit" id="loginButton">Back</button></Link>

            </div>

)

}

}
