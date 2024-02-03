import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{
    const[log,setLog]=useState([{name:"rohit",
    password:123,
    isLogedIn:false
    },
    {name:"gajbhiye",
    password:123,
    isLogedIn:false}])

const loginStatus=(value)=>{
    console.log(value)
    log.map((row)=>{
        if(row==value){
            setLog(row.isLogedIn=true)
            console.log(row)
        }

    })
    
    

}
console.log(log)


    return(<>
    <div>
        <h1>parent component</h1>

        <Child data={log} status={loginStatus}/>
    </div>
   
    
    
    
    </>)
}
export default Parent