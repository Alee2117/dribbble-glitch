import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar/Navbar"
import WindowOptions from "../components/WindowOptions/WindowOptions"
import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles["main-window"]}>
        <WindowOptions />
        <Navbar />
      </div>
      <div className={styles["tiny-window"]}>
        <WindowOptions />
        <Navbar />
      </div>
      <div className={styles["md-text-window-three"]}>
        <WindowOptions />
        <Navbar />
        <div className={styles["glitch-text"]}>HERE</div>
      </div>
      <div className={styles["md-text-window-two"]}>
        <WindowOptions />
        <Navbar />
        <div className={styles["glitch-text"]}>STARTS</div>
      </div>
      <div className={styles["md-text-window-one"]}>
        <WindowOptions />
        <Navbar />
        <div className={styles["glitch-text"]}>CHANGE</div>
      </div>
      <div className={styles["black-window"]}>
        
      </div>
    </div>
  )
}
