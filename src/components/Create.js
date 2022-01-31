import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router';
import '../App.css';
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure(); 


export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [salary, setSalary] = useState("");
 
  let history = useHistory();


  // sending data to db

const postData = (e) => {
  e.preventDefault();


  if(firstName===''){
    alert("**Please enter the firstName**");
  }else if (lastName===''){
    alert("**Please enter the lastName**");
  }
  else if (salary===''){
    alert("**Please enter salary amount**");
  }
  else if (checkbox===false){
    alert("**Click on the checkbox button**");
  }
  else if ((firstName === true || lastName ===true ||salary===true|| checkbox===true)){
    axios.post(`http://localhost:3002/addData`, {
      firstName,
      lastName,
      salary,
      checkbox
  }).then(() => {

       history.push('/read')
       dataAdd();
  })}}



//  alert msg for adding data

const dataAdd = () => 
{toast((`${firstName}  ${lastName} ${salary}is added`),{
  position :toast.POSITION.TOP_CENTER,
    type :toast.TYPE.SUCCESS,
    autoClose:6000
});}

  return (
    <div className=" container w-50 rounded-3">
     
      <Form className="container mt-5 text-center p-5">
      <div className="text-center fs-3 text-light fw-bold">Contact Form</div>
        {/* <label className="fw-bold">First Name :</label> <br/> */}
        <i class="far text-light me-2 fa-user"></i>
        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} className="w-50 modify text-light  mt-4" /> <br/>
        {/* <label className="fw-bold">Last Name :</label> */}
        <i class="far text-light me-2 fa-user"></i>
        <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} className="w-50 modify text-light mt-4" /> <br/>
        {/* <label className="fw-bold">Salary :</label> */}
        <i class="fas  text-light me-2 fa-rupee-sign"></i>
        <input type="phone" placeholder="Salary" onChange={(e) => setSalary(e.target.value)} className="w-50 modify text-light mt-4" /> <br/>

        <input className="me-2 mt-3" type="checkbox"  onChange={(e) => setCheckbox(!checkbox)}/>
        <span className="text-white">I agree to the Terms and Conditions</span> <br/>


        <Button onClick={postData}  type="submit" className=" w-25 mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}
