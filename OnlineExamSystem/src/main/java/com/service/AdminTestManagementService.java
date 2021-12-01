package com.service;

import com.advices.DataNotFoundedException;
import com.entity.TestPaper;
import com.entity.TestQuestion;

public interface AdminTestManagementService {
	//TestPaper addNewTest(TestPaper testPaper, int courseId) throws DataNotFoundedException, Exception;
	boolean removeQuestionById(int id) throws DataNotFoundedException, Exception; 
	TestPaper addQuestionForExistingTestPaper(int testPaperCode, TestQuestion testQuestion) throws DataNotFoundedException, Exception;
	//String removeTestPaper(int courseId, int testPaperCode) throws DataNotFoundedException, Exception;
	String removeTestPaper(String courseName, int testpaperCode) throws Exception;
	TestPaper addNewTest(TestPaper testPaper, String courseName) throws Exception;
}
