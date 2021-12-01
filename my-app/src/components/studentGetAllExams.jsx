import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class StudentGetAllExams extends React.Component {
  state = {
    exams: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/student/getAllExams")
      .then((response) => {
        console.log(response.data);
        this.setState({ exams: response.data });
      })
      .catch((error) => alert(error.response.data.message));
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="display-6 text-center fw-bold text-dark mt-4 mb-4">
            Exams List
          </h1>
          <table className="table table-hover table-dark table-striped w-75 mx-auto mt-5">
            <thead>
              <tr>
                <th className="text-center">Exam Roll No</th>
                <th className="text-center">Date Of Exam</th>
                <th className="text-center">Status</th>
                <th className="text-center">Maximum Score</th>
                <th className="text-center">Actual Score</th>
                <th className="text-center">Exam Duration</th>
                <th className="text-center">Is Announced To Student</th>
                <th className="text-center">Start Exam</th>
              </tr>
            </thead>
            <tbody>
              {this.state.exams.map((exam) => (
                <tr>
                  <td className="text-center">{exam.examRollNo}</td>
                  <td className="text-center">{exam.dateOfExam}</td>
                  <td className="text-center">{exam.status.toString()}</td>
                  <td className="text-center">{exam.maximumScore}</td>
                  <td className="text-center">{exam.actualScore}</td>
                  <td className="text-center">{exam.examDuration}</td>
                  <td className="text-center">
                    {exam.announcedToStudent.toString()}
                  </td>

                  <td>
                    <input
                      type="button"
                      value="Start Exam"
                      className="btn btn-success"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StudentGetAllExams;
