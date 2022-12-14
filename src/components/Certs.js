import React, {Component} from 'react';
import add from '../assets/add.svg';
import CertsContainer from './CertsContainer';
import uniquid from 'uniqid';
import '../styles/Certs.css';

class Cert{
  constructor(certTitle, dateAcquired){
    this.certTitle = certTitle;
    this.dateAcquired = dateAcquired;
    this.id = uniquid();
  };
};

export default class Certs extends Component{
  constructor(){
    super();
    this.state = {
      certArray: [new Cert('CompTIA A+','March, 11th, 2020'),new Cert('CompTIA Network+', 'July, 5th, 2021'), new Cert('CompTIA Security+', 'September 2nd, 2022')],
    };
  };

  render(){
    return(
      <div className='certs'>
        <div className='content-title'>Certifications</div>
        <CertsContainer certArray={this.state.certArray} removeCert={this.removeCert.bind(this)} setCert={this.setCert.bind(this)} />
        <img className='add' src={add} onClick={()=>this.addCert(new Cert('Certification', 'Date Acquired'))} alt='add a certification' />
      </div>
    );
  };

  addCert(cert){
    this.setState({
      certArray: this.state.certArray.concat(cert),
    });
  };

  removeCert(index){
    //get the current cert array
    let tempArray=this.state.certArray;
    //remove the cert at index
    tempArray.splice(index,1);
    //update the state with the tempArray
    this.setState({
      certArray: tempArray,
    });
  };

  setCert(title, date, index){
    //create a copy of the cert array
    let tempArray=this.state.certArray;
    //update the cert at the array
    tempArray[index].certTitle=title;
    tempArray[index].dateAcquired=date;
    this.setState({
      certArray: tempArray,
    });
  };
};
