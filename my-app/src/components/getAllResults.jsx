import axios from "axios";
import React, { Component } from "react";
import { Prompt } from "react-router";
class Getallresutls extends React.Component {
  state = {
    getallresults: [],
  };
  componentDidMount() {
    let eid = prompt("Enter Enrollment Id:");
    axios
      .get(
        `http://localhost:8080/exam/getAllResults/${this.props.location.state[0]}/${eid}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ getallresults: response.data });
        console.log(this.state.getallresults);
      })
      .catch((error) => alert(error.response.data.message));
  }
  render() {
    return (
      <div style={{ color: "red" }}>
        <h1>getallresut</h1>

        <table
          style={{ borderWidth: "50px", borderStyle: "solid" }}
          className="table"
        >
          <thead style={{ backgroundColor: "lightyellow" }}>
            <tr style={{ backgroundColor: "yellow" }}>
              <th>ExamRollNo</th>
              <th>DateOfExam</th>
              <th>Status</th>
              <th>MaximumScore</th>
              <th>ActualScore</th>
              <th>ExamDuration</th>
              {/* <th>IsAnnouncedToStudent</th> */}
            </tr>
          </thead>

          <tbody style={{ backgroundColor: "lightyellow" }}>
            {this.state.getallresults.map((row) => (
              <tr>
                <td>{row.examRollNo}</td>
                <td>{row.dateOfExam}</td>
                <td>{row.status.toString()}</td>
                <td>{row.maximumScore}</td>
                <td>{row.actualScore}</td>
                <td>{row.examDuration}</td>
                <td>{row.announcedToStudent.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Getallresutls;
