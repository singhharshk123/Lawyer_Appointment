import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/faltu/about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
      
    </div>
  );
}

export default App;