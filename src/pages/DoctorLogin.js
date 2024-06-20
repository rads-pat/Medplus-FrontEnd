import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorLogin = () => {
const [user, setUser] = useState({
  Email:"",
  Password: ""
});
//navigate code 
const navigate = useNavigate();

const handleInput =(e) => {
  let name = e.target.name;
  let value = e.target.value;
  // console.log(name);
  // console.log(value);

  setUser({
    ...user,
    [name]:value,
  })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log("user_handleSubmit",user);

  try{
    const payload = {
      email: user.email,
      password: user.password,
    };
    const response = await axios.post("http://localhost:5000/api/doctor/loginDoctor", payload);
    console.log("response", response.data);
    navigate('/dr_dashboard');
  } catch (error) {
    console.log("register error", error);
  }
  // try{ 
  //   const response = await axios.post("http://localhost:5000/api/doctor/loginDoctor", user, {
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  //   // console.log("response", response.data);
   
  // }catch(error){
  //   console.log("Doctor Login error ")
  // }
}

  return (
    <div className = "container_plogin">
    <h1>Doctor Login Form</h1><br />
    <form className="form" id="form" onSubmit={handleSubmit}>
      <label>Email :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" name="email" value={user.email} onChange={handleInput}  placeholder="Enter Your EmailID" required autoComplete='off' /><br /><br />
      <label>Password :&nbsp;&nbsp;</label><input type="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter Your Password" required autoComplete='off'/><br /><br />
      <button className='p_login' type='submit'>Login</button>
    </form>
    
      </div>
  )
}

export default DoctorLogin
