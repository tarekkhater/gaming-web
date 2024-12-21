"use client"
import React , {useRef , useState , useEffect} from 'react'
import SideLinks from './SideLinks'
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

const Sidebar = () => {
const links = SideLinks ;
const [currentLink , setCurrentLink] = useState('/');
const pathname = usePathname();
const [collapse , setCollapse] = useState(false)
const collapseRef = useRef()
const nav = useRef()
const variants ={
  hover:{scale:1.2 , originX:0 ,
      translation:{type:'spring' , stiffness:300}
  }}
  useEffect(() => {
    let handler = (e)=>{
        if(!collapseRef?.current?.contains(e.target) && !nav?.current?.contains(e.target)){
            setCollapse(false)
        }
    }

    window.addEventListener('mousedown',handler);
});
  return (
    <div>
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <h1>Tarek</h1>
        <span>Khater</span>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
            <div key={link.label}
             className={ link.href === pathname ? styles.active : ' '}
             onClick={() => setCurrentLink(link.href)}>
              <i>{link.icon} </i>
              <Link href={link.href}>
              {link.label}
              </Link>
            </div>
        ))}
      </div>
      </div>
      <div className={styles.mobile} >
      <div>
      <motion.button onClick={()=>{setCollapse(!collapse)}} ref={collapseRef}
            className={styles.collapseButton}
            whileHover={{scale:1.1 , color:'darkgray'}} >
            <p>__</p>
            <p>__</p>
            <p>__</p>
      </motion.button>
      {collapse &&(
        <motion.div className={styles.collapse }  ref={nav}
            initial={{x:100 , y:-100 , opacity:0}}
            animate={{x:0 , y:0 , opacity:1}}
            transition={{type:'spring' , duration:1 , delay:0.3 , ease:'ease-in-out'}}>
            <ul> 
            {links.map((link) => (
            <motion.li key={link.name} variants={variants} whileHover='hover'><a href={link.href} className={styles.brand}>{link.label}</a></motion.li>
            ))}
            </ul>
        </motion.div>
      )}
      </div>
      <div>
          <Link className={styles.logoMobile} href="/">
            <h1>Tarek</h1>
            <span>Khater</span>
          </Link>
      </div>
      </div>
    </div>
  )
}

export default Sidebar