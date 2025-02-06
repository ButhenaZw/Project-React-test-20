import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const students = [
    { email: "buthenaabdullah@gmail.com", password: "123456", firstName: "Buthena", lastName: "Abdullah",phoneNumber:"+962779480559" },
    { email: "sherinramadan@gmail.com", password: "123456", firstName: "Shiren", lastName: "Ramadan",phoneNumber:"+962777863772" }
  ];

  const teachers = [
    { email: "amroalwageei@gmail.com", password: "admin123" },
    { email: "leenhammouri@gmail.com", password: "admin123" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const student = students.find(user => user.email === email && user.password === password);
    if (student) {
      localStorage.setItem("studentProfile", JSON.stringify({
        email: student.email,
        firstName: student.firstName,
        lastName: student.lastName,
        phoneNumber: student.phoneNumber, 
        profileImage: "https://bootdey.com/img/Content/avatar/avatar1.png" // Default profile image
      }));

      toast.success("Login successful! Redirecting...", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
      return;
    }

    // Check if the user is a teacher
    const teacher = teachers.find(user => user.email === email && user.password === password);
    if (teacher) {
      toast.success("Login successful! Redirecting...", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/dash");
      }, 2000);
      return;
    }

    // If credentials are incorrect
    setError("Invalid email or password!");
    toast.error("Invalid email or password!");
  };

  return (
    <div className='bodyl'>
      <motion.div 
        className="cardl"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        <div className="card-image"></div> 

        <form className="forma" onSubmit={handleLogin}>
          <h1 style={{ marginBottom: '20px' }}>Login</h1>
          
          <input 
            className='inputa'
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input 
            className='inputa'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <span className="text-red-500">{error}</span>}

          <button className="submit-btn">Submit</button>

          <Link to="/signup" style={{ textDecoration: "none", position: "relative", top: "40px" }}>
            <span style={{ fontStyle: "normal", color: "#ff7900" }}>
              Create new account?
            </span>
          </Link>

          <Link to="/" style={{ textDecoration: "none", position: "relative", top: "60px" }}>
            <span style={{ fontStyle: "normal", color: "#ff7900" }}>
              Back?
            </span>
          </Link>
        </form>
      </motion.div>
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default Login;
