import React from "react";
import "./about.css";
import sta from "./image/star-90.svg"

const About =()=>{
    return(<>
    <div className="about">
    <h1>ABOUT
</h1>
<div className="line3"></div><img className="star2" src={sta}/> <div className="line4"></div>

<div className="para1 info">
    <p>
Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

</div>
<div className="para2 info">
    <p>
    You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!

    </p>

</div>

<button className="free">Free Download!</button>
    </div>
    
    </>)
}
export default About;