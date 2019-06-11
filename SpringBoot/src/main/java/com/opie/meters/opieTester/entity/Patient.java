package com.opie.meters.opieTester.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;

@Entity
public class Patient {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String name;
	
	private String lastName;
	
	private Date dob;
	
	private String healthCondition;
	
	@Email
	private String email;
	
	private String comments;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="patient_id", referencedColumnName="id")
	private List<Record> records;
	
	public Patient(Integer id, String name, String lastName, Date dob, String healthCondition, String comments, String email) {
		super();
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.dob = dob;
		this.healthCondition = healthCondition;
		this.comments = comments;
		this.email = email;
	}
	
	public Patient() {
		super();
	}
	
	public String getHealthCondition() {
		return healthCondition;
	}

	public void setHealthCondition(String healthCondition) {
		this.healthCondition = healthCondition;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}
	
	public void AddRecord(Record record) {
		records.add(record);
	}
	
	public List<Record> getRecords() {
		return records;
	}

	public void setRecords(List<Record> records) {
		this.records = records;
	}
		
}
