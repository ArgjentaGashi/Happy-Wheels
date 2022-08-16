import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Wheel.css';
import {Link} from 'react-router-dom'

const Wheel = () => {
  const [wheel, setWheel] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/wheels/${id}`)
      .then((res) => {
        console.log(res.data);
        setWheel(res.data);
      })
      .catch((err) => console.log('GET WHEEL BY ID ERROR', err));
  }, [id]);

  const deleteWheel = (movieId) => {
    axios
      .delete(`http://localhost:8001/api/wheels/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div >
      <h2>{wheel.name}</h2>
      <div className='item' >

      <div className='details'>
        <table style={{width: "500px"}}>
          <thead>
            <tr>
              <th>Specifications</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vehicle type:</td>
              <td>{wheel.type}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{wheel.description}</td>
            </tr>
            <tr>
              <td>Is wheel legal?</td>
              <td>{wheel.isKidLegal ? 'Legal for kids!' : 'Not legal for Kids!'}</td>
            </tr>
            <tr>
              <td>Release year:</td>
              <td>{wheel.releaseYear}</td>
            </tr>
            <tr>
              <td>Max speed:</td>
              <td>{wheel.maxSpeed}</td>
            </tr>
            <tr>
              <td>Fuel:</td>
              <td>{wheel.fuelType}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='picture'>
      <img src={wheel.picture} alt={wheel.name} />
      <div className='buttons'>

      <button><Link style={{color: "white", textDecoration: "none"}}  to={`/wheel/edit/${wheel._id}`}>Edit</Link></button>
      <button onClick={deleteWheel}>Delete</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Wheel;