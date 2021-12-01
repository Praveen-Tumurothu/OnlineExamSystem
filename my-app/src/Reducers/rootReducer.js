import { combineReducers } from "redux";
import { courseReducer } from "./CourseReducer";
import EnrollReducer from "./enroll-reducer";
import examReducer from "./exam-reducer";
import StudentReducer from "./student-reducer";

const reducers = combineReducers({
  course: courseReducer,
  enrollments: EnrollReducer,
  studentexam: examReducer,
  students: StudentReducer,
});

export default reducers;
