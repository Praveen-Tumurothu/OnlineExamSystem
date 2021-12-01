import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import StudentAppBar from "./StudentAppBar";
class StudentPage extends React.Component {
  state = {
    result: [this.props.location.state],
  };
  render() {
    return (
      <div>
        <StudentAppBar id={this.state.result} />
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
                  pathname: "/student/Courses",
                  state: this.state.result[0],
                }}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={24}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://www.employerlive.com/blogimgs/Online-courses_blog10.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ color: "black", textTransform: "capitalize" }}
                      >
                        All Courses
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Courses instructed by admin
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
                  pathname: "/studentPage/getAllResults",
                  state: [this.state.result],
                }}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={24}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.hindustantimes.com/img/2021/09/07/550x309/results_222603a6-641a-11e8-b4a9-2154dcd09999_1631012392715.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ color: "black", textTransform: "capitalize" }}
                      >
                        results
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Check Your Results
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
                  pathname: "/studentPage/deEnrollment",
                  state: [this.state.result],
                }}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={24}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://pioneer.occc.edu/wp-content/uploads/2021/02/StudentEnrollment-300x174.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ color: "black", textTransform: "capitalize" }}
                      >
                        De Enrollment
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        You can De Enroll Now
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
                  pathname: "/student/update",
                  state: [this.state.result],
                }}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={24}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjtJtc70XGs5oLNMzuNPUh6tB4eTZRP4gHQ&usqp=CAU"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ color: "black", textTransform: "capitalize" }}
                      >
                        Update Student Details
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        You Can Update Your Details
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
                  pathname: "/studentPage/studentGetAllExams",
                  state: [this.state.result],
                }}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ maxWidth: "75%", height: "100%" }} elevation={24}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://imgk.timesnownews.com/story/Exam_Date_53.jpg?tr=w-400,h-300,fo-auto"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ color: "black", textTransform: "capitalize" }}
                      >
                        Exam
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Check For Your Exam Details
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
                  pathname: "/studentPage/StudentEnrollStudent",
                  state: [this.state.result],
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
                        Enroll a Course
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
  }
}

export default StudentPage;
