import React, { useState } from "react";

const Tab=()=>{
    const[tab,setTab]=useState([{title:"Tab1"},{title:"Tab2"},{title:"Tab3"}]);
    const[tab1,setTab1]=useState([{title:"TabA"},{title:"TabB"},{title:"TabC"}]);
    const[select,setSelect]=useState()
    const[select1,setSelect1]=useState()
    
    return(<>
    <div>
        {
           
            tab.map((row)=>{
                console.log(row)
                return(<>
                <ul>
                    <li onClick={()=>{setSelect(row.title)}}>{row.title}</li>
                </ul>
                </>)

            })
        
        }
        <p>content for {select}</p>

    </div>
    <div>
        {
           
            tab1.map((row)=>{
                console.log(row)
                return(<>
                <ul>
                    <li onClick={()=>{setSelect1(row.title)}}>{row.title}</li>
                </ul>
                </>)

            })
        
        }
        <p>content for {select1}</p>

    </div>


    </>)
}
export default Tab;