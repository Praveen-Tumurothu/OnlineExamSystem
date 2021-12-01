import React, { Component } from "react";
import axios from "axios";
import { Typography, Grid } from "@mui/material";
import AdminAppBar from "./AdminNavbar";

class ScheduleBatch extends React.Component {
  state = {
    schedule1: {
      batchName: "",
      examDurationInMinutes: "",
      localDateTime: "",
      testPaperCode: "",
    },
    enrollments: [],
    studentenrollments: [],
    testpaper: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/admin/getEnrollments")
      .then((response) => {
        console.log(response);
        this.setState({ studentenrollments: response.data });
        console.log(this.state.studentenrollments);
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
  }

  handleChange = (event) => {
    const student = { ...this.state.schedule1 }; // copying student object
    student[event.target.name] = event.target.value; // student[fullName] = "ab"
    //student.fullName = "ab";
    //student[fullName]="ab";
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ schedule1: student });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const enrollments = {
      batchName: this.state.schedule1.batchName,
      testPaperCode: this.state.schedule1.testPaperCode,
      localDateTime: this.state.schedule1.localDateTime,
      examDurationInMinutes: this.state.schedule1.examDurationInMinutes,
    };
    console.log(enrollments);
    axios
      .put(
        `http://localhost:8080/admin/scheduleExamForBatch/${enrollments.batchName}/${enrollments.testPaperCode}/${enrollments.localDateTime}/${enrollments.examDurationInMinutes}`
      )
      .then((res) => {
        this.props.history.push("/exam1");
      })
      .catch((error) => alert(error.response.data.message));
  };
  render() {
    return (
      <div>
        <AdminAppBar />
        <Typography variant="h4" margin="center" marginTop="20px">
          Schedule Exam For Batch
        </Typography>
        <Grid container>
          <Grid item xs={5} style={{ margin: "center" }}></Grid>
          <form
            onSubmit={this.handleSubmit}
            style={{
              border: "1px solid blue",
              padding: "10px",
              margin: "20px",
            }}
          >
            {/* <div className="mb-3">
              <label for="exampleInputBatchName" className="form-label">
                Batch Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputBatchName"
                value={this.state.schedule1.batchName}
                name="batchName"
                onChange={this.handleChange}
              />
            </div> */}

            <div class="col-md-12 mb-3">
              <label for="inputState" class="form-label">
                Batch Name
              </label>
              <select
                id="inputState"
                class="form-select"
                name="batchName"
                value={this.state.schedule1.batchName}
                onChange={this.handleChange}
              >
                <option selected>select-!-</option>
                {this.state.studentenrollments.map((opt) => (
                  <option value={opt.batchName}>{opt.batchName}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label
                for="exampleInputExamDurationInMinutes"
                className="form-label"
              >
                ExamDurationInMinutes
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputExamDurationInMinutes"
                value={this.state.schedule1.examDurationInMinutes}
                name="examDurationInMinutes"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputlocalDateTime" className="form-label">
                LocalDateTime
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleInputdateofexam"
                value={this.state.schedule1.localDateTime}
                name="localDateTime"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputStatus" className="form-label">
                TestPaperCode
              </label>
              <select
                className="form-control"
                id="exampleInputTestPaperCode"
                value={this.state.schedule1.testPaperCode}
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

export default ScheduleBatch;
