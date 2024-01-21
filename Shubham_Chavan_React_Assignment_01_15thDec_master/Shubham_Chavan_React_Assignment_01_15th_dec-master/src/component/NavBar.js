import React from 
"react";
import "./navBar.css";
import sta from "./image/star-90.svg"



const NavBar=()=>{
    return(<>
    <div className="navBar">
    <h1>START BOOTSTRAP
</h1>
<ul>
   <a><li><b>PORTFOLIO</b></li></a> 
   <a><li><b>ABOUT</b></li></a> 
   <a><li><b>CONTACT</b></li></a> 
</ul>
    
    </div>
    <div className="secOne">
        <img className="profile" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"/>
       <h1>START BOOTSTRAP
</h1>
<div className="line"></div><img className="star" src={sta}/> <div className="line2"></div>
<h2>Graphic Artist - Web Designer - Illustrator</h2>
    </div>
    
    
    </>)
}
export default NavBar;