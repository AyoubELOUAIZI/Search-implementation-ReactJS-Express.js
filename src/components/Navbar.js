import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
         
          <li>
            <Link to="/front">SearchFront</Link>
          </li>
          <li>
            <Link to="/back">SearchBack</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}
