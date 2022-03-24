import LawyerCard from '../../components/Cards/lawyerCard/lawyerCard';
import { familyLawyerData, divorceLawyerData, taxLawyerData } from '../../data/lawyersData/lawyerData';
import './lawyer.scss';


function Lawyer () {

    return (
      <div className="lawyers_content mt-5 " >
        <div className="container" > 
          <h1 className="text-center mt-3"> LIST OF LAWYERS </h1>
          
          <div>
          <p className="lawyer_heading mt-4"> Family Lawyer  </p>
          <div>
              <LawyerCard cardInformation={familyLawyerData} />
          </div>
          </div>

          <div>
          <p className="lawyer_heading mt-4"> Divorce Lawyer  </p>
          <div>
              <LawyerCard cardInformation={divorceLawyerData} />
          </div>
          </div>

          <div>
          <p className="lawyer_heading mt-4"> Tax Lawyer </p>
          <div>
              <LawyerCard cardInformation={taxLawyerData} />
          </div>
          </div>

        </div>

        
      </div>
    );
  }
  
  export default Lawyer;
  