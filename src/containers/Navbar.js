import React, { useEffect, useState } from 'react'
import logo from '../statics/logo.svg'

import '../style/Navbar.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";

export function Navbar(){
    const [currPos, setPos]  = useState("/");
    var position = useLocation().pathname;

    useEffect(()=>{
        setPos(position);
    });

    return <nav className="navbar">
        <div className="navcontainer-left">
            <a className="logo-btn" href="#top"><img className="logo" src={logo} alt="logo" href="#top"/></a>
            <p>Tianyi's Website</p>
        </div>
            <div className="navcontainer-right">
                <Link className={currPos=="/"?"nav-link selected":"nav-link"} to="/"><p>Home</p></Link>
                <Link className={currPos=="/about"?"nav-link selected":"nav-link"} to="/about"><p>About</p></Link>
                <Link className={currPos=="/topics"?"nav-link selected":"nav-link"} to="/topics"><p>Topics</p></Link>
                <Link className={currPos=="/ux_portfolio"?"nav-link selected":"nav-link"} to="/ux_portfolio"><p>UX Portfolio</p></Link>
            </div>
      </nav>

    }

