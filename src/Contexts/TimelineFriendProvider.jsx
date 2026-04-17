import React, { useState } from 'react';
import { TimelineFriendContext } from './TimelineFriendContext';



const TimelineFriendProvider = ({children}) => {
    const[timelineFriend,setTimelineFriend]=useState([])
    const data={
        timelineFriend,setTimelineFriend
    }
    return (
   <TimelineFriendContext.Provider value={data}>{children}</TimelineFriendContext.Provider>
    );
};

export default TimelineFriendProvider;