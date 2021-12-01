import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getStudentAction } from "../Actions/student-action";
import AdminAppBar from "./AdminNavbar";
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

class GetAllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudentAction();
  }
  render() {
    return (
      <div>
        <AdminAppBar />
        <Typography
          variant="h4"
          sx={{ textAlign: "center" }}
          style={{
            marginTop: "50px",
          }}
          fontWeight="fontWeightBold"
        >
          Students List
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 5,
            marginBottom: 5,
            color: "black",
            border: 5,
            borderRadius: 4,
            borderColor: "grey.500",
          }}
          elevation={24}
        >
          <Table
            sx={{ maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Student ID</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>First Name</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Last Name</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Gender</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Mobile Number
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.students.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.studentId}
                  </TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.mobileNo}</TableCell>
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
    students: state.students.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(GetAllStudents);
