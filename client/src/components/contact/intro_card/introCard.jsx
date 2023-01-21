import React from "react";
import { useEffect } from "react";
import "./styles.css"

const IntroCard = (props) => {
    const data=props.data;
    useEffect(()=>{
        // console.log(data)

    },[])
    return <>
        <div className="intro_card">
            <div className="member_image" style={{backgroundImage:`url(${data.image})`}}>
                <div className="circle c_cyno"></div>
                <div className="circle c_purple"></div>
                <div className="circle c_grey"></div>
            </div>
            <div className="member_data">
                  <div className="name">{data.name} </div>
                  <div className="position">{data.position}</div>
                  <div className="gmail">{data.gmail}</div>
                  <div className="branch">{data.branch}</div>
                  <div className="phone">+91 {data.phone}</div>
                  <div className="social">
                    <a href={data.social.linkedin}><img src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" alt=""  className="linkedin" /></a>
                    <a href={data.social.github}><img src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" alt=""  className="github" /></a>
                    <a href={data.social.instagram}><img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt=""  className="instagram" /></a>
                  </div>
            </div>
        </div>
    </>

}

export default IntroCard