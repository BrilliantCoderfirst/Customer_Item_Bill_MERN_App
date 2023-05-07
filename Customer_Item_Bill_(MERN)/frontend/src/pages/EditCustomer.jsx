import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditCustomer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();

  const [fName, setFName] = useState(location.state.fName);
  const [lName, setLName] = useState(location.state.lName);
  const [dob, setDob] = useState(location.state.dob);
  const [email, setEmail] = useState(location.state.email);
  const [contact, setContact] = useState(location.state.contact);
  const [cityName, setCityName] = useState(location.state.cityName);

  function handleEditCustomerFun() {
    console.log("donee");
    const url = `http://localhost:4000/customer/editCustomer/${param.id}`;
    fetch(url, {
      method: "PUT",
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
          alert("Customer Not Edit");
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
          <h1> Edit Customer </h1>

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
              <Button variant="primary" onClick={handleEditCustomerFun}>
                Edit Customer
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EditCustomer;
