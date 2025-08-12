import React from 'react'
import styles from "./msgcomp.module.css"
import Image from 'next/image'
// import icon from "/Assets/98310dda8e5397d8d65f99f13948e7c87237dd3a.png"
import {Questiontags, Helptags} from "./Tags"
const Msgcomp = () => {
  return (
    <div className={styles.msgcomp}>
      <Image src="/Assets/98310dda8e5397d8d65f99f13948e7c87237dd3a.png" height={48} width={48} alt="Icon"/>
      <div className={styles.nameanddesc}>
        <h5>Name</h5>
        <p>Description</p>
        <div className={styles.tags}>
          <Questiontags /><Helptags/>
        </div>
      </div>
    </div>
  )
}

export default Msgcomp