import React from 'react'
import  Subpage  from './Subpage'
import '../style/Page.scss'
import myearth from '../statics/earth.svg'
import BlockNode from '../components/Block'

export class Page extends React.Component{
    constructor(props){
        super(props);
        this.pagevw = window.screen.width;
        this.pagevh = window.screen.height;
        this.actualSize = {width:this.pagevw,height:this.pagevh,area: this.pagevw*this.pagevh}
    }

    componentDidMount(){


    }


    render(){
        return <div className={this.props.className+'-page'} id={this.props.id} onClick={()=>this.props.onClick()}>

            <Subpage name={this.props.className+"-left"} index={this.props.index} actualSize={this.actualSize}/>
            <Subpage name={this.props.className+"-middle"} index={this.props.index} actualSize={this.actualSize}/>
            <Subpage name={this.props.className+"-right"} index={this.props.index} actualSize={this.actualSize}/>
            {this.props.className == "HomePage" &&
                <div className={'parent-block'}><BlockNode count={10} width={1} height={1} isVertical={false} actualSize={this.actualSize}/></div>
            }

            {/* {this.props.className == "HomePage" &&
              <img src = {myearth} alt = "myearth" className={"myearth"}></img>
            } */}
            

        </div>
    }
}