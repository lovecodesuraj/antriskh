import axios from "axios";

const API=axios.create({baseURL:"http://localhost:5000"});
// const API=axios.create({baseURL:"https://antariksh-server.onrender.com"});

export const fetchGallery=()=>API.get("/astrons/gallery");
export const fetchBlogs=()=>API.get("/astrons/posts");
export const fetchEvents=()=>API.get("/astrons/events");
export const joiningForm=(formData)=>API.post("/astrons/joiningForm",formData);
export const contactForm=(formData)=>API.post("/astrons/contactForm",formData);
