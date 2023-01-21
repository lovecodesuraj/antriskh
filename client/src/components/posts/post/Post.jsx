import React from "react";
// import { Link } from "react-router-dom"
import "./styles.css"
const Post = (props) => {
  return (
    <>
      <div className="post center">
        <img src={props.post.photo} />
        <div className="content ">
          <h3>{props.post.title}</h3>
          <p>{props.post.details}</p>
        </div>
      </div>
    </>
  )
}
export default Post;

