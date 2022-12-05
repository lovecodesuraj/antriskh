import react from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Await } from "react-router-dom";
import "./index.css"
// import { announcement } from "../../../../server/controllers/posts";

const Announcements = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        let res = await fetch("http://localhost:5000/get/announcements");
        res = await res.json();
        setData(res);
        console.log(data)

    }
    useEffect(() => {
        getData();
        document.getElementById("announcements").innerHTML="{data.map(announcement=><p>{announcement.title}</p>)}"
    }, [])


    return (
        <>

            <div className="announcements" id="announcements">

            </div>
        </>
    )
}

export default Announcements