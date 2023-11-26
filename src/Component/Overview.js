
// AnalyticsComponent.js
import React, { useState, useEffect } from 'react';
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
        <p className='text-white'><span className='font-Agbalumo text-Ared'>Total Users </span>: {analyticsData.total_user}</p>
        <p className='text-white'><span className='font-Agbalumo text-Ared'>Total Content </span>: {analyticsData.total_content}</p>
        <p className='text-white'><span className='font-Agbalumo text-Ared'>Total_views </span>: { analyticsData.total_views }</p>
        {/* Add other properties as needed */}
      </div>
    </div>
  );
};

export default Overview;

