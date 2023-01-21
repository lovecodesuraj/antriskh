
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Asteroids=()=>{
    const [asteroidsData,setAsteroidsData]=useState();
    const [spinner,setSpinner]=useState(true);

    const date=new Date();
    const dd=date.getDay();
    const mm=date.getMonth() + 1;
    const yyyy=date.getFullYear();

    useEffect(()=>{
        setSpinner(true);
        const getAsteroidsData=async()=>{
            try{
                var results=await axios.get(` https://api.nasa.gov/neo/rest/v1/feed?start_date=${yyyy +"-" + mm + "-" + dd}&end_date=2100-12-12&api_key=jUmhyWZfnJ414RYyOkEvrXrrXKkRqRTdz1aqRHjE`);
                results=await results.json();
                setAsteroidsData(results);
                setSpinner(false); 
                console.log(results)
            }catch(err){
                console.log(err); 
            }
        }
        getAsteroidsData();
    },[])
    return <>
       
    </>
}

export default Asteroids;