import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import StarRating from "../../components/StarRating/starRating";
import './appoinment.scss';
import Moment from 'react-moment';
import { delete_appointment } from "../../redux/action/appointment/index";

function Appointment() {
  
  const dispatch = useDispatch();
  const events = useSelector((state) => state.appointment.appointments);
  
  const handleToDeleteAppointment = ( item ) => {
    dispatch(delete_appointment(item));
  };

  const renderAccordianData = () => {
    return (
      <div>
        { events.length > 0 ? events && events.map((item, index) => {
          return (
            <Accordion defaultActiveKey={events[0].id } key={index} className="mb-5">
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  Lawyer Name : {item.name}
                  <div className="row trash_icon">
                   <div className="col text-end">
                     <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleToDeleteAppointment(item)}  />
                   </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                <p className="lawyer_info">
                    Client Name : <span className="mx-3"> {item.userName} </span>{" "}
                  </p>
                  <p className="lawyer_info">
                    Appointment Date : <span className="mx-3"> 
                    <Moment date={item.date} format={"dddd, MMMM Do YYYY, h:mm:ss a"} />
                     
                    </span>
                  </p>
                  <p className="lawyer_info">
                    Specialties :{" "}
                    <span className="mx-3"> {item.specialties} </span>{" "}
                  </p>
                  <p className="lawyer_info">
                    Fees : <span className="mx-3"> ${item.fees} </span>{" "}
                  </p>

                  <p className="lawyer_info">
                    Ratings :{" "}
                    <span className="mx-3">
                      <StarRating
                        rating={item.rating}
                        numberOfStars={5}
                        starDimension={"25px"}
                        starColor={"rgb(252 252 4)"}
                        starSpacing={"2px"}
                      />
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        }) 
      :<h1>Kindly book an appoinment to see the appoinment details</h1>}
      </div>
    );
  };

  return (
    <div className="appointment_content mx-4 ">
      <div className="container">
        <h1 className="text-center mt-3"> LIST OF APPOINTMENTS </h1>

        <div className="mt-5 mb-5 ">{renderAccordianData()}</div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    delete_appointment: item => dispatch(delete_appointment(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
) ( Appointment);
