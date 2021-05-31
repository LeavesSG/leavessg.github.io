import React from "react";
import "../style/About.scss";
import content_about from "../content/content-about.json";
import {myIcons} from "../statics/content.js";
import wechatPic from "../statics/wechat.png"
import { useLocation } from "react-router";

export class About extends React.Component{
    constructor(props){
        super(props)
        this.content = content_about.content.map((para)=>{
            return <p>{para.text}</p>
        })
        this.icons = myIcons.social_apps.map((icon)=>{
            return <a href={icon.link} target="_blank"><img src={icon.src} /></a>
        });
    }

    render(){
        return <div className="card-about">
            <div className="card-left">
                {this.content}
            <div className="container-icons">{this.icons}</div>
            </div>
            <div className="card-right"></div>
        </div>
    }
}