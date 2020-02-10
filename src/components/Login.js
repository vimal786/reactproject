import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap'
import NavBarMenu from './NavbarMenu';

class Login extends Component {
    constructor(){
        super()
            this.state={
                password: "",
                name: ""
            }

    }

    login(){

        fetch('http://localhost:3000/login?q='+ this.state.name).then((data)=>{
            data.json().then((resp)=>{
                console.warn('resp',resp)
                if(resp.length > 0){
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('list'))
                }else{
                        alert("Please check user name & Password ")
                }
        
            })
        })
    }

    render() {
        return (
            <div>
  
  <NavBarMenu />
             <input type="text" placeholder="Enter name"
                name="user" onChange={(event)=>{this.setState({name:event.target.value})}} /><br/><br/>

             <input  type="password" placeholder="Enter Password"
             name="password" onChange={(event)=>{this.setState({password:event.target.value})}} /><br/><br/>
            
            <button variant="info" onClick={()=>{this.login()}}>Login</button>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;