import React, { Component } from "react";
import StudentAppBar from "./StudentAppBar";

class SubmitTest extends Component {
  render() {
    return (
      <div>
        <StudentAppBar id={this.props.location.state[0]} />
        <h2 className="className={`{$className}, mt-4">
          Your Test is Submitted Successfully!!!!!
        </h2>

        <h3> Results will be updated soon..</h3>
      </div>
    );
  }
}

export default SubmitTest;
