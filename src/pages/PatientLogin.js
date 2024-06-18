import React, { useState } from 'react'
import '../pages/PatientLogin.css'
import axios from 'axios';

function PatientLogin() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const handleInput = (e) =>{
    console.log('e',e);
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
    const response = await axios.post("http://localhost:5000/api/patient/loginPatient", user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("response", response.data);
  } catch (error) {
    console.log("Login error", error);
  }
};


  // axios
  // .post("http://localhost:5000/api/patient/loginPatient",payload)
  // .then((res) =>
  // console.log("res",res)
  // )



  return (
<div className = "container_plogin">
  <h1>Login Form</h1><br />
  <form className="form" id="form" onSubmit={handleSubmit}>
    <label>Email :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" name="email" value={user.email} onChange={handleInput}  placeholder="Enter Your EmailID" required autoComplete='off' /><br /><br />
    <label>Password :&nbsp;&nbsp;</label><input type="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter Your EmailID" required autoComplete='off'/><br /><br />
    <button className='p_login' type='submit'>Login</button>
  </form>
  
    </div>
  )
}

export default PatientLogin;
