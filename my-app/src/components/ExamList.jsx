import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StudentAppBar from "./StudentAppBar";
import { getAllExams } from "../Actions/exam-action";

class Exam1 extends React.Component {
  componentDidMount() {
    this.props.getAllExams(this.props.location.state);
  }
  render() {
    return (
      <div>
        <StudentAppBar id={this.props.location.state} />
        <table className="table mt-3 mx-auto w-75">
          <thead>
            <tr>
              <th>ExamRollNo</th>
              <th>DateOfExam</th>
              <th>Status</th>
              <th>MaximumScore</th>
              <th>ActualScore</th>
              <th>ExamDuration</th>
              <th>IsAnnouncedToStudent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.exams.map((exam) => (
              <tr>
                <td>{exam.examRollNo}</td>
                <td>{exam.dateOfExam}</td>
                <td>{exam.status.toString()}</td>
                <td>{exam.maximumScore}</td>
                <td>{exam.actualScore}</td>
                <td>{exam.examDuration}</td>
                <td>{exam.announcedToStudent.toString()}</td>

                <td>
                  <Link
                    to={{
                      pathname: `/startexam/${exam.examRollNo}`,
                      state: this.props.location.state[0],
                    }}
                    className="btn btn-secondary me-2"
                  >
                    Start Exam
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    exams: state.studentexam.exams,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getAllExams,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Exam1);
