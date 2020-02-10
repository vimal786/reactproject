import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import NavBarMenu from './NavbarMenu';
class RestaurantCreate extends Component {

        constructor(){
            super();
            this.state={
                name: null,
                rating: null,
                email: null,
                address: null,
            }

        }


    create(){
        fetch("http://localhost:3000/restodent",{
            method:"Post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)

        }).then((result)=>{
               result.json().then((respnce)=>{
                alert("Restaurent has successfully added")
               })
        })
       
    }

    render() {
        return (
            <div>
                
                <NavBarMenu />
                 <h1>Restaurant Create</h1>
              <div>
                    <input onChange={(event)=>{this.setState({name: event.target.value})} }
                    placeholder="Restaurant Name"/><br/><br/>
                     <input onChange={(event)=>{this.setState({rating: event.target.value})} }
                    placeholder="Restaurant Rating"/><br/><br/>
                     <input onChange={(event)=>{this.setState({email: event.target.value})} }
                    placeholder="Restaurant Email"/><br/><br/>
                     <input onChange={(event)=>{this.setState({address: event.target.value})} }
                    placeholder="Restaurant Address"/><br/><br/>
                    
                    <Button onClick={()=>{this.create()}}>Add Restaurant</Button>

              </div>

            </div>
        );
    }
}

RestaurantCreate.propTypes = {

};

export default RestaurantCreate;