import React from 'react';
import { FaPlus } from "react-icons/fa";
const Banner = () => {
    return (
        <div >
            <div className='bg-[#F8FAFC] container mx-auto p-10'>
            <div className='p-10  text-center space-y-4'>
                <h1 className='text-3xl md:text-[48px] font-bold'>Friends to keep close in your life</h1>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
                relationships that matter most.</p>
               <div className='flex justify-center '> <button className='flex items-center justify-center bg-[#244D3F] p-2 text-white rounded-lg active:scale-95'><FaPlus/>Add a Friend</button></div>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-5'> 
                <div className='card shadow bg-base-100 p-10 text-center'>
                    <h1 className='text-[#244D3F] text-3xl font-semibold'>10</h1>
                    <p className='text-[18px]'>Total Friends</p>
                </div>
                <div className='card shadow bg-base-100 p-10 text-center'>
                    <h1 className='text-[#244D3F] text-3xl font-semibold'>3</h1>
                    <p className='text-[18px]'>On Track</p>
                </div>
                <div className='card shadow bg-base-100 p-10 text-center'>
                    <h1 className='text-[#244D3F] text-3xl font-semibold'>6</h1>
                    <p className='text-[18px]'>Need Attention</p>
                </div>
                <div className='card shadow bg-base-100 p-10 text-center'>
                    <h1 className='text-[#244D3F] text-3xl font-semibold'>12</h1>
                    <p className='text-[18px]'>Interactions This Month</p>
                </div>
                
            </div>
           </div>
        </div>
    );
};

export default Banner;