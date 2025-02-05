import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import './login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem('userEmail'); // Match key from signup
    const savedPassword = localStorage.getItem('userPassword');

    if (!savedEmail || email !== savedEmail) {
      setErrorEmail("Wrong Email");
      setErrorPassword("");
    } else if (password !== savedPassword) {
      setErrorPassword("Incorrect password");
      setErrorEmail(""); 
    } else {

      navigate('/dashboard');
    }
  };

  return (
    <div className='bodyl'>
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        <div className="card-image"></div> 

        <form className="forma" onSubmit={handleLogin}>
          <h1 style={{ marginBottom: '20px' }}>Login</h1>
          
          <input className='inputa'
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail(""); 
            }}
          />
          <span className="error">{errorEmail}</span>

          <input className='inputa'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorPassword("");
            }}
          />
          <span className="error">{errorPassword}</span>

          <button className="submit-btn">
            Submit
          </button>
                    <Link to="/signup" style={{textDecoration: "none",position:"relative",top:"40px"}}>
                    <a style={{ fontStyle: "normal", color: "orange", }}>
                      Create new account?
          </a>
                    </Link>
                    <Link to="/" style={{textDecoration: "none",position:"relative",top:"60px"}}>
                    <a style={{ fontStyle: "normal", color: "orange", }}>
                      Back?
          </a>
                    </Link>
        </form>
      </motion.div>
    </div>
  );
}
