import { ActionTypes } from "../Action-Creators/ActionTypes";
import axios from "axios";
export const getCourse = () => {
  return async function (dispatch) {
    const response = await axios
      .get("http://localhost:8080/student/getallCourses")
      .catch((error) => alert(error.response.data.message));
    dispatch({
      type: ActionTypes.GET_ALL_COURSES,
      payload: response.data,
    });
  };
};

export const deleteCourse = (courseId) => {
  return async function (dispatch, getState) {
    const courses = getState().course.courses;
    console.log(courseId);
    await axios
      .delete(`http://localhost:8080/admin/deleteCourse/${courseId}`)
      .then((res) => {
        const coursess = courses.filter(
          (course) => course.courseId !== courseId
        );
        console.log(coursess);
        dispatch({
          type: ActionTypes.DELETE_COURSE,
          payload: coursess,
        });
      })
      .catch((error) => alert(error.response.data.message));
  };
};

export const addCourse = (courses) => {
  return {
    type: ActionTypes.ADD_COURSE,
    payload: courses,
  };
};
