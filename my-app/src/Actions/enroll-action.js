import axios from "axios";

export const getEnrollsAction = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/admin/getEnrollments");
  console.log(res.data);
  dispatch({
    type: "GET_ENROLLMENTS",
    payload: res.data,
  });
};
export const deleteEnrollAction = (row) => async (dispatch, getState) => {
  const result = getState();
  const del = [...result.enrollments.enrollments];
  console.log(del);
  console.log(row);
  await axios
    .get(
      `http://localhost:8080/student/deEnrollstudent/${row.sId}/${row.course.courseId}/${row.batchName}/${row.enrollmentId}`
    )
    .then((res) => {
      const cour = del.filter(
        (enroll) => enroll.enrollmentId !== row.enrollmentId
      );
      console.log(cour);
      dispatch({
        type: "DELETE_ENROLLMENT",
        payload: cour,
      });
    })
    .catch((error) => alert(error.response.data.message));
};
