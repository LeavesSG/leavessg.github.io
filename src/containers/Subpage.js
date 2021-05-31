import React from 'react'
import '../style/Subpage.scss'
import myContent from '../content/portfolio-cards.json'
import { Paragraph } from '../components/Paragraph'

class Subpage extends React.Component{
    constructor(props){
        super(props);
        if(myContent.length>this.props.index && this.props.index >= 0){this.content=myContent[this.props.index]}
        

        if(this.content){
        this.title =  <h4>{this.content.title}</h4>}

        if(this.content){
            let row = this.content.content
            this.listContent =  <Paragraph content={row} type="text" />}

        if(this.content){
            let img = this.content.images;
            this.listImages = <img src={require('../statics/'+img.src)} alt={img.name} key={img.index} width={this.props.actualSize.width*0.4} height={this.props.actualSize.height*0.55}/>}
    }

    display_content(){
        if(this.props.name=="portfolio-content-left" && this.props.index%2 == 1){
            return true;
        }
        else if(this.props.name=="portfolio-content-right" && this.props.index%2 == 0){
            return true;
        }
        else{
            return false;
        }
    }

    display_image(){
        if(this.props.name=="portfolio-content-left" && this.props.index%2 == 0){
            return true;
        }
        else if(this.props.name=="portfolio-content-right" && this.props.index%2 == 1){
            return true;
        }
        else{
            return false;
        }
    }

    displayType(){
        return this.display_content() ? ' display-content' : ' display-img';
    }

    render(){
        return <div className={this.props.name+ this.displayType()} id={this.props.id}>
            {this.display_content() && 
            this.title
            }
            
            {this.display_content() && 
            this.listContent
            }

            {this.display_image() && 
            this.listImages
            }


        </div>
    }
}

export default Subpage;