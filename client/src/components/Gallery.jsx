import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Gallery =()=>{
    const [photos,setPhotos]=useState();

    useEffect(()=>{
       const getPhotos=async ()=>{
           fetch("").then(response=>response.json()).then(response=>{
            setPhotos(response);
           }).catch(err=>console.log(error))
       }
       getPhotos();
    },[]);
    return (
        <>
           <div className="gallery">
              {photos.map(photo=>{
                return(
                    <img src={photo} alt="" />
                )
              })}
           </div>
        </>
    )
}