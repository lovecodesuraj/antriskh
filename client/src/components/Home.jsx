import React from "react";
import Posts from "./Posts";
import Intro from "./Intro";
import ImageOfTheday from "./ImageOfTheDay";
import AddPost from "./AddPost";
import Announcements from "./announcements";

const Home =()=>{
    
    return(
        <>
         <Intro />
        <ImageOfTheday />
        {/* <AddPost /> */}
        <Announcements />

        </>
    )
}
export default Home;