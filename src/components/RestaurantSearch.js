import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Table,Form,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import NavBarMenu from './NavbarMenu';
class RestaurantSearch extends Component {

    constructor(){
        super()
        this.state= {
            searchData:null,
            noData:false,
            lastSearch: ""
        }
    }

    search(key) {
        this.setState({lastSearch:key})
        fetch('http://localhost:3000/restodent?q='+ key).then((data)=>{
            data.json().then((resp)=>{
                if(resp.length>0)
                {
                 this.setState({searchData:resp})
                
                }
                else{

                    this.setState({noData:true,searchData:null})
                   
                }
            })
        })
    }
    delete(id){
        fetch("http://localhost:3000/restodent/"+id,{
            method:"DELETE",              
            body: JSON.stringify(this.state)

        }).then((result)=>{
               result.json().then((respnce)=>{
                alert("Restaurent has successfully Deleted")
                this.search(this.state.lastSearch)
               })
        })

    }


    render() {
        return (
            <Container>
                  
      <NavBarMenu />
                <h1>Restaurdant Search</h1> 
               
                <Form.Control  onChange={(event)=>this.search(event.target.value)}  placeholder="Search Restaurant" />
                <div>
                    {
                     this.state.searchData ?
                        <div>
                                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    {
                                    this.state.searchData.map((item)=>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td> <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link>
                                        <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                                    </tr>  )}
                                </tbody>
                            </Table>

                            
                        </div> : " "

                    }
                    {
                        this.state.noData?<h3>No Data Found</h3>: null
                    }
                </div>
            </Container>
        );
    }
}

RestaurantSearch.propTypes = { };

export default RestaurantSearch;