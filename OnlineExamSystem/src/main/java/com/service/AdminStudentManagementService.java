package com.service;

import com.advices.DataNotFoundedException;
import com.entity.Course;
import com.entity.Student;
public interface AdminStudentManagementService {
	 
		Student enrollStudent (int studentId, int courseId, String batchName) throws DataNotFoundedException, Exception;
		//Student enrollStudent (StudentCourse studentCourse);
		Course addNewCourse(Course c) throws Exception; 
		Student deEnRollstudent(int studentId, int courseId, String batchName, int enrollmentId) throws DataNotFoundedException, Exception;
}
