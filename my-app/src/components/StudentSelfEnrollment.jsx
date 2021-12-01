import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StudentAppBar from "./StudentAppBar";

import { getEnrollsAction } from "../Actions/enroll-action";
import { Link } from "react-router-dom";
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
} from "@mui/material";
class StudentSelfEnrollment extends React.Component {
  componentDidMount() {
    this.props.getEnrollsAction();
  }
  render() {
    return (
      <div>
        <StudentAppBar id={this.props.location.state} />
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
        <div className="d-flex justify-content-center mt-5">
          <Link
            to={{
              pathname: "/StudentSelfEnrollment/addNewEnrollment",
              state: [this.props.location.state],
            }}
            className="btn btn-primary px-5"
            style={{ textDecoration: "none" }}
          >
            Add
          </Link>
        </div>

        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 5,
            color: "black",
            border: 1,
            borderRadius: 3,
          }}
          elevation={24}
        >
          <Table
            sx={{ maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}
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
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.enroll.map((row) => (
                <TableRow
                  key={row.name}
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
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(StudentSelfEnrollment);
