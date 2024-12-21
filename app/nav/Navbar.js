"use client"
import React , {useRef , useState} from 'react'
import styles from '../styles/Navbar.module.css'
import {IoMail} from "react-icons/io5";
import {IoIosNotifications } from "react-icons/io";
import { motion } from "framer-motion";
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <input  className={styles.search} type="text" placeholder="Search" />
        <IoMail className={styles.icon} fontSize={30}/>
        <IoIosNotifications className={styles.icon} fontSize={30}/>
      </div>
      <div className={styles.left}>
        <Link href='/auth/login'>
          <motion.button whileHover={{ scale: 1.01 }} >Login</motion.button>
        </Link> 
        <Link href='/auth/register'>
          <motion.button whileHover={{ scale: 1.01 }} >Sign up</motion.button>
        </Link> 
      </div>
    </div>
  )
}
