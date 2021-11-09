package com.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;

@SuppressWarnings("serial")
@Entity
public class Student implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentId;
	
	@NotEmpty(message="username to be filled")
	@Size(min=4,message="username should have atleast two characters")
	private String username;
	
	@NotEmpty(message="password to be filled")
	@Size(min=8, message="password should have atleast 8 characters")
	private String password;
	
	@NotEmpty(message="first name to be filled")
	@Size(min=2,message="first name should have atleast two characters")
	private String firstName;

	@NotEmpty(message="last name to be filled")
	@Size(min=2,message="last name should have atleast two characters")
	private String lastName;
	
	@NotEmpty(message="gender to be filled")
	@Pattern(regexp="^male$|^female$|^Male$|^Female$", message="allowed input : male or female")
	private String gender;
	
	@NotEmpty(message="email to be filled")
	@Email(message="please give the valid email")
	private String email;
	
	@NotEmpty(message="phone number to be filled")
	@Size(min=10,max=10,message="phone number should be exact ten characters")
	@Pattern(regexp="(^$|[0-9]{10})",message="phone number should be exact ten characters")
	private String mobileNo;
	
	@OneToMany(targetEntity = StudentEnrollment.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "studentId", referencedColumnName = "studentId")
	private List<StudentEnrollment> studentEnrollment = new ArrayList<>();;
	
	
	public List<StudentEnrollment> getStudentEnrollment() {
		return studentEnrollment;
	}
	public void addStudentEnrollment(StudentEnrollment studentEnrollment) {
		this.studentEnrollment.add(studentEnrollment);
	}
	
	public void removeStudentEnrollment(StudentEnrollment studentEnrollment) {
		this.studentEnrollment.remove(studentEnrollment);
	}
	
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	@Override
	public String toString() {
		return "Student [studentId=" + studentId + ", username=" + username + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", Gender=" + gender + ", Email=" + email + ", mobileNo="
				+ mobileNo + "]";
	}

}
