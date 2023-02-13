import {useState} from "react";
import logo from './logo.svg';
import {Text} from "./Text.js";
import {Input} from "./Input.jsx";
import {Button} from "./Button.js"



function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange =(e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(setEmail);
  };

  const handlePasswordChange =(e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };


  return (
   <div >
    <div style={{margin:"2px auto", display:"flex" , justifyContent: "center", marginTop: "20px"}}>
    <img src={logo} alt="logo" />
    </div>
    <div style={{backgroundColor: "white", display: "flex", flexDirection: "column", width: "23%", borderRadius: "12px", justifyContent:"center",  margin: "20px auto", padding: "40px"  , fontFamily:"montserrat"}}>
      <form>
        <header>
      <Text type="h2" margin="0 0 10px 0" >Log in to your account</Text>
      <div style={{display: "flex", alignItems: "center" , justifyContent:"normal"}}>
      <Text type="p" >Don't have an account?</Text><pre>      </pre>
      <Text textDecoration="none"  type="a" href="#">Get started</Text>
      </div>
      </header>
      
      <div style={{display: "flex", flexDirection: "column" ,margin: "20px 0"  }}>
      <label  >Email:</label>
      <Input onChange={handleEmailChange} value={email} type="email" name="email" id="name" />
    </div>
    
    <div style={{display: "flex", flexDirection: "column" ,margin: "20px 0"  }}>
     <label display="flex"  justifyContent="space-between" >Password: <Text float="right" textDecoration="none" fontFamily="montserrat" type="a" href="#">Forgot Password</Text></label>
     <Input onChange={handlePasswordChange} value={password} type="password" name="password" />
     </div>

     <div style={{display: "flex", flexDirection: "column" }}>
      <Button type="submit" btntxt="Submit"/>
      </div>
      </form>
      </div> 
      </div>
  );
}

export default App;
