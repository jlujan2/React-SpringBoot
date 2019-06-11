import axios from "axios";
import { GET_PATIENTS, GET_PATIENT } from "./types";

export const addPatient = (patientdObj, history) => async dispatch => {
    await axios.post("http://localhost:8080/demo/add-patient", patientdObj);
    history.push("/");
}

export const getPatients = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/demo/get-patients")
    dispatch({
        type:GET_PATIENTS,
        payload:res.data
    })
};

export const getPatient = (pt_id, history) => async dispatch => {
    try{
        const res = await axios.get("http://localhost:8080/demo/get-patient/?patientId=" +pt_id)
        dispatch({
            type: GET_PATIENT,
            payload: res.data
        });
    } catch(error) {
        history.push("/");
    }
};