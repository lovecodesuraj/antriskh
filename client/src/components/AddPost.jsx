import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    details: "",
    photo:"",
    date: new Date(),
  });
  const handleChange = (event) => {
    event.preventDefault(); 
    setPost((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const addPost = async (event) => {
    event.preventDefault();

    await axios
      .create({
        baseURL: "http://localhost:5000",
      })
      .post("/addPost", post)
      .then((res) => console.log(res));
      setPost({
        title:"",
        details:"",
      })
  };

  return (
    <>
      <form encType="multipart/form-data" >
        <input
          type="text"
          value={post.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={post.details}
          name="details"
          placeholder="details"
          onChange={handleChange}
        />
        <input type="file" 
          value={post.photo}
          name="photo"
          placeholder="Photo"
          onChange={handleChange}
        />
        <button onClick={addPost}>Add Post</button>
      </form>
    </>
  );
};
export default AddPost;
