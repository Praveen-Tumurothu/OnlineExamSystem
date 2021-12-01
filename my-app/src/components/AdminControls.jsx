import AdminAppBar from "./AdminNavbar";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { Grid, Box } from "@mui/material";
const AdminControl = (props) => {
  return (
    <div>
      <AdminAppBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          ml: "13%",
          mt: "2%",
          mb: "5%",
          maxWidth: "80%",
          bgcolor: "background.paper",
        }}
      >
        <Grid container spacing={2} rowSpacing={8}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link
              to={{
                pathname: `/admin/Courses/${props.location.state.response}`,
                state: {
                  response: "true",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={12}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://noxa.in/wp-content/uploads/2019/03/17778.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "black", textTransform: "capitalize" }}
                    >
                      Manage Courses
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Adding and Deletion
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">see also</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link
              to={{
                pathname: `/adminPage/adminEnrollStudent`,
                state: {
                  response: "true",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={12}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/photos/business-enrollment-and-registration-picture-id1338490714?b=1&k=20&m=1338490714&s=170667a&w=0&h=QdLNiTmwv14FrpDT7OlMquHrtgW9hrwabWcQVTaqZ5E="
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "black", textTransform: "capitalize" }}
                    >
                      enrollment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Enroll a student and batch
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">see also</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link
              to={{
                pathname: `/adminPage/managetestpaper`,
                state: {
                  response: "true",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={12}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/photos/focus-on-delete-picture-id172972238?b=1&k=20&m=172972238&s=170667a&w=0&h=OgMhHWdu7cNR5h--6egfi5lFSBWvR3tefs6-3e20w7M="
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "black", textTransform: "capitalize" }}
                    >
                      Manage Test Paper and Test Questions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Adding and Deletion
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">see also</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link
              to={{
                pathname: `/admin/ChangeTestPaper`,
                state: {
                  response: "true",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={12}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/photos/change-arrow-with-smaller-but-many-obstacles-picture-id1302958092?b=1&k=20&m=1302958092&s=170667a&w=0&h=5gkT1Qon1BMxeb1TrsKy5AOckLBL9dnSCtg5zchhbBg="
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "black", textTransform: "capitalize" }}
                    >
                      changes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Change TestPaper
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">see also</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link
              to={{
                pathname: `/adminPage/ExamSchedule`,
                state: {
                  response: "true",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={12}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNp2mQ9hLqpepN-S0mH8BKix7q0p6WQv71nQ&usqp=CAU"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "black", textTransform: "capitalize" }}
                    >
                      schedule exam
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Schedule Exam For Student and Batch
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">see also</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link
              to={{
                pathname: `/adminPage/ReleaseTestResults`,
                state: {
                  response: "true",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={12}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bNnrg-iEm5iFHPnPzoXRu3KbomBdwhiY0g&usqp=CAU"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "black", textTransform: "capitalize" }}
                    >
                      release results
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Release Students Results
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">see also</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link
              to={{
                pathname: `/adminPage/FindResults`,
                state: {
                  response: "true",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={12}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.theindianwire.com/wp-content/uploads/2014/05/results-2.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "black", textTransform: "capitalize" }}
                    >
                      find results
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Manage Students Results
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">see also</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link
              to={{
                pathname: `/adminPage/FindStudents`,
                state: {
                  response: "true",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={12}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.pngitem.com/pimgs/m/248-2484502_custom-icons-marc-engle-student-logo-transparent-background.png"
                    alt="students"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "black", textTransform: "capitalize" }}
                    >
                      Fetch Students
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Manage Students
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">see also</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminControl;

// import React, { Component } from "react";
// import "../stylesheets/styles.css";
// import { Link } from "react-router-dom";
// import HomeNav from "./homeNav";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

// import { Grid, Box } from "@mui/material";
// class AdminPage extends React.Component {
//   render() {
//     return (
//       <div>
//         <HomeNav />

//
//       </div>
//     );
//   }
// }

// export default AdminPage;
