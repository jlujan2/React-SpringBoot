package com.opie.meters.opieTester.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Record {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private Date date;
	
	private Double time1;
	
	private Double speed1;
	
	private Double time2;
	
	private Double speed2;
	
	private String comments;
	
	@Column(name="patient_id")
	private Integer patientId;
	
	public Integer getPatientId() {
		return patientId;
	}

	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Record(int id, Date date, Double time1, Double speed1, Double time2, Double speed2, String comments) {
		super();
		this.id = id;
		this.date = date;
		this.time1 = time1;
		this.speed1 = speed1;
		this.time2 = time2;
		this.speed2 = speed2;
		this.comments = comments;
	}

	public Record() {
		super();
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Double getTime1() {
		return time1;
	}

	public void setTime1(Double time1) {
		this.time1 = time1;
	}

	public Double getSpeed1() {
		return speed1;
	}

	public void setSpeed1(Double speed1) {
		this.speed1 = speed1;
	}

	public Double getTime2() {
		return time2;
	}

	public void setTime2(Double time2) {
		this.time2 = time2;
	}

	public Double getSpeed2() {
		return speed2;
	}

	public void setSpeed2(Double speed2) {
		this.speed2 = speed2;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Record [id=" + id + ", date=" + date + ", time1=" + time1 + ", speed1=" + speed1 + ", time2=" + time2
				+ ", speed2=" + speed2 + ", patientId=" + patientId + "]";
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}
}
