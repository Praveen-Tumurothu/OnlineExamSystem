import axios from "axios";
import React, { Component } from "react";
import { Typography, Button, Grid, TextField, Box } from "@mui/material";
import AdminAppBar from "./AdminNavbar";

class ReleaseTestByEidSid extends React.Component {
  state = {
    release: { enrollmentId: "", studentId: "" },
    enrollment: [],
    students: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/admin/getEnrollments")
      .then((response) => {
        console.log(response);
        this.setState({ enrollment: response.data });
        console.log(this.state.enrollment);
      })
      .catch((error) => alert(error.response.data.message));

    axios
      .get("http://localhost:8080/admin/getStudents")
      .then((response) => {
        console.log(response);
        this.setState({ students: response.data });
        console.log(this.state.students);
      })
      .catch((error) => alert(error.response.data.message));
  }

  handleChange = (event) => {
    const es = { ...this.state.release };
    es[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ release: es });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const obj = {
      enrollmentId: this.state.release.enrollmentId,
      studentId: this.state.release.studentId,
    };
    console.log(this.state.release);
    axios
      .put(
        `http://localhost:8080/admin/releaseAllTestResultForStudent/${obj.studentId}/${obj.enrollmentId}`
      )
      .then((res) => {
        console.log(res.data);
        this.props.history.push({
          pathname: "/controls",
          state: {
            response: "true",
          },
        });
        alert("Results are Announced...");
      })
      .catch((error) => alert(error.response.data.message));
  };

  render() {
    return (
      <div>
        <AdminAppBar />
        <Typography variant="h4" margin="center" marginTop="20px">
          Release Test Results for student by student ID and Enrollment ID
        </Typography>
        <Grid container>
          <Grid item xs={5} style={{ margin: "center" }}></Grid>

          <form
            onSubmit={this.handleSubmit}
            style={{
              border: "5px solid blue",
              padding: "60px",
              margin: "20px",
            }}
          >
            <div className="mb-3">
              <label for="exampleInputEnrollmentId" className="form-label">
                EnrollmentId
              </label>
              <select
                className="form-control"
                id="exampleInputEnrollmentId"
                value={this.state.release.enrollmentId}
                name="enrollmentId"
                onChange={this.handleChange}
              >
                <option selected>select</option>
                {this.state.enrollment.map((opt) => (
                  <option value={opt.enrollmentId}>{opt.enrollmentId}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label for="exampleInputStudentId" className="form-label">
                StudentId
              </label>
              <select
                className="form-control"
                id="exampleInputStudentId"
                value={this.state.release.studentId}
                name="studentId"
                onChange={this.handleChange}
              >
                <option selected>select</option>
                {this.state.students.map((opt) => (
                  <option value={opt.studentId}>{opt.studentId}</option>
                ))}
              </select>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Grid>
      </div>
    );
  }
}

export default ReleaseTestByEidSid;
