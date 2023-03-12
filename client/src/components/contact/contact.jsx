import React from "react";
import "./styles.css"
import team from "./data";
import IntroCard from "./intro_card/introCard";
import { useEffect } from "react";
import ContactForm from "../forms/contact/ContactForm";
// import "../../images/nikhil.jpeg"
const Contact = () => {

    useEffect(() => {
        // console.log(cordinators);

    }, [])
    return <>
        <div className="contact center">




            <div className="team center">
                {team.map(data => {
                    return <IntroCard data={data} />
                })}
            </div>

        </div>
        <ContactForm />
    </>
}

export default Contact