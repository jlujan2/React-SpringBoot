package com.opie.meters.opieTester.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.opie.meters.errors.PatientNotFoundException;
import com.opie.meters.opieTester.entity.Patient;
import com.opie.meters.opieTester.entity.Record;
import com.opie.meters.opieTester.service.PatientService;

@RestController
@RequestMapping(path="/demo")
@CrossOrigin(origins = "http://localhost:3001")
public class PatientController {

	@Autowired
	PatientService patientService;
	
	@GetMapping(path="/hello")
	public String getAllUsers() {
		// This returns a JSON or XML with the users
		return "response";
	}
	
	@PostMapping(path="/add-patient")
	@CrossOrigin(origins = "http://localhost:3001")
	public @ResponseBody String addPatient(@RequestBody Patient patient) {
		patientService.addPatient(patient);
		return "saved";
	}
	
	@PostMapping(path="/add-record")
	public @ResponseBody String addRecord( @RequestBody Record record) {
		System.out.println(record.toString());
		int patientId = record.getPatientId();
		Patient patient = patientService.getPatient(patientId).get();
		patient.AddRecord(record);
		patientService.addPatient(patient);
		return "saved";
	}
	
	@GetMapping(path="/get-patients")
	public @ResponseBody List<Patient> getAllPatients() {
		
			List<Patient> patients = patientService.getAllPatients();
			return patients;
		
	}
	
	@GetMapping(path="/get-patient")
	@CrossOrigin(origins = "http://localhost:3001")
	public @ResponseBody Patient getPatientById(@RequestParam int patientId) {
		try {
			Patient patient = patientService.getPatient(patientId).get();
			return patient;
		} catch(PatientNotFoundException e) {
			throw new PatientNotFoundException("id-"+patientId +" not found" );
		}
	}
	
	@GetMapping(path="/get-records")
	public @ResponseBody List<Record> getRecords(@RequestParam int patientId) {
		Patient patient = patientService.getPatient(patientId).get();
		return patient.getRecords();
	}
}
