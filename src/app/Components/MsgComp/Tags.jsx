import React from 'react'
import styles from "./Tags.module.css"
const Questiontags = () => {
  return (
    <div className={styles.questiontag}><p>Question</p></div>
  )
}
const Helptags = () => {
  return (
    <div className={styles.helptag}><p>Help Wanted</p></div>
  )
}

export {Questiontags,Helptags}