import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { ReCaptcha } from 'react-recaptcha-google'
import about from './about';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class home extends Component{
    render(){
        return(
            <div className="App">
      
            <header className="header">
            <table>
              <tr>
                <td>
                  <img src={logo} className="inilogo"></img>
                </td>
                <td>
                   <nav>
                     <ul>
                       <li>
                         
                       </li>
                       <li><a href="#">Profile</a></li>
                       <li><a href="#">About</a></li>
                     </ul>
                   </nav>
                </td>
                
              </tr>
            </table>
            </header>
            <body>
                <p>INI body menu about</p>
            </body>

            <footer>
                <p>INI footer menu about</p>
            </footer>
            </div>
        );
    }
}
export default home;