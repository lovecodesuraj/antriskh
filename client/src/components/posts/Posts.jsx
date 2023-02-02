import React, { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Post from "./post/Post";
import axios from "axios";
import "./styles.css"

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    // if (!posts.length) {
    setSpinner(true);
    const getPosts = async () => {

      try {
        const results = await axios.get("https://antariksh-server-8bq4.onrender.com/astrons/posts")
        // console.log(results.data[0].photo);
        setSpinner(false)
        setPosts(results.data);
      } catch (err) {
        console.log(err)
      }
    }
    getPosts();
    // }

  }, [])


  return (
    <> {spinner ? <div className="loading center"><p>loading...</p></div> : <div className="posts center">
      {posts.map(post => <Post post={post} />)}
    </div>}
      {/*  */}

    </>
  )
}
export default Posts;




