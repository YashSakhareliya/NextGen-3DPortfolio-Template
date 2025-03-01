import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")

  return (
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link 
      to="/" 
      className="flex items-center"
      onClick={() => {
        setActive("")
        window.scrollTo(0, 0);
      }}
      >
        <img src={logo} alt="logo" className="w-9 h-9" />
      </Link>

    </div>
  )
}

export default Navbar