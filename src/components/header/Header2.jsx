import React from 'react'
import { CiSearch } from "react-icons/ci";


const Header2 = () => {
  return (
    <div className="navbar bg-base-100 pl-5 pr-15 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow">
          <li><a>Home</a></li>
          <li>
            <a>Our Services</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Blog</a></li>
          <li><a>Contact Us</a></li>
        <li><a>About Us </a></li>
        </ul>
      </div>
      <img src="/Logo.svg" alt="Logo" className='pl-10' />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 ml-50">
        <li><a>Home</a></li>
        <li>
          <details>
            <summary>Our Services</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Blog</a></li>
        <li><a>Contact Us</a></li>
        <li><a>About Us </a></li>
        <li><a> <CiSearch className='size-5.5' /></a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn pr-10">Talk an Expert</a>
    </div>
  </div>
  )
}

export default Header2
