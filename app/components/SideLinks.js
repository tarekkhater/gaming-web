import React , {ReactElement , ReactNode} from 'react'
import { IoIosHome } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { MdLiveHelp, MdLocalLibrary } from "react-icons/md";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import styles from '../styles/Sidebar.module.css';

const SideLinks  =  [
    {
        label : 'Home',
        href : '/',
        icon : <IoIosHome className={styles.icon} />  
    } ,
    {
        label : 'Category',
        href : '#category',
        icon : <TbCategoryFilled className={styles.icon}/> // TbCategoryFilled
    } , 
    {
        label : 'Library',
        href : '#library',
        icon : <MdLocalLibrary className={styles.icon}/> // MdLocalLibrary 
    } ,
    {
        label : 'Friends',
        href : '/friends',
        icon : <FaUserFriends className={styles.icon}/> // FaUserFriends 
    } ,
    {
        label : 'Community',
        href : '#community',
        icon : <IoChatboxEllipsesSharp className={styles.icon}/> // IoChatboxEllipsesSharp     
    } , 
    {
        label : 'Wishlist',
        href : '#wishlist',
        icon : <GiSelfLove className={styles.icon}/> // GiSelfLove 
    } ,
    {
        label : 'Downloads',
        href : '#downloads',
        icon : <IoCloudDownloadSharp className={styles.icon}/> // IoCloudDownloadSharp 
    } ,
    {
        label : 'Settings',
        href : '#settings',
        icon : <IoSettingsOutline className={styles.icon}/> // IoSettingsOutline 
    } ,
    {
        label : 'Help',
        href : '#help',
        icon : <MdLiveHelp className={styles.icon}/> // MdLiveHelp
    }
]

export default SideLinks