import React from "react"
import CloseSVG from "../CloseSVG"
import MaximizeSVG from "../MaximizeSVG"
import MinimizeSvg from "../MinimizeSvg"
import styles from "./WindowOptions.module.scss"

function WindowOptions() {
  return (
    <div className={styles.container}>
      <button className={styles.option}>
        <MinimizeSvg />
      </button>
      <button className={styles.option}>
        <MaximizeSVG />
      </button>
      <button className={styles.option}>
        <CloseSVG />
      </button>
    </div>
  )
}

export default WindowOptions
