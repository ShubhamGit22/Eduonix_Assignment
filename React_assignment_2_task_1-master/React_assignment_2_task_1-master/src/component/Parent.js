import React,{useState} from "react";
import Child from "./Child";
const Parent=()=>{
    const[text,setText]=useState()
    console.log(text)
    function dynamicTxt(value){
        setText(value)

    }

    return(<>
    
    <div className="parent">
        <h1>
            Parent component
        </h1>
        {text}
        <Child dynamicTxt={dynamicTxt}/>

    </div>
    
    
    
    </>)
}
export default Parent