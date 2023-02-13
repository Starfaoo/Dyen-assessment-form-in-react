
import React, {useState} from "react";


export const Input =({type, labeltxt, name })=>{
 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange =(e) => {
    e.preventDefault();
    setEmail(e.target.value);
    
  };

  const handlePasswordChange =(e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
 
return(
    <>
   
    <label  htmlFor={name}>{labeltxt}</label>
    <input  style={{border:"0.6px solid grey", background:"white", borderRadius:"3px",  marginTop:"5px", padding: "10px"}} id={name} type={type} name={name} labeltxt={labeltxt}/>
   
    
    </>
);
};

