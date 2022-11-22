import React, { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Post from "./Post";


const Posts =()=>{
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
      const getPosts= async ()=>{
      var results = await  fetch('http://localhost:5000/posts').catch(err =>console.log(err));
      results=await results.json();
      setPosts(results);
    } 
    getPosts();

    },[])
    
  

    return(
    <>
    {
        posts.map(post=> <Post post={post}/>)}
     
    </>
  )
}
export default Posts;