import { useState , useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditWheel = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');
  const [isKidLegal, setIsKidLegal] = useState(false);
  const [releaseYear, setReleaseYear] = useState(0);
  const [maxSpeed, setMaxSpeed] = useState(0);
  const [fuelType, setFuelType] = useState('');
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/wheels/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setType(res.data.type);
        setPicture(res.data.picture);
        setDescription(res.data.description);
        setIsKidLegal(res.data.isKidLegal);
        setReleaseYear(res.data.releaseYear);
        setMaxSpeed(res.data.maxSpeed);
        setFuelType(res.data.fuelType);
      })
      .catch((err) => console.log('GET WHEEL BY ID ERROR', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8001/api/wheels/${id}`, {
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
      .catch((err) => console.log('Post Error', err));
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
      {name.length == 0 ?  <p className="text-danger">Name can not be empty</p> : ""}
      <select value={type} name="type" onChange={(e) => setType(e.target.value)}>
        <option>Select a Type</option>
        <option value="Car">Car</option>
        <option value="Bicycle">Bicycle</option>
        <option value="Electric Scooter">Electric Scooter</option>
      </select>
      <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
      {picture.length == 0 ?  <p className="text-danger">You must upload a picture link</p> : ""}
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      {description.length == 0 ?  <p className="text-danger">You must add a description</p> : ""}
      <input
        style={{marginRight: "200px"}}
        type="checkbox"
        checked={isKidLegal}
        onChange={(e) => setIsKidLegal(e.target.checked)}
        />
      <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
      <input type="number" value={maxSpeed} onChange={(e) => setMaxSpeed(e.target.value)} />
      <select value={fuelType} name="fuelType" onChange={(e) => setFuelType(e.target.value)}>
        <option>Select a Fuel Type</option>
        <option value="Oil">Oil</option>
        <option value="Gasoline">Gasoline</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Free">Free</option>
      </select>
    </div>
    </div>
    <div>
        <button>Update Wheel</button>
    </div>
    </form>
  );
};

export default EditWheel;