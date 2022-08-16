import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import NewWheel from './components/NewWheel';
import WheelList from './components/WheelList';
import Wheel from './components/Wheel';
import EditWheel from './components/EditWheel';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<WheelList/>} />
          <Route path="/new" element={<NewWheel/>} />
          <Route path="/wheel/:id" element={<Wheel/>} />
          <Route path="/wheel/edit/:id" element={<EditWheel/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
