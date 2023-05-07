import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CustomerHome = () => {
  const [data, setData] = useState([]);

  function allCustomersFun() {
    const url = `http://localhost:4000/customer/allCustomers`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    allCustomersFun();
  }, []);

  function handleCustomerDelete(id) {
    const url = `http://localhost:4000/customer/deleteCustomer/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch((err) => console.log(err));
    allCustomersFun();
  }

  return (
    <>
      <div className="homeContainer">
        <div className="inner_homeContainerBox">
          <div className="addCustomerBtn">
            <Link to="/addcustomer">
              <Button>
                <span>+</span> Add Customer
              </Button>
            </Link>
          </div>

          <div className="heading bg-primary">
            <h1>All Accounts</h1>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Customer Name</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>City Name</th>
                <th>Purchase Items</th>
                <th style={{ width: "300px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {items.fName} {items.lName}
                  </td>
                  <td>{items.dob}</td>
                  <td>{items.email}</td>
                  <td>{items.contact}</td>
                  <td>{items.cityName}</td>
                  <td>{items.items.length}</td>
                  <td
                    style={{
                      display: "flex",
                      fontStyle: "italic",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Link
                      to={`/editcustomer/${items._id}`}
                      state={{
                        fName: items.fName,
                        lName: items.lName,
                        dob: items.dob,
                        email: items.email,
                        contact: items.contact,
                        cityName: items.cityName,
                      }}
                    >
                      <Button variant="success">Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleCustomerDelete(items._id);
                      }}
                    >
                      Delete
                    </Button>
                    <Link to={`/additemcustomer/${items._id}`}>
                      <Button variant="primary">Add Items</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default CustomerHome;
