import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemsHome = () => {
  const [data, setData] = useState([]);

  function allItemsFun() {
    const url = `http://localhost:4000/item/allItems`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    allItemsFun();
  }, []);

  function handleItemDelete(id) {
    console.log(id);
    const url = `http://localhost:4000/item/deleteItem/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch((err) => console.log(err));
    allItemsFun();
  }

  return (
    <>
      <div className="homeContainer">
        <div className="inner_homeContainerBox">
          <div className="addCustomerBtn">
            <Link to="/additem">
              <Button>
                <span>+</span> Add Items
              </Button>
            </Link>
          </div>

          <div className="heading bg-primary">
            <h1>All Items</h1>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Brand</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Price Code</th>
                <th>CGST %</th>
                <th>SGST %</th>
                <th>GST %</th>
                <th style={{ width: "200px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.brandName}</td>
                  <td>{items.productName}</td>
                  <td>{items.price}</td>
                  <td>{items.priceCode}</td>
                  <td>{items.cgst}</td>
                  <td>{items.sgst}</td>
                  <td>{items.gst}</td>
                  <td
                    style={{
                      display: "flex",
                      fontStyle: "italic",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Link
                      to={`/edititem/${items._id}`}
                      state={{
                        brandName: items.brandName,
                        productName: items.productName,
                        price: items.price,
                        priceCode: items.priceCode,
                        cgst: items.cgst,
                        sgst: items.sgst,
                        gst: items.gst,
                      }}
                    >
                      <Button variant="success">Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => handleItemDelete(items._id)}
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

export default ItemsHome;
