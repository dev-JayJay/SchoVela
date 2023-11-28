
// AnalyticsComponent.js
import React, { useState, useEffect } from 'react';
// import { SlUserFollowing } from "react-icons/sl";
// import { FaStreetView } from "react-icons/fa";
import axios from 'axios';

const Overview = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dev.api.schovela.com.ng/api/analytic');
        setAnalyticsData(response.data.body);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-Ared capitalize text-center font-Acme text-3xl mt-8 mb-8'>SchoVela Overview</h1>
      <div className='container flex flex-row flex-wrap justify-evenly'>
      <div className='flex flex-col text-center justify-center items-center align-middle'>
        <span className='text-white text-1xl mt-1 mb-1'>Total Users </span>
        <div className='w-28 h-28 border rounded-lg text-center items-center'>
          {/* <p><SlUserFollowing className='mx-auto mt-3 text-center text-white' /></p> */}
         <p className='text-white font-Beginner mt-7 text-4xl'>{ analyticsData.total_user }</p> 
        </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center align-middle'>
        <span className='text-white text-1xl mt-1 mb-1'>Total Content </span>
        <div className='w-28 h-28 border rounded-lg text-center items-center'>
        {/* <p><MdOutlineContentPaste className='mx-auto mt-3 text-center text-white' /></p> */}
         <p className='text-white font-Beginner mt-7 text-4xl'>{ analyticsData.total_content }</p> 
        </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center align-middle'>
        <span className='text-white text-1xl mt-1 mb-1'>Total Content Consumption </span>
        <div className='w-28 h-28 border rounded-lg text-center items-center'>
          {/* <p><FaStreetView className='mx-auto mt-3 text-center text-white' /></p> */}
         <p className='text-white font-Beginner mt-7 text-4xl'>{ analyticsData.total_views }</p> 
        </div>
        </div>
        {/* <p className='text-white'><span className='font-Agbalumo text-Ared'>Total Users </span>: {analyticsData.total_user}</p>
        <p className='text-white'><span className='font-Agbalumo text-Ared'>Total Content </span>: {analyticsData.total_content}</p>
        <p className='text-white'><span className='font-Agbalumo text-Ared'>Total_views </span>: { analyticsData.total_views }</p> */}
        {/* Add other properties as needed */}
      </div>
    </div>
  );
};

export default Overview;

