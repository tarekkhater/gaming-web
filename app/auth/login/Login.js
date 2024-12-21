'use client'
import React , { useState } from 'react'
import {AuthCard ,  Button , Input , InputError , Label } from '../../components/Tools/Tools'
import Link from 'next/link'
import { easeInOut, motion } from 'framer-motion';
import styles from '../../styles/Login.module.css';



export default function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = async (e) => {
        e.preventDefault()
    }
  return (
    <div className={styles.container}>
    <motion.div className={styles.loginActors}
    initial={{x:-400 , y:-400 ,  opacity:0 }}
    animate = {{x:0 , y: 0,  opacity:1}}
    end={{x:-400 , y:-400, opacity:0 }}
    transition={{type:"spring" , duration:1.4 , ease:easeInOut , delay:0.3}}>
        <div  className={styles.login}>
        <AuthCard>
            <form onSubmit={submitForm}  method="POST">
            {/* Email Address */}
            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoFocus
                />
            </div>
            {/* Password */}
            <div className="mt-4">
                <Label htmlFor="password">Password</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                />
            </div>
            <Link href="#">
                    <p>
                        Forget password?
                    </p>
                </Link>
            {/* Remember Me */}
            <div style={{display:"flex" , marginTop:"1rem" }}>
                <label
                    htmlFor="remember_me">
                    <input
                        id="remember_me"
                        type="checkbox"
                        name="remember"
                        onChange={e => setShouldRemember(e.target.checked)}
                    />
                    <span style={{fontSize:"medium" , marginLeft:"0.5rem"}}>
                        Remember me
                    </span>
                </label>
            </div>

            <div className={styles.confirmLogin}>
                <Link href="/auth/register" >
                    <p>
                        Don`t have account?
                    </p>
                </Link>

                <Button type="submit" style={{marginRight:".75rem"}}>Login</Button>
            </div>
            </form>
            </AuthCard>
        </div>
        </motion.div>
    </div>
  )
}
