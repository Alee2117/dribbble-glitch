import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar/Navbar"
import WindowOptions from "../components/WindowOptions/WindowOptions"
import styles from "../styles/Home.module.scss"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles["main-window"]}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <WindowOptions />
        <Navbar />
      </motion.div>
      <motion.div
        className={styles["tiny-window"]}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <WindowOptions />
        <Navbar />
      </motion.div>
      <motion.div
        className={styles["md-text-window-three"]}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <WindowOptions />
        <Navbar />
        <div className={styles["glitch-text"]}>HERE</div>
      </motion.div>
      <motion.div
        className={styles["md-text-window-two"]}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <WindowOptions />
        <Navbar />
        <div className={styles["glitch-text"]}>STARTS</div>
      </motion.div>
      <motion.div
        className={styles["md-text-window-one"]}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <WindowOptions />
        <Navbar />
        <div className={styles["glitch-text"]}>CHANGE</div>
      </motion.div>
      <motion.div
        className={styles["black-window"]}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      ></motion.div>
    </div>
  )
}
