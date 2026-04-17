import React from 'react';
import UseFriendsData from '../../hooks/UseFriendsData';
import Friend from './Friend';

const AllFriendsList = () => {

    const {friends,loading}=UseFriendsData()
    // console.log(friends)
    return (
        <div className='bg-[#F8FAFC] container mx-auto p-10'>
           <hr className='text-gray-300'/>
           <div className='mt-10'>
            <h1 className='text-2xl font-semibold'>Your Friends</h1>
            {

                loading?<div className='flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>
                : <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 '>
            { friends.map((friend,index)=>
               <Friend key={index} friend={friend}/>) }
           </div>
            }
           </div>
          
        </div>
    );
};

export default AllFriendsList;