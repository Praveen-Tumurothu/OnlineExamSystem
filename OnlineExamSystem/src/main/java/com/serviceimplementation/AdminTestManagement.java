package com.serviceimplementation;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advices.AdminAuthenticationFailedException;
import com.advices.DataNotFoundedException;
import com.entity.Course;
import com.entity.Exam;
import com.entity.TestPaper;
import com.entity.TestQuestion;
import com.repository.CourseRepository;
import com.repository.ExamRepository;
import com.repository.TestPaperRepository;
import com.repository.TestQuestionRepository;
import com.service.AdminTestManagementService;

@Service
public class AdminTestManagement implements AdminTestManagementService{
	
	@Autowired
	private AdminAuthenticationImpl adminAuthenticationImpl;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private TestPaperRepository testPaperRepository;
	
	@Autowired
	private TestQuestionRepository testQuestionRepository;
	
	@Autowired
	private ExamRepository examRepository;
	
	@Override
	public TestPaper addNewTest(TestPaper testPaper, String courseName) throws Exception {
		if (adminAuthenticationImpl.isLogin) {
		Course course = courseRepository.findBycourseName(courseName).orElseThrow(()-> new DataNotFoundedException("Cousre Id not found in database"));
		course.addTestpaper(testPaper);
		testPaper.setCourseName(course.getCourseName());
		return testPaperRepository.save(testPaper);
		} else {
			throw new AdminAuthenticationFailedException("You Must be Logged in as Administrator...");
		}
		
	}

	@Override
	public boolean removeQuestionById(int id) throws Exception {
		if (adminAuthenticationImpl.isLogin) {
		TestQuestion a = testQuestionRepository.findById(id).orElseThrow(()-> new DataNotFoundedException("Question Id not found in database"));
		if(a != null)
		{
			testQuestionRepository.deleteById(id);
			return true;
		}
		return false;
		} else {
			throw new AdminAuthenticationFailedException("You Must be Logged in as Administrator...");
		}
	}

	@Override
	public TestPaper addQuestionForExistingTestPaper(int testPaperCode, TestQuestion testQuestion) throws Exception {
		if (adminAuthenticationImpl.isLogin) {
		TestPaper testPaper = testPaperRepository.findById(testPaperCode).orElseThrow(()-> new DataNotFoundedException("testPaper code is not found in database"));
		
		testQuestion.setTpc(testPaperCode);
		testPaper.addTestquestion(testQuestion);
		
		testQuestionRepository.save(testQuestion);
		
		return testPaper;
		} else {
			throw new AdminAuthenticationFailedException("You Must be Logged in as Administrator...");
		}
	}

	@Override
	public String removeTestPaper(String courseName, int testpaperCode) throws Exception {
		if (adminAuthenticationImpl.isLogin) {
		Course course = courseRepository.findBycourseName(courseName).orElseThrow(()-> new DataNotFoundedException("course not found in database")); 
		TestPaper testPaper = testPaperRepository.findById(testpaperCode).orElseThrow(()-> new DataNotFoundedException("test Paper Code Id not found in database")); 
		
		//course.removeTestpaper(testPaper);
		testPaperRepository.deleteById(testpaperCode);
		return "Deleted Test Paper code = " + testpaperCode;
		} else {
			throw new AdminAuthenticationFailedException("You Must be Logged in as Administrator...");
		}
	}
	
	public List<TestPaper> getAllTestPapers() throws AdminAuthenticationFailedException
	{
		if (adminAuthenticationImpl.isLogin) {
		return testPaperRepository.findAll();
		}
		else {
			throw new AdminAuthenticationFailedException("You Must be Logged in as Administrator...");
		}
	}

	public List<TestQuestion> getAllQuestions(int testPaperCode) throws DataNotFoundedException {
		TestPaper testPaper =  testPaperRepository.findById(testPaperCode).orElseThrow(() -> new DataNotFoundedException("test Paper Code Id not found in database"));
		return testPaper.getTestquestion();
	}
	
	public List<Exam> getAllExams()
	{
		return examRepository.findAll();
	}
	
}
