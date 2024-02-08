import React, { useState, useEffect} from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import './App.css';

const LatencyMonitor = () => {
  const [latency, setLatency] = useState(0);
  const client = new W3CWebSocket('ws://localhost:5555');

  useEffect(() => {
    client.onmessage = (message) =>{
      console.log(new Date().getTime-message.data);
      setLatency(new Date().getTime-message.data);
    }
  }, []);

  return (
    <div className='info-container'>
      <h2>Packet Latency Monitor</h2>
      <p>Current Latency: {latency} ms</p>
    </div>
  );
};

export default LatencyMonitor;
