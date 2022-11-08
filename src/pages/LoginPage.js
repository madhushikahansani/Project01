import React,{useState}from "react";
import { login } from "../services/loginServices";


const LoginPage = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

    const handlePasswordChange =(event) =>{
        setPassword(event.target.value);
    }

    const handleLogin = () =>{
       let isLogin = login(email,password);
       if(isLogin){
        alert("Login Successful");
       }
       else{
        alert("Invalid username or password");
       }
        console.log("Email :"+ email);
        console.log("Password :"+password);
    }
  return (
    <div>
        <div className="container blue">
            <div className="log">
            <h2 className="headerLog"> Login</h2>
            <input type="text" name="email" value={email} onChange={handleEmailChange} placeholder="Enter Your Email"/><br></br>
            <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Enter Your Password" /><br></br>
            <button className="loginBTN" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage;