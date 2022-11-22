import React from "react";
import "../css/intro.css";
const Intro = () => {
  return (
    <>
      <div className="intro center">
        <div className="introText center">
          <h1>Welcome astrons !!!</h1>
          <p>
            Do you often turn your eyes to the stars? Which answers are you
            looking for, stargazing? Every person has their reasons for that,
            but some great minds have shared their thoughts to inspire you to
            live, love, and create. We, at Astronomy Club IIT BHU might help you
            find the answers for which you are looking. The Astronomy Club IIT
            BHU, an ambitious team driven by amateur astronomers, strives to
            quench students' thirst for astronomy by organizing various exciting
            events, from observational sessions to astroquizzes, telescope
            handling to Radio Astronomy, publishing the Club's very own corona
            magazine and many more.
          </p>
        </div>
        <div className="image center">
          <img
            className="circle"
            src="https://cdn.pixabay.com/photo/2017/09/12/20/27/globe-png-2743575__340.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Intro;
