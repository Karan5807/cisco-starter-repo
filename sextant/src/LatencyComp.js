import React, { useState, useEffect } from 'react';
import  Axios  from 'axios';
import './App.css';

const LatencyMonitor = () => {
  const [latency, setLatency] = useState(0);

  const Latency = async() =>{
    try {
      const latency = await Axios.get("ws://localhost:55455/");
      const Data = latency.data;
      setLatency(Data)
      console.log(Data);
    } catch (error) {
      console.error(error);
    }
  }

  // Simulate updating latency value (you should replace this with actual data fetching)
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching new latency value (replace this with your actual data fetching logic)
      const newLatency = Math.floor(Math.random() * 100) + 1;
      setLatency(newLatency);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='info-container'>
      <h2>Packet Latency Monitor</h2>
      <p>Current Latency: {latency} ms</p>
    </div>
  );
};

export default LatencyMonitor;
