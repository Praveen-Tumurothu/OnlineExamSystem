package com.controller;

import java.time.LocalDateTime;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.entity.TestPaper;
import com.entity.TestQuestion;
import com.serviceimplementation.AdminAuthenticationImpl;
import com.serviceimplementation.AdminExamManagement;
import com.serviceimplementation.AdminStudentManagement;
import com.serviceimplementation.AdminTestManagement;

@RestController
@RequestMapping("/admin")
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
	public ResponseEntity<String> adminLogin(@Valid @RequestBody final Admin admin) throws DataNotFoundedException
	{
		return new ResponseEntity<String>(adminAuthenticationService.adminLogin(admin), HttpStatus.OK);
	}
	
	@PostMapping("/enrollstudent/{studentId}/{courseId}/{batchName}")
	public ResponseEntity<Student> enrollStudentCourse(@PathVariable int studentId, @PathVariable int courseId,
			@PathVariable String batchName) throws Throwable {
		return new ResponseEntity<Student>(
				adminStudentManagementService.enrollStudent(studentId, courseId, batchName), HttpStatus.OK);
		
	}

	@PostMapping("/addNewCourse")
	public ResponseEntity<Course> addnewCourse(@Valid @RequestBody Course course) throws Exception {
		return new ResponseEntity<Course>(adminStudentManagementService.addNewCourse(course),
				HttpStatus.OK);
		
	}


	@PostMapping(path = "/addNewTest/{courseId}")
	public ResponseEntity<TestPaper> addNewTest(@Valid @RequestBody TestPaper testPaper, @PathVariable int courseId) throws Throwable {
		TestPaper t = admintestmanagementservice.addNewTest(testPaper, courseId);
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

	@DeleteMapping(path = "/deleteTestPaper/{courseId}/{testpapercode}")
	public ResponseEntity<String> removeTestPaper(@PathVariable int courseId, @PathVariable int testpapercode) throws Throwable {

		String i = admintestmanagementservice.removeTestPaper(courseId, testpapercode);

		return new ResponseEntity<String>(i, HttpStatus.OK);
		
	}

	@GetMapping(path = "scheduleExamForStudent/{sid}/{eid}/{tpc}/{ldt}/{examduration}")
	public ResponseEntity<Exam> scheduleExamforStudent(@PathVariable int sid, @PathVariable int eid,
			@PathVariable int tpc, @PathVariable("ldt") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime date,
			@PathVariable int examduration) throws Throwable 
	{
		return new ResponseEntity<Exam>(adminExamManagementService.scheduleExamForStudent(sid, eid, tpc, date, examduration), HttpStatus.OK);
		

	}
	
	@PutMapping("/scheduleExamForBatch/{batchName}/{testPaperCode}/{localDateTime}/{examDurationInMinutes}")
	public ResponseEntity<Exam> scheduleExamForBatch(@PathVariable String batchName, @PathVariable int testPaperCode, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime localDateTime,
			@PathVariable int examDurationInMinutes) throws Throwable
	{
		return new ResponseEntity(adminExamManagementService.scheduleExamForBatch(batchName, testPaperCode, localDateTime, examDurationInMinutes),HttpStatus.OK);
		
	}
	
	@PutMapping("/updateTestPaperForStudent/{studentId}/{enrollmentId}/{testPaperCode}/{examrollno}")
	public ResponseEntity<Exam> updateTestpaperForStudent(@PathVariable int studentId, @PathVariable int enrollmentId, @PathVariable int testPaperCode, @PathVariable int examrollno) throws Throwable
	{
		return new ResponseEntity(adminExamManagementService.changeTestPaperForStudent(studentId, enrollmentId, testPaperCode, examrollno),HttpStatus.OK);
		
	}
	
	@PutMapping("/updateTestPaperForBatch/{enrollmentId}/{testPaperCode}")
	public ResponseEntity<Exam> updateTestpaperForBatch(@PathVariable int enrollmentId, @PathVariable int testPaperCode) throws Throwable
	{
		return new ResponseEntity(adminExamManagementService.changeTestPaperForBatch(enrollmentId, testPaperCode),HttpStatus.OK);
		
	}
	
	@PutMapping("/releaseAllTestResultForStudent/{studentId}/{enrollId}")
	public ResponseEntity<Boolean> releaseAllTestResultofStudent(int studentId, int enrollId) throws Exception
	{
		return new ResponseEntity(adminExamManagementService.releaseAllTestResultForStudent(studentId, enrollId), HttpStatus.OK);
		
	}
	
	@GetMapping("/findAllResultsByBatchName/{batchName}/{enrollId}")
	public ResponseEntity<List<Exam>> findResultsByBatchName(String batchName, int enrollId) throws Exception
	{
		return new ResponseEntity(adminExamManagementService.findAllResultsByBatchName(batchName, enrollId), HttpStatus.OK);
	}
	
	@GetMapping("/findResultByEnrollmentId/{batchName}/{enrollmentId}")
	public ResponseEntity<List<Exam>> findResultByEnrollmentId(int enrollmentId) throws Exception
	{
		return new ResponseEntity(adminExamManagementService.findResultByEnrollmentId(enrollmentId), HttpStatus.OK);
	}
}