import {ADD_APPOINTMENT, DELETE_APPOINTMENT} from "../../constants";

export const add_appointment = (appointmentData) => dispatch => {
    dispatch({
        type: ADD_APPOINTMENT,
        payload: appointmentData,
    });
    return Promise.resolve();
}


export const delete_appointment = (item) => {
    return {
        type: DELETE_APPOINTMENT,
        payload: item,
    }
}
