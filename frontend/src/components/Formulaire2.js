import React from "react";
import './Formulaire2.css';

import { Button, FormGroup, FormControl } from "react-bootstrap";
import API from "./utils/APIform";

import { ControlLabel } from 'rsuite';

export default class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    cpassword: ""
  };
  send = async () => {
    const { email, password, cpassword } = this.state;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ email, password });
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { email, password, cpassword } = this.state;
    return (
      <div className="signup">
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl autoFocus type="email" value={email} onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl value={password} onChange={this.handleChange} type="password"/>
        </FormGroup>

        <FormGroup controlId="cpassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl value={cpassword} onChange={this.handleChange} type="password"/>
        </FormGroup>

        <Button type="submit" onClick={this.send} block bsSize="large" type="submit">Inscription</Button>
      </div>
    );
  }
}