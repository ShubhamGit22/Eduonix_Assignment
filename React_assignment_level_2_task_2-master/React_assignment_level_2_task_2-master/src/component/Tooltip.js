import React from "react"
import Children from "./Children"

const Tooltip=()=>{
    return(<>
    <div className="section">
        <div className="tooltiptext">
            <h1>Hover over me</h1><hr></hr> 
            <Children text={ <div className="tooltip">
<h1>This is Tooltip</h1>
    </div>}/>
       
        </div>
        <div className="tooltiptext2">
            <h3>Hover over me to see another tooltip</h3><hr></hr>
            <Children text2={ <div className="tooltip2">
    <h1>This is another Tooltip</h1>
    </div>}/>
        </div>
       
    </div>
    
    </>)
}
export default Tooltip