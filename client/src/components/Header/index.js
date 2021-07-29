import React from 'react';
import { Link } from 'react-router-dom';

import Auth from "../../utils/auth"

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    
return(
    // <h1>Hello Header</h1>
    <div id="navbarHead">
    {Auth.loggedIn() ? (
      <>
        <span className="text-danger">{Auth.getProfile().data.username} LOGGED IN</span>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Logout
        </button>
      </>
    ) : (
      <>
        <Link className="btn btn-lg btn-info m-2" to="/login">
          Login
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/signup">
          Signup
        </Link>
      </>
    )}
  </div>


    
)
};

export default Header;