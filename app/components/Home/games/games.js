"use client"
import React from 'react'
import GamesLayout from './gamesLayout';
export default function games({games}) {
  
  return (
    <div >
        <GamesLayout games={games} label="Best Games" />
    </div>
  )
}
