import React, { useState } from 'react'
import "./styles.css";
import SearchIcon from "@material-ui/icons/SearchSharp";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import UserIcon from "@material-ui/icons/Person"
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Brand, UserImage, UserPopup } from './parts';

const Navbar = () => {
    const navigate = useNavigate();
    //   const user=true;          
    const user = JSON.parse(localStorage.getItem('user'));
    // const {authData}=useSelector(state=>state.auth);
    const [active, setActive] = useState("home");
    return <>
        <div className="navbar">
            <Brand />
            <div className="tools">
                <div className="navItems">
                    <ul>
                        <li className={active === "blogs" ? "activeNavItem" : ""} onMouseEnter={() => { setActive("blogs") }} onClick={() => { setActive("blogs"); navigate("/blogs") }}>blogs</li>
                        <li className={active === "gallery" ? "activeNavItem" : ""} onMouseEnter={() => { setActive("gallery") }} onClick={() => { setActive("gallery"); navigate("/gallery") }}>gallery</li>
                        <li className={active === "faqs" ? "activeNavItem" : ""} onMouseEnter={() => { setActive("faqs") }} onClick={() => { setActive("about"); navigate("/faqs") }}>faqs</li>
                        <li className={active === "contact" ? "activeNavItem" : ""} onMouseEnter={() => { setActive("contact") }} onClick={() => { setActive("contact"); navigate("/contact") }}>contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Navbar





//                 <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/1409/1409937.png" alt="" /></a></li>
//                 <li><a href="https://www.instagram.com/antariksh_nitkkr/"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" /></a></li>
//                 <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="" /></a></li>
//                 <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" /></a></li>
//                 <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" /></a></li>


// // nasa api key
// // jUmhyWZfnJ414RYyOkEvrXrrXKkRqRTdz1aqRHjE
