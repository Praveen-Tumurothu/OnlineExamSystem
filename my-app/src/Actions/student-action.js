import axios from "axios";

export const getStudentAction = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/admin/getStudents");
  dispatch({
    type: "GET_STUDENTS",
    payload: res.data,
  });
};
