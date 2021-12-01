import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminAppBar from "./AdminNavbar";

class TestPaper extends React.Component {
  state = {
    testpapers: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/admin/getAllTestPapers")
      .then((res) => {
        console.log(res);
        this.setState({ testpapers: res.data });
      })
      .catch((error) => alert(error.response.data.message));
  }

  deleteHandler = (testPaperCode, courseName) => {
    console.log(courseName);
    axios
      .delete(
        `http://localhost:8080/admin/deleteTestPaper/${courseName}/${testPaperCode}`
      )
      .then((res) => {
        const testpapers = this.state.testpapers.filter(
          (testpaper) => testpaper.testPaperCode !== testPaperCode
        );
        this.setState({ testpapers: testpapers });
      })
      .catch((error) => alert(error.response.data.message));
  };

  render() {
    return (
      <>
        <div>
          <AdminAppBar />
        </div>
        <div className="container">
          <Link
            to="/admin/addNewTest"
            className="btn btn-primary float-end my-3"
          >
            ADD
          </Link>
          <table className="table table-striped">
            <thead>
              <tr className="table-primary">
                <th>testpaper Id</th>
                <th>Difficulty Level</th>
                <th>Description</th>
                <th>Course Name</th>
                <th>Test Questions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.testpapers.map((testpaper) => (
                <tr className="table-info">
                  <td>{testpaper.testPaperCode}</td>
                  <td>{testpaper.difficultyLevel}</td>
                  <td>{testpaper.description}</td>
                  <td>{testpaper.courseName}</td>
                  <td>
                    <input
                      type="button"
                      value="Add Question"
                      className="btn btn-success mx-3"
                      onClick={() => {
                        this.props.history.push({
                          pathname: `/admin/addNewTestQuestion/${testpaper.testPaperCode}`,
                          state: {
                            response: "true",
                          },
                        });
                      }}
                    />
                    <input
                      type="button"
                      value="Show Questions"
                      className="btn btn-outline-primary"
                      onClick={() => {
                        this.props.history.push({
                          pathname: `/admin/showQuestions/${testpaper.testPaperCode}`,
                          state: {
                            response: "true",
                          },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-outline-danger"
                      onClick={() =>
                        this.deleteHandler(
                          testpaper.testPaperCode,
                          testpaper.courseName
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TestPaper;
