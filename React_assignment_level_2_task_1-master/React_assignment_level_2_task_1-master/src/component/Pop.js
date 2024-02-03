import React from "react";

const Pop=({onClose,show})=>{
   
    console.log(onClose)
   




    return(<>

    {onClose===true? <div className="box">
        <button onClick={()=>{
            show(false)
        }} className="modal-close">Close</button>
        <p className="modal-p">This is the content of the modal!</p>
        
        
        </div>:<div></div>}
   
    
    
    
    </>)
}
export default Pop