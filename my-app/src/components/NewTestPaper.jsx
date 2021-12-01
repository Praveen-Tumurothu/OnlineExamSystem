import React from "react";
import "./CSS/NewTestPaper.css";
import axios from "axios";
class NewTestPaper extends React.Component {
  state = {
    testpaper: {
      difficultyLevel: "",
      description: "",
      courseName: "",
    },
  };

  changeHandler = (event) => {
    const testpaper = { ...this.state.testpaper };
    testpaper[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ testpaper: testpaper });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.testpaper);
    axios
      .post(
        `http://localhost:8080/admin/addNewTest/${this.state.testpaper.courseName}`,
        this.state.testpaper
      )
      .then((res) => {
        this.props.history.push({
          pathname: "/adminPage/managetestpaper",
          state: {
            response: "true",
          },
        });
      })
      .catch((error) => alert(error.response.data.message));
  };
  render() {
    return (
      <div className="image">
        <div
          className="container w-50 bg-light text-dark mt-4 pt-3 pb-3 shadow-lg rounded"
          id="main"
        >
          <h1 className="color-primary" id="fd">
            ADD NEW TEST PAPER
          </h1>
          <form onSubmit={this.submitHandler} autoComplete="off">
            <div className="container mb-3 col-8" id="fd">
              <label for="CN" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                className="form-control"
                id="CN"
                name="courseName"
                value={this.state.testpaper.courseName}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="container mb-3 col-8 my-3" id="fd">
              <label for="DL" className="form-label">
                Difficulty Level
              </label>
              <input
                type="text"
                className="form-control"
                id="DL"
                name="difficultyLevel"
                value={this.state.testpaper.difficultyLevel}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="container mb-3 col-8" id="fd">
              <label for="DES" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="DES"
                name="description"
                value={this.state.testpaper.description}
                required
                onChange={this.changeHandler}
              />
            </div>

            <div classNameName="my-3">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewTestPaper;
