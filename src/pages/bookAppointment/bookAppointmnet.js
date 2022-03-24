import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import StarRating from "../../components/StarRating/starRating";
import "./bookAppointmnet.scss";
import { useDispatch } from "react-redux";
import { add_appointment } from "../../redux/action/appointment/index";
import { useState } from "react";
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import moment from 'moment';

function BookAppointment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { lawyerData = {} } = state || {};

  const [inputData, setInputData] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const onChangAppointmentDate = (value) => {
    const appointmentDate = value;
    setAppointmentDate(appointmentDate);
  };

  const handleToConfirm = (item) => {
    if (inputData && appointmentDate) {
      item.userName = inputData;
      item.date = appointmentDate;

      dispatch(add_appointment(item));
      navigate("/appointments");
    }
  };

  const handleOnChange = (e) => {
    setInputData(e.target.value);
  };

  let dateStartProps = {
    placeholder: 'Date',
    disabled: false,
  };
  const yesterday = moment().subtract(1, 'day');

  const disablePastDt = (current) => {
    return current.isAfter(yesterday);
  };

  const renderLawyerDetails = () => {
    return (
      <div className="card appoinment_lawyer_card py-4 px-5">
        {lawyerData.id ? (
          <div className="row" key={lawyerData.id}>
            <div className="col">
              <img
                src={lawyerData.image}
                alt=""
                className="appoinment_lawyer_image"
              />
            </div>
            <div className="col">
              <div>
                <p className="lawyer_info">
                  Name : <span className="mx-3"> {lawyerData.name} </span>{" "}
                </p>
                <p className="lawyer_info">
                  Specialties :{" "}
                  <span className="mx-3"> {lawyerData.specialties} </span>{" "}
                </p>
                <p className="lawyer_info">
                  Fees : <span className="mx-3"> ${lawyerData.fees} </span>{" "}
                </p>

                <p className="lawyer_info">
                  Ratings :{" "}
                  <span className="mx-3">
                    <StarRating
                      rating={lawyerData.rating}
                      numberOfStars={5}
                      starDimension={"25px"}
                      starColor={"rgb(252 252 4)"}
                      starSpacing={"2px"}
                    />
                  </span>
                </p>
              </div>

              <div className="mt-3 mb-3">
                <label htmlFor="appointmentDate" className="client_info">
                  Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="name"
                  onChange={(e) => handleOnChange(e)}
                  value={inputData}
                  required
                />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="input_label" className="client_info">
                  Appointment Date
                </label>
                <Datetime
                timeFormat={true}
                inputProps={dateStartProps}
                isValidDate={disablePastDt}
                onChange={(value) => onChangAppointmentDate(value)}
              />
                {!inputData || !appointmentDate ? (
                  <small className="col error_msg mb-5">
                    Kindly fill the Name and Date Time field to proceed
                  </small>
                ) : null}
              </div>

              <div className="row mt-5 ">
                <button
                  className="book_button col-md-6"
                  onClick={() => handleToConfirm(lawyerData)}
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="book_appointment_content mx-4 mb-5 ">
      <div className="container py-5">
        <div className="header">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="back"
            onClick={() => navigate(-1)}
          />
          <p className="heading_sweepStakes_main"> BOOK AN APPOINTMENT </p>
        </div>

        {lawyerData.id ? (
          <div>{renderLawyerDetails()}</div>
        ) : (
          <h1>
            Kindly go back to Lawyer page and select a lawyer to make an
            appointment
          </h1>
        )}
      </div>
    </div>
  );
}

export default BookAppointment;
