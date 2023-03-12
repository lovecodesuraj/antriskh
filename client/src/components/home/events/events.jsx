import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "./styles.css"

function Events() {

  const [events, setEvents] = useState({});
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setSpinner(true);
    const getData = async () => {
      try {
        var data = await axios.get("https://antariksh-server.onrender.com/astrons/events");
        // data = await data.json();
        setEvents(data.data);
        setSpinner(false);
        // console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])
  return (
    <>
     
        {spinner ? <div className="loading_events center"><p>loading events ...</p></div> :
         <div className="events">
         <h2>Events</h2>
          <div className="carousel">
            <Carousel
            showStatus={false}
              showThumbs={false}
              showArrows={false}
              centerMode={true}
              centerSlidePercentage={100}
            // statusFormatter={false}
            >
              <div>
                <img src={events[events.length - 1].image} />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div>
                <img src={events[events.length - 2].image} />
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                <img src={events[events.length - 3].image} />
                {/* <p className="legend">Legend 3</p> */}
              </div>
            </Carousel>
          </div>
      </div>
        }
    </>
  )
}

export default Events