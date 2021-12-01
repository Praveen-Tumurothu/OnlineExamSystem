import axios from "axios";

export const getAllExams = (studentId) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:8080/student/getExamsByStudentID/${studentId}`
  );
  console.log(response.data);
  dispatch({
    type: "GET_EXAMS",
    payload: response.data,
  });
};
//exam-action
