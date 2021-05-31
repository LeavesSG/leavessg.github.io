import React from 'react'
import { Label } from './Label';
import '../style/Card.scss';

export function Card(props){
    
    return <div id={props.id} className="card">
        {props.content && props.content}
    </div>
}

export function BorderlessCard(){
    return <div className="borderlesscard"> </div>
}