import LawyerCard from '../../components/Cards/lawyerCard/lawyerCard';
import { homeLawyersData } from '../../data/lawyersData/lawyerData';
import './home.scss';

function Home () {

  return (
    <div className="home">
      <div className="container" >

        <div className="home_box mt-5 p-5">
        <div>
        <h2 className="text-center home_box_titles"> Free Legal Advice Online </h2>
        <h2 className="text-center home_box_titles"> From Top Rated Lawyers  </h2>

        <p>Choose from over 10,000 lawyers across 700+ cities in India 10+ Lawyers are online TALK TO A LAWYER ASK A FREE QUESTION</p>
        </div>

        <div className='row mt-5 mb-5'>
          <div className='col-md-6 col-sm-6 col-xs-6' >
            <button className='talk_button'> TALK TO A LAWYER </button>
          </div>
          <div className='col-md-6 col-sm-6 col-xs-6' >
          <button className='ask_button'> ASK A FREE QUESTION </button>
          </div>
        </div>

        </div>

        <div className='mt-5'>
          <h1 className="text-center home_box_titles" >Top-rated lawyers in India</h1>
          <div className='mb-5'>
            <LawyerCard  cardInformation={homeLawyersData}  />
          </div>

        </div>

      </div>

      
    </div>
  );
}

export default Home;
