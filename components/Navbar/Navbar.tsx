import React from "react"
import styles from "./Navbar.module.scss"

function Navbar() {
  return (
    <div className={styles["fake-nav"]}>
      <div className={styles["fake-nav-items"]} >
        <div className={styles["fake-nav-item"]}>
          <span className={styles["underline"]} >F</span>ile
        </div>
        <div className={styles["fake-nav-item"]}>
          <span className={styles["underline"]} >E</span>dit
        </div>
        <div className={styles["fake-nav-item"]}>
          <span className={styles["underline"]} >V</span>iew
        </div>
        <div className={styles["fake-nav-item"]}>
          <span className={styles["underline"]} >I</span>mage
        </div>
        <div className={styles["fake-nav-item"]}>
          <span className={styles["underline"]} >O</span>ptions
        </div>
        <div className={styles["fake-nav-item"]}>
          <span className={styles["underline"]} >H</span>elp
        </div>
      </div>
    </div>
  )
}

export default Navbar
