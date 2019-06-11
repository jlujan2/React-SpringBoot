import axios from "axios";
import { GET_RECORDS } from "./types";


export const addRecord = (recordObj, history) => async dispatch => {
    await axios.post("http://localhost:8080/demo/add-record", recordObj);
    history.push("/");
}

export const getRecords = (patientId) => async dispatch => {
    const res = await axios.get("http://localhost:8080/demo/get-records?patientId=" +patientId)
    dispatch({
        type:GET_RECORDS,
        payload:res.data
    })
}


