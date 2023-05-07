import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [cityName, setCityName] = useState("");

  function handleAddCustomerFun() {
    const url = `http://localhost:4000/customer/addCustomer`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName: fName,
        lName: lName,
        dob: dob,
        email: email,
        contact: contact,
        cityName: cityName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "200") {
          alert(data.message);
          navigate("/customers");
        } else {
          alert("Customer Not Add");
        }
      })
      .catch((err) => console.log(err));

    setFName("");
    setLName("");
    setDob("");
    setEmail("");
    setContact(0);
    setCityName("");
  }

  return (
    <>
      <div className="bigBox">
        <div className="box">
          <h1> Add Customer </h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> First Name </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> Last Name </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> Dath Of Birth </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter DOB"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong> Email address </strong>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> Contact </strong>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> City Name </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City Name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </Form.Group>

            <div className="btn1">
              <Button variant="primary" onClick={handleAddCustomerFun}>
                Add Customer
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
