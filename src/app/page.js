import React from 'react'
import styles from "./page.module.css"
import Loginbox from './Components/Login/loginbox'
const page = () => {
  return (
    <div className={styles.mainbg}>

        <Loginbox/>
    </div>
  )
}

export default page