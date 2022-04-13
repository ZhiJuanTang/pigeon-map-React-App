import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import MapMainFreenow from './components/MapMainFreenow';

const App =()=>{
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const getCars = async () => {
      try {
        setLoading(true);
 const {data} = await axios.get(
   "http://localhost:5000/free-now/vehicles"
 );
setCars(data);
console.log(data)
setLoading(false);
      }catch(error){
        return alert("Sorry, no data")
      }
    };
    getCars();
  },[]);

  return (
    <div>
{loading?(
<h3>Loading...</h3>
) : (
  <MapMainFreenow cars={cars} />
)}
 </div>
  )
}

export default App;
