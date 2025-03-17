import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import signup_img from '../assets/login/login.png';
import Google_icon from '../assets/login/Icon-Google.png';

const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className='signup'> 
    {/* Section for the signup image */}
            <div className="signup-image"> 
                <img src={signup_img} alt="Signup" />
            </div>


    {/* Form section for user input */}
            <div className="signup-form">  
                <h1>Create an account</h1>
                <p>Enter your details below</p>

                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email or Phone Number'/>
                <input type="password" placeholder='Password'/>

                <div className="google"> 
                    <img src={Google_icon} alt="" />
                    Sign up with Google
                </div>
                
                <div className="submit">
                    <button type='submit' className='mainButton'>Sign Up</button>
                    <a onClick={() => navigate('/login')}>Already have an account?</a>
                </div>
            </div>
        </div>
    );
}

export default Signup;
