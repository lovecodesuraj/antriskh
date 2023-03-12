import React from "react";
import "./styles.css"
const WhatWeDo = () => {

    return <>
        <div className="whatWeDo center">
            <h3>WHAT DO WE DO?</h3>
            <h5>Important : We do not predict what grade you get in your course, we are not astrologers.</h5>
            {/* <p>we do a lot of stuff</p> */}
            <div className="doings">
                <div className="doing">
                    <h4>
                        Astronomy Observation Sessions</h4>
                    <p>We hold Observation sessions regularly. In these sessions, telescope will be used for observing Moon, nebulae, planets like Saturn etc. However, naked eye observations and using binoculars also plays an important role in astronomy. Informal session involving small quizzes and general discussions.</p>
                </div>
                <div className="doing">
                    <h4>
                        Astrophotography
                    </h4>
                    <p>
                        To the uninitiated, nothing could be more logical than afocal photography: if you look through a telescope's eyepiece, why wouldn't you point a camera into it? The club has its own SLR camera which is used for various photometrical projects.</p>
                </div>
                <div className="doing">
                    <h4>Planetarium Shows</h4>
                    <p>
                        We are proud to have our own inhouse planetarium built entirely by students. The planetarium was inaugurated on Jan 29th, 2012, and still stands to marvel the dedication of the students who built it. Today we host various planetarium shows, some of which are made by the students themselves.
                    </p>
                </div>
                <div className="doing">
                    <h4>The Observatory for Astronomical Research (OAAR)
                    </h4>
                    <p>

                        Astronomy Club, NITKKR, has built its own observatory for astronomical research. It hosts a mammoth 14 inch Celestron EdgeHD, which brings the Heavens down to earth. The observatory was inaugurated in summers'14. It is currently open for observations.
                    </p>
                </div>

            </div>
        </div>
    </>
}

export default WhatWeDo