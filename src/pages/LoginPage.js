import React,{useState, useContext} from "react";
import { UserContext } from '../context/UserContext';
import { login } from "../services/loginServices";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const {setAuthUser} = useContext(UserContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

    const handlePasswordChange =(event) =>{
        setPassword(event.target.value);
    }

    const handleLogin = () =>{
      fetch(`http://localhost:5000/user?email=${email}&password=${password}`)
          .then(res=>res.json()) //extract json data
          .then(result=>{
  
       if(result.length >0){
         setAuthUser({
            email: result[0].email,
            name: result[0].fullName,
            id: result[0].id
         })
         navigate('/home');
       }
       else{
        alert("Invalid username or password");
       }
        console.log("Email :"+ email);
        console.log("Password :"+password);
            })
      
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