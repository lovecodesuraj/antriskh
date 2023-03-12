import React from "react";
import Posts from "../posts/Posts";
import Intro from "./intro/Intro";
import AddPost from "../adminCell/addpost/AddPost";
import AddToGallery from "../adminCell/addToGallery/addToGallery";
import WhatWeDo from "./doings/whatWeDo";
import About from "./about/about";
import Achievements from "./achievements/achievements";
import Update from "./updates/update";
import Events from "./events/events";

const Home =()=>{
    return(
        <>
         <Intro />
         <Achievements />
         {/* <Events /> */}
        <WhatWeDo />
        <Update />
        <About />
        {/* <Posts /> */}
        {/* <AddPost /> */}
        {/* <AddToGallery /> */}

        </>
    )
}
export default Home;