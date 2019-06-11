package com.opie.meters.opieTester.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.opie.meters.opieTester.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer>{

}
