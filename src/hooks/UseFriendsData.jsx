import React, { useEffect, useState } from 'react';

const UseFriendsData = () => {

    const [friends,setFriends]=useState([])
    useEffect(()=>{

        const fetchData=async()=>{
            const res=await fetch("/friends.json")
            const data=await res.json()
            setFriends(data)
        }
        fetchData()
    },[])
    return {friends}
}

export default UseFriendsData;