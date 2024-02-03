import React, { useState } from "react";
import Pop from "./Pop";




const Modal=()=>{
const[onClose,setOnClose]=useState()
console.log(onClose)

 const show= (value)=>{
    console.log(value)
    setOnClose(value)

}


    return(<>

    <div className="modal-overlay">
     
            <button onClick={()=>{setOnClose(true)}}>Show Modal</button>

    </div>
    <Pop onClose={onClose} show={show}/>
    
    
    </>)
}
export default Modal;