import React, { useState,useEffect } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router';
import '../App.css';
import { Link } from "react-router-dom";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [salary, setSalary] = useState('');
    const [checkbox, setCheckbox] = useState(false);


    let history = useHistory();
    const [id, setID] = useState(null);

    useEffect(() => {
            setID(localStorage.getItem('id'))
            setFirstName(localStorage.getItem('First Name'));
            setLastName(localStorage.getItem('Last Name'));
            setSalary(localStorage.getItem('salary Value'));
            setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);

// update data

const updateAPIData = () => {

  if(firstName ===""){
    alert('**firstName is missing**')
  }else if(lastName===""){
    alert('**lastName is missing**')
  }else if(salary===""){
    alert('**salary is missing**')
  }
else {
    axios.put(`http://localhost:3002/updateData/${id}`, {
      firstName,
       lastName,
       salary,
       checkbox
       
  }).then(() => {
      updateMessage();
      history.push('/read')
  })
  }}
      
// update toast messages 
const updateMessage = () => 
{
  if (firstName!==firstName.value)
  toast((`${firstName}  ${lastName} ${salary} is updated`),{
  position :toast.POSITION.TOP_RIGHT,
    type :toast.TYPE.SUCCESS,
    autoClose:6000
});}


   
    return (
        <div  className=" container w-50 fs-5">
           <Form  className="container mt-5 text-center  p-5">
           <div className="text-center fs-3 text-white fw-bold">Edit Form</div>
        {/* <label className="fw-bold">First Name</label> */}
        <i class="fas text-warning me-2 fa-user"></i>
        <input type="text" placeholder="First Name" value={firstName}  onChange={(e) => setFirstName(e.target.value)} className="w-50 modify text-light  mt-4" /><br/>
        {/* <label className="fw-bold">Last Name</label> */}
        <i class="fas text-warning me-2 fa-user"></i>
        <input type="text" placeholder="Last Name" value={lastName}  onChange={(e) => setLastName(e.target.value)} className="w-50 modify text-light  mt-4" /><br/>
        {/* <label className="fw-bold">Salary :</label> */}
        <i class="fas  text-info me-2 fa-rupee-sign"></i>
        <input type="phone" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-50 modify text-light  mt-4" /><br/>

        <input type="checkbox" className="me-2 mt-4" checked="checked"  onChange={(e) => setCheckbox(!checkbox)}/>{" "}
        <span className='text-white'>I agree to the Terms and Conditions</span><br/>
        <Button onClick={updateAPIData} className="  mt-4">
          update
        </Button>

        <Link to="/read" className="text-decoration-none ">
          <div  className="  text-white text-end"><i class="fas fa-arrow-left hvr pe-2"></i> <code className="fs-4 hvr text-white">Back</code></div></Link>
      </Form>
        </div>
    )
}