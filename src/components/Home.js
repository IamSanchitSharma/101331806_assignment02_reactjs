import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container text-danger">
        <br/>
        <h2>Welcome to Sanchit Sharma's Assignment 02: Employee Management System</h2>
        <Link to={"/signUp"} className="btn btn-outline-success w-25" style={{margin:"20px 30px"}}>Signup</Link>
        <Link to={"/logIn"} className="btn btn-outline-primary w-25" style={{margin:"10px 20px"}}>Login</Link>
      </div>
    );
 }
}