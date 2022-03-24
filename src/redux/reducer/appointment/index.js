import { ADD_APPOINTMENT, DELETE_APPOINTMENT } from "../../constants";

const initialState = {
    appointments:[],
}
const appointmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_APPOINTMENT:
            return {
                ...state,
                appointments: [...state.appointments, action.payload],
            };
        case DELETE_APPOINTMENT:
            return {
                appointments : [
                    ...state.appointments.filter( appointment => appointment !== action.payload )
                ]
            }
        default: 
            return state;
    }
}

export default appointmentReducer;
