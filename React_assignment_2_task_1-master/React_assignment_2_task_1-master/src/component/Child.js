import React, { useState } from "react";
const Child=({dynamicTxt})=>{
    const[text,setText]=useState()



dynamicTxt(text)

    return(<>
    <div className="child">
        <h1>
            child component
        </h1>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
    </div>

    
    
    
    </>)
}
export default Child;