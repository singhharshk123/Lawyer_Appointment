import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/aboutUs/about';
import Lawyer from './pages/lawyers/lawyer';
import BookAppointment from './pages/bookAppointment/bookAppointmnet';
import Appointment from './pages/appoinments/appoinment';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/lawyers" element={<Lawyer />} />
          <Route path="/book_appointment" element={<BookAppointment />} />
          <Route path="/appointments" element={<Appointment />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;