import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Appointment () {

    const { state } = useLocation();
    const { appointmentData = { } } = state || { } ;

    const [ appointmentList, setAppointmentList ] = useState([]);

    useEffect( ( ) => {
       setAppointmentList(prevArray => [...prevArray, appointmentData]); 
    }, [ appointmentData]);
    
    console.log('appointmentList',appointmentList);


    return (
      <div className="mx-4 " >
        <h1>Appointment</h1>
      </div>
    );
  }
  
  export default Appointment;
  