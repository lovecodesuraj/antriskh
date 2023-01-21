import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <>
      {/* <div className="header"> */}
        {/* <div className="logo center container">
          <span>A</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>R</span>
          <span>I</span>
          <span>K</span>
          <span>S</span>
          <span>H</span>
        </div> */}
        {/* <div className="navbar">
          <ul>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/blogs">
              Blogs
            </Link>
            <Link className="navLink" to="/gallery">
              Gallery
            </Link>
            <Link className="navLink" to="/faqs">
              FAQS
            </Link>
            <Link className="navLink" to="/contact ">
              CONTACT
            </Link>
          </ul>
        </div>
      </div> */}

    <div className="header center">
      {/* <div className="logo"></div> */}
      <img src="" className="logo" alt="" />
      <h1>ANTARIKSH</h1>
      <h2>THE ASTRONOMY CLUB OF NIT KURUKSHETRA</h2>
      <div className="navbar">
      <ul>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/blogs">
              Blogs
            </Link>
            <Link className="navLink" to="/gallery">
              Gallery
            </Link>
            <Link className="navLink" to="/faqs">
              FAQS
            </Link>
            <Link className="navLink" to="/contact ">
              CONTACT
            </Link>
          </ul>
      </div>
      <div className="connections">
      <ul className="center">

                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/1409/1409937.png" alt="" /></a></li>
                <li><a href="https://www.instagram.com/antariksh_nitkkr/"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" /></a></li>
                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="" /></a></li>
                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" /></a></li>
                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" /></a></li>
            </ul>
      </div>
    </div>




    </>
  );
};
export default Header;

// nasa api key
// jUmhyWZfnJ414RYyOkEvrXrrXKkRqRTdz1aqRHjE
