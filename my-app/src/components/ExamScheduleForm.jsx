import React, { Component } from "react";
import axios from "axios";
import { Typography, Grid } from "@mui/material";
import AdminAppBar from "./AdminNavbar";

class ScheduleForm extends React.Component {
  state = {
    schedule: {
      studentId: "",
      dateOfExam: "",
      enrollmentId: "",
      examDuration: "",
      testPaperCode: "",
    },

    enrollments: [],
    testpaper: [],
    students: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/admin/getEnrollments")
      .then((response) => {
        console.log(response);
        this.setState({ enrollments: response.data });
        console.log(this.state.enrollments);
      })
      .catch((error) => alert(error.response.data.message));

    axios
      .get("http://localhost:8080/admin/getAllTestPapers")
      .then((response) => {
        console.log(response);
        this.setState({ testpaper: response.data });
        console.log(this.state.testpaper);
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
    const student = { ...this.state.schedule }; // copying student object
    student[event.target.name] = event.target.value; // student[fullName] = "ab"
    //student.fullName = "ab";
    //student[fullName]="ab";
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ schedule: student });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const enrollments = {
      studentId: this.state.schedule.studentId,
      testPaperCode: this.state.schedule.testPaperCode,
      enrollmentId: this.state.schedule.enrollmentId,
      dateOfExam: this.state.schedule.dateOfExam,
      examDuration: this.state.schedule.examDuration,
    };
    console.log(enrollments);

    console.log(this.state.schedule);
    axios
      .get(
        `http://localhost:8080/admin/scheduleExamForStudent/${enrollments.studentId}/${enrollments.enrollmentId}/${enrollments.testPaperCode}/${enrollments.dateOfExam}/${enrollments.examDuration}`
      )
      .then((res) => {
        this.props.history.push({
          pathname: "/controls",
          state: {
            response: "true",
          },
        });
      })
      .catch((err) => alert(err.response.data.message));
  };

  render() {
    return (
      <div>
        <AdminAppBar />
        <Typography variant="h4" margin="center" marginTop="20px">
          Schedule Exam For Student
        </Typography>
        <Grid container>
          <Grid item xs={5} style={{ margin: "center" }}></Grid>
          <form
            onSubmit={this.handleSubmit}
            style={{
              border: "1px solid blue",
              padding: "15px",
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
                value={this.state.schedule.enrollmentId}
                name="enrollmentId"
                onChange={this.handleChange}
              >
                <option selected>select-!-</option>
                {this.state.enrollments.map((opt) => (
                  <option value={opt.enrollmentId}>{opt.enrollmentId}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputExamDuration" className="form-label">
                ExamDuration
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputExamDuration"
                value={this.state.schedule.examDuration}
                name="examDuration"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputDateofexam" className="form-label">
                LocalDateTime locDateTime
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleInputdateofexam"
                value={this.state.schedule.dateOfExam}
                name="dateOfExam"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputStudentId" className="form-label">
                StudentId
              </label>
              <select
                className="form-control"
                id="exampleInputStudentId"
                value={this.state.schedule.studentId}
                name="studentId"
                onChange={this.handleChange}
              >
                <option selected>select-!-</option>
                {this.state.students.map((opt) => (
                  <option value={opt.studentId}>{opt.studentId}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputStatus" className="form-label">
                TestPaperCode
              </label>
              <select
                className="form-control"
                id="exampleInputTestPaperCode"
                value={this.state.schedule.testPaperCode}
                name="testPaperCode"
                onChange={this.handleChange}
              >
                <option selected>select-!-</option>
                {this.state.testpaper.map((opt) => (
                  <option value={opt.testPaperCode}>{opt.testPaperCode}</option>
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

export default ScheduleForm;
