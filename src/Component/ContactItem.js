import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  return (
    <Row className="mb-3">
      <Col lg={1}>
        <img
          width={50}
          src="https://via.placeholder.com/50"  // Placeholder image
          alt="contact"
        />
      </Col>
      <Col>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;

