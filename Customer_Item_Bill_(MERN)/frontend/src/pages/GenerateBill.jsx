import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useParams, useLocation } from "react-router-dom";

const GenerateBill = () => {
  const location = useLocation();

  const [data, setData] = useState(location.state.items);

  var totalPrice = 0;
  var cgst = 0;
  var sgst = 0;
  var gst = 0;
  for (let i = 0; i < data.items.length; i++) {
    totalPrice += data.items[i].price;
    cgst = data.items[i].cgst;
    sgst = data.items[i].sgst;
    gst = data.items[i].gst;
  }

  let percentage = (totalPrice * gst) / 100;
  let grandTotal = Math.trunc(totalPrice - percentage);

  return (
    <>
      <div className="billContainer">
        <div className="inner_billContainer">
          <h1>Bill</h1>

          <div className="top_billContainer">
            <p>
              Customer Name:{" "}
              <span>
                {" "}
                {data.fName} {data.lName}{" "}
              </span>
            </p>
            <p>
              DOB: <span> {data.dob} </span>
            </p>
            <p>
              Email: <span> {data.email} </span>
            </p>
            <p>
              Phone: <span> {data.contact} </span>
            </p>
            <p>
              City Name: <span> {data.cityName} </span>
            </p>
            <p>
              Total Items <span> {data.items.length} </span>
            </p>
          </div>

          <div className="center_billContainer">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Brand</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>CGST %</th>
                  <th>SGST %</th>
                  <th>Price Code</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((items, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{items.brandName}</td>
                    <td>{items.productName}</td>
                    <td>{items.qty}</td>
                    <td>{items.cgst}</td>
                    <td>{items.sgst}</td>
                    <td>{items.priceCode}</td>
                    <td>{items.price}</td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <strong> Total </strong>
                  </td>
                  <td>
                    <strong> {totalPrice} </strong>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="right_billContainer">
            <p>
              CGST (%): <span> {cgst} </span>
            </p>
            <p>
              SGST (%): <span> {sgst} </span>
            </p>
            <p>
              GST (%): <span> {gst} </span>
            </p>
            <p>
              Grand Total (Rs.): <span> {grandTotal} </span>
            </p>  console.log(location.state);
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateBill;
