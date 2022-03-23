import { Card } from 'react-bootstrap';
import './lawyerCard.scss';

const LawyerCard = ( props ) => {

    const {
        cardInformation = [],
    } = props || {};

return (
   <div className='row lawyer_card '>
       {
            cardInformation.map((item, index) =>{
                return (
                  <div className='col-md-3'>
                      <Card className='sweepStake_card mb-5' key={index} >
                      <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title className='text-center' >{item.name}</Card.Title>
                      <Card.Text className='mt-1 mb-0'>
                          <div className='features  mb-3'>
                          Specialties:-{' '}{item.specialties}
                          </div>
                          <div  className='features' >
                             Fees:-{' '}${item.fees}{' '} per/hr
                          </div>
                          </Card.Text>
                      
                    </Card.Body>
                  </Card>    
                  </div>
                );
              })
       }
   </div>
    
  );
}

export default LawyerCard ;