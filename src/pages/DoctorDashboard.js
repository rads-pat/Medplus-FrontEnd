import React from 'react'

const DoctorDashboard = () => {
  return (
    <div>
    {/* <button className = 'btn_newA'  type ="submit" style={{padding:"20px", margin:"10px", borderRadius:"5px", backgroundColor:"dodgerblue", border:"none", boxShadow:"inherit"}}>New Appointment</button> */}
    
    <button type="button" className="btn btn-primary" style={{padding:"20px",  margin:"10px"}} data-bs-toggle="modal" data-bs-target="#exampleModal">New Appointment</button>
    
    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          
          <div className="modal-header">
            {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
           
          </div>
          <div className="modal-body">
            <form>
    
          <label  style={{textAlign:'left'}}>Doctor Name:</label>
           <input type="text"></input><br /><br></br>
          
    
            <label htmlFor="app_date">Appointment Date:</label>
            <input type="date" id="app_date" name="app_date" />
            </form>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
            <button type="button" className="btn btn-primary">Add Appointment</button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="table-container">
     <h1>Doctor Dashboard</h1><br/>
      <table className="centered-table" >  
        <thead>
        <tr>
          <th className='th'>Sr. No.</th>
          <th className='th'>Doctor Name</th>
          <th className='th'>Appointment Date & Time </th>
          <th className='th'>Status</th>
          <th className='th'>Action </th>
        </tr> 
        </thead>
      </table>
    </div>
        </div>
  )
}

export default DoctorDashboard
