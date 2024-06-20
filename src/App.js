import React from 'react';
import './App.css';
import {Route,Routes,BrowserRouter } from 'react-router-dom';
import PatientRegistation from './pages/PatientRegistation';
import PatientLogin from './pages/PatientLogin'
import PatientDashboard from './pages/PatientDashboard';
import DoctorRegistation from './pages/DoctorRegistation';
import DoctorLogin from './pages/DoctorLogin';
import DoctorDashboard from './pages/DoctorDashboard';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path= '/patient_reg' element={< PatientRegistation/>}></Route>
      <Route path= '/patient_login' element={<PatientLogin />}></Route>
      <Route path= '/dr_reg' element={<DoctorRegistation />}></Route>
      <Route path= '/dr_login' element={<DoctorLogin/>}></Route>
      <Route path= '/dr_dashboard' element={<DoctorDashboard/>}></Route>
      <Route path='/patient_dashboard' element={< PatientDashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
