import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.css"

const Gallery = () => {
    const [photos, setPhotos] = useState();
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        setSpinner(true);
        const getPhotos = async () => {
            try{
                var results= await fetch("https://antariksh-server-8bq4.onrender.com/astrons/gallery");
                results=await results.json();
                setPhotos(results);
                setSpinner(false);
                
                // console.log(results)
            }catch(err){
                console.log(err);
            }
        }
        getPhotos();
    }, []);

    const view=(image)=>{
          
    }
    return (
        <> 
        {spinner ? <div className="loading center"><p>loading...</p></div> : <div className="gallery">
            {photos.map(photo => {
                return (
                    <div className="image" onDoubleClick={view(photo.image)} style={{backgroundImage:`url(${photo.image})` , backgroundSize: 'cover',       
                    backgroundRepeat: 'no-repeat',}}> 
                       {/* <img src={photo.image} alt="" /> */}
                    </div>
                )
            })}
        </div>}
          {/* {spinner?<div className="loading"><p>loading...</p></div>:<div className="loading"><p>loaded</p></div>} */}
        </>
    )
}

export default Gallery