import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBarMenu from './NavbarMenu';
class Home extends Component {
    render() {
        return (
            <div>
                  
      <NavBarMenu />
                <h1>Home</h1>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;