import React, { useState, useEffect} from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import './App.css';

const LatencyMonitor = () => {
  const [latency, setLatency] = useState(0);
  const client = new W3CWebSocket('ws://localhost:5555');

  // client.onmessage = (message) =>{
  //   setLatency(new Date().getTime-message.data);
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching new latency value (replace this with your actual data fetching logic)
      const newLatency =   client.onmessage = (message) =>{
        setLatency(new Date().getTime-message.data);
      }
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
