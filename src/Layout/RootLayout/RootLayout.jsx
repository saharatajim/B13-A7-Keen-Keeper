import React from 'react';

import Footer from '../sharedComponent/Footer';
import { Outlet } from 'react-router';
import NavBar from '../sharedComponent/Navbar/NavBar';

const RootLayout = () => {
    return (
        <>
          <NavBar/>
          <Outlet/>
          <Footer/>       
        </>
     
    );
};

export default RootLayout;