import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineFriendContext } from '../../Contexts/TimelineFriendContext';

const Stats = () => {
   const {timelineFriend}=useContext(TimelineFriendContext)
      
       const filterCallData=timelineFriend.filter(callData=>callData.interactionType==="Call")
       const filterTextData=timelineFriend.filter(callData=>callData.interactionType==="Text")
       const filterVideoData=timelineFriend.filter(callData=>callData.interactionType==="Video")

       console.log(filterCallData,"filterCallData",filterTextData,"filterTextData",filterVideoData,"filterVideoData")
    

    const data = [
  { name: 'Text', value: filterTextData.length, fill: '#0088FE' },
  { name: 'Call', value: filterCallData.length, fill: '#00C49F' },
  { name: ' Video', value: filterVideoData.length, fill: '#FFBB28' },

];
    return (
        <div className='container mx-auto bg-[#F8FAFC] p-10'>

             <h1 className=' font-bold text-3xl'>Friendship Analytics</h1>
            
               <div className='shadow bg-white m-10 p-5 ' >
                       <h1>By Interaction Type</h1>
                   <div className='flex justify-center'>

                      <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
             
                           <Pie
                              data={data}
                              innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                            />
                             <Legend/>
                             <Tooltip/>
                     `</PieChart>

                   </div>
                    
                </div>
        </div>
    );
};

export default Stats;



// #region Sample data



