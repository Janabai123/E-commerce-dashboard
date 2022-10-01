import React, { useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem('user');
const navigate=useNavigate();
const logout=()=>{
    console.log('apple')
    localStorage.clear();
    navigate('/signup');
}

    return(
        <div>
        <img src='https://i.pinimg.com/originals/51/6a/dd/516add894c6ec82132725abea44f1d23.jpg' className="logo"alt="logo"></img>
        {auth ?  <ul className='nav-ul'>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link  onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
               </ul>
                     :
                     <ul className='nav-ul nav-right'>
               <li> <Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        }
        </div>
    )
}
export default Nav;