import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber }
    });
    setName('');
    setPhoneNumber('');
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Add Contact
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
