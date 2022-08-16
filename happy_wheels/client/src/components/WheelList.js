import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './WheelList.css';

const WheelList = () => {
  const [wheels, setWheels] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8001/api/wheels')
      .then((res) => {
        console.log(res.data);
        setWheels(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteWheel = (wheelId) => {
    axios
      .delete(`http://localhost:8001/api/wheels/${wheelId}`)
      .then((res) => {
        const newWheels = wheels.filter((wheel) => wheel._id !== wheelId);
        setWheels(newWheels);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Our Available Products</h1>
      <div className='container'>

      {wheels.map((wheel) => (
        <div key={wheel._id} className="card">
     
          <h2>{wheel.name}</h2>
      
   
          <img src={wheel.picture} alt={wheel.name} />
     
          <br />
    
          <Link to={`/wheel/${wheel._id}`}>Details</Link>
          <span> | </span>
          <Link to={`/wheel/edit/${wheel._id}`}>Edit</Link>
          <br />
          <button style={{ marginTop: '1rem' }} onClick={() => deleteWheel(wheel._id)}>
            Delete
          </button>
      
        </div>
      ))}
      </div>
    </div>
  )
}

export default WheelList