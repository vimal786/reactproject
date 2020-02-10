import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import NavBarMenu from './NavbarMenu';
class RestaurantUpdate extends Component {

    constructor(){

        super();
        this.state={
            name: null,
            email: null,
            rating : null,
            address: null
        }
    }

    componentDidMount()
    {

        fetch('http://localhost:3000/restodent/'+this.props.match.params.id).then((response)=>
        {
            response.json().then((result)=>{
                this.setState({
                    id:result.id,
                    name:result.name,
                    email:result.email,
                    rating:result.rating,
                    address:result.address
                })

            })
        })
    }
    update(){

        fetch("http://localhost:3000/restodent/"+this.state.id,{
            method:"PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)

        }).then((result)=>{
               result.json().then((resp)=>{
                alert("Restaurent has successfully updated")
               })
        })
    }

    render() {

        return (
            <div>
                  
      <NavBarMenu />
                <h>Restaudent Update</h>

                <div>
                    <input onChange={(event)=>{this.setState({name: event.target.value})} } value={this.state.name}/><br/><br/>
                     <input onChange={(event)=>{this.setState({rating: event.target.value})}} value={this.state.rating} /><br/><br/>
                     <input onChange={(event)=>{this.setState({email: event.target.value})} } value={this.state.email} /><br/><br/>
                     <input onChange={(event)=>{this.setState({address: event.target.value})} }value={this.state.address} /><br/><br/>
                    
                    <Button onClick={()=>{this.update()}}>Update Restaurant</Button>

              </div>
            </div>
        );
    }
}



export default RestaurantUpdate;