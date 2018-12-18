import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReCaptcha } from 'react-recaptcha-google'
class App extends Component {
  constructor(props){
    super(props)
    this.registerhandle = this.registerhandle.bind(this);

    this.onLoadReecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
        isverified: false
    }
  }
  registerhandle(){
    if(this.state.isverified){
      
      alert('Registered Succsessfull');
    }else{
      alert('Please Proof You Are Human')
    }
  }
  componentDidMount() {
    if (this.captchaDemo) {
        console.log("started, just a second...")
        this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
      }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    //console.log(recaptchaToken, "<= your recaptcha token")
    if(recaptchaToken){
      this.setState({
        isverified: true
      })
    }
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
                  <li><a href="#">About</a></li>
                </ul>
              </nav>
           </td>
         </tr>
       </table>
       </header>

        <body className="grey">
           <div className="form">
              <div className="register-font">
               <h1>Register</h1>
              </div>
              <div className="colom">
              <p>Nama</p>
              <input type="text" placeholder="Nama" className="form-control" ></input>
              </div>
              <div className="colom">
                <p>Email</p>
                <input type="text" placeholder="Email" className="form-control"></input>
              </div>
              
              <div className="colom">
                <p>Alamat</p>
                <textarea placeholder="Alamat" className="form-control"></textarea>
              </div>
              
              <div className="colom">
                <p>No Handphone</p>
                <input type="text" placeholder="No Handphone" className="form-control"></input>
              </div>
              
              <div className="colom">
                <p>Usia</p>
                <input type="text" placeholder="Usia" className="form-control"></input>
              </div>
             
              <div className="colom">
               <p>Skils</p>
               <input type="text" placeholder="Skill" className="form-control"></input>
              </div>
              
              <div className="colom">
                <p>Pendidikan Terakhir</p>
                <select>
                  <option>SD</option>
                  <option>SMP</option>
                  <option>SMA</option>
                  <option>S1</option>
                </select>
              </div>
              
              <div className="colom">
                 <p>Asal Sekolah</p>
                 <input type="text" placeholder="Asal Sekolah" className="form-control"></input>
              </div>
              
              <div className="colom">
                 <p>Uploud KTP/Kartu Identitas</p>
                 <input type="file" placeholder="Asal Sekolah" className="form-control-file border"></input><br/>
              </div>
              
              <div className="colom">
                <label>               
                  <input type="checkbox"></input>
                  Saya Menyutujui <br/>
                  <a href="#">Syarat Dan Ketentuan</a>
                </label><br/>
              </div>  
              
              <div className="colom">
                <div>
                  {/* You can replace captchaDemo with any ref word */}
                  <ReCaptcha
                    ref={(el) => {this.captchaDemo = el;}}
                    size="normal"
                    data-theme="dark"            
                    render="explicit"
                    sitekey="6LfQR4IUAAAAAFPioJtlx1v2GeVJJ8_cRrLaa4Ww"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                  />
              </div>
             
              </div>
               <div className="colom">
                <button className="btn btn-primary" onClick={this.registerhandle}> Submit</button>
              </div>
          
          </div>
        </body>
        <footer >
            <div className="footer">
                <p>asdasd</p>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
