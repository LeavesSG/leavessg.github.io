import React, { useEffect, useState } from 'react';
import { Card } from "../components/Card";
import "../style/Uxportfolio.scss";
import myUxCards from "../content/portfolio-cards.json";

export function Uxportfolio(){
    const [navPos, setNavPos] = useState(0);

    var content = myUxCards['content-CN'].map((card)=>{
        return <div className={"ux-card"}>
            <img className="card-img" src={card.images.src} alt={card.images.name} width="400px" height="300px"/>
            <div><h3>{card.title}</h3><p>{card.content}</p></div>
            <div></div>
        </div>
    })


    useEffect(()=>{
        let scrollListner = window.addEventListener("scroll",()=>{setnavPos()});
    })

    function setnavPos(){
        for(let i=0;i<4;i++){
            if(document.getElementById(i)&&
            document.getElementById(i).getBoundingClientRect().bottom>0 &&
             document.getElementById(i).getBoundingClientRect().top>0){
                setNavPos(i);
                break;
            }
        }
    }

    function scrollToEle(n){
        console.log("clicked");
        document.getElementById(n) && document.getElementById(n).scrollIntoView({
            behavior: "smooth",
            block : "center"
        })}

    return <div className="portfolio-page">
        <nav className="float-nav">
            <div className={navPos!=0?"floatnav-item":"floatnav-item onFocus"} onClick={()=>{scrollToEle(0)}}>Fitlody</div>
            <div className={navPos!=1?"floatnav-item":"floatnav-item onFocus"} onClick={()=>{scrollToEle(1)}}>Infinite Traval</div>
            <div className={navPos!=2?"floatnav-item":"floatnav-item onFocus"} onClick={()=>{scrollToEle(2)}}>Pillow</div>
            <div className={navPos!=3?"floatnav-item":"floatnav-item onFocus"} onClick={()=>{scrollToEle(3)}}>Graphic Designs</div>
        </nav>
        <div className="header-blank"></div>
            <Card id="0" content={content[0]} />
            <Card id="1" content={content[1]}/>
            <Card id="2" content={content[2]}/>
            <Card id="3" content={content[3]}/>
    </div>
}