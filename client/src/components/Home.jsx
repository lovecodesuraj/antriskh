import React from "react";
import Posts from "./Posts";
import Intro from "./Intro";
import ImageOfTheday from "./ImageOfTheDay";
import AddPost from "./AddPost";

const Home =()=>{
    return(
        <>
         <Intro />
        <ImageOfTheday />
        <AddPost />

        </>
    )
}
export default Home;