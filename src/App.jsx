import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Signup from './Component/Login/Signup';
import Login from './Component/Login/login';
import About from './Component/About/About';
// import TeamSlider  from './Component/About/TeamSlider';



function App() {

  return (
    <>
 
    <Router>
    {/* <TeamSlider /> */}
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
