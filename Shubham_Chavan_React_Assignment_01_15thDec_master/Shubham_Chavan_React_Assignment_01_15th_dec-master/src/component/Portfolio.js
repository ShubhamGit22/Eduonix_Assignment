import React from "react";
import sta from "./image/star-90.svg"
import "./portfolio.css"
import cabin from "./image/cabin.png"
import cake from "./image/cake.png"
import circus from "./image/circus.png"
import game from "./image/game.png"
import safe from "./image/safe.png"

const Portfolio=()=>{
    return(<>
    <div className="secTwo">
        <h1>PORTFOLIO</h1>
        <div className="l1"></div><img className="star1" src={sta}/> <div className="l2"></div>
<div className="flex">
    <div><img  src={cabin}/></div>
    <div><img  src={cake}/></div>
    <div><img  src={circus}/></div>
    <div><img  src={game}/></div>
    <div><img  src={safe}/></div>
    <div><img  src={cabin}/></div>

</div>


    </div>
     
    
    
    
    
    
    </>)
}
export default Portfolio