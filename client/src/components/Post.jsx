import React from "react";
// import { Link } from "react-router-dom"

const Post =(props)=>{
  return(
    <>
     <h1>{props.post.title}</h1>
     <p>{props.post.details}</p>
    </>
  )
}
export default Post;