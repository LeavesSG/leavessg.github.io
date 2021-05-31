import React, { useEffect, useState } from 'react'
import { Card } from "../components/Card";
import "../style/Uxportfolio.scss"

export function Uxportfolio(){

    function getContent(){
        
    }

    return <div className="portfolio-page">
        <nav className="float-nav">
            <span className="floatnav-item">Fitlody</span>
            <span className="floatnav-item">Infinite Traval</span>
            <div className="floatnav-item">Pillow</div>
            <div className="floatnav-item">Graphic Designs</div>
        </nav>
        <div className="header-blank"></div>
            <Card />
            <Card />
            <Card />
            <Card />
    </div>
}