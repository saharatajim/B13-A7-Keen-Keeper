import React from 'react';

const Friend = ({friend}) => {
    return (
        <div>
            <div className=' shadow p-3 my-4 space-y-2 bg-base-100 text-center'>
                   <div className='flex justify-center'><img className='rounded-full' src={friend.picture} alt="" /></div>
                   <h1 className='font-bold'>{friend.name}</h1>
                   <p>{friend.days_since_contact}d ago</p>
                   <div className='flex justify-center'><p className='rounded-full w-30 p-2 bg-green-200'>{friend.tags[0]}</p></div>
                    <div className='flex justify-center'> 
                 <p className={`rounded-full w-30 text-white p-2 ${friend.status==="on-track"
                    ?"bg-green-800"
                    :friend.status==="overdue"
                    ?"bg-red-500"
                    :friend.status==="almost due"
                    ?"bg-amber-400"
                    :""}`
                    }>{friend.status}</p>
                    </div>

                </div>
        </div>
    );
};

export default Friend;