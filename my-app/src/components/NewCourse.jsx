import React from "react";
import "./CSS/NewCourse.css";
import axios from "axios";
import { IconButton } from "@mui/material";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { Avatar } from "@mui/material";
class NewCourse extends React.Component {
  state = {
    course: {
      courseName: "",
      courseType: "",
      description: "",
      batchName: "",
      image: "",
    },
  };

  changeHandler = (event) => {
    const course = { ...this.state.course };
    course[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ course: course });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.course);
    axios
      .post("http://localhost:8080/admin/addNewCourse", this.state.course)
      .then((res) => {
        this.props.history.push("/admin/Courses/true");
      })
      .catch((err) => alert(err.response.data.message));
  };
  render() {
    return (
      <div className="images">
        <div
          className="container w-50 bg-light text-dark mt-4 pt-3 pb-3 shadow-lg rounded"
          id="main1"
        >
          <h1 className="color-primary" id="h1">
            ADD NEW COURSE
          </h1>
          <form onSubmit={this.submitHandler} autoComplete="off">
            <div className="container mb-3 col-8 my-3">
              <label for="CN" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                className="form-control"
                id="CN"
                name="courseName"
                value={this.state.course.courseName}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="container mb-3 col-8">
              <label for="CT" className="form-label">
                Course Type
              </label>
              <input
                type="text"
                className="form-control"
                id="CT"
                name="courseType"
                value={this.state.course.courseType}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="container mb-3 col-8">
              <label for="des" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="des"
                name="description"
                value={this.state.course.description}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="container mb-3 col-8">
              <label for="batchName" className="form-label">
                Batch Name
              </label>
              <input
                type="text"
                className="form-control"
                id="batchName"
                name="batchName"
                value={this.state.course.batchName}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="container mb-3 col-8">
              <label for="imge" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="imge"
                name="image"
                value={this.state.course.image}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div classNameName="my-3">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
            <IconButton
              onClick={() => {
                this.props.history.push("/admin/Courses/true");
              }}
            >
              <Avatar
                style={{ backgroundColor: "#47d247", margin: "0px auto" }}
              >
                <ArrowBackIosSharpIcon />
              </Avatar>
            </IconButton>
          </form>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state, ownProps) => {
//   return {
//     state: state.course,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCourse,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps())(NewCourse);
export default NewCourse;
