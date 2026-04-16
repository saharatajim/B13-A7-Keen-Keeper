import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='container mx-auto text-center text-white bg-[#244D3F] p-10 space-y-4'>
            <h1 className='text-4xl font-bold'>KeenKeeper</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='font-medium'>Social Links</p>
            <div className='flex justify-center ' >
                <div className=' h-5 w-5' ><FaFacebook /></div>
                <div className=' h-5 w-5' ><FaInstagram /></div>
                <div className=' h-5 w-5' ><BsTwitterX /></div>
                
            </div>
            <hr className='text-gray-400' />
            <div className='md:flex justify-between'>
                <div>© 2026 KeenKeeper. All rights reserved.</div>
                <div className='md:flex justify-between gap-4'>  
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;