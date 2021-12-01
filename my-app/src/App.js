import "./App.css";
import Home from "./components/home";
import AdminLogin from "./components/AdminLogin";
import AdminControl from "./components/AdminControls";
import PageNotFound from "./components/pagenotfound";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import StudentLogin from "./components/StudentLogin";
import "bootstrap/dist/css/bootstrap.css";
import NewCourse from "./components/NewCourse";
import Addstudent from "./components/Addstudent";
import Updatestudent from "./components/UpdateStudent";
import CoursesFunc from "./components/CoursesFunc";
import TestPaper from "./components/ManageTestPaper";
import NewTestPaper from "./components/NewTestPaper";
import NewQuestion from "./components/NewTestQuestion";
import ShowQuestions from "./components/ShowQuestions";
import AdminEnrollStudent from "./components/adminEnrollStudent";
import AddNewEnrollment from "./components/addNewEnrollment";
import ScheduleExam from "./components/ExamSchedule";
import ScheduleForm from "./components/ExamScheduleForm";
import ChangeTestPaper from "./components/ChangeTestPaper";
import StudentPage from "./components/studentPage";
import StudentCourses from "./components/StudentCourses";
import deEnrollment from "./components/deEnrollment";
import GetAllResults from "./components/getAllResults";
import Exam1 from "./components/ExamList";
import ScheduleBatch from "./components/ScheduleExamForBatch";
import ReleaseTestByEidSid from "./components/releaseTestResultByEidSid";
import Results from "./components/result";
import Getallresutls from "./components/getAllResults";
import Findallresultsbybatchname from "./components/findallresultsbybatchname";
import Findresultsbyenrollmentid from "./components/findresultsbyenrollmentid";
import Getresults from "./components/getresults";
import StartExam from "./components/StartTest";
import SubmitTest from "./components/SubmitExam";
import AddStudentEnrollment from "./components/addStudentEnrollment";
import StudentSelfEnrollment from "./components/StudentSelfEnrollment";
import GetALLStudents from "./components/GetALLStudents";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/controls" component={AdminControl} />
        <Route path="/adminPage/managetestpaper" component={TestPaper} />
        <Route path="/courses" component={CoursesFunc} />
        <Route path="/admin/Courses/:isLogin" component={CoursesFunc} />
        <Route path="/student/Courses" component={StudentCourses} />
        <Route path="/Studentregister" component={Addstudent} />
        <Route path="/admin/addNewCourse" component={NewCourse} />
        <Route
          path="/admin/addNewTestQuestion/:testQuestion"
          component={NewQuestion}
        />
        <Route path="/adminPage/FindStudents" component={GetALLStudents} />
        <Route path="/studentPage/deEnrollment" component={deEnrollment} />
        <Route
          path="/admin/showQuestions/:testPaperCode"
          component={ShowQuestions}
        />
        <Route path="/student/studentPage" component={StudentPage} />
        <Route path="/admin/scheduleexamstudentform" component={ScheduleForm} />
        <Route path="/admin/studentexambatchform" component={ScheduleBatch} />
        <Route
          path="/adminPage/adminEnrollStudent"
          component={AdminEnrollStudent}
        />
        <Route path="/admin/ChangeTestPaper" component={ChangeTestPaper} />

        <Route path="/getallresults" component={Getallresutls} />
        <Route
          path="/adminEnrollStudent/addNewEnrollment"
          component={AddNewEnrollment}
        />

        <Route path="/getresults" component={Getresults} />
        <Route
          path="/Findallresultsbybatchname"
          component={Findallresultsbybatchname}
        />
        <Route
          path="/findresultsbyenrollmentid"
          component={Findresultsbyenrollmentid}
        />

        <Route
          exact
          path="/studentPage/StudentEnrollStudent"
          component={StudentSelfEnrollment}
        />

        <Route
          exact
          path="/StudentSelfEnrollment/addNewEnrollment"
          component={AddStudentEnrollment}
        />
        <Route path="/studentPage/studentGetAllExams" component={Exam1} />
        <Route path="/adminPage/FindResults" component={Results} />
        <Route
          path="/adminPage/ReleaseTestResults"
          component={ReleaseTestByEidSid}
        />

        <Route path="/submittest" component={SubmitTest} />

        <Route path="/startexam/:ern" component={StartExam} />

        <Route path="/adminPage/ExamSchedule" component={ScheduleExam} />
        <Route path="/studentPage/getAllResults" component={GetAllResults} />
        <Route path="/admin/addNewTest" component={NewTestPaper} />
        <Route path="/Adminlogin" component={AdminLogin} />
        <Route path="/Studentlogin" component={StudentLogin} />
        <Route path="/student/update" component={Updatestudent} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
