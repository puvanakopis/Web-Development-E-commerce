import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Signup from './Page/Signup';
import Login from './Page/login';
import About from './Page/About'
import Account from './Component/Account/Account';
import Contact from './Page/Contact';
import NotFound from './Component/NotFound/NotFound';
import Home from "./Page/Home";


function App() {

  return (
    <>
 
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
