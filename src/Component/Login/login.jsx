import React from 'react';
import './login.css';
import log_img from '../../assets/login/login.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='login'>  
    {/* Section for the login image */}
        <div className="login-image">  
            <img src={log_img} alt="Login" />
        </div>

    {/* Form section for user input */}
        <div className="login-form"> 
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>

            <input type="text" placeholder='Email or Phone Number'/>
            <input type="password" placeholder='Password'/>

            <div className="submit"> 
                <button type='submit' className='mainButton'>Log in</button>
                <a onClick={() => navigate('/signup')}>Forget Password?</a>
            </div>
        </div>
    </div>
  );
}

export default Login;
