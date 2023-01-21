import React from "react";
import "./styles.css"
import faqs from "./faqs";
const Faqs=()=>{
   return <>
      <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        {faqs.map(faq=>{
            return(
                <div className="faq">
                    <div className="question">{faq.question}</div>
                    <div className="answer">{faq.answer}</div>
                    <div className="line"></div>
                </div>
            )
        })}
      </div>
   </>
}
export default Faqs;