import React from 'react';
import {Redirect} from 'react-router-dom';
import NavBarMenu from './NavbarMenu';

const Logout = () => {
    localStorage.clear();
    return <Redirect  to="/login" />
};

export default Logout;