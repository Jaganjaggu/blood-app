import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Register from './pages/Register/Register';
import Hospital from './pages/Hospital';
import Recipient from './pages/Recipient';
import Login from './pages/Login/Login';
import LandingPerson from './pages/LandingPerson/LandingPerson';
import Donate from './pages/Donate/Donate';
import HospitalPage from './pages/HospitalPage/HospitalPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/hospital' element={<Hospital/>}/>
        <Route path='/recipient' element={<Recipient/>}/>
        <Route path='/landing-person' element={<LandingPerson/>}/>
        <Route path='/hospital-page' element={<HospitalPage/>}/>
      </Routes>
    </>
    );
}

export default App;
