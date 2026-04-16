import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <nav className='container mx-auto shadow md:flex md:justify-between p-4'>
            <div className='text-center'> 
              <h1 className='text-2xl font-bold'>Keen<span className='text-[#244D3F] '>keeper</span></h1>
            </div>
            <div className='flex justify-center'>
                <ul className='flex gap-7'>
                  <NavLink to={"/"} className={({isActive})=>`flex rounded gap-2 p-1.5 items-center font-semibold ${isActive?"text-white  bg-[#244D3F]":""}`}><IoHomeOutline />Home</NavLink>
                  <NavLink to={"/timeline"} className={({isActive})=>`flex gap-2 rounded p-1.5 items-center font-semibold ${isActive?"text-white  bg-[#244D3F]":""}`}><IoMdTime /> Timeline</NavLink>
                  <NavLink to={"/stats"} className={({isActive})=>`flex gap-2 rounded p-1.5 items-center  font-semibold ${isActive?"text-white  bg-[#244D3F]":""}`}><TfiStatsUp /> Stats</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;