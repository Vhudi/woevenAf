import React from 'react';
import "./navbar.css"
import logo from "../../images/logoWA.jpg"
import { Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
//import { Routes, Route } from "react-router-dom";

function NavigationBar() {
  return( 
        <div class="container-fluid">
          <Nav class="nav navbar navbar-dark navbar-expand-sm bgcolor justify-content-center fixed-top" role="navigation">
            <Link class="navbar-brand" to="">
                <img class="nav-img" src={logo} alt="Logo"/>
            </Link>
            <Navbar class="a">
              <NavLink  class="active" to='/' className="nav-link text-dark" > WOEVEN AFREEKUH</NavLink>
              <NavLink to='/about'className="nav-link text-dark">About Company</NavLink>
              <NavLink  to='/portfolio-work'className="nav-link text-dark">PORTRAIT PHOTOGRAPHY</NavLink>
              <NavLink  to='/events'className="nav-link text-dark">EVENT PHOTOGRAPHY</NavLink>
              <NavLink to='/graphicDesign'className="nav-link text-dark">GRAPHIC DESIGN</NavLink>
              <NavLink to='/#'className="nav-link text-dark">MODELLING</NavLink>
            </Navbar>
        </Nav>
        </div>);


};

export default NavigationBar;