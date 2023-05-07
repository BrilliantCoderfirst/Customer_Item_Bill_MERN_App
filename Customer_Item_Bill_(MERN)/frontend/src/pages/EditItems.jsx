import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditItems = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();

  const [brand, setBrand] = useState(location.state.brandName);
  const [product, setProduct] = useState(location.state.productName);
  const [price, setPrice] = useState(location.state.price);
  const [priceCode, setPriceCode] = useState(location.state.priceCode);
  const [cgst, setCgst] = useState(location.state.cgst);
  const [sgst, setSgst] = useState(location.state.sgst);
  const [gst, setGst] = useState(location.state.gst);

  function handleEditItem() {
    const url = `http://localhost:4000/item/editItem/${param.id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brandName: brand,
        productName: product,
        price: price,
        priceCode: priceCode,
        cgst: cgst,
        sgst: sgst,
        gst: gst,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "200") {
          alert(data.message);
          navigate("/items");
        } else {
          alert("Item Not Edit");
        }
      })
      .catch((err) => console.log(err));

    setBrand("");
    setProduct("");
    setPrice(0);
    setPriceCode(0);
    setCgst(0);
    setSgst(0);
    setGst(0);
  }

  return (
    <>
      <div className="bigBox">
        <div className="box addItemsBox">
          <h1> Edit Items </h1>

          <Form>
            <Form.Label>
              <strong> Brand </strong>
            </Form.Label>

            <Form.Select
              aria-label="Default select example"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              style={{ marginBottom: "20px" }}
            >
              <option>Choose One</option>
              <option value="Mankind">Mankind</option>
              <option value="Other">Other</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> Product Name </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> Price </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Price"
                value={price}
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
                value={priceCode}
                onChange={(e) => setPriceCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong> CGST % </strong>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter CGST"
                value={cgst}
                onChange={(e) => setCgst(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> SGST % </strong>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter SGST"
                value={sgst}
                onChange={(e) => setSgst(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> GST </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter GST"
                value={gst}
                onChange={(e) => setGst(e.target.value)}
              />
            </Form.Group>

            <div className="btn1">
              <Button variant="primary" onClick={handleEditItem}>
                Edit Item
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EditItems;
