package com.serviceimplementation;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advices.AdminAuthenticationFailedException;
import com.advices.DataNotFoundedException;
import com.entity.Course;
import com.entity.Student;
import com.entity.StudentEnrollment;
import com.repository.CourseRepository;
import com.repository.StudentEnrollmentRepository;
import com.repository.StudentRepository;
import com.service.AdminStudentManagementService;

@Service
public class AdminStudentManagement implements AdminStudentManagementService {

	@Autowired
	private AdminAuthenticationImpl adminAuthenticationImpl;

	@Autowired
	private StudentEnrollmentRepository studentEnrollmentRepository;

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private CourseRepository courseRepository;

	@Override
	public Student enrollStudent(int studentId, int courseId, String batchName) throws Exception {
		if (adminAuthenticationImpl.isLogin) {
			StudentEnrollment studentEnrollment = new StudentEnrollment();

			Student s1 = studentRepository.findById(studentId)
					.orElseThrow(() -> new DataNotFoundedException("student Id not found in database"));
			Course c1 = courseRepository.findById(courseId)
					.orElseThrow(() -> new DataNotFoundedException("course Id not found in database"));

			studentEnrollment.setBatchName(batchName);
//		long millis = System.currentTimeMillis();
//		Date date = new Date(millis);
			LocalDate date = LocalDate.now();
			studentEnrollment.setEnrollmentDate(date);
			studentEnrollment.setCompletionDate(null);
			studentEnrollment.setsId(studentId);
			studentEnrollment.setCourse(c1);
			studentEnrollment.setStatus(false);

			s1.addStudentEnrollment(studentEnrollment);
			studentEnrollmentRepository.save(studentEnrollment);
			return s1;
		} else {
			throw new AdminAuthenticationFailedException("You Must be Logged in as Administrator...");
		}
	}

	@Override
	public Course addNewCourse(Course c) throws Exception {
		if (adminAuthenticationImpl.isLogin) {
			return courseRepository.save(c);
		} else {
			throw new AdminAuthenticationFailedException("You Must be Logged in as Administrator...");
		}

	}

	public boolean deleteCourseById(int courseId) throws DataNotFoundedException {
		if (adminAuthenticationImpl.isLogin) {
			courseRepository.findById(courseId).orElseThrow(() -> new DataNotFoundedException("Course not found in database"));
			courseRepository.deleteById(courseId);
			return true;
		}
		return false;
	}

	@Override
	public Student deEnRollstudent(int studentId, int courseId, String batchName, int enrollId) throws Exception {
			Student s1 = studentRepository.findById(studentId)
					.orElseThrow(() -> new DataNotFoundedException("student Id not found in database"));
			Course c1 = courseRepository.findById(courseId)
					.orElseThrow(() -> new DataNotFoundedException("course Id not found in database"));

			StudentEnrollment studentEnrollment = studentEnrollmentRepository.findById(enrollId)
					.orElseThrow(() -> new DataNotFoundedException("enrollment Id not found in database"));
			if (studentEnrollment.getBatchName().equals(batchName)) {
				s1.removeStudentEnrollment(studentEnrollment);
			}
			studentEnrollmentRepository.deleteById(enrollId);
			return studentRepository.save(s1);
		
	}
	
	public List<StudentEnrollment> getEnrollments()
	{
		return studentEnrollmentRepository.findAll();
	}
	
//	public Course updateCourseDetails(CourseDTO course) throws DataNotFoundedException {
//		int cid=course.getCourseId();
//		Course c=courseRepository.findById(cid).orElseThrow(()-> new DataNotFoundedException("CourseId is not found in database"));
//		if(course.getCourseName()!=null)
//		{
//			c.setCourseName(course.getCourseName());
//		}
//		if(course.getCourseType()!=null)
//		{
//			c.setCourseType(course.getCourseType());
//		}
//		if(course.getDescription()!=null)
//		{
//			c.setDescription(course.getDescription());
//		}		
//		return courseRepository.save(c);
//
//	}
	
	public Course getCourseById(int cid) throws DataNotFoundedException {
		return courseRepository.findById(cid).orElseThrow(()-> new DataNotFoundedException("course id not found in database")); // need to write exception
	}
	
	public List<Student> getStudents()
	{
		return studentRepository.findAll();
	}

}
