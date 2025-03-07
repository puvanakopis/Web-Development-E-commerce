import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Signup from './Component/Login/Signup';
import Login from './Component/Login/login';
import About from './Component/About/About';
import Account from './Component/Account/Account';
import NotFound from './Component/NotFound/NotFound';



function App() {

  return (
    <>
 
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
