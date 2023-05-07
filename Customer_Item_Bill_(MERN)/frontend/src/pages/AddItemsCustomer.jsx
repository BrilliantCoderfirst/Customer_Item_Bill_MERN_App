import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

const AddItemsCustomer = () => {
  const param = useParams();

  const [product, setProduct] = useState("");

  const [data, setData] = useState([]);
  const [allCustomerData, setAllCustomerData] = useState([]);
  const [brand, setBrand] = useState();
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState(0);
  const [priceCode, setPriceCode] = useState("");
  const [qty, setQty] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [gst, setGst] = useState(0);

  function allItemsFun() {
    const url = `http://localhost:4000/item/allItems`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }

  function allCustomersFun() {
    const url = `http://localhost:4000/customer/oneCustomer/${param.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllCustomerData(data.data.items))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    allItemsFun();
    allCustomersFun();
  }, []);

  const handleProductId = (e) => {
    setProductName(e.target.value);
    const url = `http://localhost:4000/item/oneItem/${e.target.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.log(err));
  };

  function handleBuyItemsByCustomerFun() {
    const url = `http://localhost:4000/customer/buyItemsByCustomer`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: param.id,
        productId: product._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "200") {
          alert(data.message);
          navigate("/customers");
        } else {
          alert("Item Is Not Buy By The Customer");
        }
      })
      .catch((err) => console.log(err));
    allCustomersFun();
  }

  return (
    <>
      <div className="homeContainer">
        <div className="inner_homeContainerBox">
          <div className="heading bg-primary">
            <h1>Buy Items By Customer</h1>
          </div>

          <div className="allInputs">
            <div className="top_allInputs">
              <div className="oneBox">
                <Form.Label>
                  <strong> Product Name </strong>
                </Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  value={productName}
                  onChange={handleProductId}
                >
                  <option>Choose One</option>
                  {data.map((items, index) => (
                    <option id={items._id} value={items._id} key={index}>
                      {items.productName}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>

            <div className="bottom_allInputs">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <strong> Brand </strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Brand"
                  value={product.brandName}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <strovatng> Price </strovatng>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  value={product.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <strong> Price Code </strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price Code"
                  value={product.priceCode}
                  onChange={(e) => setPriceCode(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <strong> CGST </strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter CGST"
                  value={product.cgst}
                  onChange={(e) => setCgst(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <strong> SGST </strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter SGST"
                  value={product.sgst}
                  onChange={(e) => setSgst(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <strong> GST </strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter GST"
                  value={product.gst}
                  onChange={(e) => setGst(e.target.value)}
                />
              </Form.Group>

              <Button onClick={handleBuyItemsByCustomerFun}>Add</Button>
            </div>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Brand</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Price Code</th>
                <th>CGST %</th>
                <th>SGST %</th>
                <th>GST %</th>
              </tr>
            </thead>
            <tbody>
              {allCustomerData.map((items, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.brandName}</td>
                  <td>{items.productName}</td>
                  <td>{items.price}</td>
                  <td>{items.qty}</td>
                  <td>{items.priceCode}</td>
                  <td>{items.cgst}</td>
                  <td>{items.sgst}</td>
                  <td>{items.gst}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default AddItemsCustomer;
