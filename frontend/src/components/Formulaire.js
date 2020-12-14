import React from "react";
import './Formulaire.css';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props){
    super(props);

      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
        

    this.state={
      email:'',
      password:''
    }
  }


  onChangeEmail(e){
    this.setState({
      email:e.target.value
    });
  }

    onChangePassword(e){
      this.setState({
        password:e.target.value
      });
  }
  onSubmit(e){
    e.preventDefault();
    
    const user={
      email:this.state.email,
      password:this.state.password
    }

    console.log(user);
    //window.location='/'
    axios.post('http://localhost:3002/auth/login', user)
      .then(res=>console.log(res.data))

  }
  render() {
    return (
      <div className="signup">
        <h3>Veuillez-vous connecter</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <div className="form-group">
              <label>email : </label>
              <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}/>
            </div>
            <div className="form-group">
              <label>password : </label>
              <input type="password"  value={this.state.password} className="form-control" onChange={this.onChangePassword}/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="create user"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}export default Signup;