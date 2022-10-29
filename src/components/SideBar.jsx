import React from "react";
import {Link, Outlet } from "react-router-dom";
function SideBar() {
  return (
    <>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto">
              <i className="fa-solid fa-house"></i> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="about" className="nav-link scrollto ">
              <i className="fa-solid fa-user"></i> <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="resume" className="nav-link scrollto active">
              <i className="fa-regular fa-file"></i> <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="#portfolio" className="nav-link scrollto">
              <i className="fa-solid fa-briefcase"></i> <span>Work</span>
              </Link>
            </li>
            <li>
              <Link to="#services" className="nav-link scrollto">
              <i className="fa-sharp fa-solid fa-gear"></i> <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="#contact" className="nav-link scrollto">
              <i className="fa-solid fa-envelope"></i> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>  
    {<Outlet />}
    </>
  );
}

export default SideBar;
