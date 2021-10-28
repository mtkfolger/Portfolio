import React from "react";


<NavLink 
    className="nav-link"
    activeClassName="active"
    style={{ fontSize: "23px" }}
    isActive={() => window.location.pathname === "/about"}
    to="/about">
    About
</NavLink> 

                        

export default Navbar;