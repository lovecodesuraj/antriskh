import React, { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Post from "./post/Post";
import axios from "axios";
import "./styles.css"
import { fetchBlogs } from "../../api";
import { CircularProgress } from "@material-ui/core";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setSpinner(true);
      try {
        const results = await fetchBlogs();
        setSpinner(false)
        setPosts(results.data);
      } catch (err) {
        console.log(err)
      }
    }
    getPosts();
  }, [])


  return (
    <>
      {spinner ? <div  style={{height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}><p><CircularProgress /></p></div> : <div className="posts center">
        {posts.map(post => <Post post={post} />)}
      </div>}
    </>
  )
}
export default Posts;




