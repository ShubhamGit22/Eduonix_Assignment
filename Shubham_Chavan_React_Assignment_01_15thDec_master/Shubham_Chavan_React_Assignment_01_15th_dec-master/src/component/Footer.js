import React from "react";
import "./footer.css"
const Footer=()=>{
    return(<>
    <div className="footer">
        <div className="footerTitle">
            <h1>LOCATION</h1><br/>
            <p>
            2215 John Daniel Drive<br/>
Clark, MO 65243
            </p>

        </div>
        <div className="footerTitle2">
            <h1>AROUND THE WEB</h1><br/>
         <span className="fb"><i class="fa-brands fa-facebook icon-4x"></i></span>
         <span className="fb">  <i class="fa-brands fa-instagram icon-4x"></i></span>
         <span className="fb">  <i class="fa-brands fa-square-twitter icon-4x"></i></span>
            
        </div>
        <div className="footerTitle3">
            <h1>ABOUT FREELANCER</h1><br/>
            <p>
           Freelance is a free to use, MIT licensed <br/>Bootstrap theme created by <a>Start Bootstrap .</a>
            </p>

        </div>


    </div>
    </>)
}
export default Footer;