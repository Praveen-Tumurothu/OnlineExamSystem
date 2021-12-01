import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Courses extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/student/getallCourses")
      .then((res) => {
        console.log(res);
        this.setState({ courses: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteHandler = (courseId) => {
    console.log(courseId);
    axios
      .delete(`http://localhost:8080/admin/deleteCourse/${courseId}`)
      .then((res) => {
        const courses = this.state.courses.filter(
          (course) => course.courseId !== courseId
        );
        this.setState({ courses: courses });
      })
      .catch((error) => alert(error.response.data.message));
  };

  render() {
    return (
      <div className="container">
        <Link to="/addNewCourse" className="btn btn-primary float-end my-3">
          ADD
        </Link>
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th>Course Id</th>
              <th>Course Name</th>
              <th>Course Type</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course) => (
              <tr className="table-info">
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.courseType}</td>
                <td>{course.description}</td>
                <td>
                  <input
                    type="button"
                    value="Update"
                    className="btn btn-success"
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.deleteHandler(course.courseId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Courses;
