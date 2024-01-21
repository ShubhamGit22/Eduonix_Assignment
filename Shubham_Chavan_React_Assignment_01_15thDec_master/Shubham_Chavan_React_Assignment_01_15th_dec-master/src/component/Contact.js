import React from "react";
import sta from "./image/star-90.svg"
import "./contact.css"
const Contact=()=>{
    return(<>
    <div className="contact">

    <h1>CONTACT US
</h1>
<div className="line5"></div><img className="star3" src={sta}/> <div className="line6"></div>
<div className="form">
    <form>
        <input type="text" placeholder="Full Name"/>
        <input type="number" placeholder="Phone Number"/>
        <input type="email" placeholder="Email address"/>
        <textarea placeholder="message"></textarea>
        <button>Send</button>
    </form>
</div>

    </div>
    
    
    
    </>)
}
export default Contact