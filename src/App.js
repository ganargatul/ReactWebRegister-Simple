import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { loadReCaptcha,ReCaptcha } from 'react-recaptcha-google';
import {ReCaptcha} from 'react-recaptcha';
class App extends Component {
  pesan(){
    alert("ini pesan");
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }
  render() {
    return (
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
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Profile</a></li>
                </ul>
              </nav>
           </td>
         </tr>
       </table>
       </header>
       <body className="grey">
          <div className="form">
              <h1>Register</h1>
              <p>Nama</p>
              <input type="text" placeholder="Nama" className="form-control"></input>
              <p>Email</p>
              <input type="text" placeholder="Email" className="form-control"></input>
              <p>Alamat</p>
              <textarea placeholder="Alamat" className="form-control"></textarea>
              <p>No Handphone</p>
              <input type="text" placeholder="NO Handphone" className="form-control"></input>
              <p>Usia</p>
              <input type="text" placeholder="Usia" className="form-control"></input>
              <p>Skils</p>
              <input type="text" placeholder="Usia" className="form-control"></input>
              <p>Pendidikan Terakhir</p>
              <select>
                <option>SD</option>
                <option>SMP</option>
                <option>SMA</option>
                <option>S1</option>
              </select>
              <p>Asal Sekolah</p>
              <input type="text" placeholder="Asal Sekolah" className="form-control"></input>
              <p>Uploud KTP/Kartu Identitas</p>
              <input type="file" placeholder="Asal Sekolah" className="form-control-file border"></input><br/>
              <label>
                
                <input type="checkbox"></input>
                Saya Menyutujui <br/>
                <a href="#">Syarat Dan Ketentuan</a>
              </label><br/>
              <button className="btn btn-primary"> Submit</button>
          </div>
       </body>
      </div>
    );
  }
}

export default App;
