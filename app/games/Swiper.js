'use client'
import React , {useEffect, useState} from 'react'
import styles from '../styles/Swiper.module.css'
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Swiper({game , stories}) {
  const [current, setCurrent] = useState(stories[0]?.id);
  //const [x, setX] = useState(1);
  const [isTapped, setIsTapped] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const imgShow =stories.legnth < 1 ? "" : stories?.find((item) => item.id === current);
  var x = imgShow.id
  useEffect(() => {
    const interval =  setInterval(() => {
    if(!isTapped ){
      if(x < stories.length){
        setCurrent(stories[x].id);
        x++;
      }else{
        x = 1;
        setCurrent(stories[0].id);
      }
    }
    console.log(x)
  }, 3000);
  return () => clearInterval(interval);
}, [isTapped]);
useEffect(() => {
  setDimensions({ width: imgShow.width, height: imgShow.height })
}, [imgShow]);
  return (
    <div >
        <p className={styles.title}>{game.name}</p>
        <p className={styles.ratings}>ratings_count : {game.ratings_count}</p>
        <div className={styles.container}>
      <section className={styles.swiper} key={imgShow?.id}>
        <Image className={styles.video} src={imgShow?.image}  alt={game?.name} width={dimensions.width} height={dimensions.height}/>
    </section>
    <motion.div>
    <section className={styles.imagesSelector}> 
      {stories.map((item) => (
        
        <motion.div
         style={{position: "relative" }}
         key={item.id}
         whileInView={{y: item.id === current && isTapped === false  ? -20 :0}}
         whileHover={{ y: item.id === current && isTapped === true  ? 0 :-20 }} 
         transition={{duration: 0.4 , ease: "easeInOut" }}
         onTap={()=> {item.id === current ? setIsTapped(false) : setIsTapped(true) ; setCurrent(item.id) }}>
        <Image  src={item.image} alt={game.name} width={100} height={100} style={{border: isTapped && item.name === current ? "1px solid red" :"none" , marginTop: isTapped && item.id === current ? "-20px" :"0" }} />
        {current === item.id && isTapped === false ?
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
    <div className={styles.description}>
      <p>{game.description_raw}</p>
    </div>
    </div>
    </div>
  )
}
