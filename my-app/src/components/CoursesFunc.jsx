import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourse, deleteCourse } from "../Actions/CourseAction";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AdminAppBar from "./AdminNavbar";
import { Grid, Box } from "@mui/material";

const CoursesFunc = (props) => {
  const { courses } = useSelector((state) => state.course);
  // console.log(typeof courses);
  const dispatch = useDispatch();

  var auth = "";
  if (props.match.params.isLogin === "true") {
    auth = "true";
  }

  useEffect(() => {
    dispatch(getCourse());
    //fetchCourse();
  }, []);

  const deleteHandler = (courseId) => {
    dispatch(deleteCourse(courseId));
  };

  return (
    <>
      <AdminAppBar auth={auth} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} rowSpacing={8}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{ maxWidth: 345, marginTop: 4, marginLeft: 5 }}
                elevation={12}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.image}
                    alt="courses"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.courseName}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {course.courseType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Batch Name: &nbsp; {course.batchName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                {auth && (
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => deleteHandler(course.courseId)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CoursesFunc;
