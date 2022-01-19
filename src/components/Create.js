import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  let history = useHistory();

  const postData = (e) => {
e.preventDefault();
  axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
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
        <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} className="w-50 form-control mt-3" />
        <label>Last Name</label>
        <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} className="w-50 form-control mt-3" />
        <input type="checkbox"  onChange={(e) => setCheckbox(!checkbox)}/>{" "}
        <span>I agree to the Terms and Conditions</span>
        <Button onClick={postData}  type="submit" className=" d-block w-25 mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}
