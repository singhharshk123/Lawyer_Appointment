import {combineReducers} from "redux";
import appointmentReducer from "./appointment";

const rootReducer = combineReducers({
    appointment: appointmentReducer,
});

export default rootReducer;