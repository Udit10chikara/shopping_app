import React from 'react'
import {Link} from 'react-router-dom'
//import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';
//import { MyLocationRounded } from '@mui/icons-material';
export default function Nav() {
  //const { loginWithRedirect, isAuthenticated,logout,user } = useAuth0();
  const mycart = useSelector((state)=>state.cartData);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Pricing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/checkout/cart">Cart({mycart?.length})</Link>
      </li>
    </ul>
    
  </div>
  {/* <ul className="nav justify-content-end">
  <li className="nav-item">
{isAuthenticated && <li className="nav-item">{user.name} </li>}
    </li>
    {isAuthenticated ? (
       <li className="nav-item">
       <button  className="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>
           Log Out
         </button>
       </li>
    ):(
      <li className="nav-item">
      <button className="btn btn-alert" onClick={() => loginWithRedirect()}>Log In</button>
  </li>
    )}
  
  
  </ul> */}
</nav>
    </div>
  )
}
