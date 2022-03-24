import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import StarRating from "../../components/StarRating/starRating";
import './appoinment.scss';
// import { useLocation } from "react-router-dom";

function Appointment() {
  const events = useSelector((state) => state.appointment.appointments);

  console.log("appointmentList", events);

  const renderAccordianData = () => {
    return (
      <div>
        {events.map((item, index) => {
          return (
            <Accordion defaultActiveKey={index + 1} className="mb-5">
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  Lawyer Name : {item.name}
                  <div className="row trash_icon">
                   <div className="col text-end">
                     <FontAwesomeIcon icon={faTrashAlt}  />
                   </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
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
        })}
      </div>
    );
  };

  return (
    <div className="appointment_content mx-4 ">
      <div className="container">
        <h1 className="text-center mt-3"> LIST OF LAWYERS </h1>

        <div className="mt-5 mb-5 ">{renderAccordianData()}</div>
      </div>
    </div>
  );
}

export default Appointment;
