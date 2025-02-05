import { useState } from "react";
import { motion } from "framer-motion"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signup.css";

function Main() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault();
    let isValid = true;

    if (username.length >= 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be at least 8 characters.");
      setUserColor("red");
      isValid = false;
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Invalid email format");
      isValid = false;
    }

    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters.");
      setPasswordColor("red");
      isValid = false;
    }

    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords do not match.");
      setConfirmPasswordColor("red");
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      navigate("/login");
    }
  }

  return (
    <div className="bodys">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-image"></div>

        <form className="forms">
          <h1>Sign Up</h1>

          <input
            className="inputs"
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrorUserName("");
              setUserColor("");
            }}
          />
          <p className="error">{errorUserName}</p>

          <input
            className="inputs"
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail("");
              setEmailColor("");
            }}
          />
          <p className="error">{errorEmail}</p>

          <input
            className="inputs"
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorPassword("");
              setPasswordColor("");
            }}
          />
          <p className="error">{errorPassword}</p>

          <input
            className="inputs"
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorConfirmPassword("");
              setConfirmPasswordColor("");
            }}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
          <Link to="/login" style={{textDecoration: "none",position:"relative",top:"40px"}}>
          <a style={{ fontStyle: "normal", color: "orange", }}>
  Already have an account?
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

export default Main;
