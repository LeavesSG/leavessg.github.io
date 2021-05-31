import { wait } from '@testing-library/react';
import React from 'react'
import { createPortal } from 'react-dom';
import '../style/Block.scss';
import '../style/variables.scss';

class BlockNode extends React.Component{
    constructor(props){
        super(props);
        // get component size from parent
        this.width = this.props.width;
        this.height = this.props.height;
        this.count = this.props.count;

        // get the actual size of component, calculate its width/height rate.
        this.actualSize = this.props.actualSize;
        this.squareRate = (this.actualSize.width*this.actualSize.height/this.actualSize.area);
        this.whrate = this.actualSize.width/this.actualSize.height;

        // keep the block width/height rate close to 1
        if(this.whrate>1){
            this.isVertical = false;
            this.largeElementRate = Math.floor(this.elementRate(this.whrate)*1000)/1000
        }
        else if(this.whrate<1){
            this.isVertical = true;
            this.largeElementRate = Math.floor(this.elementRate(this.whrate)*1000)/1000
        }

        // if its already square, cut it off from 0.618
        else {this.largeElementRate=0.618;this.isVertical = true;}
        this.reverse = Math.random()>0.5;
        this.largeElementRate = 0.75;
        this.recursive = this.squareRate>0.04;
        this.elementSize = this.getElementSize();
        this.style = this.getParentStyle();

    }

    // translate width/height rate to 'cut off' position
    elementRate(whrate){
        if(whrate>2){
            return whrate-1;
        }else if(whrate>1){
            return 1/(whrate-1);
        }else if(whrate=1){
            return 0.618;
        }else if(whrate>1/2){
            return 1/whrate-1
        }else{return 1(1/whrate-1)}
    }

    // init the block node style
    getParentStyle(){
        this.style0 = {
            width: `${this.width*100}`+'%',
            height: `${this.height*100}`+'%',
        }
        if(this.isVertical && this.reverse){
            this.style0.flexDirection = 'column-reverse'; 
        }else if(this.isVertical && !this.reverse){
            this.style0.flexDirection = 'column';
        }else if(this.reverse){
            this.style0.flexDirection = 'row-reverse';
        }else{this.style0.flexDirection='row'; }
        return this.style0;
    }

    // give the child element their actual size
    inheritSize(size){
        return {
            area :this.actualSize.area,
            width :size.width * this.actualSize.width,
            height :size.height * this.actualSize.height
        }
    }

    // generate the width, height for child element
    getElementSize(){
        if(this.isVertical === false){
            return {
                largeElement: {width: this.largeElementRate, height: 1.00},
                smallElement: {width: 1.00-this.largeElementRate, height: 1.00}
            }
        }
        else{
            return {
                largeElement: {width: 1.00 , height:this.largeElementRate},
                smallElement: {width: 1.00 ,height: 1.00 - this.largeElementRate}
            }
        }
    }

    // recursion
    recursion(size){
        if(1){return <BlockNode count={this.count-1} width={size.width} height={size.height} isVertical={!this.isVertical} actualSize={this.inheritSize(size)}/>};
    }

    // recursion for large elemts
    largeRecursion(size,){
        if(this.recursive){return this.recursion(size)}
        else{return this.coloredBlock(size)}
    }

    //
    smallRecursion(size,){
        if(this.recursive){return this.recursion(size)}
        else{return this.coloredBlock(size)}
    }

    // end of recursion
    displayElement(size){
        let style0 ={
            width:`${size.width*90}`+'%',
            height: `${size.height*90}`+'%',
        }
        return  <EndBlock name={"end-block"} style={style0}/>
    }

    // color some of the end block
    coloredBlock(size){
        let a = Math.floor(Math.random()*50);

        let colorable = false;
        let actualwh = this.inheritSize(size).width/this.inheritSize(size).height
        if(actualwh<1.5 && actualwh>0.667){ colorable = true}
        let red = 'theme-red';
        let yellow = 'theme-green';
        let blue = "theme-blue";
        let colorStr;
        if(a<3 && colorable) colorStr=red;
        else if(a<6&& colorable) colorStr=blue;
        else if(a<9&& colorable) colorStr = yellow;
        else colorStr='white';
        // let colorStr = 'rgba('+`${red}`+','+`${green}`+','+`${blue}`+')';

        let style0 ={
            width:`${size.width*90}`+'%',
            height: `${size.height*90}`+'%',
            // backgroundColor: colorStr,
            display:'block'

    
        }
        if(a<10){return  <EndBlock name={"colored-block"+" "+colorStr}  style={style0}/>}
        else{return this.displayElement(size)}
        
    }


    render(){
        return <div className={"block-node"} id={"block-node-"+`${this.count}`} style={this.style}>
            {this.largeRecursion(this.getElementSize().largeElement)}
            {this.smallRecursion(this.getElementSize().smallElement)}
        </div>
    }
}

class EndBlock extends React.Component{
    constructor(props){
        super();
        this.props=props;
        this.name = this.props.name;
        this.style = this.props.style;

        this.state = {
            onMouseover: false,
        }
        this.respondGap=false;

        this.flip=this.flip.bind(this);
    }

    // flip effect
    flip(){
        if(!this.respondGap){
            this.setState({onMouseover: true});
            this.respondGap=true;
            setTimeout(()=>{
                this.setState({onMouseover: false});
                this.respondGap=false;
            },500)
        }
    }

    // detect whether the user is hovering the element
    isHover(boolean){
        if(boolean){return ' hovering'}
        else{return ''}
    }


    render(){
        return <div className={this.name +this.isHover(this.state.onMouseover)} style={this.style} onMouseOver={this.flip}></div>
    }
}

export default BlockNode;
