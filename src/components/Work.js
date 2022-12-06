import React, {Component} from "react";
import uniqid from "uniqid";
import WorkContainer from "./WorkContainer";
import add from "../assets/add.svg";
import '../styles/Work.css';

class WorkItem{
  constructor(title,ystart,yend,location,duties){
    this.title=title;
    this.ystart=ystart;
    this.yend=yend;
    this.location=location;
    this.duties=duties;
    this.id = uniqid();
  };
};
export default class Work extends Component{
  constructor(){
    super();
    this.state = {
      workArray: [new WorkItem('Web Developer', '2022', 'Present', 'New York', 'Working on the Odin Project!')],
    };
  }

  render(){
    return(
      <div className="work">
        <div className="content-title">Work Experience</div>
        <WorkContainer workArray={this.state.workArray} setWorkItem={this.setWorkItem.bind(this)} removeWorkItem={this.removeWorkItem.bind(this)}/>
        <img className="add" onClick={()=>{this.addWorkItem(new WorkItem('Web Developer','2022', 'Present','New York', 'Placeholder'))}} src={add} alt='add a work item' />
      </div>
    )
  }

  addWorkItem(workItem){
    this.setState({
      workArray: this.state.workArray.concat(workItem),
    });
  }

  removeWorkItem(index){
    //copy the workArray
    let tempArray= this.state.workArray;
    //splice at index
    tempArray.splice(index,1);
    //update the workArray
    this.setState({
      workArray: tempArray,
    });
  }

  setWorkItem(title, ystart, yend, location, duties, index){
    //copy the workArray
    let tempArray = this.state.workArray;
    //update the work item at index
    tempArray[index].title=title;
    tempArray[index].ystart=ystart;
    tempArray[index].yend=yend;
    tempArray[index].location=location;
    tempArray[index].duties=duties;
    //update the state
    this.setState({
      workArray: tempArray,
    });
  }
}