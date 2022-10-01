import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
const Login=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[])
const handlelogin=async ()=>{
console.log(email,password)

let result=await fetch('http://localhost:5000/login',
{method:'post',
body:JSON.stringify({email,password}),
headers:{
    'Content-Type':'application/json'
}
} );
result=await result.json();
console.log(result);

if(result.auth){
localStorage.setItem("user",JSON.stringify(result.user));
localStorage.setItem("token",JSON.stringify(result.auth));
navigate('/');
}else{
    alert("please enter correct details")
}

}

return(
    <div className='login'>
<input type="text"  className="inputBox" onChange={(e)=>setEmail(e.target.value)}  value={email} placeholder='Enter email'></input>
<input type="password"  className="inputBox"  onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter password'></input>
<button type="button"  onClick={ handlelogin} className="appbutton">Login</button>
    </div>
)
}
export default Login;