import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
    console.log(data);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  return (
    <div className="container">
      <div>
        <Link to="/" exact>
          <Button className="m-2">ADD Details</Button>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
          <th>id</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Checked</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>

        <tbody>
          {APIData.map((data) => (
            <tr key={data.id}>
               <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.checkbox ? "Checked" : "Unchecked"}</td>
              <td>
                <Link exact to="/update">
                  <span className="me-3 hover" onClick={() => setData(data)}>
                    <i class="far  fa-edit"></i>
                  </span>
                </Link>
                <Link className=" hover">
                  <span  onClick={() => onDelete(data.id)}>
                    <i class="far text-danger fa-trash-alt"></i>
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
