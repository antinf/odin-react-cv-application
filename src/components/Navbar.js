import React, {Component} from 'react';
import githubLogo from '../assets/github.svg';
import odinLogo from '../assets/odin.svg';

export default class Navbar extends Component{
  render(){
    return(
      <div className='nav'>
        <div className='title'>Odin React CV Application</div>
        <a href='https://github.com/antinf'>
          <img alt='github logo' src={githubLogo} />
        </a>
        <a href='https://theodinproject.com/lessons/node-path-javascript-cv-application'>
          <img alt='odin project logo' src={odinLogo} />
        </a>
      </div>
    );
  }
}