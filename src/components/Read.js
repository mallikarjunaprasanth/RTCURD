import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function Read() {
  const [APIData, setAPIData] = useState([]);
 
  useEffect(() => {
    axios
      .get(`http://localhost:3002/getData/`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, firstName, lastName, salary,checkbox } = data;
    localStorage.setItem("id", _id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("salary Value", salary);
    localStorage.setItem("Checkbox Value", checkbox);
    // console.log(data);
  };

  const getData = () => {
    axios
      .get(`http://localhost:3002/getData/`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };


  const onDelete = (_id) => {

    axios
      .delete(`http://localhost:3002/deleteData/${_id}`,{
        setData
      }  )
      .then(() => {
        getData();
        dataDelete();
      })
    };
  
    
    // const confirmBox = window.confirm(
    //   `${id}`
    // )
    // if (confirmBox === true) {
    //   axios
    //   .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`,{
    //     id
    //   }  )
    //   .then(() => {
    //     getData();
    //     // dataDelete(); 
    //   });
    // }
   
// delete toast message

  const dataDelete = () => 
  {toast((`user is deleted`),{
    position :toast.POSITION.TOP_RIGHT,
      type :toast.TYPE.ERROR,
      autoClose:6000
  });}

  return (
    <div className="container">
      <div>
        <Link to="/" exact>
          <Button className="m-2 ">ADD Details</Button>
        </Link>
      </div>

      <table className="table mt-3">
        <thead className="bg-white ">
          <tr>
          {/* <th>id</th> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Checked</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>

        <tbody>
          {APIData.map((data) => (
            <tr key={data._id} className="text-white">
               {/* <td>{data._id}</td> */}
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.salary}</td>
              <td>{data.checkbox ? "Checked" : "Unchecked"}</td>
              <td>
                <Link exact to={`/update/${data._id}`}>
                  <span className="me-5 hover" onClick={() => setData(data)}>
                    <i className="far text-white  fa-edit"></i>
                  </span>
                </Link>
                <Link className=" hover">
                  <span  onClick={() => onDelete(data._id)}>
                    <i className="far text-warning fa-trash-alt"></i>
                   
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
