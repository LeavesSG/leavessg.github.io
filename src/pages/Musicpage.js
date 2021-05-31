import React from 'react';
import { Card, ExpandedCard } from '../components/Card';
import {Page} from '../containers/Page'
import myMusic from '../content/music.json'

export class Musicpage extends React.Component{
    constructor(props){
        super(props);
        this.randomNum = Math.floor(Math.random()*10);
        this.state={
            display:false,
            displayIndex: 0,
        }

    }

    expandCards(index){
        this.setState({display: true, displayIndex: index})
    }

    shrinkCards(){
        this.setState({display: false})
    }

    displayCards(){
        let listcards=myMusic.map((element)=>{
            return <Card 
                content={element}   
                className='music' 
                key={element.index} 
                randomNum={this.randomNum}
                onClick={(index)=>this.expandCards(index)}
                expandedCard={this.state.display}
                />
        });
        return listcards
    }

    render(){
        return <div className='Music-Page' >
        <div onClick={()=>this.shrinkCards()} ><Page className="HomePage"index={0} onClick={()=>{let a}}/></div>
        
        <div className='cards-box'> {this.displayCards()} </div>
        <ExpandedCard content={myMusic[this.state.displayIndex]} display={this.state.display} />
        
        </div>

    }
}