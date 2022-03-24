import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import StarRating from '../../StarRating/starRating';
import './lawyerCard.scss';

const LawyerCard = ( props ) => {

  let navigate = useNavigate();

    const {
        cardInformation = [],
    } = props || {};

    const handleBookAppointment = ( item ) => {
      navigate("/book_appointment", { state: { lawyerData: item } });
    };

return (
   <div className='row lawyer_card mb-5 '>
       {
            cardInformation.map((item, index) =>{
                return (
                  <div className='col-md-3 col-sm-4 col-xs-4 mb-5'>
                      <Card className='cards_info mb-2' key={index} >
                      <Card.Img variant="top lawyer_img" src={item.image} />
                    <Card.Body>
                      <Card.Title className='text-center' >{item.name}</Card.Title>
                      <Card.Text className='mt-1 mb-0'>
                          <div className='features  mb-3'>
                          Specialties:-{' '}{item.specialties}
                          </div>
                          <div  className='features' >
                            {
                              item.fees ? <span> Fees:-{' '}${item.fees}{' '} per/hr</span>
                              : null
                            }
                          </div>
                          </Card.Text>
                          <div  className='ratings mb-2' >
                            {
                              item.rating ? 
                              <StarRating 
                              rating={item.rating}
                              numberOfStars={5}
                              starDimension={'25px'}
                              starColor={'rgb(252 252 4)'}
                              starSpacing={'2px'}
                              />
                              : null
                            }
                          </div>
                      
                    </Card.Body>
                  </Card> 
                  {
                    item.booking ? 
                    <div className='text-center'>
                    <button className='book_button' onClick={( ) => handleBookAppointment( item)} >
                      Book Appointment
                    </button>
                  </div> 
                  : null
                  }  
                  </div>
                );
              })
       }
   </div>
    
  );
}

export default LawyerCard ;