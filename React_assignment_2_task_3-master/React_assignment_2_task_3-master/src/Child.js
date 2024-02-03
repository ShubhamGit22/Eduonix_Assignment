import React, { useState } from "react";
const Child=({data,status})=>{
    const[name,setName]=useState();
    const[pass,setPass]=useState();
    const[flag,setFlag]=useState(false)
    console.log(flag)
console.log(data)
const login=()=>{
    
data.map((row)=>{
    if(name==row.name&&pass==row.password){
      
      
       setFlag(true)
       console.log(row)
       status(row)
      
    }
   else{

   }

})
}


    return(<>


    {flag==true?<h1>you are login !</h1>:<> <input placeholder="username" onChange={(e)=>{setName(e.target.value)}}/><br/>
    <input placeholder="password" type='password' onChange={(e)=>{setPass(e.target.value)}}/><br/>
    <button onClick={()=>{login()}}>login</button></>}
   

    </>)
}
export default Child