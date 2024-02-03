import React, { useState } from "react";

const Form=()=>{
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[pass,setPass]=useState()
    const[data,setData]=useState([])

const submitHandler=(e)=>{
    e.preventDefault()
    const objData={
        name,
        email,
        pass
    }
    setData([...data,objData])
    setName("");
    setEmail("")
    setPass("")

}
console.log(data);

    return(<>

    <div className="form">
        <form onSubmit={submitHandler} >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}/><br></br>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/><br></br>
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" onChange={(e)=>setPass(e.target.value)} value={pass}/><br></br>
            <button>submit</button>

        </form>
    </div>
    </>)
}
export default Form