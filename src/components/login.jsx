import React, { useState } from 'react';
import './login.css'; 
import image from '../images/image.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      <header>
        <div className="container">
          <div className="first">
            <div className="imagetag">
              <img className="image" src={image} alt="Garage App" />
            </div>
            <div className="headings">
              <h2 className="heading2">
                Streamline Your Garage<br /> Management Processes
              </h2>
              <p className="firstpara">
                Completely free from your traditional<br /> methods of paper-based records
              </p>
              <img className="image2" src={image2} alt="Garage App" />
            </div>
          </div>
          <div className="second">
            <h3 className="login">Login</h3>
            <form action="/" className="form">
              <label htmlFor="email">Email Address</label><br />
              <input type="email" id="email" name="email" placeholder="Enter Email" required /><br /><br />
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  id="toggle-password"
                  className="toggle-password"
                  aria-label="Toggle Password Visibility"
                >
                  {passwordVisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                </button>
              </div><br /><br />
              <div className="remember-me">
                <input type="checkbox" id="remember-me" name="remember-me" />
                <label  htmlFor="remember-me">Remember Me</label>
              </div>
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <input type="submit" value="Proceed" />
              <p>Don't have an account? <a href="#">Sign Up Now</a></p>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;