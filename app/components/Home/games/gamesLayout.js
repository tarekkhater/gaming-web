"use client"
import React from 'react'
import styles from '../../../styles/Games.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";
export default function GamesLayout({games , label}) {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
    <label>{label}</label>
    <Link href="/games">Browse All Games</Link>
    </div>
    <div className={styles.games}>
    {games?.map((game) =>(
    <div key={game?.id}>
      <Link href={`/games/${game?.id}`} rel="stylesheet">
     <div  className={styles.game} >
        <img className={styles.img} src={game?.background_image? game?.background_image : " "} alt={game?.name}  />
        <motion.div className={styles.overlay}>
        </motion.div>
     </div>
     <p>{game?.name}</p>

     </Link>
    </div> 
    ) )}
    </div>
    </div>
  )
}

