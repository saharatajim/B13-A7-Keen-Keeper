import React, { useContext } from 'react';
import { useParams } from 'react-router';
 import UseFriendsData from '../../hooks/UseFriendsData';
 import { MdOutlineDeleteOutline } from "react-icons/md";
 import { FaBoxArchive } from "react-icons/fa6";
 import { RiNotificationSnoozeFill } from "react-icons/ri";
 import { FaVideo } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { TimelineFriendContext } from '../../Contexts/TimelineFriendContext';
import { toast } from 'react-toastify';

const FriendDetails = () => {
     const {friends,loading}=UseFriendsData()
     const {paramsId}=useParams() 
    const expectedFriend=friends.find(  friend=>friend.id==paramsId)

    const {timelineFriend,setTimelineFriend}=useContext(TimelineFriendContext)
    
       if (loading) {
      return <div className='flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>;
}


const handleCall=(expectedFriend,type)=>{
    toast(`${type} with ${expectedFriend.name} `)
 console.log(expectedFriend)

const newDataType={
    ...expectedFriend,
    interactionType:type
}
setTimelineFriend([...timelineFriend,newDataType])
}
const handleText=(expectedFriend,type)=>{
    toast(`${type} with ${expectedFriend.name} `)
const newDataType={
    ...expectedFriend,
    interactionType:type
}
setTimelineFriend([...timelineFriend,newDataType])
}
const handleVideo=(expectedFriend,type)=>{
    toast(`${type} with ${expectedFriend.name} `)
const newDataType={
    ...expectedFriend,
    interactionType:type
}
setTimelineFriend([...timelineFriend,newDataType])
}
console.log(timelineFriend)
    return (
      <>
      <div className='container px-10 mx-auto bg-[#F8FAFC]  lg:flex gap-10 py-10 justify-center items-center'> 
          {/* left column */}
         <div className='flex mb-6 flex-col space-y-1'>
           {/* profileCard */}
          <div className='shadow bg-base-100 p-4 flex flex-col space-y-2 justify-center items-center'> 
             <img className='w-24 h-24 rounded-full' src={expectedFriend.picture} alt="" />
             <h1>{expectedFriend.name}</h1>
             <p className={`rounded-full w-30 text-center text-white p-2 ${expectedFriend.status==="on-track"
                    ?"bg-green-800"
                    :expectedFriend.status==="overdue"
                    ?"bg-red-500"
                    :expectedFriend.status==="almost due"
                    ?"bg-amber-400"
                    :""}`
                    }>{expectedFriend.status}</p>
                    <p>{expectedFriend.tags[1]}</p>
                    <p className='text-center'>{expectedFriend.bio}</p>
                    <p>{expectedFriend.email}</p>
          </div>
          {/* non functional buttons*/}
          <button className='btn bg-base-100'><RiNotificationSnoozeFill /> Snooze 2 weeks</button>
          
          <button className='btn bg-base-100'> <FaBoxArchive />
 Archive</button>
          
          <button className='btn bg-base-100 text-red-500'><MdOutlineDeleteOutline /> Delete</button>
          

         </div>
         {/* right column */}
        
         <div className=' flex flex-col justify-between  gap-4'>
          <div className='flex gap-4 justify-between '>
            <div className='p-5 bg-base-100 shadow h-30 w-45'>
                <h1 className='font-bold md:text-2xl'>{expectedFriend.days_since_contact}</h1>
                <p>Days Since Contact</p>
            </div>
            <div className='p-5 bg-base-100 shadow h-30 w-45'>
                <h1  className='font-bold md:text-2xl'>{expectedFriend.goal}</h1>
                <p>Goal(Days)</p>
            </div>
            <div className='p-5 bg-base-100 shadow h-30 w-45'>
                <h1  className='font-bold text-[12px] md:text-2xl'>{expectedFriend.next_due_date}</h1>
                <p className='text-[12px] md:text=[16px]'>Next Due Date</p>
            </div>
          </div>
        <div className='p-5 bg-base-100 shadow'>
            <div className='flex justify-between items-center'>
                <h1>Relationship Goal</h1>
                <button className='btn'>Edit</button>
            </div>
            <p>Connect every  <span className='font-bold'>{expectedFriend.goal} days</span></p>
        </div>

        <div className='p-5 bg-base-100 space-y-2 shadow'>
            <div className='  '>
                <h1>Quick Check-In</h1>
                
            </div>
             <div className='flex justify-center gap-4'>
            <div onClick={()=>handleCall(expectedFriend,"Call")} className='p-5 active:scale-95 bg-[#F8FAFC] flex flex-col justify-center items-center shadow w-30'>
                <h1><IoCall /></h1>
                <p>Call</p>
            </div>
            <div onClick={()=>handleText(expectedFriend,"Text")} className='p-5 active:scale-95 bg-[#F8FAFC] flex flex-col justify-center items-center shadow w-30'>
                <h1><TiMessageTyping /></h1>
                <p>Text</p>
            </div>
            <div onClick={()=>handleVideo(expectedFriend,"Video")} className='p-5 bg-[#F8FAFC] flex flex-col justify-center items-center active:scale-95 shadow w-30'>
                <h1><FaVideo /></h1>
                <p>Video</p>
            </div>
          </div>
        </div>
         </div>

      </div>
      </>
    );
};

export default FriendDetails;

                // 
                //