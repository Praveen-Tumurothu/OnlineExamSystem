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
// import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
const AdminLogin = () => {
  const [admin, setadmin] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const history = useHistory();

  const schema = {
    password: Joi.string().min(4).required().label("Password"),
    userName: Joi.string().min(3).required().label("User Name"),
  };

  const validate = () => {
    const errors = {};
    const { error } = Joi.validate(admin, schema, {
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
    const adminn = { ...admin };
    adminn[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    setadmin(adminn);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(admin);
    // console.log(errors);
    setErrors(validate());
    axios
      .post("http://localhost:8080/admin/login", admin)
      .then((res) => {
        console.log(res);
        if (res.data === "You're Successfully Logged in as a Administartor") {
          history.push({
            pathname: "/controls",
            state: {
              response: "true",
            },
          });
        }
        //window.alert("You are Registration is Successfull!");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setErrMsg(err.response.data.details);
      });
  };
  const paperStyle = {
    padding: 20,
    height: "50vh",
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
          <Grid align="center" style={{ marginTop: "25px" }}>
            <Avatar style={AvStyle}>
              <LockIcon />
            </Avatar>
            {errMsg && <Alert severity="error">{errMsg}</Alert>}
            <Typography variant="h5">ADMIN</Typography>
          </Grid>
          <form onSubmit={submitHandler}>
            <Stack>
              <TextField
                id="standard-basic"
                label="User Name"
                variant="standard"
                type="text"
                placeholder="Enter UserName"
                fullWidth
                required
                value={admin.userName}
                name="userName"
                onChange={changeHandler}
              />
              {errors && (
                <Typography variant="caption">{errors.userName}</Typography>
              )}
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                placeholder="Enter Password"
                fullWidth
                required
                value={admin.password}
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
          Already have an account ?<Link href="/register">Sign Up</Link>
        </Typography> */}
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

export default AdminLogin;

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
