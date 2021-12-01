import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Joi from "joi-browser";
import axios from "axios";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
const StudentLogin = () => {
  const [student, setStudent] = useState({
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    mobileNo: "",
    password: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    mobileNo: "",
    password: "",
    username: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const history = useHistory();

  const schema = {
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    firstName: Joi.string().min(2).required().label("First Name"),
    gender: Joi.string().min(4).required(),
    lastName: Joi.string().min(2).required().label("Last Name"),
    mobileNo: Joi.string().regex(new RegExp("^$|[0-9]{10}")),
    password: Joi.string().min(8).required().label("Password"),
    username: Joi.string().min(3).required().label("User Name"),
  };

  const validate = () => {
    const errors = {};
    const { error } = Joi.validate(student, schema, {
      //return error Object --> error (attribute) --> details List, each element contains {message, path, length} etc..
      abortEarly: false,
    });

    if (error)
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const changeHandler = (event) => {
    const studentt = { ...student };
    studentt[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    setStudent(studentt);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(student);
    // console.log(errors);
    setErrors(validate());
    axios
      .post("http://localhost:8080/student/login", student)
      .then((res) => {
        console.log(res);
        if (res.data[1] === true) {
          console.log(res.data[1]);
          console.log(res.data[0]);
          history.push({
            pathname: `/student/studentPage`,
            state: [res.data[0]],
          });
        }
        //window.alert("Your Registration is Successfull!");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setErrMsg(err.response.data.message);
      });
  };
  const paperStyle = {
    padding: 20,
    height: "55vh",
    width: 400,
    margin: "100px auto",
  };

  const AvStyle = {
    backgroundColor: "#47d247",
    margin: "10px 0px",
  };

  const btnStyle = {
    margin: "30px 0px",
  };
  return (
    <Box
      sx={{
        backgroundImage: `URL(
            "https://images.pexels.com/photos/217316/pexels-photo-217316.jpeg?cs=srgb&dl=pexels-sergij-217316.jpg&fm=jpg"
          )`,
        backgroundSize: "cover",
        paddingTop: "30px",
        height: "100vh",
      }}
    >
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          {errMsg && <Alert severity="error">{errMsg}</Alert>}

          <Grid align="center" style={{ marginTop: "25px" }}>
            <Avatar style={AvStyle}>
              <LockIcon />
            </Avatar>
            <Typography variant="h5">STUDENT</Typography>
          </Grid>
          <form onSubmit={submitHandler}>
            <Stack>
              <TextField
                id="standard-basic"
                label="User Name"
                variant="standard"
                type="text"
                placeholder="Enter Username"
                fullWidth
                value={student.username}
                name="username"
                onChange={changeHandler}
              />
              {errors && (
                <Typography variant="caption">{errors.username}</Typography>
              )}
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                placeholder="Enter Password"
                fullWidth
                value={student.password}
                name="password"
                onChange={changeHandler}
              />
            </Stack>
            {errors && (
              <Typography variant="caption">{errors.password}</Typography>
            )}
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnStyle}
              fullWidth
            >
              Sign In
            </Button>
          </form>
          {/* <Typography>
            Don't have an account ?<Link to="/Studentregister">Sign Up</Link>
          </Typography> */}
          <p
            style={{
              color: "rgb(173, 13, 74)",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "2px",
              marginBottom: "5px",
            }}
          >
            Don't Have an account ? &nbsp;<a href="/Studentregister">Sign Up</a>
          </p>
          <IconButton
            onClick={() => {
              history.push("/");
            }}
          >
            <Avatar style={{ backgroundColor: "#47d247", margin: "0px auto" }}>
              <ArrowBackIosSharpIcon />
            </Avatar>
          </IconButton>
        </Paper>
      </Grid>
    </Box>
  );
};

export default StudentLogin;

// .then((res) => {
//   console.log(res);
//   if (res.data[1] === true) {
//     console.log(res.data[1]);
//     console.log(res.data[0]);
//     history.push({
//       pathname: `/update/${res.data[0]}`,
//       state: {
//         response: `student having ${res.data[0]} logged in`,
//       },
//     });
