import React from "react";
import "./styles.css"

const Achievements =()=>{
    return <>
      <div className="achievements center">
        <div className="achievement">
            <img src="https://cdn-icons-png.flaticon.com/128/3474/3474362.png" alt="" />
        <h6>100+ Current Members</h6>
        <p>Active Participation</p>
        </div>
        <div className="achievement " >
            <img src="https://cdn-icons-png.flaticon.com/128/419/419952.png" alt="" />
        <h6>6 Awards</h6>
        <p>Various Awards won by the club in the session 2019-2020</p>
        </div>
        <div className="achievement">
            <img src="https://cdn-icons-png.flaticon.com/128/3652/3652191.png" alt="" />
        <h6>Regular sessions</h6>
        <p>Regular discussions and knowledge in the online mode too.</p>
        </div>
      </div>
    </>
}

export default Achievements