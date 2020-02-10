import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import NavBarMenu from './NavbarMenu';
class RestauranstList extends Component {
        constructor(){
            super();
                this.state ={
                    list: null

            }
        }

        componentDidMount(){
            this.getData()
        }

        getData(){
            fetch("http://localhost:3000/restodent").then((responce)=>{
                responce.json().then((result)=>{
                    this.setState({list:result})
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
                    this.getData()
                   })
            })

        }

    render() {
        return (
            <div>
                                
      <NavBarMenu />
                <h1>Restauranst-List</h1>
                {
                    this.state.list ?
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
                            this.state.list.map((item,i)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.rating}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td> <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link>
                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                            </tr>
                            
                            )}
                            </tbody>
</Table>
                    </div>
               :<p> Please wait...</p>
                }
            </div>
        );
    }
}

export default RestauranstList;