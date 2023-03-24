import { useState } from 'react';
import './App.css';

function App() {
const [lat , setlat] = useState(0);
const [long , setlong] = useState(0);
  function handleClick(){
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      function error(err) {
        alert(`ERROR(${err.code}): ${err.message}`);
      }
      function success(data) { console.log(data);
        const crd = data.coords;
        // this.lat = crd.latitude;
        // this.log = crd.longitude
       setlat(crd.latitude);
       setlong(crd.longitude)
       
        console.log('data___',crd.latitude,'+++',crd.longitude);
      }
        navigator.geolocation.getCurrentPosition(success, error, options);
   }

  return (
    <div className="App">
      <p>{lat}</p><br/>
      <p>{long}</p>
       <button onClick={handleClick} >Get Location</button>
    </div>
  );
}

export default App;
