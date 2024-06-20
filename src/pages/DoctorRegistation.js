import React, { useState } from 'react';
import axios from 'axios';


const DoctorRegistation = () => {

  const [user,setUser] = useState({

  doctorName: "",
  phoneNumber:"",
  gender:"",
  age:"",
  email:"",
  password:"",
  address:"",
  city:"",
  specialist:""
});

const handleInput = (e) =>{
let name = e.target.name;
let value = e.target.value;

// console.log()
setUser({
  ...user,
  [name]: value,
});
};
const handleSubmit = async(e) => {
  e.preventDefault();
  console.log("user_drReg", user);
try{
  const payload = {
    doctorName: user.doctorName,
    phoneNumber: user.phoneNumber,
    gender: user.gender,
    age: user.age,
    email: user.email,
    password: user.password,
    address: user.address,
    city: user.city,
    specialist: user.specialist,
  };
  const response = await axios.post("http://localhost:5000/api/doctor/addDoctor", payload);
  console.log("response", response.data);
} catch (error) {
  console.log("register error", error);
}



};


  return (
    <div className="container">
    <div className="header"><h2>Doctor Registration Form</h2></div><br />

    <form className="form" id="form" onSubmit={handleSubmit}>
      {/* <div className="form-control" > */}
      <label htmlFor='doctorName'>Doctor Name : </label>&nbsp;<input type="text" name="doctorName" value={user.patientName} onChange={handleInput}  placeholder="Enter Your Full Name"/><br />
      <br />
      <label>Phone Number : </label>&nbsp;<input type="number"  name="phoneNumber" value={user.patientName} onChange={handleInput} placeholder="Enter Your Phone Number" /><br />
      <br />
      <label>Gender : </label>&nbsp;<input type="text" name ="gender" value={user.patientName} onChange={handleInput}  placeholder="Enter Your Gender" /><br />
      <br />
      <label>Age : </label>&nbsp;<input type="Number" name ="age" value={user.patientName} onChange={handleInput} placeholder="Enter Your Age" /><br />
      <br />
      <label>Email : </label>&nbsp;<input type="email" name ="email" value={user.patientName} onChange={handleInput} placeholder="Enter Your email" /><br />
      <br />
      <label>Password : </label>&nbsp;<input type="password" name ="password" value={user.patientName} onChange={handleInput} placeholder="Enter Your password" /><br />
      <br />
      <label>Address : </label>&nbsp;<input type="address" name ="address" value={user.patientName} onChange={handleInput} placeholder="Enter Your address" /><br />
      <br />
      <label>City : </label>&nbsp;<input type="text" name ="city" value={user.patientName} onChange={handleInput} placeholder="Enter Your city Name" /><br />
      <br />
      <label>specialist : </label>&nbsp;<input type="text" name ="specialist" value={user.patientName} onChange={handleInput} placeholder="Enter Your Specialization" /><br />
      <br />
      <button className='register_btn ' type='submit'>Register</button>
      {/* </div> */}
    </form>
  </div>
  )
}

export default DoctorRegistation
