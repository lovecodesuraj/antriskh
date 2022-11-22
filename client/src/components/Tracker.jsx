import React from "react";
import { useEffect } from "react";
const Tracker =()=>{

    useEffect(()=>{
   
        const tracker=document.querySelector(".tracker");
        document.body.addEventListener("mousemove",e=>{
        tracker.style.left=`${e.clientX - 30}px`;
        tracker.style.top=`${e.clientY + 30}px`;
    
      })
      },[])

    return(
        <>
        <div className='tracker'>
          <img src='https://cdn-icons-png.flaticon.com/512/214/214358.png' />
        </div> 
        </>
    )
}
export default Tracker;