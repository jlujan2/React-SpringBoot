package com.opie.meters.opieTester.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.opie.meters.opieTester.entity.Patient;
import com.opie.meters.opieTester.repository.PatientRepository;

@Service
@Transactional(
		propagation = Propagation.SUPPORTS,
		readOnly = true)
public class PatientService {

	@Autowired
	PatientRepository patientRepository;
	
	public void addPatient(Patient patient) {
		patientRepository.save(patient);
	}
	
	public List<Patient> getAllPatients() {
		List<Patient> patients = new ArrayList<>();
		patientRepository.findAll()
		.forEach(patients::add);
		return patients;
	}
	
	public Optional<Patient> getPatient(Integer id) {
		return patientRepository.findById(id);
	}
}
