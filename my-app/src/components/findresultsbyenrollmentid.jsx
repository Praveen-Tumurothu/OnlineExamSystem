import axios from "axios";
import React, { Component } from "react";
class Findresultsbyenrollmentid extends React.Component {
  state = {
    findresultsbyenrollmentid: [],
  };
  componentDidMount() {
    let e = prompt("To Known the result, please enter Enrollment Number:");
    axios
      .get(`http://localhost:8080/admin/findResultByEnrollmentId/${e}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ findresultsbyenrollmentid: res.data });
        console.log(this.state.findresultsbyenrollmentid);
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
        <h1>Findresultsbyenrollmentid</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ExamRollNo</th>
              <th>DateOfExam</th>
              <th>Status</th>
              <th>MaximumScore</th>
              <th>ActualScore</th>
              <th>ExamDuration</th>
              <th>IsAnnouncedToStudent</th>
            </tr>
          </thead>

          <tbody>
            {this.state.findresultsbyenrollmentid.map((row) => (
              <tr>
                {" "}
                <td>{row.examRollNo}</td>
                <td>{row.dateOfExam}</td>
                <td>{row.status}</td>
                <td>{row.maximumScore}</td>
                <td>{row.actualScore}</td>
                <td>{row.examDuration}</td>
                <td>{row.announcedToStudent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Findresultsbyenrollmentid;
