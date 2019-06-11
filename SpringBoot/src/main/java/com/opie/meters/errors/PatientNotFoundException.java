package com.opie.meters.errors;

public class PatientNotFoundException extends RuntimeException{

	public PatientNotFoundException(String e) {
		super(e);
	}
}
