package com.DTO;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class TestQuestionDTO {

	private int id;

	// getters and setterss
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}
	
	private int tpc;

	// getters and setters

	public int getTpc() {
		return tpc;
	}

	public void setTpc(int tpc) {
		this.tpc = tpc;
	}
	public int getQuestionNo() {
		return questionNo;
	}

	public void setQuestionNo(int questionNo) {
		this.questionNo = questionNo;
	}

	@NotEmpty(message = "question to be filled")
	private String question;

	@NotNull(message = "option 1 to be filled")
	private String option1;

	@NotNull(message = "option 2 to be filled")
	private String option2;

	@NotNull(message = "option 3 to be filled")
	private String option3;

	@NotNull(message = "option 4 to be filled")
	private String option4;

	@NotNull(message = "question number to be filled")
	private int questionNo;
}
