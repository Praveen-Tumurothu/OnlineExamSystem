import axios from "axios";
import React, { Component } from "react";

import { Button } from "@mui/material";
import StudentAppBar from "./StudentAppBar";
import { withRouter } from "react-router-dom";
import Radio from "@mui/material/Radio";
import { Box, borders, padding } from "@mui/system";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// var updateResult = [];
class StartExam extends Component {
  state = {
    exam: [],
    now: 0,
    hrs: 0,
    mins: 10,
    secs: 0,
    // result: [{ examRollNo: "", markedOption: "", testPapercode: "", questionNo: "" }],
    result: [],
    ex: [],
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/exam/start_test/${this.props.match.params.ern}`
      )
      .then((res) => {
        const exams = [...res.data];
        console.log(exams);
        this.setState({ exam: exams });
        console.log(this.state.exam);
      })
      .catch((err) => alert(err.response.data.message));

    const time = setInterval(() => {
      if (this.state.secs === 0) {
        this.setState({ mins: this.state.mins - 1 });
        this.setState({ secs: 59 });
      } else {
        this.setState({ secs: this.state.secs - 1 });
      }
      if (this.state.mins === 0 && this.state.secs === 0) {
        clearInterval(time);
        this.props.history.push("/submittest");
      }
    }, 1000);
  }
  // componentWillUnmount(){

  //     console.log(this.state.result)

  // }

  handleChange = (questionNo, tpc) => (event) => {
    console.log(tpc);
    console.log(event.target.name);

    if (this.state.ex.length > 0) {
      var index = -1;
      for (let item of this.state.ex) {
        index = index + 1;
        if (item.questionNo == event.target.name) {
          this.state.ex.splice(index, 1);
          break;
        }
      }
      let res = {
        examRollNo: this.props.match.params.ern,
        markedOption: event.target.value,
        questionNo: questionNo,
        testPaperCode: tpc,
      };
      this.state.ex = this.state.ex.concat(res);
      // console.log(this.state.ex);
    } else {
      let res = {
        examRollNo: this.props.match.params.ern,
        markedOption: event.target.value,
        questionNo: questionNo,
        testPaperCode: tpc,
      };
      this.state.ex = this.state.ex.concat(res);
      //console.log(this.state.ex);
    }

    // this.setState({result:this.state.ex});
    console.log(this.state.ex);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.ex);
    const t = [...this.state.ex];
    this.setState({ result: t });
    console.log(t);
    axios
      .post(`http://localhost:8080/exam/submitTest`, t)
      .then((res) => {
        console.log(res.data);
        this.props.history.push({
          pathname: "/submittest",
          state: this.props.location.state,
        });
      })
      .catch((error) => alert(error.response.data.message));
  };

  render() {
    return (
      <div>
        <StudentAppBar id={this.props.location.state} />
        <Box sx={{ border: 1, borderColor: "grey.500", padding: "20px" }}>
          <Box textAlign="center" fontWeight="bold" fontSize="h6.fontSize">
            <h1>Online Exam</h1>
          </Box>
          <Box textAlign="right">
            <h4>
              {" "}
              Time Remaining-{" "}
              {`${this.state.mins.toString().padStart(2, "0")}:${this.state.secs
                .toString()
                .padStart(2, "0")}`}
            </h4>
          </Box>
          {/* <div className="timer">
                <div className="timer_text">Time Left</div>
                <div className="timer_sec">10</div>
            </div> */}

          <div>
            {this.state.exam.map((res) => (
              <div>
                <Box fontWeight="medium" mx="auto" width="200">
                  <h3 className={`{className} h1,fs-4 `}>
                    {res.id}.{res.question}
                  </h3>
                </Box>
                <FormControl component="fieldset">
                  <RadioGroup
                    name={res.questionNo}
                    onChange={this.handleChange(res.questionNo, res.tpc)}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label={res.option1}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label={res.option2}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label={res.option3}
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label={res.option4}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            ))}

            <Button onClick={this.handleSubmit} className="btn btn-info me-2">
              SubmitTest
            </Button>
          </div>
        </Box>
      </div>
    );
  }
}

export default withRouter(StartExam);
