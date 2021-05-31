import React from 'react'
import '../style/Paragraph.scss'

export class Paragraph extends React.Component{
    constructor(props){
        super(props);
    }

    getImgSize(imgsize, actualSize){
        console.log(actualSize)
        if(imgsize.width>actualSize.width*0.8){
            return {
                width: Math.floor(actualSize.width*0.7),
                height: Math.floor(actualSize.width*0.7*imgsize.height/imgsize.width)
            }
        }
        else{
            return {
                width: imgsize.width,
                height: imgsize.height
            }
        }
    }

    render(){

        switch(this.props.type){
            case 'text':
                return <div className = {'text-content'}><p> {this.props.content} </p></div>;
            case 'image':
                let img = this.props.content;
                let imgSize={
                    width:img.width,
                    height:img.height
                }
                return <img className={'img-content'} src={require('../statics/'+img.src)} alt={img.name} key={img.index} width={this.getImgSize(imgSize, this.props.actualSize).width || this.props.actualSize.width*0.4} height={this.getImgSize(imgSize, this.props.actualSize).height || this.props.actualSize.height*0.55}/>}
        }
        
    }