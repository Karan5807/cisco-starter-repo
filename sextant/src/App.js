import { useEffect, useState } from 'react';
import './App.css';
import Banner from './bannerComp';
import InfoContainer from './infoContainer';
import Axios from "axios";

function App() {
  const [IPv4, setIPv4] = useState("");
  const [IPv6, setIPv6] = useState("");

  const getIPv4 = async() =>{
    try {
      const ipAddress = await Axios.get("https://api.ipify.org?format=json");
      const Data = ipAddress.data.ip;
      setIPv4(Data);
      console.log(Data);
    } catch (error) {
      console.error(error);
    }
  }

  const getIPv6 = async() =>{
    try {
      const ipAddress = await Axios.get("https://api6.ipify.org?format=json");
      const Data = ipAddress.data.ip;
      setIPv6(Data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getIPv4();
  },[]);

  useEffect(()=>{
    getIPv6();
  },[]);
  
  return (
    <div className="App">
      {/* Section for Banner */}
      <Banner title={"Sextant"}/> 
      {/* Section for InfoConatiner */}
      <InfoContainer children={`The IPv4 Address is of my System is: ${IPv4}`}/>
      <InfoContainer children={`The IPv6 Address of my system is: ${IPv6}`}/>
    </div>
  );
}

export default App;
