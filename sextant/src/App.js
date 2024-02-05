import './App.css';
import Banner from './bannerComp';
import InfoContainer from './infoContainer';

function App() {
  return (
    <div className="App">
      {/* Section for Banner */}
      <Banner title={"Sextant"}/> 
      {/* Section for InfoConatiner */}
      <InfoContainer children={""}/>
    </div>
  );
}

export default App;
