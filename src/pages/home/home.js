import LawyerCard from '../../components/Cards/lawyerCard/lawyerCard';
import './home.scss';

function Home () {

 const cardsData = [
    {
      id: 1,
      name: 'Olive Yew',
      image:'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
      specialties:'Intellectual Property Lawyer',
      fees:22,   
    },
    {
      id: 2,
      name: 'Aida Bugg',
      image:'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
      specialties:'Public Interest Lawyer',
      fees:15,    
    },
    {
      id: 3,
      name: 'Maureen Biologist',
      image:'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE',
      specialties:'Tax Lawyer',
      fees:5,    
    },
    {
      id: 4,
      name: 'Teri Dactyl',
      image:'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
      specialties:'Corporate Lawyers',
      fees:40,   
    },
    {
      id: 5,
      name: 'Peg Legge',
      image:'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
      specialties:'Immigration Lawyers',
      fees:35,    
    },
    {
      id: 6,
      name: 'Allie Grater',
      image:'https://i.picsum.photos/id/1035/5854/3903.jpg?hmac=DV0AS2MyjW6ddofvSIU9TVjj1kewfh7J3WEOvflY8TM',
      specialties:'Criminal Lawyer',
      fees:27,    
    },
    {
      id: 7,
      name: 'John Doe',
      image:'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
      specialties:'Civil Rights Lawyer',
      fees:22,   
    },
    {
      id: 8,
      name: 'Richard Walker',
      image:'https://i.picsum.photos/id/203/4032/3024.jpg?hmac=yeLnHOEAWUYBtMnanR0-0Q7gSvYbyxPG3PLJYvm170Q',
      specialties:'Family Lawyer',
      fees:10,    
    },
    {
      id: 9,
      name: 'Stan Lee',
      image:'https://i.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
      specialties:'Family Lawyer',
      fees:40,    
    },
    {
      id: 10,
      name: 'Robert',
      image:'https://i.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g',
      specialties:'Family Lawyer',
      fees:5,    
    },
  ];


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
            <LawyerCard  cardInformation={cardsData}  />
          </div>

        </div>

      </div>

      
    </div>
  );
}

export default Home;
