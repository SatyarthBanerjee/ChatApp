import React from "react";
import styles from "./loginbox.module.css";
const Register = ({ handleRegister }) => {
  return (
    <div className={styles.loginbox}>
      <div></div>
      <h2>Create a new account</h2>
      <div className={styles.inputcreds}>
       
          

        <div className={styles.inputcred}>
          {/* <label>Password</label> */}
          {/* <label>Email</label> */}
          <div className={styles.input1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                fill="#1C1C1C"
              />
            </svg>
            <input
              onChange={(e) => handleChange("username", e.target.value)}
              type="text"
              placeholder="Email"
            />
          </div>
        
          <div className={styles.input1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"
                fill="#1C1C1C"
              />
            </svg>
            <input
              onChange={(e) => handleChange("password", e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.input1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"
                fill="#1C1C1C"
              />
            </svg>
            <input
              onChange={(e) => handleChange("password", e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <button>Submit</button>
        <p style={{ cursor: "pointer" }} onClick={handleRegister}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Register;
