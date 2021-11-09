package com.DTO;

import javax.validation.constraints.NotEmpty;

public class ExamFormDTO {
	
		@NotEmpty(message="question number to be filled")
		private int questionNo;
				
		private int markedOption;
		
		private int testPaperCode;
		
		private int examRollNo;
		
		public int getQuestionNo() {
			return questionNo;
		}
		public void setQuestionNo(int questionNo) {
			this.questionNo = questionNo;
		}
		public int getMarkedOption() {
			return markedOption;
		}
		public void setMarkedOption(int markedOption) {
			this.markedOption = markedOption;
		}
		public int getTestPaperCode() {
			return testPaperCode;
		}
		public void setTestPaperCode(int testPaperCode) {
			this.testPaperCode = testPaperCode;
		}
		public int getExamRollNo() {
			return examRollNo;
		}
		public void setExamRollNo(int examRollNo) {
			this.examRollNo = examRollNo;
		}
		@Override
		public String toString() {
			return "ExamFormDTO [questionNo=" + questionNo + ", markedOption=" + markedOption + ", testPaperCode="
					+ testPaperCode + ", examRollNo=" + examRollNo + "]";
		}

	}