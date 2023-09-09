import React, { useState, useEffect } from "react";
import "./Login.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track login status
  const [visible, setVisible] = useState(false);
  console.log("isLoggedIn", isLoggedIn);

  // Check if the user is already logged in (on page load)
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    }
  }, []);

  const handleLoginClick = () => {
    onLogin(username, password);
    setIsLoggedIn(true); // Set isLoggedIn to true after successful login
    window.localStorage.setItem("loggedInUser", username);
    window.localStorage.setItem("isLoggedIn", false);
  };

  return (
    <div className="LoginContainer">
      {isLoggedIn ? (
        <form>
          <h2>Login</h2>
          <div>
            <label>Username or Email:</label>
            <br />
            <input
              type="text"
              placeholder="Enter your username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <div className="password-container">
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
              ></input>
              <div className="eye-icon" onClick={() => setVisible(!visible)}>
                {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
          </div>
          {/* <a className="fp" href="/">
            Forgot Password?
          </a> */}
          <button type="button" onClick={handleLoginClick}>
            Login
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default Login;
