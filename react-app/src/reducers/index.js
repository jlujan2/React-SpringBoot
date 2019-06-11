import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import recordReducer from "./recordReducer";
import patientReducer from "./patientReducer";

export default combineReducers({
  
  errors: errorsReducer,
  records: recordReducer,
  patients: patientReducer
});