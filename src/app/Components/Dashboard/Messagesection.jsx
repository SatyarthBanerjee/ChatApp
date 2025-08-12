import React from "react";
import styles from "./messagebox.module.css";
import Msgcomp from "../MsgComp/Msgcomp";
const Messagesection = () => {
  return (
    <div className={styles.messagebox}>
      <div className={styles.messagebox__header}>
        <div className={styles.mainhead}>
          <h3>Messages</h3>
          <svg
            style={{ cursor: "pointer", rotate: "90" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M13.28 5.96667L8.93333 10.3133C8.42 10.8267 7.58 10.8267 7.06667 10.3133L2.72 5.96667"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className={styles.msgcount}>
            <p>12</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 3.33334C10.8167 3.33334 3.33334 10.8167 3.33334 20C3.33334 29.1833 10.8167 36.6667 20 36.6667C29.1833 36.6667 36.6667 29.1833 36.6667 20C36.6667 10.8167 29.1833 3.33334 20 3.33334ZM26.6667 21.25H21.25V26.6667C21.25 27.35 20.6833 27.9167 20 27.9167C19.3167 27.9167 18.75 27.35 18.75 26.6667V21.25H13.3333C12.65 21.25 12.0833 20.6833 12.0833 20C12.0833 19.3167 12.65 18.75 13.3333 18.75H18.75V13.3333C18.75 12.65 19.3167 12.0833 20 12.0833C20.6833 12.0833 21.25 12.65 21.25 13.3333V18.75H26.6667C27.35 18.75 27.9167 19.3167 27.9167 20C27.9167 20.6833 27.35 21.25 26.6667 21.25Z"
            fill="#615EF0"
            style={{ cursor: "pointer" }}
          />
        </svg>
      </div>
      <div className={styles.msglist}>
        <div className={styles.searchbox}>
          <div className={styles.inpbox}>
            <p>search</p>
            <input placeholder="Search messages"></input>
          </div>
        </div>
        <Msgcomp/>
      </div>
    </div>
  );
};

export default Messagesection;
