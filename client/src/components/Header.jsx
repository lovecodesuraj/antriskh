import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css'

const Header =()=>{
  return(
    <>
     <div className="header">
        <div className="logo center"><h1>ANTRIKSH</h1></div>
        <div className="navbar">
                <ul>
                    <Link className="navLink" to='/'>Home</Link>
                    <Link className="navLink" to='/about'>About</Link>
                    <Link className="navLink" to='/gallery' >Gallery</Link>
                    <Link className="navLink" to="/events">Events</Link>
                </ul>
        </div>
     </div>
     
    </>
  )
}
export default Header;