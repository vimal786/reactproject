import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBarMenu from './NavbarMenu';
class RestaurantDetail extends Component {
    render() {
        return (
            <div>
                  
      <NavBarMenu />
                <h1>Restaudent Details</h1>
            </div>
        );
    }
}

RestaurantDetail.propTypes = {

};

export default RestaurantDetail;