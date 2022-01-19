import React, { useState,useEffect } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    let history = useHistory();
    const [id, setID] = useState(null);

    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setFirstName(localStorage.getItem('First Name'));
            setLastName(localStorage.getItem('Last Name'));
            setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);
    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
            firstName,
             lastName,
             checkbox
             
        }).then(() => {
            history.push('/read')
        })
      
    }
    return (
        <div>
           <Form className="container">
        <label>First Name</label>
        <input placeholder="First Name" value={firstName}  onChange={(e) => setFirstName(e.target.value)} className="w-50 form-control mt-3" />
        <label>Last Name</label>
        <input placeholder="Last Name" value={lastName}  onChange={(e) => setLastName(e.target.value)} className="w-50 form-control mt-3" />
        <input type="checkbox"  checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>{" "}
        <span>I agree to the Terms and Conditions</span>
        <Button onClick={updateAPIData} className=" d-block w-25 mt-3">
          update
        </Button>
      </Form>
        </div>
    )
}