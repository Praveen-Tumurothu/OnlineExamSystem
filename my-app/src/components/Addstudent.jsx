import React from "react";
import axios from "axios";
import "./CSS/NewStudent.css";
import Joi from "joi-browser";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";

class Addstudent extends React.Component {
  state = {
    student: {
      email: "",
      firstName: "",
      gender: "",
      lastName: "",
      mobileNo: "",
      password: "",
      username: "",
    },
    errors: {},
    ErrMsg: "",
  };

  schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(8).required().label("Password"),
    firstName: Joi.string().min(3).required().label("First Name"),
    lastName: Joi.string().min(3).required().label("Last Name"),
    gender: Joi.string().required(),
    username: Joi.string().min(3).required().label("User Name"),
    mobileNo: Joi.string().min(10).required().label("Mobile Number"),
  };

  validate = () => {
    const errors = {};
    const { error } = Joi.validate(this.state.student, this.schema, {
      //return error Object --> error (attribute) --> details List each element contains {message, path, length} etc..
      abortEarly: false,
    });

    if (error)
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  changeHandler = (event) => {
    const student = { ...this.state.student };
    student[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ student: student });
  };

  submitHandler = (event) => {
    event.preventDefault();
    //console.log(this.state.student);
    const errors = this.validate();
    console.log("Errors...");
    console.log(errors);
    this.setState({ errors: this.validate() });
    axios
      .post("http://localhost:8080/student/newRegister", this.state.student)
      .then((res) => {
        this.props.history.push("/Studentlogin");
        //window.alert("You are Registration is Successfull!");
      })
      .catch((err) => {
        alert(err.response.data.message);
        this.setState({ ErrMsg: err.response.data.details });
      });
  };

  render() {
    return (
      <main className="bgimg">
        <div className="wrapp rounded bg-white">
          <div className="h2">Student Registration</div>
          {this.state.ErrMsg && (
            <Alert severity="error">{this.state.ErrMsg}</Alert>
          )}
          <form onSubmit={this.submitHandler}>
            <div className="form">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={this.state.student.firstName}
                    onChange={this.changeHandler}
                  />
                  {this.state.errors && (
                    <Typography variant="caption">
                      {this.state.errors.firstName}
                    </Typography>
                  )}
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={this.state.student.lastName}
                    onChange={this.changeHandler}
                  />
                  {this.state.errors && (
                    <Typography variant="caption">
                      {this.state.errors.lastName}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatorygender text-md-start">
                    Gender
                  </label>
                  <div className="d-flex mt-2">
                    <label className="option">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={this.changeHandler}
                      />
                      Male
                      <span className="checkmark"></span>
                    </label>
                    <label className="option ms-4">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={this.changeHandler}
                      />
                      Female <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobileNo"
                    value={this.state.student.mobileNo}
                    onChange={this.changeHandler}
                  />
                  {this.state.errors && (
                    <Typography variant="caption">
                      {this.state.errors.mobileNo}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="d-flex flex-column col-md-6 mt-md-0 mt-3">
                  <label for="email" className="mandatory text-md-start">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    name="username"
                    value={this.state.student.username}
                    onChange={this.changeHandler}
                  />
                  {this.state.errors && (
                    <Typography variant="caption">
                      {this.state.errors.username}
                    </Typography>
                  )}
                </div>
                <div className="d-flex flex-column col-md-6 mt-md-0 mt-3">
                  <label for="email" className="mandatory text-md-start">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={this.state.student.email}
                    onChange={this.changeHandler}
                  />
                  {this.state.errors && (
                    <Typography variant="caption">
                      {this.state.errors.email}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">Password </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.student.password}
                    onChange={this.changeHandler}
                  />
                  {this.state.errors && (
                    <Typography variant="caption">
                      {this.state.errors.password}
                    </Typography>
                  )}
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">Confirm Password </label>
                  <input type="password" className="form-control" />
                </div>
              </div>
              <p class="loginhere">
                Have already an account ? &nbsp;
                <a href="/StudentLogin" class="loginhere-link">
                  Login here
                </a>
              </p>
              <button className="btn btn-primary mt-3">Register</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Addstudent;
