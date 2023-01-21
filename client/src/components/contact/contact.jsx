import React from "react";
import "./styles.css"
import team from "./data";
import IntroCard from "./intro_card/introCard";
import { useEffect } from "react";
// import "../../images/nikhil.jpeg"
const Contact = () => {
    
    useEffect(()=>{
        // console.log(cordinators);

    },[])
    return <>
    <div className="contact center">
     
    
        
          
          <div className="team center">
            {team.map(data=>{
                return <IntroCard data={data} />
            })}
          </div>
          <div className="contactForm">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScPZAp-wCIlsmu5-VsJKIDM3EFwkbsJzZs3YgZb8le4McB87A/viewform?embedded=true" width="640" height="809" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        
        </div>
    </>
}

export default Contact