import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Signup from './Component/Login/Signup';
import Login from './Component/Login/login';




function App() {

  return (
    <>
 
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
