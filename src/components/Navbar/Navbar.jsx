import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

function Navbar() {

   

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <h4 style={{ color: "pivioletnk", marginRight: "200px" , borderStyle:"solid",borderRadius:"4px",borderColor:"orange"}}>Renomo</h4>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink className="nav-link" style={{ color: "orange", textDecoration: "none", marginRight: "30px",borderStyle:"solid", borderColor:"orange",borderRadius:"5px"}} to="/home" >Home</NavLink> 
                            <NavLink className="nav-link" style={{ color: "orange", textDecoration: "none", marginRight: "30px",borderStyle:"solid", borderColor:"orange",borderRadius:"5px"}} to="/popular" >Popular Players</NavLink> 
                            <NavLink className="nav-link" style={{ color: "orange", textDecoration: "none", marginRight: "30px",borderStyle:"solid", borderColor:"orange",borderRadius:"5px" }} to="/about" >About</NavLink>
                            <NavLink className="nav-link" style={{ color: "orange", textDecoration: "none", marginRight: "30px",borderStyle:"solid", borderColor:"orange",borderRadius:"5px" }} to="/contact" >Contact</NavLink>
                            <NavLink className="nav-link" style={{ color: "orange", textDecoration: "none", marginRight: "30px",borderStyle:"solid", borderColor:"orange",borderRadius:"5px" }} to="/signup">Sign Up</NavLink>
                           
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </div>
    )
}

export default Navbar
