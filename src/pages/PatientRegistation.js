import { useState } from 'react';
import '../pages/PatientRegistration.css'
import axios from 'axios';

function PatientRegistation() {
const [user, setUser] = useState({

  patientName: "",
  phoneNumber: "",
  gender: "",
  age:"",
  dob: "",
  bloodGroup: "",
  email:"",
  password:"",
  address:""
});

const handleInput = (e) =>{
  // console.log("e................",e);
  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]: value,
  })
};
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("user", user);

  try {
    const payload = {
      patientName: user.patientName,
      phoneNumber: user.phoneNumber,
      gender:user.gender,
      age:user.age,
      dob:user.dob,
      bloodGroup:user.bloodGroup,
      email:user.email,
      password:user.password,
      address:user.address,
    };
    axios
    .post("http://localhost:5000/api/patient/addPatient",payload)
    .then((res) =>
    console.log("res_fromPatientRegistration", res.data)
    )
  } catch (error) {
    console.log("register error",error)
  }
  
  
};

 


// },[]);



  return (

      <div className="container">
        <div className="header"><h2>Registration Form</h2></div><br />

        <form className="form" id="form" onSubmit={handleSubmit}>
          {/* <div className="form-control" > */}
          <label>UserName : </label>&nbsp;<input type="text"  name="patientName" value={user.patientName} onChange={handleInput} placeholder="Enter Your Full Name"/><br />
          <br />
          <label>Phone Number : </label>&nbsp;<input type="number"  name="phoneNumber" value={user.phoneNumber} onChange={handleInput} placeholder="Enter Your Phone Number" /><br />
          <br />
          <label>Gender : </label>&nbsp;<input type="text" name ="gender" value={user.gender} onChange={handleInput} placeholder="Enter Your Gender" /><br />
          <br />
          <label>Age : </label>&nbsp;<input type="Number" name ="age" value={user.age} onChange={handleInput} placeholder="Enter Your Age" /><br />
          <br />
          <label>DOB : </label>&nbsp;<input type="Date" name ="dob" value={user.dob} onChange={handleInput} placeholder="Enter Your Date of Birth" /><br />
          <br />
          <label>Blood Group : </label>&nbsp;<input type="text" name ="bloodGroup" value={user.bloodGroup} onChange={handleInput} placeholder="Enter your blood group" /><br />
          <br />
          <label>Email : </label>&nbsp;<input type="email" name ="email" value={user.email} onChange={handleInput} placeholder="Enter Your email" /><br />
          <br />
          <label>Password : </label>&nbsp;<input type="password" name ="password" value={user.password} onChange={handleInput} placeholder="Enter Your password" /><br />
          <br />
          <label>Address : </label>&nbsp;<input type="address" name ="address" value={user.address} onChange={handleInput} placeholder="Enter Your address" /><br />
          <br /><br />
          <button className='register_btn ' type='submit'>Register</button>
          {/* </div> */}
        </form>
      </div>
    );
  }


export default PatientRegistation;
