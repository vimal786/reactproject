import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button,Navbar,Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faList, faHome,faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

import NavBarMenu from './NavbarMenu';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';

class NavbarMenu extends Component {
    render() {
        return (
            <div>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Resto</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/"><FontAwesomeIcon icon={faHome} />Home</Nav.Link>
                    <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
                    {

                        localStorage.getItem('login')?
                        <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faSearch} />Logout</Link></Nav.Link>
                        :
                        <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faSearch} />Login</Link></Nav.Link>
                    }
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                
            </div>
        );
    }
}

NavbarMenu.propTypes = {

};

export default NavbarMenu;