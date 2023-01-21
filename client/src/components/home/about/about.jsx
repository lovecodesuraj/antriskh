import React from "react";
import "./styles.css"

const About = () => {
    return <>
        <div className="about center">
            <div className="aboutUp center">
                <h3>ABOUT US</h3>
                <div className="line"></div>
                <p>We are the Astronomyclub of NITKKR. We are a group of many astro-enthusiasts under the Gymkhana of the NIT Kurukshetra. Here, we attempt to bring about an interest and awareness in the field of Astronomy and Space Research. All along the we have been promoting amateur astronomy through talks, competetions and shows.</p>
            </div>
            <div className="aboutDown center">
                <div className="left">
                    <h5>Eyes on the Skies</h5>
                    <ul>
                        <li>"The universe is a pretty big place. If it's just us, seems like an awful waste of space."- Carl Sagan</li>
                        <li>Do you know that as you read this sentence, the Universe expanded by 100 km, i.e. 80 mega trillion trillion km3 of space was added to our observable Universe, 1000 new stars were born, Voyager 2 traversed 32 km and somewhere in the Universe 2 years just passed away! Well to sum it up, we at the Astronomy Club aim towards exploring the Universe on scales that we can achieve. Staring at the night sky is one of our many not-so-common hobbies and you'd be as astounded as I was to see what all floats out there. We conduct observation sessions to look into the night sky through our Telescope, organize documentary screenings to encourage learning and discussions and do amateur Astro-photography.</li>
                        <li>Everyone is welcome to all these events. No prior knowledge in astronomy is required, just interest and passion for the field is all we seek after!</li>
                        
                    </ul>
                </div>
                <div className="right"><img src={require("./club.jpg")} alt="" /></div>
            </div>
        </div>
    </>
}

export default About;