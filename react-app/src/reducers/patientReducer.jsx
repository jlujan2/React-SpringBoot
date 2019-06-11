import {GET_PATIENTS, GET_PATIENT} from "../actions/types";


const initialState = {
    patients: [],
    patient: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_PATIENTS:
        return {
            ...state,
            patients: action.payload
        };

        case GET_PATIENT :
            return {
                ...state,
                patient: action.payload
        };

        default:
            return state;
    }
}