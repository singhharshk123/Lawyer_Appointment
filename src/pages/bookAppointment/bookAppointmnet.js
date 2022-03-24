import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import StarRating from "../../components/StarRating/starRating";
import './bookAppointmnet.scss';

import { useDispatch } from 'react-redux';
import { add_appointment } from "../../redux/action/appointment/index";

function BookAppointment () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { lawyerData = { } } = state || { } ;

    const handleToConfirm = ( item ) => {
      dispatch(add_appointment(item))
      navigate("/appointments");
    };

    const renderBookButtons = ( ) => {
        return (
            <div className="col-md-6 mt-5">
            {
                lawyerData.booking ? 
                <button className='book_button'  >
                    Schedule Appointment Timing
                </button>
                : null
            }      
            </div>
        )
    };

    const renderAppoinmentDetails = ( ) => {
        return (
            <div className="card appoinment_lawyer_card py-4 px-5">
            {
              lawyerData.id ? <div className="row" key={lawyerData.id} >
                  <div className="col"  >
                      <img src={lawyerData.image} alt='' className="appoinment_lawyer_image" />
                  </div>
                  <div className="col mt-3" >
                     <div>
                     <p className="lawyer_info" >Name {' '}: <span className="mx-3" > {lawyerData.name} </span> </p>
                      <p className="lawyer_info" >Specialties {' '}: <span className="mx-3" > {lawyerData.specialties} </span> </p>
                      <p className="lawyer_info" >Fees {' '}: <span className="mx-3" > ${lawyerData.fees} </span> </p>
                      
                      <p className="lawyer_info" >Ratings {' '}: <span className="mx-3" > 
                      <StarRating 
                            rating={lawyerData.rating}
                            numberOfStars={5}
                            starDimension={'25px'}
                            starColor={'rgb(252 252 4)'}
                            starSpacing={'2px'}
                            />
                       </span> 
                       </p>

                       {renderBookButtons()}     
                     </div>

                     <div className="row mt-5 ">
                        <button className='confirm_button col-md-6' onClick={() => handleToConfirm(lawyerData)}  >
                            Confirm Appointment
                        </button>
                    </div>

                  </div>
                
              </div>
              : null
            }
        </div>
        )
    }

    return (
      <div className="book_appointment_content mx-4 " >
           <div className="container py-5" > 
          <div className='header'>
            <FontAwesomeIcon icon={faAngleLeft} className='back' onClick={() => navigate(-1) } />
            <p className="heading_sweepStakes_main"> BOOK AN APPOINTMENT </p>
          </div>

          {
              lawyerData.id ? <div>
                  {renderAppoinmentDetails()} 
                  </div> 
                  : <h1>Kindly go back to Lawyer page and select a lawyer to make an appointment</h1>
          }
        </div>
      </div>
    );
  }
  
  export default BookAppointment;
  