
// // AnalyticsComponent.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AnalyticsComponent = () => {
//   const [analyticsData, setAnalyticsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://dev.api.schovela.com.ng/api/analytic');
//         setAnalyticsData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Analytics Data:</h2>
//       <ul>
//         {analyticsData.map((item, index) => (
//           <li key={index}>{/* Render your data here */}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AnalyticsComponent;




// // import { useEffect, useState } from 'react';

// // const Fetch = (URL) => {
// //     const [data, setData] = useState();
// //     const [error, setError] = useState();

// //     useEffect(() => {
// //         fetch(URL)
// //         // https://dev.api.schovela.com.ng/api/analytic
// //             .then((res) => {
// //                 if (!res.ok) {
// //                     throw Error(`HTTP error! Status: ${res.status}`);
// //                 }
// //                 return res.json();
// //             })
// //             .then((data) => {
// //                 setData(data);
// //                 console.log(data);
// //             })
// //             .catch((error) => {
// //                 setError(error.message);
// //             });
// //     }, [URL]);

// //     return { data, error };
// // };

// // export default Fetch;
