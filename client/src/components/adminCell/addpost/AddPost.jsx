import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import axios from "axios";
import "./styles.css"

const AddPost = () => {
  
  const [post, setPost] = useState({
    title: "",
    details: "",
    photo:"",
    date: new Date(),
  });
  // const handleChange = (event) => {
  //   event.preventDefault(); 
  //   setPost((prev) => {
  //     return {
  //       ...prev,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // };
  const add = async (event) => {
    event.preventDefault();

    await axios
      .create({
        baseURL: "https://antariksh-server-8bq4.onrender.com/astrons",
      })
      .post("/addPost", post)
      .then((res) => {
        console.log(res);

      });
      
  };

  return (
    <>
      <form encType="multipart/form-data" className="addPost center">
        <input
          type="text"
          value={post.title}
          name="title"
          required
          placeholder="title"
          onChange={e=>setPost({...post,title:e.target.value})}
        />
        <textarea
          //  cols={120}
          //  rows={12}
          required
          type="text"
          value={post.details}
          name="details"
          placeholder="details"
          onChange={e=>setPost({...post,details:e.target.value})}
        />
        <FileBase
          type="file"
          required
          multiple={false}
        
          onDone={({base64})=>setPost({...post , photo:base64})}
             />
        <button onClick={add}>Add TO BLOGS</button>
      </form>
    </>
  );
};
export default AddPost;
