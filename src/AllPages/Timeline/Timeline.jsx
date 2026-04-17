import React, { useContext, useEffect, useState } from 'react';
import { TimelineFriendContext } from '../../Contexts/TimelineFriendContext';
 import { FaVideo } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
const Timeline = () => {

     const {timelineFriend}=useContext(TimelineFriendContext)
     const [filterType,setFilterType]=useState("all")
     useEffect(() => {
  console.log("Filter type changed:", filterType);
}, [filterType]);
   
 const [currentTime,setCurrentTime]=useState(new Date())
   useEffect(()=>{

    const timer=setInterval(()=>{
        setCurrentTime(new Date())
    },1000)
    return ()=>clearInterval(timer)
   },[])
   const formattedDate=currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const filteredTimeline=
  filterType==="all"?timelineFriend: timelineFriend.filter(item => item.interactionType === filterType);
 
    return (
        <div className='container mx-auto py-10'> 
           <div><h1 className='font-bold text-2xl'>Timeline</h1></div>
           <div className=' '>
            <div><div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn my-5">Filter timeline</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>{
       setFilterType("Call")
    }}>Call</a></li>
    <li><a onClick={()=>{
       setFilterType("Video")
    }}>Video</a></li>
    <li><a onClick={()=>{
       setFilterType("Text")
    }}> Text</a></li>
  </ul>
</div></div>
            <div className='space-y-5'>

            {
                filteredTimeline.length===0?<div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-50 to-gray-100">
  <h2 className="text-xl font-semibold text-gray-700">No Data Available</h2>
  <p className="text-gray-500 mt-2">Your timeline is empty — start connecting with friends!</p>
</div>

                :
                filteredTimeline.map((singleAlert=>
                    <div className='flex shadow items-center gap-6 p-2'> 
                        <div>{singleAlert.interactionType==="Call" && <IoCall/>}
                        {singleAlert.interactionType==="Text" && <TiMessageTyping/>}
                        {singleAlert.interactionType==="Video" && <FaVideo/>}</div>
                        <div>
                           <h1>{singleAlert.interactionType} with {singleAlert.name}</h1> 
                           <p>{formattedDate}</p>
                           
                           
                        </div>
                    </div>
                ))
            }
            </div>
           </div>
        </div>
       
    );
};

export default Timeline;