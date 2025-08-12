import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import styles from "./dashboard.module.css"
import Messagesection from '../Components/Dashboard/Messagesection'
import MainChatBox from '../Components/Dashboard/MainChatBox'
const page = () => {
  return (
    <div className={styles.dashboardmain}>
        <Navbar/>
        <Messagesection/>
        <MainChatBox/>
    </div>
  )
}

export default page