import react, { useState } from "react";
import FileBase from "react-file-base64";
import "./styles.css";
import axios from "axios";

const AddToGallery = () => {
  const [images, setImages] = useState([])


    const addToGallery = async (event) => {
      event.preventDefault();
      
      await axios
        .create({
          baseURL: "https://antariksh-server-8bq4.onrender.com/astrons",
        })
        .post("/addToGallery", images)
        .then((res) => {
          // console.log(res);
          alert("posted to gallery");
        });
        
    };

    const addToEvents = async (event) => {
      event.preventDefault();
      await axios
        .create({
          baseURL: "http://localhost:5000/astrons",
        })
        .post("/event", images)
        .then((res) => {
          // console.log(res);
          alert("event posted");
        });
        
    };


  return (
    <>
      <div className="addToGallery center">
        {/* <h5>ADD TO GALLERY</h5> */}
        <form className="center">
          <FileBase
            type="file"
            reqired
            multiple={false}
            onDone={({ base64 }) => setImages({ photo: base64 })}
          />
          <button onClick={addToGallery}>ADD TO GALLERY</button>
          <button onClick={addToEvents}>ADD TO Events</button>
        </form>
      </div>
    </>
  )
}

export default AddToGallery