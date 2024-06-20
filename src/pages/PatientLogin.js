import React, { useState } from 'react'
import '../pages/PatientLogin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';

function PatientLogin() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
//navigate code 
  const navigate = useNavigate();

  const handleInput = (e) =>{
    // console.log('e',e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
  //  alert(user.email);
  //  alert(user.password);

   console.log("user",user);

  try {
    const payload = {
      email:user.email,
      password:user.password,
     
    };
    axios
    .post("http://localhost:5000/api/patient/loginPatient",payload)
    .then((res) =>
    console.log("res_fromPatientRegistration", res.data)   )
    navigate('/patient_dashboard');
    
  } catch (error) {
    console.log("register error",error)
  }
  
}

  return (
<div className = "container_plogin">
  <h1>Login Form</h1><br />
  <form className="form" id="form" onSubmit={handleSubmit}>
    <label>Email :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" name="email" value={user.email} onChange={handleInput}  placeholder="Enter Your EmailID" required  /><br /><br />
    <label>Password :&nbsp;&nbsp;</label><input type="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter Your password" required /><br /><br />
    <button className='p_login' type='submit'>Login</button>
  </form>
    </div>
  )
}

export default PatientLogin;
