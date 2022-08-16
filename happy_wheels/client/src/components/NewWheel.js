import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewWheel = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');
  const [isKidLegal, setIsKidLegal] = useState(false);
  const [releaseYear, setReleaseYear] = useState(0);
  const [maxSpeed, setMaxSpeed] = useState(0);
  const [fuelType, setFuelType] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8001/api/wheels', {
        name,
        type,
        picture,
        description,
        isKidLegal,
        releaseYear,
        maxSpeed,
        fuelType,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    <form onSubmit={handleSubmit} class="happy-form">
      <div className='main'>
        <div className='labels'>
          <label>Name</label>
          <label>Type</label>
          <label>Picture</label>
          <label>Description</label>
          <label> Kid Legal</label>
          <label> Release Year</label>
          <label> Max Speed</label>
          <label> Fuel Type</label>
        </div>

        <div className='inputs'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className="text-danger">{errors.name.message}</span>}
          <select value={type} name="type" onChange={(e) => setType(e.target.value)}>
            <option>Select a Type</option>
            <option value="Car">Car</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Electric Scooter">Electric Scooter</option>
          </select>
          <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
          {errors.picture && <span className="text-danger">{errors.picture.message}</span>}
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          {errors.description && <span className="text-danger">{errors.description.message}</span>}
          <input
            style={{marginRight: "200px"}}
            type="checkbox"
            checked={isKidLegal}
            onChange={(e) => setIsKidLegal(e.target.checked)}
            />
          <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
          {errors.releaseYear && <span className="text-danger">{errors.releaseYear.message}</span>}
          <input type="number" value={maxSpeed} onChange={(e) => setMaxSpeed(e.target.value)} />
          {errors.maxSpeed && <span className="text-danger">{errors.maxSpeed.message}</span>}
          
          <select value={fuelType} name="fuelType" onChange={(e) => setFuelType(e.target.value)}>
            <option>Select a Fuel Type</option>
            <option value="Oil">Oil</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Free">Free</option>
          </select>
        </div>
      </div>
      <div className='buttons'>
        <button>Add Wheel</button>
      </div>
    </form>
  );
};

export default NewWheel;