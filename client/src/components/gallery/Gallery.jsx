import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchGallery } from "../../api";
import "./styles.css"

const Gallery = () => {
    const [photos, setPhotos] = useState();
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        setSpinner(true);
        const getPhotos = async () => {
            try {
                const results=await fetchGallery();
                setPhotos(results.data);
                setSpinner(false);
            } catch (err) {
                console.log(err);
            }
        }
        getPhotos();
    }, []);

    const view = (image) => {

    }
    return (
        <>
            {spinner ? <div style={{height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}><p><CircularProgress /></p></div> : <div className="gallery">
                {photos.map(photo => {
                    return <>
                        <div className="image" style={{
                            backgroundImage: `url(${photo.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition:"center",
                        }}>
                        </div>
                    </>
                })}
            </div>}
        </>
    )
}

export default Gallery