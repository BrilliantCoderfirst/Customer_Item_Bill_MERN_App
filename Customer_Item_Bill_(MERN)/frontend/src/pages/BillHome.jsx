import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";

const BillHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    allCustomersFun();
  }, []);

  function allCustomersFun() {
    const url = `http://localhost:4000/customer/allCustomers`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }

  const handleDeleteBill = (id) => {
    const url = `http://localhost:4000/customer/deleteCustomer/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch((err) => console.log(err));
    allCustomersFun();
  };

  return (
    <>
      <div className="homeContainer">
        <div className="inner_homeContainerBox">
          <div className="heading bg-primary">
            <h1>All Bills</h1>
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
                <th style={{ width: "200px" }}>Action</th>
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
                      to={`/generatebill/${items._id}`}
                      state={{ items: items }}
                    >
                      <Button variant="success">Bill</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteBill(items._id)}
                    >
                      Delete
                    </Button>
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

export default BillHome;
