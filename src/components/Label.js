import React from 'react'
import '../style/Label.scss'

export class Label extends React.Component{
    constructor(props){
        super(props);
    }

    // whether the label is selected.
    isSelected(para){
        return para ? ' selected' : '';
    }


    render(){
        return <div className = {this.props.type} onClick={this.props.onClick}>
            <div className={this.props.type+'-inner'+ this.isSelected(this.props.selected)}><p> {this.props.content} </p></div>
            </div>;
    }
}