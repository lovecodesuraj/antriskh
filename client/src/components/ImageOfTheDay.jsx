import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../css/imageOfTheDay.css"

const ImageOfTheday=()=>{
    const [imageOfTheDay,setImageOfTheday]=useState("");
    useEffect(()=>{
        fetch("https://api.nasa.gov/planetary/apod?api_key=jUmhyWZfnJ414RYyOkEvrXrrXKkRqRTdz1aqRHjE").then(response=>response.json()).then(response=>{
            setImageOfTheday(response);
        }).catch(error=>console.log(error))
    },[])
    return(
        <>
        
        <div className="imageOfTheDay center">
        <img src={imageOfTheDay.hdurl} alt="imageOfTheday" />
        <div className="explanation">
         <div>  {imageOfTheDay.explanation}</div>
         <span className="date">{imageOfTheDay.date}</span>
          
        </div>
        </div>
        

        </>
    )
}
export default ImageOfTheday