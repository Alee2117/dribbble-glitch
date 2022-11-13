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
    </div>
  )
}
