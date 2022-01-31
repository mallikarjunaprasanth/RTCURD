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
        <div  className="bgcolor container w-50 rounded-3">
           <Form  className="container mt-5  p-5">
           <div className="text-center fs-3 text-dark fw-bold">Edit Form</div>
        <label className="fw-bold">First Name</label>
        <input type="text" placeholder="First Name" value={firstName}  onChange={(e) => setFirstName(e.target.value)} className="w-75 form-control mt-3" />
        <label className="fw-bold">Last Name</label>
        <input type="text" placeholder="Last Name" value={lastName}  onChange={(e) => setLastName(e.target.value)} className="w-75 form-control mt-3" />
        <label className="fw-bold">Salary :</label>
        <input type="phone" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-75 form-control mt-3" />

        <input type="checkbox" checked="checked"  onChange={(e) => setCheckbox(!checkbox)}/>{" "}
        <span>I agree to the Terms and Conditions</span>
        <Button onClick={updateAPIData} className=" d-block w-25 mt-3">
          update
        </Button>

        <Link to="/read" className="text-decoration-none">
          <div  className=" text-dark text-end"><i class="fas fa-arrow-left pe-2"></i> <code className="fs-4">Back</code></div></Link>
      </Form>
        </div>
    )
}