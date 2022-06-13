import React from 'react'

import { Link } from 'react'
export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}
