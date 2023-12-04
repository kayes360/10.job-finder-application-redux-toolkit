import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Link to='/'> 
    <nav className="logo py-4 fixed top-0 px-4 md:px-0 mb-10">
        <img src="/logo3.gif"/>
      </nav>
    </Link>
  )
}
