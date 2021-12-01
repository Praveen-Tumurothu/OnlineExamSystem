package com.controller;

import java.time.LocalDateTime;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.advices.DataNotFoundedException;
import com.entity.Admin;
import com.entity.Course;
import com.entity.Exam;
import com.entity.Student;
import com.entity.StudentEnrollment;
import com.entity.TestPaper;
import com.entity.TestQuestion;
import com.service.AdminTestManagementService;
import com.serviceimplementation.AdminAuthenticationImpl;
import com.serviceimplementation.AdminExamManagement;
import com.serviceimplementation.AdminStudentManagement;
import com.serviceimplementation.AdminTestManagement;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000/")
public class AdminController {

	@Autowired
	private AdminStudentManagement adminStudentManagementService;

	@Autowired
	private AdminExamManagement adminExamManagementService;

	@Autowired
	private AdminTestManagement admintestmanagementservice;

	@Autowired
	private AdminAuthenticationImpl adminAuthenticationService;

	@PostMapping("/login")
	public ResponseEntity<String> adminLogin(@Valid @RequestBody final Admin admin) throws DataNotFoundedException {
		return new ResponseEntity<String>(adminAuthenticationService.adminLogin(admin), HttpStatus.OK);
	}

	@PostMapping("/enrollstudent/{studentId}/{courseId}/{batchName}")
	public ResponseEntity<Student> enrollStudentCourse(@PathVariable int studentId, @PathVariable int courseId,
			@PathVariable String batchName) throws Throwable {
		return new ResponseEntity<Student>(adminStudentManagementService.enrollStudent(studentId, courseId, batchName),
				HttpStatus.OK);

	}

	@PostMapping("/addNewCourse")
	public ResponseEntity<Course> addnewCourse(@Valid @RequestBody Course course) throws Exception {
		return new ResponseEntity<Course>(adminStudentManagementService.addNewCourse(course), HttpStatus.OK);

	}

	@DeleteMapping("/deleteCourse/{courseId}")
	public ResponseEntity<Boolean> deleteCourseById(@PathVariable int courseId) throws Throwable {

		boolean b = adminStudentManagementService.deleteCourseById(courseId);

		return new ResponseEntity<Boolean>(b, HttpStatus.OK);

	}

	@PostMapping(path = "/addNewTest/{courseName}")
	public ResponseEntity<TestPaper> addNewTest(@Valid @RequestBody TestPaper testPaper,
			@PathVariable String courseName) throws Throwable {
		TestPaper t = admintestmanagementservice.addNewTest(testPaper, courseName);
		return new ResponseEntity<TestPaper>(t, HttpStatus.OK);

	}

	@DeleteMapping(path = "/deleteQuestion/{id}")
	public ResponseEntity<Boolean> removeQuestionById(@PathVariable int id) throws Throwable {

		boolean b = admintestmanagementservice.removeQuestionById(id);

		return new ResponseEntity<Boolean>(b, HttpStatus.OK);

	}

	@PostMapping(path = "/addQuestionForTestPaper/{testpapercode}")
	public ResponseEntity<TestPaper> addQuestionForTestPaper(@Valid @PathVariable int testpapercode,
			@RequestBody TestQuestion testQuestion) throws Throwable {

		TestPaper t = admintestmanagementservice.addQuestionForExistingTestPaper(testpapercode, testQuestion);

		return new ResponseEntity<TestPaper>(t, HttpStatus.OK);
	}

	@DeleteMapping(path = "/deleteTestPaper/{courseName}/{testpapercode}")
	public ResponseEntity<String> removeTestPaper(@PathVariable String courseName, @PathVariable int testpapercode)
			throws Throwable {

		String i = admintestmanagementservice.removeTestPaper(courseName, testpapercode);

		return new ResponseEntity<String>(i, HttpStatus.OK);

	}

	@GetMapping(path = "scheduleExamForStudent/{studentId}/{enrollmentId}/{testPaperCode}/{localDateTime}/{examduration}")
	public ResponseEntity<Exam> scheduleExamforStudent(@PathVariable int studentId, @PathVariable int enrollmentId,
			@PathVariable int testPaperCode,
			@PathVariable("localDateTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime date,
			@PathVariable int examduration) throws Throwable {
		return new ResponseEntity<Exam>(adminExamManagementService.scheduleExamForStudent(studentId, enrollmentId,
				testPaperCode, date, examduration), HttpStatus.OK);

	}

	@PutMapping("/scheduleExamForBatch/{batchName}/{testPaperCode}/{localDateTime}/{examDurationInMinutes}")
	public ResponseEntity<Exam> scheduleExamForBatch(@PathVariable String batchName, @PathVariable int testPaperCode,
			@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime localDateTime,
			@PathVariable int examDurationInMinutes) throws Throwable {
		return new ResponseEntity<Exam>(adminExamManagementService.scheduleExamForBatch(batchName, testPaperCode,
				localDateTime, examDurationInMinutes), HttpStatus.OK);

	}

	@PutMapping("/updateTestPaperForStudent/{studentId}/{enrollmentId}/{testPaperCode}/{examrollno}")
	public ResponseEntity<Exam> updateTestpaperForStudent(@PathVariable int studentId, @PathVariable int enrollmentId,
			@PathVariable int testPaperCode, @PathVariable int examrollno) throws Throwable {
		return new ResponseEntity<Exam>(adminExamManagementService.changeTestPaperForStudent(studentId, enrollmentId,
				testPaperCode, examrollno), HttpStatus.OK);

	}

	@PutMapping("/updateTestPaperForBatch/{enrollmentId}/{testPaperCode}")
	public ResponseEntity<Exam> updateTestpaperForBatch(@PathVariable int enrollmentId, @PathVariable int testPaperCode)
			throws Throwable {
		return new ResponseEntity<Exam>(adminExamManagementService.changeTestPaperForBatch(enrollmentId, testPaperCode),
				HttpStatus.OK);

	}

	@PutMapping("/releaseAllTestResultForStudent/{studentId}/{enrollId}")
	public ResponseEntity<Boolean> releaseAllTestResultofStudent(@PathVariable int studentId,
			@PathVariable int enrollId) throws Exception {
		return new ResponseEntity<Boolean>(
				adminExamManagementService.releaseAllTestResultForStudent(studentId, enrollId), HttpStatus.OK);

	}

	@GetMapping("/findAllResultsByBatchName/{batchName}/{enrollId}")
	public ResponseEntity<List<Exam>> findResultsByBatchName(@PathVariable String batchName, @PathVariable int enrollId)
			throws Exception {
		return new ResponseEntity<List<Exam>>(adminExamManagementService.findAllResultsByBatchName(batchName, enrollId),
				HttpStatus.OK);
	}

	@GetMapping("/findResultByEnrollmentId/{enrollmentId}")
	public ResponseEntity<List<Exam>> findResultByEnrollmentId(@PathVariable int enrollmentId) throws Exception {
		return new ResponseEntity<List<Exam>>(adminExamManagementService.findResultByEnrollmentId(enrollmentId),
				HttpStatus.OK);
	}

	@GetMapping("/getAllTestPapers")
	public ResponseEntity<List<TestPaper>> getAllTestPapers() throws Exception {
		return new ResponseEntity<List<TestPaper>>(admintestmanagementservice.getAllTestPapers(), HttpStatus.OK);
	}

	@GetMapping("/getQuestions/{testPaperCode}")
	public ResponseEntity<List<TestQuestion>> getAllQuestions(@PathVariable int testPaperCode) throws Exception {
		return new ResponseEntity<List<TestQuestion>>(admintestmanagementservice.getAllQuestions(testPaperCode),
				HttpStatus.OK);
	}
	
	@GetMapping("/getStudents")
	public ResponseEntity<List<Student>> getAllQuestions() throws Exception {
		return new ResponseEntity<List<Student>>(adminStudentManagementService.getStudents(),
				HttpStatus.OK);
	}
	
	@GetMapping("/getEnrollments")
	public ResponseEntity<List<StudentEnrollment>> getEnrollments() throws Exception {
		return new ResponseEntity<List<StudentEnrollment>>(adminStudentManagementService.getEnrollments(),
				HttpStatus.OK);
	}
	
	@GetMapping("/getExams")
	public ResponseEntity<List<Exam>> getAllExams() throws Exception {
		return new ResponseEntity<List<Exam>>(admintestmanagementservice.getAllExams(),
				HttpStatus.OK);
	}
	
	@GetMapping("/logout")
	public ResponseEntity<Boolean> adminLogout() throws DataNotFoundedException {
		return new ResponseEntity<Boolean>(adminAuthenticationService.adminLogout(), HttpStatus.OK);
	}
}