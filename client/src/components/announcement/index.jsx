import React from "react";
import { useState } from "react";
// import dotenv from "dotenv"
// dotenv.config();

const Announcement=()=>{
  const [data,setData]=useState({
    title:"",
    details:""
  })

 const handleChange=(event)=>{
    event.preventDefault();
    const value=event.target.value;
    const name=event.target.name;
    setData(prev=>{
        return{
            ...prev,
            [name]:value
        }
    })
 }
 async function submit() {
  try {
    const response = await fetch('http://localhost:5000/post/announcement', {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body:{
        title:data.title,
        details:data.details
      }
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

   return (
    <>
       <form >
          <input type="text" name="title" value={data.title} onChange={handleChange} placeholder="title"/>
          <input type="text" name="details" value={data.details} onChange={handleChange} placeholder="details"/>
          <button onClick={submit}>Submit</button>

       </form>
    </>
   )
}

export default Announcement;