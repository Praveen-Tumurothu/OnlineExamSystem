import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentAppBar from "./StudentAppBar";

import { connect } from "react-redux";

import { getEnrollsAction, deleteEnrollAction } from "../Actions/enroll-action";
import {
  Grid,
  Typography,
  Button,
  Box,
  TextField,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  TableCell,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableBody,
  TableHead,
} from "@mui/material";
class DeEnrollment extends React.Component {
  state = {
    stuId: this.props.location.state[0],
  };
  componentDidMount() {
    this.props.getEnrollsAction();
  }
  handleDelete = (row) => {
    this.props.deleteEnrollAction(row);
  };
  render() {
    return (
      <div>
        <StudentAppBar id={this.state.stuId} />
        <Typography
          variant="h4"
          sx={{ textAlign: "center" }}
          style={{
            marginTop: "50px",
          }}
          fontWeight="fontWeightBold"
        >
          Enrollment List
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 5,
            color: "black",
          }}
          elevation={12}
        >
          <Table
            sx={{ maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>
                  Enrollment Id
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Batch Name</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Enrollment Date{" "}
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Completion Date
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>status</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Course Id</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Student Id</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Actions </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.enroll
                .filter((row1) => row1.sId == this.state.stuId)
                .map((row) => (
                  <TableRow
                    key={row.enrollmentId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.enrollmentId}
                    </TableCell>
                    <TableCell>{row.batchName}</TableCell>
                    <TableCell>{row.enrollmentDate}</TableCell>
                    <TableCell>{row.completionDate}</TableCell>

                    <TableCell>{row.status.toString()}</TableCell>
                    <TableCell>{row.course.courseId}</TableCell>
                    <TableCell>{row.sId}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => this.handleDelete(row)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    enroll: state.enrollments.enrollments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEnrollsAction,
    deleteEnrollAction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(DeEnrollment);
