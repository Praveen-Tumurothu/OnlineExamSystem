import React, { Component } from "react";
import axios from "axios";
import "./CSS/UpdateStudent.css";

class Updatestudent extends React.Component {
  state = {
    studentDTO: {
      email: null,
      firstName: null,
      gender: null,
      lastName: null,
      mobileNo: null,
      password: null,
      studentId: null,
      username: null,
    },
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/student/${this.props.location.state[0]}`)
      .then((res) => {
        console.log(res);
        const student = { ...this.state.studentDTO };
        student.email = res.data.email;
        student.firstName = res.data.firstName;
        student.gender = res.data.gender;
        student.lastName = res.data.lastName;
        student.mobileNo = res.data.mobileNo;
        student.password = res.data.password;
        student.username = res.data.username;
        // console.log(res.data);
        console.log(student);
        this.setState({ studentDTO: student });
      })
      .catch((error) => alert(error.response.data.message));
  }

  changeHandler = (event) => {
    const student = { ...this.state.studentDTO };
    student[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ studentDTO: student });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.studentDTO);
    axios
      .put("http://localhost:8080/student/updateStudent", this.state.studentDTO)
      .then((res) => {
        this.props.history.push({
          pathname: "/student/studentPage",
          state: this.props.location.state[0],
        });
        window.alert("Your Details are Updated!");
      })
      .catch((error) => alert(error.response.data.message));
  };

  render() {
    return (
      <main className="bgimg1">
        <div className="wrapp rounded bg-white">
          <div className="h3">Update Student Details</div>
          <form onSubmit={this.submitHandler}>
            <div className="form">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={this.state.studentDTO.firstName}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={this.state.studentDTO.lastName}
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatorygender1 text-md-start">
                    Gender
                  </label>
                  <div className="d-flex mt-2">
                    <label className="option">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.studentDTO.gender === "Male"}
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
                        checked={this.state.studentDTO.gender === "Female"}
                        onChange={this.changeHandler}
                      />
                      Female <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobileNo"
                    value={this.state.studentDTO.mobileNo}
                    onChange={this.changeHandler}
                  />
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
                    value={this.state.studentDTO.username}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="d-flex flex-column col-md-6 mt-md-0 mt-3">
                  <label for="email" className=" text-md-start">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={this.state.studentDTO.email}
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-md-0 mt-3">
                  <label className="mandatory">Password </label>
                  <input
                    type="password"
                    required
                    className="form-control"
                    name="password"
                    value={this.state.studentDTO.password}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <button className="btn btn-primary mt-3">Update</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Updatestudent;
