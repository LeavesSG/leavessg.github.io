import React from 'react'
import { Paragraph } from '../components/Paragraph';
import '../style/PopUpWindow.scss';

export class PopUpWindow extends React.Component{
    constructor(props){
        super(props);

        this.listContent = this.props.content.map(
            (item)=>{
                return <Paragraph className={'paragraph'+item.type} type={item.type} content={item.content} actualSize={this.props.actualSize}/>
            }
        )
    }


    render(){
        this.hidden = this.props.hidden ? " hidden-window" : 'normal';
        console.log(this.props.hidden,this.hidden)
        return <div className={'popUpWindow'+this.hidden}>
                <h4>{this.props.title}</h4>
                {this.listContent}
            </div>
    }


}

