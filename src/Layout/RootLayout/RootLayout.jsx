import React from 'react';

import Footer from '../sharedComponent/Footer';
import { Outlet } from 'react-router';
import NavBar from '../sharedComponent/Navbar/NavBar';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <>
          <NavBar/>
          <Outlet/>
          <Footer/>    
           <ToastContainer />   
        </>
     
    );
};

export default RootLayout;