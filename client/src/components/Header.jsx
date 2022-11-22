import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo center container">
          <span>A</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>R</span>
          <span>I</span>
          <span>K</span>
          <span>S</span>
          <span>H</span>
        </div>
        <div className="navbar">
          <ul>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/about">
              Blogs
            </Link>
            <Link className="navLink" to="/gallery">
              Gallery
            </Link>
            <Link className="navLink" to="/events">
              Acitivities
            </Link>
            <Link className="navLink" to="/events">
              Misc.
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;

// nasa api key
// jUmhyWZfnJ414RYyOkEvrXrrXKkRqRTdz1aqRHjE
