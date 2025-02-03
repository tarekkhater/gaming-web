"use client"
import React , {useEffect, useState} from 'react'
import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
import items from './ShowScreenItems'
import { motion } from "motion/react"
export default function Swiper() {
  const [current, setCurrent] = useState("spiderman");
  //const [x, setX] = useState(1);
  const [isTapped, setIsTapped] = useState(false);
  const item = items.find((item) => item.name === current);
  var x = 1;
  

    useEffect(() => {
      const interval =  setInterval(() => {
      if(!isTapped ){
        if(x < items.length){
          setCurrent(items[x].name);
          x++;
        }else{
          x = 1;
          setCurrent(items[0].name);
        }
      }

    }, 3000);
    return () => clearInterval(interval);
  }, [isTapped]);
  
  return (
    <div className={styles.container}>
      <section className={styles.swiper} key={item?.id}>
        {item?.video ?(
        <div dangerouslySetInnerHTML={{ __html: `
          <video
            loop
            muted
            autoplay
            playsinline
            src="${item?.video}"
            class="${styles.video}"
          />,
        ` }}></div>
        ):
        (
          <Image className={styles.video} src={item?.image}  alt={item?.name}  />
        )}
      
      <div className={styles.overlay}>
        <Image src={item?.logo}  alt={item?.name} />
        <p>
          {item?.description}  
        </p>
        <motion.button>Find out more !</motion.button>
      </div>
    </section>
    <motion.div>
    <section className={styles.imagesSelector}> 
      {items.map((item) => (
        <motion.div
         style={{position: "relative" }}
         key={item.id}
         whileInView={{y: item.name === current && isTapped === false  ? -20 :0}}
         whileHover={{ y: item.name === current && isTapped === true  ? 0 :-20 }} 
         transition={{duration: 0.4 , ease: "easeInOut" }}
         onTap={()=> {item.name === current ? setIsTapped(false) : setIsTapped(true) ; setCurrent(item.name) }}>
        <Image  src={item.image} alt={item.name} style={{border: isTapped && item.name === current ? "1px solid red" :"none" , marginTop: isTapped && item.name === current ? "-20px" :"0" }} />
        {current === item.name && isTapped === false ?
        <motion.div
        style={{backgroundColor: "gray" , position: "absolute" , opacity:0.5 , top: 0 , left:0 , width:"0.01%" , height:"100%" , borderRadius: "15px"}}
        animate ={{ width:"100%" }}
        transition={{duration: 3 ,delay:0.01 ,  ease: "easeInOut" , repeat: Infinity}}>
        </motion.div> : ""
}
        </motion.div>
      ))}
    </section>
    </motion.div>
    </div>
  )
}
