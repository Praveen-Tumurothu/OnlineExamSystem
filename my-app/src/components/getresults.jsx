import axios from "axios";
import React, { Component } from "react";
class Getresults extends React.Component {
  state = {
    getresults: [],
  };
  componentDidMount() {
    let e = prompt("Please give Exam Roll Number:");
    axios
      .get(`http://localhost:8080/exam/getResult/${e}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ getresults: res.data });
        console.log(this.state.getresults);
      })
      .catch((error) => alert(error.response.data.message));
  }
  render() {
    return (
      <div
        style={{
          paddingLeft: "200px",
          paddingRight: "200px",
          boxSizing: "content-box",
        }}
      >
        <h1>getresut</h1>
        <table
          style={{ borderWidth: "50px", borderStyle: "solid" }}
          className="table"
        >
          <thead style={{ backgroundColor: "lightyellow" }}>
            <tr style={{ backgroundColor: "yellow" }}>
              <th>ExamRollNo</th>
              <th>DateOfExam</th>
              <th>Status</th>
              <th>ActualScore</th>
              <th>MaximumScore</th>
              <th>ExamDuration</th>
              <th>IsAnnouncedToStudent</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {" "}
              <td>{this.state.getresults.examRollNo}</td>
              <td>{this.state.getresults.dateOfExam}</td>
              <td>{this.state.getresults.status}</td>
              <td>{this.state.getresults.actualScore}</td>
              <td>{this.state.getresults.maximumScore}</td>
              <td>{this.state.getresults.examDuration}</td>
              <td>{this.state.getresults.announcedToStudent}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Getresults;
