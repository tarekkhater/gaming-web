"use client"
import React , { useState } from 'react'
import Link from 'next/link'
import {Button , Input ,  Label } from '../../components/Tools/Tools'
import styles from "../../styles/register.module.css"
import { easeInOut, motion } from 'framer-motion'
export default function register() {



    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

    const submitForm = async event => {
        event.preventDefault()   
    }

    return (
    <div  className={styles.container}>
        <motion.form onSubmit={submitForm} className={styles.form}  method="POST"
        initial={{x:-400 , y:-400 ,  opacity:0 }}
        animate = {{x:0 , y: 0,  opacity:1}}
        end={{x:-400 , y:-400, opacity:0 }}
        transition={{type:"spring" , duration:1.4 , ease:easeInOut , delay:0.3}}>
        
            <div>
                <Label htmlFor="email">Name</Label>

                <Input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                    autoFocus
                    autoComplete="off"
                />
                
            </div>

            <div>
                <Label htmlFor="email">Email</Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                
            </div>

            <div>
                <Label htmlFor="password">Password</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
                
            </div>

            <div>
                <Label htmlFor="password">Confirm Password</Label>

                <Input
                    id="password_confirmation"
                    type="password"
                    value={password_confirmation}
                    onChange={event => setPasswordConfirmation(event.target.value)}
                    required
                />
                
            </div>

            <div className={styles.confirmLogin}>
                <Link href="/auth/login">
                    <p >
                        Already registered?
                    </p>
                </Link>

                <Button >Register</Button>
            </div>
        </motion.form>
    </div>
    )
}
