import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/aboutUs/about';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about_us" element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;